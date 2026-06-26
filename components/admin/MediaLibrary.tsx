"use client";

import { useState } from "react";
import { Folder, Image as ImageIcon, Upload, Plus, File, FolderOpen, Trash2 } from "lucide-react";

type MediaItem = {
  id: string;
  name: string;
  type: "folder" | "file";
  url?: string;
};

const MOCK_DATA: Record<string, MediaItem[]> = {
  root: [
    { id: "f1", name: "Campaigns", type: "folder" },
    { id: "f2", name: "Logos", type: "folder" },
    { id: "f3", name: "Founder", type: "folder" },
    { id: "img1", name: "hero-bg.jpg", type: "file", url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop" },
  ],
  f1: [
    { id: "img2", name: "ad-banner.jpg", type: "file", url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=200&h=200&fit=crop" }
  ],
  f2: [
    { id: "img3", name: "logo-dark.png", type: "file", url: "/Images/logo/1.svg" }
  ],
  f3: [
    { id: "img4", name: "founder.png", type: "file", url: "/Images/founder.png" }
  ]
};

export default function MediaLibrary() {
  const [currentFolder, setCurrentFolder] = useState<string>("root");
  const [folderHistory, setFolderHistory] = useState<{id: string, name: string}[]>([{id: "root", name: "Home"}]);
  const [items, setItems] = useState<Record<string, MediaItem[]>>(MOCK_DATA);
  const [isUploading, setIsUploading] = useState(false);

  const currentItems = items[currentFolder] || [];

  const handleNavigate = (folderId: string, folderName: string) => {
    setCurrentFolder(folderId);
    setFolderHistory([...folderHistory, {id: folderId, name: folderName}]);
  };

  const handleNavigateBack = (index: number) => {
    const target = folderHistory[index];
    setCurrentFolder(target.id);
    setFolderHistory(folderHistory.slice(0, index + 1));
  };

  const handleCreateFolder = () => {
    const name = prompt("Enter folder name:");
    if (!name) return;
    
    const newId = `f_${Date.now()}`;
    setItems({
      ...items,
      [currentFolder]: [...(items[currentFolder] || []), { id: newId, name, type: "folder" }],
      [newId]: []
    });
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      
      if (data.success) {
        setItems({
          ...items,
          [currentFolder]: [...(items[currentFolder] || []), { 
            id: `img_${Date.now()}`, 
            name: file.name, 
            type: "file",
            url: data.url
          }]
        });
      } else {
        alert("Upload failed.");
      }
    } catch (err) {
      alert("Error uploading file.");
    } finally {
      setIsUploading(false);
      if (e.target) e.target.value = '';
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    setItems({
      ...items,
      [currentFolder]: items[currentFolder].filter(item => item.id !== id)
    });
  };

  return (
    <div className="bg-surface dark:bg-slate-800 border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]">
      
      {/* Top Bar */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-bg dark:bg-slate-900/50">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-medium text-text overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
          {folderHistory.map((crumb, idx) => (
            <div key={crumb.id} className="flex items-center whitespace-nowrap">
              <button 
                onClick={() => handleNavigateBack(idx)}
                className={`hover:text-accent-teal transition-colors ${idx === folderHistory.length - 1 ? "text-accent-teal" : "text-text-muted"}`}
              >
                {crumb.name}
              </button>
              {idx < folderHistory.length - 1 && <span className="mx-2 text-border">/</span>}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
          <button 
            onClick={handleCreateFolder}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-text"
          >
            <Plus size={16} /> New Folder
          </button>
          
          <label className="flex items-center gap-1.5 px-4 py-1.5 bg-accent-teal hover:bg-[#15806E] text-white rounded-lg text-sm font-semibold cursor-pointer transition-colors shadow-sm">
            {isUploading ? <span className="animate-pulse">Uploading...</span> : <><Upload size={16} /> Upload</>}
            <input type="file" className="hidden" accept="image/*" onChange={handleUpload} disabled={isUploading} />
          </label>
        </div>
      </div>

      {/* Grid */}
      <div className="p-6 overflow-y-auto flex-1">
        {currentItems.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-text-muted">
            <FolderOpen size={48} className="mb-4 opacity-50" strokeWidth={1} />
            <p>This folder is empty.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {currentItems.map(item => (
              <div key={item.id} className="group relative border border-border rounded-xl p-3 flex flex-col items-center gap-3 hover:border-accent-teal/50 hover:shadow-md transition-all bg-bg dark:bg-slate-900 cursor-pointer">
                
                {/* Delete Button */}
                <button 
                  onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                  className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-slate-800/90 text-red-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Trash2 size={14} />
                </button>

                {item.type === "folder" ? (
                  <div 
                    className="w-full aspect-square flex items-center justify-center bg-accent-teal/10 rounded-lg text-accent-teal"
                    onClick={() => handleNavigate(item.id, item.name)}
                  >
                    <Folder size={40} />
                  </div>
                ) : (
                  <div className="w-full aspect-square bg-gray-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center">
                    {item.url ? (
                      <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <File size={32} className="text-gray-400" />
                    )}
                  </div>
                )}
                <span className="text-xs font-medium text-text text-center truncate w-full" title={item.name}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
