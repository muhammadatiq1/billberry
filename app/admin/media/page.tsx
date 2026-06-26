import MediaLibrary from "@/components/admin/MediaLibrary";

export const metadata = {
  title: "Media Management | Admin",
};

export default function MediaAdminPage() {
  return (
    <div className="min-h-screen bg-bg dark:bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-text mb-8">Media Management</h1>
        <MediaLibrary />
      </div>
    </div>
  );
}
