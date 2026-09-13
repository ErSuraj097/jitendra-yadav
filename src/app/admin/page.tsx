"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { 
  INITIAL_GRIEVANCES, 
  NEWS_ITEMS, 
  EVENTS_DATA, 
  GALLERY_ALBUMS, 
  GrievanceRecord,
  NewsItem 
} from "@/lib/data";
import { 
  UserCheck, 
  Newspaper, 
  Calendar, 
  Image as ImageIcon, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Plus, 
  Edit3, 
  Trash2, 
  Lock, 
  LogOut,
  User,
  Activity
} from "lucide-react";

export default function AdminPage() {
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [role, setRole] = useState<"Super Admin" | "Content Manager" | "Editor">("Super Admin");
  const [activeTab, setActiveTab] = useState<"grievances" | "news" | "events" | "gallery" | "rbac">("grievances");
  
  // Grievance State Management
  const [grievanceList, setGrievanceList] = useState<GrievanceRecord[]>(INITIAL_GRIEVANCES);
  // News State
  const [newsList, setNewsList] = useState<NewsItem[]>(NEWS_ITEMS);
  
  // New News Modal state
  const [showAddNews, setShowAddNews] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [newCategory, setNewCategory] = useState<NewsItem["category"]>("Public Activities");

  const handleUpdateStatus = (id: string, newStatus: GrievanceRecord["status"]) => {
    setGrievanceList((prev) =>
      prev.map((g) => (g.id === id ? { ...g, status: newStatus, updatedAt: new Date().toLocaleString() } : g))
    );
  };

  const handleCreateNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newSummary) return;

    const newItem: NewsItem = {
      id: `news-${Date.now()}`,
      title: { en: newTitle, hi: newTitle },
      category: newCategory,
      date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
      summary: { en: newSummary, hi: newSummary },
      content: [{ en: newSummary, hi: newSummary }],
      featuredImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
      author: role,
      tags: ["CMS", "Update"]
    };

    setNewsList([newItem, ...newsList]);
    setShowAddNews(false);
    setNewTitle("");
    setNewSummary("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-samajwadi-green">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-wider">
              {role} CMS Active
            </span>
            <span className="text-xs text-gray-400">• Authenticated Session</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t({ en: "Admin CMS Dashboard", hi: "आधिकारिक व्यवस्थापक डैशबोर्ड" })}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
            className="bg-gray-800 text-white border border-gray-700 rounded-xl px-3 py-2 text-xs font-bold focus:outline-none"
          >
            <option value="Super Admin">Role: Super Admin</option>
            <option value="Content Manager">Role: Content Manager</option>
            <option value="Editor">Role: Editor</option>
          </select>
          <button
            onClick={() => setIsAuthenticated(!isAuthenticated)}
            className="bg-red-600/80 hover:bg-red-600 text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock Session</span>
          </button>
        </div>
      </div>

      {/* Analytics Counter Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-xs text-gray-500 font-bold block">Pending Grievances</span>
          <span className="text-2xl font-black text-amber-600">
            {grievanceList.filter((g) => g.status !== "Resolved").length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-xs text-gray-500 font-bold block">Total Resolved</span>
          <span className="text-2xl font-black text-emerald-600">
            {grievanceList.filter((g) => g.status === "Resolved").length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-xs text-gray-500 font-bold block">Published News</span>
          <span className="text-2xl font-black text-blue-600">{newsList.length}</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-xs text-gray-500 font-bold block">Active Albums</span>
          <span className="text-2xl font-black text-purple-600">{GALLERY_ALBUMS.length}</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 gap-2">
        <button
          onClick={() => setActiveTab("grievances")}
          className={`pb-3 px-5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === "grievances" ? "border-samajwadi-green text-samajwadi-green" : "border-transparent text-gray-500"
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          <span>Grievance Queue ({grievanceList.length})</span>
        </button>
        <button
          onClick={() => setActiveTab("news")}
          className={`pb-3 px-5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === "news" ? "border-samajwadi-green text-samajwadi-green" : "border-transparent text-gray-500"
          }`}
        >
          <Newspaper className="w-4 h-4" />
          <span>Manage News</span>
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`pb-3 px-5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === "events" ? "border-samajwadi-green text-samajwadi-green" : "border-transparent text-gray-500"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Manage Events</span>
        </button>
        <button
          onClick={() => setActiveTab("rbac")}
          className={`pb-3 px-5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === "rbac" ? "border-samajwadi-green text-samajwadi-green" : "border-transparent text-gray-500"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>RBAC Security</span>
        </button>
      </div>

      {/* Grievances Queue Manager */}
      {activeTab === "grievances" && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h2 className="text-lg font-bold text-gray-900">
              Citizen Requests & Grievance Workflow
            </h2>
            <span className="text-xs text-gray-500">Workflow: New ➔ Under Review ➔ In Progress ➔ Resolved</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 text-gray-500 uppercase font-bold border-b border-gray-200">
                <tr>
                  <th className="p-3">Ticket ID</th>
                  <th className="p-3">Citizen</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Update Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grievanceList.map((g) => (
                  <tr key={g.id} className="hover:bg-gray-50/80">
                    <td className="p-3 font-mono font-bold text-samajwadi-green">{g.ticketNo}</td>
                    <td className="p-3 font-semibold text-gray-800">{g.citizenName}<br/><span className="text-[10px] text-gray-400">{g.phone}</span></td>
                    <td className="p-3 text-gray-600">{g.category}</td>
                    <td className="p-3 text-gray-800 font-medium max-w-xs">{g.subject}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                        g.status === "Resolved" ? "bg-emerald-100 text-emerald-800" :
                        g.status === "In Progress" ? "bg-purple-100 text-purple-800" :
                        g.status === "Under Review" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {g.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <select
                        value={g.status}
                        onChange={(e) => handleUpdateStatus(g.id, e.target.value as any)}
                        className="bg-white border border-gray-300 rounded px-2 py-1 text-xs font-semibold focus:ring-1 focus:ring-samajwadi-green"
                      >
                        <option value="New">1. New</option>
                        <option value="Under Review">2. Under Review</option>
                        <option value="In Progress">3. In Progress</option>
                        <option value="Resolved">4. Resolved</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* News CMS Manager */}
      {activeTab === "news" && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 space-y-6">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4">
            <h2 className="text-lg font-bold text-gray-900">Content Management — News & Articles</h2>
            <button
              onClick={() => setShowAddNews(!showAddNews)}
              className="bg-samajwadi-green text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow"
            >
              <Plus className="w-4 h-4" /> Add New Article
            </button>
          </div>

          {showAddNews && (
            <form onSubmit={handleCreateNews} className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-4 text-xs">
              <h3 className="font-bold text-sm text-gray-900">Publish New News Release</h3>
              <div>
                <label className="font-bold block mb-1">Headline / Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Enter headline..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold block mb-1">Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="Public Activities">Public Activities</option>
                    <option value="Community Programmes">Community Programmes</option>
                    <option value="Development Updates">Development Updates</option>
                    <option value="Announcements">Announcements</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold block mb-1">Publish Date</label>
                  <input type="text" readOnly value={new Date().toLocaleDateString()} className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-xs" />
                </div>
              </div>
              <div>
                <label className="font-bold block mb-1">Article Summary & Body</label>
                <textarea
                  required
                  rows={3}
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  placeholder="Write article summary..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" className="bg-samajwadi-green text-white font-bold px-4 py-2 rounded-lg">Publish Article</button>
                <button type="button" onClick={() => setShowAddNews(false)} className="bg-gray-300 text-gray-700 font-bold px-4 py-2 rounded-lg">Cancel</button>
              </div>
            </form>
          )}

          <div className="space-y-3">
            {newsList.map((n) => (
              <div key={n.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">{n.category}</span>
                  <h4 className="font-bold text-gray-900 text-sm mt-1">{t(n.title)}</h4>
                  <span className="text-gray-400">{n.date} • By {n.author}</span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-white border border-gray-200 rounded text-gray-600 hover:text-samajwadi-green"><Edit3 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RBAC Security Tab */}
      {activeTab === "rbac" && (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 space-y-6 text-xs">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
            Role-Based Access Control (RBAC) Matrix
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
              <h3 className="font-bold text-sm text-emerald-900">1. Super Admin</h3>
              <p className="text-gray-600 mt-1">Full control: Content publishing, role allocation, audit logging, system settings.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200">
              <h3 className="font-bold text-sm text-blue-900">2. Content Manager</h3>
              <p className="text-gray-600 mt-1">Publish/Edit news, events, achievements, photo albums, and media clippings.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200">
              <h3 className="font-bold text-sm text-purple-900">3. Editor</h3>
              <p className="text-gray-600 mt-1">Draft articles, review citizen grievance submissions, and update status codes.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
