'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  BookOpen,
  Headphones,
  Plus,
  Trash2,
  LogOut,
  Code2,
  Save,
  X,
  RefreshCw,
} from 'lucide-react';

type Tab = 'articles' | 'white-papers' | 'podcasts';

interface Article {
  id: number;
  title: string;
  description: string;
  author: string;
  readTime: string;
  date: string;
  tag: string;
}

interface Podcast extends Article {
  youtubeId: string;
}

const tabConfig = {
  articles: {
    label: 'Articles',
    icon: FileText,
    gradient: 'linear-gradient(135deg, #0047CC, #338AFF)',
    accent: '#0066FF',
  },
  'white-papers': {
    label: 'White Papers',
    icon: BookOpen,
    gradient: 'linear-gradient(135deg, #4F46E5, #818CF8)',
    accent: '#6366F1',
  },
  podcasts: {
    label: 'Podcasts',
    icon: Headphones,
    gradient: 'linear-gradient(135deg, #059669, #34D399)',
    accent: '#10B981',
  },
};

const emptyArticle: Omit<Article, 'id'> = {
  title: '',
  description: '',
  author: '',
  readTime: '',
  date: '',
  tag: '',
};

const emptyPodcast: Omit<Podcast, 'id'> = {
  ...emptyArticle,
  youtubeId: '',
};

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>('articles');
  const [articles, setArticles] = useState<Article[]>([]);
  const [whitePapers, setWhitePapers] = useState<Article[]>([]);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Article, 'id'> | Omit<Podcast, 'id'>>(emptyArticle);
  const [saveMessage, setSaveMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch data on mount and when tab changes
  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setIsLoading(true);
    setError('');
    try {
      const typeMap = {
        articles: 'article',
        'white-papers': 'white-paper',
        podcasts: 'podcast',
      };
      
      const response = await fetch(`/api/admin/articles?type=${typeMap[activeTab]}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      
      if (activeTab === 'articles') {
        setArticles(data);
      } else if (activeTab === 'white-papers') {
        setWhitePapers(data);
      } else {
        setPodcasts(data);
      }
    } catch (err) {
      setError('Failed to load data. Please refresh the page.');
      console.error('Error fetching data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const currentData = activeTab === 'articles' ? articles : activeTab === 'white-papers' ? whitePapers : podcasts;
  const config = tabConfig[activeTab];

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setShowForm(false);
    setFormData(tab === 'podcasts' ? emptyPodcast : emptyArticle);
  };

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      const typeMap = {
        articles: 'article',
        'white-papers': 'white-paper',
        podcasts: 'podcast',
      };

      const response = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: typeMap[activeTab],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add item');
      }

      const newItem = await response.json();

      // Update local state
      if (activeTab === 'articles') {
        setArticles((prev) => [newItem, ...prev]);
      } else if (activeTab === 'white-papers') {
        setWhitePapers((prev) => [newItem, ...prev]);
      } else {
        setPodcasts((prev) => [newItem, ...prev]);
      }

      setShowForm(false);
      setFormData(activeTab === 'podcasts' ? emptyPodcast : emptyArticle);
      showSaveMessage('Item added successfully!');
    } catch (err) {
      setError('Failed to add item. Please try again.');
      console.error('Error adding item:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this item?')) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/articles?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete item');
      }

      // Update local state
      if (activeTab === 'articles') {
        setArticles((prev) => prev.filter((a) => a.id !== id));
      } else if (activeTab === 'white-papers') {
        setWhitePapers((prev) => prev.filter((a) => a.id !== id));
      } else {
        setPodcasts((prev) => prev.filter((a) => a.id !== id));
      }

      showSaveMessage('Item deleted successfully.');
    } catch (err) {
      setError('Failed to delete item. Please try again.');
      console.error('Error deleting item:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const showSaveMessage = (msg: string) => {
    setSaveMessage(msg);
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.title && formData.description && formData.author && formData.date;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0066FF] flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[#0A1628]">
              Code<span className="text-[#0066FF]">Squad</span>
              <span className="ml-2 text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Admin</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {saveMessage && (
              <span className="text-sm text-emerald-600 font-medium flex items-center gap-1.5">
                <Save className="w-3.5 h-3.5" />
                {saveMessage}
              </span>
            )}
            {error && (
              <span className="text-sm text-red-600 font-medium">
                {error}
              </span>
            )}
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              title="Refresh data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#0A1628]">Content Manager</h1>
          <p className="text-gray-500 text-sm mt-1">Manage articles, white papers, and podcasts for the website.</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-white border border-gray-200 rounded-2xl p-1.5 w-fit shadow-sm">
          {(Object.keys(tabConfig) as Tab[]).map((tab) => {
            const { label, icon: Icon, gradient } = tabConfig[tab];
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive ? 'text-white shadow-md' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
                style={isActive ? { background: gradient } : {}}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Add Button */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-[#0A1628]">{currentData.length}</span> {config.label.toLowerCase()} total
          </p>
          <button
            onClick={() => { setShowForm(true); setFormData(activeTab === 'podcasts' ? emptyPodcast : emptyArticle); }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            style={{ background: config.gradient }}
          >
            <Plus className="w-4 h-4" />
            Add {config.label.slice(0, -1)}
          </button>
        </div>

        {/* Add Form */}
        {showForm && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-[#0A1628]">Add New {config.label.slice(0, -1)}</h3>
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Enter title"
                  className="w-full h-10 border border-gray-200 rounded-xl px-3 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Enter description"
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Author *</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleChange('author', e.target.value)}
                  placeholder="Author name"
                  className="w-full h-10 border border-gray-200 rounded-xl px-3 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Date *</label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  placeholder="e.g. Jan 15, 2025"
                  className="w-full h-10 border border-gray-200 rounded-xl px-3 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                  {activeTab === 'podcasts' ? 'Duration' : 'Read Time'}
                </label>
                <input
                  type="text"
                  value={formData.readTime}
                  onChange={(e) => handleChange('readTime', e.target.value)}
                  placeholder={activeTab === 'podcasts' ? 'e.g. 32 min listen' : 'e.g. 8 min read'}
                  className="w-full h-10 border border-gray-200 rounded-xl px-3 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Tag</label>
                <input
                  type="text"
                  value={formData.tag}
                  onChange={(e) => handleChange('tag', e.target.value)}
                  placeholder="e.g. Healthcare, IoT"
                  className="w-full h-10 border border-gray-200 rounded-xl px-3 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all"
                />
              </div>
              {activeTab === 'podcasts' && (
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">YouTube Video ID</label>
                  <input
                    type="text"
                    value={(formData as Omit<Podcast, 'id'>).youtubeId || ''}
                    onChange={(e) => handleChange('youtubeId', e.target.value)}
                    placeholder="e.g. dQw4w9WgXcQ (from youtube.com/watch?v=dQw4w9WgXcQ)"
                    className="w-full h-10 border border-gray-200 rounded-xl px-3 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]/20 transition-all"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                disabled={!isFormValid || isLoading}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-md disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg"
                style={{ background: config.gradient }}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Items List */}
        {isLoading && currentData.length === 0 ? (
          <div className="text-center py-16">
            <RefreshCw className="w-8 h-8 mx-auto mb-3 text-gray-400 animate-spin" />
            <p className="text-sm text-gray-400">Loading...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {currentData.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start justify-between gap-4 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: config.gradient }}
                  >
                    <config.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#0A1628] text-sm leading-snug mb-1 truncate">{item.title}</h3>
                    <p className="text-xs text-gray-400 line-clamp-1 mb-2">{item.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400">
                      <span className="font-medium text-gray-600">{item.author}</span>
                      <span>·</span>
                      <span>{item.date}</span>
                      <span>·</span>
                      <span>{item.readTime}</span>
                      {item.tag && (
                        <>
                          <span>·</span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{item.tag}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={isLoading}
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-200 disabled:opacity-50"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {currentData.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <config.icon className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No {config.label.toLowerCase()} yet. Add your first one above.</p>
          </div>
        )}
      </div>
    </main>
  );
}
