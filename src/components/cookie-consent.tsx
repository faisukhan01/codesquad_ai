'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, Settings } from 'lucide-react';
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
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    marketing: false,
    necessary: true,
  });

  useEffect(() => {
    // Check if user has already accepted
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Show banner after a brief delay
      const timer = setTimeout(() => setVisible(true), 500);
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-[55] p-4 pb-20 sm:pb-24"
        >
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 rounded-t-2xl rounded-b-2xl p-6 sm:p-8 border border-white/20 border-t-blue-200">
            {/* Main content */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-[#0066FF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#0A1628] mb-1">
                  We use cookies
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We use cookies to enhance your experience. By continuing to
                  visit this site you agree to our use of cookies.
                </p>
              </div>
            </div>

            {/* Expanded preferences */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
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
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none bg-[#0066FF] hover:bg-[#0052CC] text-white rounded-xl px-6 h-11 text-sm font-medium shadow-md shadow-blue-500/20 transition-all"
              >
                Accept All
              </Button>
              <AnimatePresence mode="wait">
                {showPreferences ? (
                  <motion.div
                    key="save"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 sm:flex-none flex gap-3"
                  >
                    <Button
                      onClick={() => setShowPreferences(false)}
                      variant="outline"
                      className="flex-1 sm:flex-none border-gray-200 text-gray-600 hover:bg-gray-50 rounded-xl px-6 h-11 text-sm font-medium transition-all"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSavePreferences}
                      variant="outline"
                      className="flex-1 sm:flex-none border-[#0066FF] text-[#0066FF] hover:bg-blue-50 rounded-xl px-6 h-11 text-sm font-medium transition-all"
                    >
                      Save Preferences
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="manage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button
                      onClick={() => setShowPreferences(true)}
                      variant="outline"
                      className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800 rounded-xl px-6 h-11 text-sm font-medium transition-all"
                    >
                      Manage Preferences
                    </Button>
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
