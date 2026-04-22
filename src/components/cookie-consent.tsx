'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, Settings, X, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
  necessary: boolean;
}

const STORAGE_KEY = 'codesquad-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    marketing: false,
    necessary: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      analytics: true,
      marketing: true,
      necessary: true,
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ accepted: true, preferences: allAccepted }),
    );
    setVisible(false);
  };

  const handleRejectOptional = () => {
    const rejected: CookiePreferences = {
      analytics: false,
      marketing: false,
      necessary: true,
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ accepted: true, preferences: rejected }),
    );
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ accepted: true, preferences }),
    );
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-[55] px-3 sm:px-6 pb-4 pt-2"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 rounded-2xl border border-gray-200/80 overflow-hidden">
              {/* Compact bar - always visible */}
              <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3.5">
                {/* Icon */}
                <div className="w-8 h-8 rounded-lg bg-[#0066FF]/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-4 h-4 text-[#0066FF]" />
                </div>

                {/* Text */}
                <p className="flex-1 text-xs sm:text-sm text-gray-600 leading-snug min-w-0">
                  We use cookies to enhance your experience. By continuing, you agree to our{' '}
                  <a href="#" className="text-[#0066FF] font-medium hover:underline">cookie policy</a>.
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-xs text-gray-400 hover:text-gray-600 transition-colors px-2 py-1 rounded-md hover:bg-gray-100 hidden sm:block"
                  >
                    Settings
                  </button>
                  <Button
                    onClick={handleRejectOptional}
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 px-3 rounded-lg hidden sm:inline-flex"
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    size="sm"
                    className="h-8 bg-[#0066FF] hover:bg-[#0052CC] text-white text-xs font-medium px-4 rounded-lg shadow-sm shadow-blue-500/20"
                  >
                    Accept All
                  </Button>
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors sm:hidden"
                  >
                    <ChevronUp className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Expanded preferences panel */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-5 pt-1 border-t border-gray-100">
                      <div className="space-y-4 mt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Shield className="w-4 h-4 text-green-500" />
                            <div>
                              <p className="text-sm font-medium text-[#0A1628]">
                                Necessary
                              </p>
                              <p className="text-xs text-gray-400">
                                Required for the website to function.
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.necessary}
                            disabled
                            className="opacity-60"
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Settings className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-sm font-medium text-[#0A1628]">
                                Analytics
                              </p>
                              <p className="text-xs text-gray-400">
                                Help us improve our website.
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.analytics}
                            onCheckedChange={(checked) =>
                              setPreferences((prev) => ({
                                ...prev,
                                analytics: checked,
                              }))
                            }
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Settings className="w-4 h-4 text-gray-400" />
                            <div>
                              <p className="text-sm font-medium text-[#0A1628]">
                                Marketing
                              </p>
                              <p className="text-xs text-gray-400">
                                Used for advertising purposes.
                              </p>
                            </div>
                          </div>
                          <Switch
                            checked={preferences.marketing}
                            onCheckedChange={(checked) =>
                              setPreferences((prev) => ({
                                ...prev,
                                marketing: checked,
                              }))
                            }
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 mt-5">
                        <Button
                          onClick={() => setExpanded(false)}
                          variant="outline"
                          className="flex-1 border-gray-200 text-gray-600 hover:bg-gray-50 rounded-lg h-10 text-sm"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={handleSavePreferences}
                          className="flex-1 bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-lg h-10 text-sm font-medium"
                        >
                          Save Preferences
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
