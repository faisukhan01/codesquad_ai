'use client';

import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';
import AdminDashboard from './AdminDashboard';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'codesquad2025';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <AdminDashboard onLogout={() => setIsAuthenticated(false)} />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#0d1f3a] to-[#071020] flex items-center justify-center px-4">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0047CC] to-[#338AFF] flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white text-center mb-1 tracking-tight">Admin Panel</h1>
          <p className="text-blue-200/40 text-sm text-center mb-8">Enter your password to continue</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-blue-200/40">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/30" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-10 pr-10 text-sm text-white placeholder:text-blue-200/20 focus:outline-none focus:border-[#0066FF]/50 focus:ring-1 focus:ring-[#0066FF]/25 transition-all duration-200"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-blue-200/30 hover:text-blue-200/60 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-xs mt-1">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#0047CC] to-[#338AFF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Access Dashboard
            </button>
          </form>

          <p className="text-center text-xs text-blue-200/20 mt-6">
            This page is not publicly linked. Access via direct URL only.
          </p>
        </div>
      </div>
    </main>
  );
}
