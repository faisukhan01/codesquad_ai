'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/booking-modal';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
  showBookCTA?: boolean;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'bot-1',
    text: 'Hi there! Welcome to CodeSquad. 👋',
    sender: 'bot',
    timestamp: '10:00 AM',
  },
  {
    id: 'bot-2',
    text: 'How can we help you today? Choose a quick option below or type your message.',
    sender: 'bot',
    timestamp: '10:00 AM',
  },
];

const QUICK_ACTIONS = [
  'Our Services',
  'Pricing Info',
  'Book a Call',
  'Talk to Human',
] as const;

const BOT_REPLY_TEXT =
  "Great question! For accurate and up-to-date information, the best way is to speak with our team directly.";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatTime(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ─── Animation Variants ──────────────────────────────────────────────────────

const chatWindowVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 24 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0, scale: 0.85, y: 24,
    transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [quickActionsVisible, setQuickActionsVisible] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const toggleChat = useCallback(() => {
    const willOpen = !isOpen;
    setIsOpen(willOpen);
    if (willOpen) {
      setUnreadCount(0);
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: trimmed,
      sender: 'user',
      timestamp: formatTime(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setQuickActionsVisible(false);

    setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: BOT_REPLY_TEXT,
        sender: 'bot',
        timestamp: formatTime(),
        showBookCTA: true,
      };
      setIsTyping(false);
      setMessages(prev => [...prev, botReply]);
    }, 1200);
  }, []);

  const handleSend = useCallback(() => sendMessage(inputValue), [inputValue, sendMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const handleQuickAction = useCallback((action: string) => {
    sendMessage(action);
  }, [sendMessage]);

  return (
    <>
      <div className="fixed bottom-5 right-3 sm:bottom-6 sm:right-6 z-[50] flex flex-col items-end gap-3">
        {/* ── Chat Window ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={chatWindowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-[calc(100vw-1.5rem)] sm:w-[390px] h-[min(75vh,600px)] sm:h-[min(600px,80vh)] bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.15),0_2px_12px_rgba(0,0,0,0.08)] border border-gray-200/60 flex flex-col overflow-hidden origin-bottom-right"
            >
              {/* ── Header ── */}
              <div
                className="flex items-center justify-between px-4 py-3.5 shrink-0 shadow-[0_2px_12px_rgba(0,60,180,0.15)]"
                style={{ background: 'linear-gradient(135deg, #0066FF 0%, #338AFF 50%, #1A7AFF 100%)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/30">
                      CS
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-[#0066FF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[15px] leading-tight tracking-tight">CodeSquad Support</h3>
                    <p className="text-white/75 text-xs mt-0.5">Typically replies in minutes</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 active:bg-white/25 transition-all duration-150"
                  aria-label="Close chat"
                >
                  <X className="h-[18px] w-[18px]" />
                </button>
              </div>

              {/* ── Messages Area ── */}
              <div className="flex-1 overflow-y-auto px-3.5 sm:px-4 py-4 space-y-3 bg-gradient-to-b from-gray-50/80 to-gray-100/60 min-h-0 scrollbar-thin">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Bot avatar */}
                    {msg.sender === 'bot' && (
                      <div
                        className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5 shadow-sm"
                        style={{ background: 'linear-gradient(135deg, #0066FF, #338AFF)' }}
                      >
                        CS
                      </div>
                    )}

                    <div className="max-w-[80%] sm:max-w-[78%] flex flex-col min-w-0">
                      <div
                        className={`px-3.5 py-2.5 text-[13.5px] leading-relaxed break-words ${
                          msg.sender === 'user'
                            ? 'text-white rounded-2xl rounded-br-lg'
                            : 'text-gray-800 rounded-2xl rounded-bl-lg shadow-[0_1px_4px_rgba(0,0,0,0.05)] border border-gray-200/50'
                        }`}
                        style={
                          msg.sender === 'user'
                            ? { background: 'linear-gradient(135deg, #0066FF 0%, #338AFF 100%)' }
                            : { background: '#ffffff' }
                        }
                      >
                        {msg.text}

                        {/* Book CTA inside bot bubble */}
                        {msg.showBookCTA && (
                          <div className="mt-3 space-y-2">
                            <button
                              onClick={() => setShowBooking(true)}
                              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-white text-xs font-semibold shadow-sm hover:shadow-md active:scale-95 transition-all duration-150"
                              style={{ background: 'linear-gradient(135deg, #0066FF, #338AFF)' }}
                            >
                              <Calendar className="w-3.5 h-3.5" />
                              Book a Free Call
                            </button>
                            <a
                              href="mailto:info@codesquad.ai"
                              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-[#0066FF] text-xs font-semibold border border-[#0066FF]/25 bg-[#0066FF]/5 hover:bg-[#0066FF]/10 active:scale-95 transition-all duration-150"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              info@codesquad.ai
                            </a>
                          </div>
                        )}
                      </div>
                      <span className={`text-[10px] text-gray-400 mt-1 px-0.5 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.timestamp}
                      </span>
                    </div>

                    {/* User avatar */}
                    {msg.sender === 'user' && (
                      <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5 bg-gray-400 shadow-sm">
                        U
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex gap-2">
                    <div
                      className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-0.5 shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #0066FF, #338AFF)' }}
                    >
                      CS
                    </div>
                    <div className="bg-white rounded-2xl rounded-bl-lg px-4 py-2.5 shadow-[0_1px_4px_rgba(0,0,0,0.05)] border border-gray-200/50">
                      <div className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-[#0066FF]/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-[#0066FF]/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-[#0066FF]/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* ── Quick Actions ── */}
              <AnimatePresence>
                {quickActionsVisible && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden shrink-0"
                  >
                    <div className="px-3.5 sm:px-4 pt-2 pb-1 flex gap-2 overflow-x-auto bg-white scrollbar-none">
                      {QUICK_ACTIONS.map((action) => (
                        <button
                          key={action}
                          onClick={() => handleQuickAction(action)}
                          className="shrink-0 px-3 py-1.5 text-xs font-medium rounded-full border border-[#0066FF]/20 text-[#0066FF] bg-[#0066FF]/5 hover:bg-[#0066FF]/10 hover:border-[#0066FF]/30 active:bg-[#0066FF]/15 transition-all duration-150 whitespace-nowrap"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── Input Area ── */}
              <div className="px-3.5 sm:px-4 pt-2 pb-3 border-t border-gray-100 bg-white shrink-0">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-100/80 rounded-full px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#0066FF]/30 focus:bg-white focus:border focus:border-[#0066FF]/20 transition-all duration-200 placeholder:text-gray-400"
                  />
                  <Button
                    size="icon"
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="h-10 w-10 rounded-full shrink-0 text-white shadow-sm hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all duration-200"
                    style={{
                      background: inputValue.trim()
                        ? 'linear-gradient(135deg, #0066FF 0%, #338AFF 100%)'
                        : '#e2e8f0',
                    }}
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-center text-[10px] text-gray-300 mt-2 select-none pb-1">
                  Powered by <span className="font-medium text-gray-400">CodeSquad</span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Floating Action Button ── */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={toggleChat}
          className="relative w-14 h-14 rounded-full text-white shadow-[0_4px_20px_rgba(0,102,255,0.45)] flex items-center justify-center overflow-visible isolate"
          style={{ background: 'linear-gradient(135deg, #0066FF 0%, #338AFF 100%)' }}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {!isOpen && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full -z-10"
                style={{ background: 'linear-gradient(135deg, #0066FF 0%, #338AFF 100%)' }}
                animate={{ boxShadow: ['0 0 0 0 rgba(0, 102, 255, 0.4)', '0 0 0 10px rgba(0, 102, 255, 0)', '0 0 0 0 rgba(0, 102, 255, 0)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute inset-0 rounded-full -z-10"
                animate={{ boxShadow: ['0 0 0 0 rgba(0, 102, 255, 0.25)', '0 0 0 16px rgba(0, 102, 255, 0)', '0 0 0 0 rgba(0, 102, 255, 0)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              />
            </>
          )}
          <span className="relative z-10 flex items-center justify-center">
            {isOpen
              ? <X size={28} color="#ffffff" strokeWidth={2.5} />
              : <MessageCircle size={28} color="#ffffff" strokeWidth={2} fill="rgba(255,255,255,0.2)" />
            }
          </span>
          {!isOpen && unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm ring-2 ring-white"
            >
              {unreadCount}
            </motion.span>
          )}
        </motion.button>
      </div>

      {showBooking && <BookingModal onClose={() => setShowBooking(false)} />}
    </>
  );
}
