"use client"
import { ThemeContext } from '@context/ThemeContext';
import React, { useContext } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
      const { theme, setTheme } = useContext(ThemeContext);

      if (!theme) {
            return null; // Prevent rendering mismatched content
      }


      return (
            <div className="p-2">
                  {theme === 'dark' ? (
                        <span
                              className="flex items-center cursor-pointer"
                              onClick={() => setTheme('light')}
                        >
                              <HiSun
                                    className="text-primary text-2xl mr-2"
                                    fillRule="evenodd" // Explicitly set fillRule
                              />
                              Light Mode
                        </span>
                  ) : (
                        <span
                              className="flex items-center cursor-pointer"
                              onClick={() => setTheme('dark')}
                        >
                              <HiMoon
                                    className="text-primary text-2xl mr-2"
                                    fillRule="evenodd" // Explicitly set fillRule
                              />
                              Dark Mode
                        </span>
                  )}
            </div>
      );
};

export default ThemeToggle;
