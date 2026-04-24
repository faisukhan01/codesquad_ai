import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, Headphones } from 'lucide-react';
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
  title: 'Podcasts | CodeSquad',
  description: 'Video podcasts and conversations from the CodeSquad team.',
};

export default function PodcastsPage() {
  const podcastsData = dbOperations.getByType('podcast');
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-emerald-50/20 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0d1f3a] to-[#0A1628] py-20 md:py-28">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 text-blue-300/70 hover:text-blue-200 text-sm font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-[#34D399] flex items-center justify-center shadow-lg shadow-emerald-600/30">
              <Headphones className="w-7 h-7 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-blue-300/60 text-xs font-semibold uppercase tracking-widest mb-1">Knowledge Hub</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Podcasts</h1>
            </div>
          </div>

          <p className="text-blue-200/50 text-lg max-w-2xl leading-relaxed">
            Video conversations with industry leaders, engineers, and innovators shaping the future of technology.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm text-blue-200/70">{podcastsData.length} episodes available</span>
          </div>
        </div>
      </section>

      {/* Podcasts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {podcastsData.map((podcast) => (
            <article
              key={podcast.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col"
            >
              {/* YouTube Embed */}
              <div className="relative w-full aspect-video bg-black overflow-hidden flex-shrink-0">
                <iframe
                  src={`https://www.youtube.com/embed/${podcast.youtubeId}`}
                  title={podcast.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
                {/* Tag overlay */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-black/60 text-white border border-white/20 backdrop-blur-sm">
                    {podcast.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 px-6 pt-4 pb-5">
                <h2 className="text-[15px] font-bold text-[#0A1628] mb-2.5 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {podcast.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5 flex-1">
                  {podcast.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0 bg-gradient-to-br from-emerald-500 to-emerald-600">
                      {getInitials(podcast.author)}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-xs font-semibold text-[#0A1628] truncate max-w-[110px]">{podcast.author}</span>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{podcast.date}</span>
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] text-gray-400">
                    <Clock className="w-3 h-3" />
                    {podcast.readTime}
                  </span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out bg-gradient-to-r from-emerald-500 to-emerald-600" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
