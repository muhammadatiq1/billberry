import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    
    if (!file) {
      return NextResponse.json({ success: false, error: "No file received." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Mock upload by saving to public directory
    const filename = `${Date.now()}-${file.name.replaceAll(' ', '_')}`;
    const filepath = path.join(process.cwd(), "public", "uploads", filename);
    
    // Ensure uploads directory exists (in production, use proper storage like S3)
    try {
      await writeFile(filepath, buffer);
    } catch (e: any) {
      if (e.code === 'ENOENT') {
        const fs = require('fs');
        fs.mkdirSync(path.join(process.cwd(), "public", "uploads"), { recursive: true });
        await writeFile(filepath, buffer);
      } else {
        throw e;
      }
    }

    return NextResponse.json({ success: true, url: `/uploads/${filename}` });
  } catch (e) {
    console.error("Upload error:", e);
    return NextResponse.json({ success: false, error: "Upload failed." }, { status: 500 });
  }
}
