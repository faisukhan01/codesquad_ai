'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: string;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'bot-1',
    text: 'Hi there! Welcome to CodeSquad. 👋',
    sender: 'bot',
    timestamp: '10:00 AM',
  },
  {
    id: 'bot-2',
    text: 'How can we help you today?',
    sender: 'bot',
    timestamp: '10:00 AM',
  },
  {
    id: 'bot-3',
    text: 'Ask about our services, pricing, or anything else!',
    sender: 'bot',
    timestamp: '10:01 AM',
  },
];

const BOT_REPLY =
  'Thanks for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or book a free consultation.';

function formatTime(): string {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
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
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  const handleSend = useCallback(() => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text: trimmed,
      sender: 'user',
      timestamp: formatTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: BOT_REPLY,
        sender: 'bot',
        timestamp: formatTime(),
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botReply]);
    }, 1500);
  }, [inputValue]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[50] flex flex-col items-end gap-3">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-[calc(100vw-2rem)] sm:w-[380px] min-h-[480px] max-h-[600px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12),0_2px_12px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between px-4 py-3.5 shrink-0"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #338AFF)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/30">
                  CS
                </div>
                <div>
                  <h3 className="text-white font-semibold text-[15px] leading-tight">
                    CodeSquad Support
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-300" />
                    </span>
                    <p className="text-white/80 text-xs">Online now</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* ── Messages Area ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 bg-gray-50 min-h-0">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div
                      className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-1"
                      style={{
                        background:
                          'linear-gradient(135deg, #0066FF, #338AFF)',
                      }}
                    >
                      CS
                    </div>
                  )}
                  <div className="max-w-[78%] flex flex-col min-w-0">
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed break-words ${
                        msg.sender === 'user'
                          ? 'bg-[#0066FF] text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-gray-100/80'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span
                      className={`text-[10px] text-gray-400 mt-1 px-1 ${
                        msg.sender === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold bg-gray-400 mt-1">
                      U
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div
                    className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold mt-1"
                    style={{
                      background:
                        'linear-gradient(135deg, #0066FF, #338AFF)',
                    }}
                  >
                    CS
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.06)] border border-gray-100/80">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* ── Input Area ── */}
            <div className="px-4 py-3 border-t border-gray-100 bg-white shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-[#0066FF]/30 transition-all placeholder:text-gray-400"
                />
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="h-10 w-10 rounded-full shrink-0 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  style={{
                    background: inputValue.trim()
                      ? 'linear-gradient(135deg, #0066FF, #338AFF)'
                      : '#cbd5e1',
                  }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Action Button ── */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="relative w-14 h-14 rounded-full text-white shadow-[0_4px_20px_rgba(0,102,255,0.4)] flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0066FF, #338AFF)',
        }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {/* Ping ring when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white" />
        )}

        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}

        {/* Unread badge */}
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm ring-2 ring-white">
            {unreadCount}
          </span>
        )}
      </motion.button>
    </div>
  );
}
