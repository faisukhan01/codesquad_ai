import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, BookOpen, ChevronRight } from 'lucide-react';
import { dbOperations } from '@/lib/db';

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export const metadata = {
  title: 'White Papers | CodeSquad',
  description: 'In-depth research and technical white papers from the CodeSquad team.',
};

export default function WhitePapersPage() {
  const whitePapersData = dbOperations.getByType('white-paper');
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-indigo-50/20 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0d1f3a] to-[#0A1628] py-20 md:py-28">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 text-blue-300/70 hover:text-blue-200 text-sm font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#818CF8] flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <BookOpen className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-blue-300/60 text-xs font-semibold uppercase tracking-widest mb-1">Knowledge Hub</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">White Papers</h1>
            </div>
          </div>

          <p className="text-blue-200/50 text-lg max-w-2xl leading-relaxed">
            In-depth research, technical analysis, and strategic frameworks to help you make informed decisions.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            <span className="text-sm text-blue-200/70">{whitePapersData.length} white papers published</span>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {whitePapersData.map((paper) => (
            <article
              key={paper.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Gradient header */}
              <div className="relative h-44 bg-gradient-to-br from-indigo-50/80 via-white to-indigo-50/50 overflow-hidden flex-shrink-0 border-b border-gray-100">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full opacity-10 blur-2xl bg-indigo-400" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/80 border border-indigo-100/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <BookOpen className="w-9 h-9 text-indigo-600" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/80 text-indigo-700 border border-indigo-100/50 backdrop-blur-sm">
                    {paper.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-bold bg-indigo-600 text-white shadow-sm">
                    White Paper
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-6 pt-4 pb-5">
                <h2 className="text-[15px] font-bold text-[#0A1628] mb-2.5 leading-snug line-clamp-2 group-hover:text-[#4F46E5] transition-colors duration-300">
                  {paper.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5 flex-1">
                  {paper.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0 bg-gradient-to-br from-indigo-500 to-indigo-600">
                      {getInitials(paper.author)}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold text-[#0A1628] truncate max-w-[110px]">{paper.author}</span>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{paper.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:flex items-center gap-1 text-[11px] text-gray-400">
                      <Clock className="w-3 h-3" />
                      {paper.readTime}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                      <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-gradient-to-r from-indigo-500 to-indigo-600" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
