"use client"
import { ThemeContext } from '@context/ThemeContext';
import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
      const { theme, setTheme } = useContext(ThemeContext);

      return (
            <div className="p-2">
                  {theme === 'dark' ? (
                        <div
                              className="flex items-center cursor-pointer"
                              onClick={() => setTheme('light')}
                        >
                              <HiSun
                                    className="text-primary text-2xl mr-2"
                                    fillRule="evenodd" // Explicitly set the fillRule
                              />
                              Light Mode
                        </div>
                  ) : (
                        <div
                              className="flex items-center cursor-pointer"
                              onClick={() => setTheme('dark')}
                        >
                              <HiMoon
                                    className="text-primary text-2xl mr-2"
                                    fillRule="evenodd" // Explicitly set the fillRule
                              />
                              Dark Mode
                        </div>
                  )}
            </div>
      );
};

export default ThemeToggle;