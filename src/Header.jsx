/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLanguage } from "./utils/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

export default function Header() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  // Language functionality
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    localStorage.setItem("language", newLang);
    window.dispatchEvent(
      new CustomEvent("languageChanged", { detail: newLang }),
    );
  };

  useEffect(() => {
    let currentUser = { firstName: "", lastName: "" };
    try {
      currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
        firstName: "",
        lastName: "",
      };
    } catch (e) {}
    setInitials(
      `${currentUser.firstName?.[0] || ""}${currentUser.lastName?.[0] || ""}`.toUpperCase(),
    );
  }, []);

  // Close avatar dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isAvatarDropdownOpen && !event.target.closest(".avatar-dropdown")) {
        setIsAvatarDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAvatarDropdownOpen]);

  // Dark mode functionality
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());

    // Dispatch custom event to notify other components
    window.dispatchEvent(
      new CustomEvent("darkModeChanged", { detail: newDarkMode }),
    );
  };

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setServicesDropdown(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 300); // 300ms delay before closing
    setServicesTimeout(timeout);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setHomeDropdown(false);
    setServicesDropdown(false);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userLogins");
    // Navigate to welcome page
    navigate("/");
    // Close dropdown
    setIsAvatarDropdownOpen(false);
  };

  return (
    <header
      className={` fixed    z-50 w-full shadow-md transition-colors duration-300 ${isDarkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="flex items-center justify-between px-4 mx-auto sm:px-6">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="LIFE Logo"
              className="object-contain w-20 h-20 sm:w-24 sm:h-24"
            />
          </div>
        </div>

        {/* Desktop Navigation - Right Side with Equal Gaps */}
        <nav className="items-center hidden space-x-12 lg:flex">
          {/* Language Dropdown */}
          <div className="relative">
            <select
              value={language}
              onChange={handleLanguageChange}
              className={`text-lg font-semibold rounded px-2 py-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-200"}`}
              style={{ minWidth: 120 }}
              title={t("selectLanguage")}
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="he">Hebrew</option>
            </select>
          </div>
          <div className="relative">
            <button
              className={`text-lg font-semibold hover:text-teal flex items-center gap-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? "text-white" : "text-black"}`}
              onClick={() => setHomeDropdown((open) => !open)}
            >
              {t("home")}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {homeDropdown && (
              <div
                className={`absolute left-0 mt-2 w-48 border rounded shadow-lg z-50 transition-colors duration-200 ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
              >
                <Link
                  to="/home1"
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setHomeDropdown(false);
                    scrollToTop();
                  }}
                >
                  {t("home1")}
                </Link>
                <Link
                  to="/home2"
                  className={`block px-4 py-3 text-base hover:bg-blue-100 transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setHomeDropdown(false);
                    scrollToTop();
                  }}
                >
                  {t("home2")}
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/about"
            className={`text-lg font-semibold hover:text-teal transition-colors duration-200 ${isDarkMode ? "text-white" : "text-black"}`}
            onClick={scrollToTop}
          >
            {t("about")}
          </Link>
          <div className="relative">
            <button
              className={`text-lg font-semibold hover:text-teal flex items-center gap-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? "text-white" : "text-black"}`}
              onClick={() => {
                navigate("/services");
                scrollToTop();
              }}
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
              onFocus={() => setServicesDropdown(true)}
              onBlur={() => setServicesDropdown(false)}
            >
              {t("services")}
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {servicesDropdown && (
              <div
                className={`absolute left-0 mt-2 w-56 border rounded shadow-lg z-50 transition-colors duration-200 ${isDarkMode ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer border-b ${isDarkMode ? "text-white hover:bg-gray-700 border-gray-600" : "text-black hover:bg-gray-100 border-gray-200"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/services");
                    scrollToTop();
                  }}
                >
                  {t("viewAllServices")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/yoga-meditation");
                    scrollToTop();
                  }}
                >
                  {t("yoga")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/diet-nutrition");
                    scrollToTop();
                  }}
                >
                  {t("diet")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/mental-wellness");
                    scrollToTop();
                  }}
                >
                  {t("mental")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/fitness-programs");
                    scrollToTop();
                  }}
                >
                  {t("fitness")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/sleep-therapy");
                    scrollToTop();
                  }}
                >
                  {t("sleep")}
                </div>
                <div
                  className={`block px-4 py-3 text-base hover:bg-ice transition-colors duration-200 cursor-pointer ${isDarkMode ? "text-white hover:bg-gray-700" : "text-black hover:bg-gray-100"}`}
                  onClick={() => {
                    setServicesDropdown(false);
                    navigate("/lifestyle-coaching");
                    scrollToTop();
                  }}
                >
                  {t("lifestyle")}
                </div>
              </div>
            )}
          </div>
          <Link
            to="/blog"
            className={`text-lg font-semibold hover:text-teal transition-colors duration-200 ${isDarkMode ? "text-white" : "text-black"}`}
            onClick={scrollToTop}
          >
            {t("blog")}
          </Link>
          <Link
            to="/contact"
            className={`text-lg font-semibold hover:text-teal transition-colors duration-200 ${isDarkMode ? "text-white" : "text-black"}`}
            onClick={scrollToTop}
          >
            {t("contact")}
          </Link>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Avatar with Dropdown */}
          <div className="relative avatar-dropdown">
            <div
              onClick={() => setIsAvatarDropdownOpen(!isAvatarDropdownOpen)}
              className="w-10 h-10 bg-[#26A0A2] rounded-full flex items-center justify-center text-white font-bold text-base cursor-pointer hover:bg-[#1f8a8c] transition-colors duration-200"
            >
              {initials}
            </div>

            {/* Avatar Dropdown */}
            {isAvatarDropdownOpen && (
              <div className="absolute right-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    <div className="font-medium">{t("userProfile")}</div>
                    <div className="text-xs text-gray-500">{t("signedIn")}</div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    {t("logout")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        {/* Language Dropdown for Mobile */}
        <div className="lg:hidden">
          <select
            value={language}
            onChange={handleLanguageChange}
            className={`text-base font-semibold rounded px-2 py-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-black border-gray-200"}`}
            style={{ minWidth: 100 }}
            title={t("selectLanguage")}
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="he">Hebrew</option>
          </select>
        </div>
        <div className="flex items-center space-x-3 lg:hidden">
          {/* Dark Mode Toggle Button for Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"}`}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${isDarkMode ? "text-white" : "text-gray-600"} ${isMobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className={`lg:hidden border-t ${isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Home Dropdown */}
            <div>
              <button
                onClick={() => setHomeDropdown(!homeDropdown)}
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-800" : "text-black hover:bg-gray-100"}`}
              >
                <span className="font-semibold">Home</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${homeDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {homeDropdown && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    to="/home1"
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Home1
                  </Link>
                  <Link
                    to="/home2"
                    onClick={closeMobileMenu}
                    className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                  >
                    Home2
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-800" : "text-black hover:bg-gray-100"}`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => {
                  closeMobileMenu();
                  navigate("/services");
                }}
                className={`w-full text-left flex items-center justify-between py-3 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-800" : "text-black hover:bg-gray-100"}`}
              >
                <span className="font-semibold">Services</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
            </div>

            {/* Blog */}
            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-800" : "text-black hover:bg-gray-100"}`}
            >
              Blog
            </Link>

            {/* Contact Us */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${isDarkMode ? "text-white hover:bg-gray-800" : "text-black hover:bg-gray-100"}`}
            >
              Contact Us
            </Link>

            {/* User Profile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-4 space-x-3">
                <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full bg-teal">
                  {initials}
                </div>
                <span
                  className={`font-medium ${isDarkMode ? "text-white" : "text-black"}`}
                >
                  {t("userProfile")}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
