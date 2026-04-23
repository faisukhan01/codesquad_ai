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
    text: '👋 Hi there! Welcome to CodeSquad.',
    sender: 'bot',
    timestamp: '10:00 AM',
  },
  {
    id: 'bot-2',
    text: 'How can we help you today? Our team typically responds within minutes.',
    sender: 'bot',
    timestamp: '10:00 AM',
  },
  {
    id: 'bot-3',
    text: 'Feel free to ask about our services, pricing, or anything else!',
    sender: 'bot',
    timestamp: '10:01 AM',
  },
];

function formatTime(): string {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [unreadCount, setUnreadCount] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
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
      setTimeout(() => inputRef.current?.focus(), 300);
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
        text: 'Thanks for your message! Our team will get back to you shortly via email. In the meantime, feel free to explore our services.',
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
    <div className="fixed bottom-24 right-6 z-[45] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[calc(100vw-3rem)] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #338AFF)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
                  CS
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base leading-tight">
                    Live Chat
                  </h3>
                  <p className="text-white/70 text-xs">CodeSquad</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-white hover:bg-white/20 hover:text-white rounded-full"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {msg.sender === 'bot' && (
                    <div
                      className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold"
                      style={{
                        background:
                          'linear-gradient(135deg, #0066FF, #338AFF)',
                      }}
                    >
                      CS
                    </div>
                  )}
                  <div className="max-w-[75%] flex flex-col">
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-[#0066FF] text-white rounded-br-md'
                          : 'bg-white text-gray-800 border border-gray-100 rounded-bl-md shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span
                      className={`text-[10px] text-gray-400 mt-1 ${
                        msg.sender === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold bg-gray-500">
                      Y
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold"
                    style={{
                      background:
                        'linear-gradient(135deg, #0066FF, #338AFF)',
                    }}
                  >
                    CS
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="px-4 py-3 border-t border-gray-200 bg-white shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#0066FF]/30 transition-all placeholder:text-gray-400"
                />
                <Button
                  size="icon"
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="h-10 w-10 rounded-full shrink-0 text-white"
                  style={{
                    background: inputValue.trim()
                      ? 'linear-gradient(135deg, #0066FF, #338AFF)'
                      : undefined,
                  }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="relative w-14 h-14 rounded-full text-white shadow-lg flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0066FF, #338AFF)',
        }}
      >
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
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
            {unreadCount}
          </span>
        )}
      </motion.button>
    </div>
  );
}
