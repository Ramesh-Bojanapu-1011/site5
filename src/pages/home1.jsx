/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import homeheroVideo from "../assets/homehero.mp4";
import impactVideo from "../assets/impact.mp4";

import { useNavigate } from "react-router-dom";
import Header from "../Header";
import fitnessImg from "../assets/fitness.jpeg";
import homectaImg from "../assets/homecta.png";
import nutritionImg from "../assets/nutrition.jpeg";
import sleepImg from "../assets/sleep.jpeg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import whoweareImg from "../assets/whoweare.png";
import yogaImg from "../assets/yoga.jpeg";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../utils/LanguageContext";

function Hero({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);
  const { t } = useLanguage();

  const scrollToWhoWeAre = () => {
    const whoWeAreSection = document.getElementById("who-we-are");
    if (whoWeAreSection) {
      whoWeAreSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={elementRef}
      className="relative flex flex-col items-center justify-center w-full h-screen px-4 overflow-hidden text-center"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 z-0 object-cover w-full h-full"
        src={homeheroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <h1
          className={`text-6xl md:text-7xl font-extrabold text-white mb-8 drop-shadow transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {t("home_hero_title")}
        </h1>
        <p
          className={`text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {t("home_hero_desc")}
        </p>
        <button
          onClick={scrollToWhoWeAre}
          className={`font-semibold px-12 py-5 rounded-full shadow transition-all duration-1000 ease-out delay-500 transform hover:scale-105 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } text-xl ${
            isDarkMode
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-[#26A0A2] text-white hover:bg-charcoal"
          }`}
        >
          {t("home_hero_btn")}
        </button>
      </div>
    </section>
  );
}

function WhoWeAre({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <section
      id="who-we-are"
      ref={elementRef}
      className="w-full py-20 px-4 bg-[#26A0A2]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left: Image - Slide from left */}
          <div
            className={`flex-1 transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "-translate-x-full opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <img
                src={whoweareImg}
                alt={t("who_we_are_img_alt")}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right: Content - Slide from right */}
          <div
            className={`flex-1 lg:pl-8 transition-all duration-1000 ease-out delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-full opacity-0 scale-95"
            }`}
          >
            <div className="mb-6">
              <span
                className={`inline-block bg-white/20 text-white font-semibold px-4 py-2 rounded-full text-sm mb-4 transition-all duration-700 delay-400 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {t("about")}
              </span>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } ${isDarkMode ? "text-black" : "text-white"}`}
              >
                {t("who_we_are_title")}
              </h2>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-justify text-white/90">
              {t("who_we_are_desc")}
            </p>

            <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-white rounded-full">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t("who_we_are_expert_team_title")}
                  </h4>
                  <p className="text-sm text-white/80">
                    {t("who_we_are_expert_team_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-white rounded-full">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t("who_we_are_personalized_care_title")}
                  </h4>
                  <p className="text-sm text-white/80">
                    {t("who_we_are_personalized_care_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-white rounded-full">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t("who_we_are_holistic_approach_title")}
                  </h4>
                  <p className="text-sm text-white/80">
                    {t("who_we_are_holistic_approach_desc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 mt-1 bg-white rounded-full">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">
                    {t("who_we_are_proven_results_title")}
                  </h4>
                  <p className="text-sm text-white/80">
                    {t("who_we_are_proven_results_desc")}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={navigateToAbout}
              className={`font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isDarkMode
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-[#26A0A2] hover:bg-gray-100"
              }`}
            >
              {t("who_we_are_btn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      img: yogaImg,
      title: t("service_yoga_title"),
      tagline: t("service_yoga_tagline"),
      details: t("service_yoga_details"),
    },
    {
      img: nutritionImg,
      title: t("service_nutrition_title"),
      tagline: t("service_nutrition_tagline"),
      details: t("service_nutrition_details"),
    },
    {
      img: fitnessImg,
      title: t("service_fitness_title"),
      tagline: t("service_fitness_tagline"),
      details: t("service_fitness_details"),
    },
    {
      img: sleepImg,
      title: t("service_sleep_title"),
      tagline: t("service_sleep_tagline"),
      details: t("service_sleep_details"),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#26A0A2] mb-10 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {t("services_overview_title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative group w-full h-[360px] bg-[#26A0A2] rounded-[10px] overflow-hidden shadow-md transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 200}ms`,
              }}
            >
              {/* Image always visible */}
              <div
                className="w-full h-[250px] bg-cover bg-center"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              {/* Title (default) in white area */}
              <div className="flex-1 w-full min-h-[60px] flex items-center justify-center">
                <h3 className="mt-2 text-lg font-bold tracking-wide text-center text-white uppercase transition-opacity duration-300 group-hover:opacity-0">
                  {s.title}
                </h3>
              </div>
              {/* Overlay: covers entire card on hover */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-center mb-2 ${
                    isDarkMode ? "text-white" : "text-[#26A0A2]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-lg text-justify md:text-xl mb-2 text-center font-semibold ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {s.tagline}
                </p>
                <p
                  className={`text-base text-justify md:text-lg mb-2 text-center ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  {s.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactMetrics({ isDarkMode }) {
  const [counts, setCounts] = useState({
    sessions: 0,
    satisfaction: 0,
    support: 0,
    experts: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            const targets = {
              sessions: 1000,
              satisfaction: 95,
              support: 24,
              experts: 50,
            };

            const intervals = {};

            Object.keys(targets).forEach((key) => {
              let current = 0;
              const target = targets[key];
              const increment = target / steps;

              intervals[key] = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(intervals[key]);
                }

                setCounts((prev) => ({
                  ...prev,
                  [key]: Math.floor(current),
                }));
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }, // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-20 overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 object-cover w-full h-full"
        src={impactVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Teal Transparent Overlay */}
      <div className="absolute inset-0 bg-[#26A0A2]/80 z-10"></div>

      <div className="relative z-20 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left: Content - Slide from left */}
          <div
            className={`flex-1 lg:pr-8 transition-all duration-1000 ease-out ${
              hasAnimated
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <h2 className="mb-6 text-3xl font-bold leading-tight text-justify text-white md:text-4xl">
              {t("impact_title_1")}{" "}
              <span className="font-bold text-yellow-300">
                {t("impact_title_2")}
              </span>{" "}
              {t("impact_title_3")}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-justify text-white">
              {t("impact_desc")}
            </p>
          </div>

          {/* Right: Metrics Grid (2x2) - Slide from right */}
          <div
            className={`flex-1 transition-all duration-1000 ease-out delay-300 ${
              hasAnimated
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Top Left - White */}
              <div
                className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <div className={isDarkMode ? "text-white" : "text-gray-900"}>
                  <div className="mb-2 text-4xl font-bold animate-pulse">
                    <span
                      className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                        isDarkMode ? "text-white" : "text-[#26A0A2]"
                      }`}
                    >
                      {counts.sessions}+
                    </span>
                  </div>
                  <div
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("impact_metric_sessions")}
                  </div>
                </div>
              </div>

              {/* Top Right - White */}
              <div
                className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <div className={isDarkMode ? "text-white" : "text-gray-900"}>
                  <div className="mb-2 text-4xl font-bold animate-pulse">
                    <span
                      className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                        isDarkMode ? "text-white" : "text-[#26A0A2]"
                      }`}
                    >
                      {counts.satisfaction}%
                    </span>
                  </div>
                  <div
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("impact_metric_satisfaction")}
                  </div>
                </div>
              </div>

              {/* Bottom Left - White */}
              <div
                className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <div className={isDarkMode ? "text-white" : "text-gray-900"}>
                  <div className="mb-2 text-4xl font-bold animate-pulse">
                    <span
                      className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                        isDarkMode ? "text-white" : "text-[#26A0A2]"
                      }`}
                    >
                      {counts.support}/7
                    </span>
                  </div>
                  <div
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("impact_metric_support")}
                  </div>
                </div>
              </div>

              {/* Bottom Right - White */}
              <div
                className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                  isDarkMode ? "bg-black" : "bg-white"
                }`}
              >
                <div className={isDarkMode ? "text-white" : "text-gray-900"}>
                  <div className="mb-2 text-4xl font-bold animate-pulse">
                    <span
                      className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                        isDarkMode ? "text-white" : "text-[#26A0A2]"
                      }`}
                    >
                      {counts.experts}+
                    </span>
                  </div>
                  <div
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("impact_metric_experts")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickTestimonialsPreview({ isDarkMode }) {
  const { t } = useLanguage();
  const testimonials = [
    {
      quote: t("testimonial_1_quote"),
      name: t("testimonial_1_name"),
      role: t("testimonial_1_role"),
      photo: user1,
    },
    {
      quote: t("testimonial_2_quote"),
      name: t("testimonial_2_name"),
      role: t("testimonial_2_role"),
      photo: user2,
    },
    {
      quote: t("testimonial_3_quote"),
      name: t("testimonial_3_name"),
      role: t("testimonial_3_role"),
      photo: user3,
    },
  ];
  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const current = testimonials[index];

  // Auto-advance testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <section
      className={`w-full py-16 px-4 flex flex-col items-center justify-center transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#26A0A2] mb-8 text-center">
        {t("testimonials_title")}
      </h2>
      <div className="relative flex flex-col items-center w-full max-w-3xl p-8 mx-auto bg-white shadow-lg rounded-2xl">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#26A0A2] hover:text-[#0f766e] text-3xl p-2 rounded-full transition-colors"
          aria-label={t("testimonial_prev")}
        >
          &#60;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[#26A0A2] hover:text-[#0f766e] text-3xl p-2 rounded-full transition-colors"
          aria-label={t("testimonial_next")}
        >
          &#62;
        </button>
        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-serif text-center text-[#222836] mb-8 leading-relaxed">
          "{current.quote}"
        </blockquote>
        {/* User info */}
        <div className="flex items-center gap-4 mt-2">
          <img
            src={current.photo}
            alt={current.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#26A0A2]"
          />
          <div className="text-left">
            <div className="text-[#26A0A2] font-bold uppercase text-sm tracking-wide">
              {current.name}
            </div>
            <div className="text-xs italic text-gray-500">{current.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionBanner({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const navigateToContact = () => {
    navigate("/contact");
  };

  const navigateToServices = () => {
    navigate("/services");
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-2 md:px-0 flex justify-center items-center relative overflow-hidden bg-[#2ad2bb]"
    >
      <div className="relative z-10 flex flex-col items-center justify-between w-full gap-12 max-w-7xl lg:flex-row">
        {/* Left: Content - Slide from left */}
        <div
          className={`flex-1 flex flex-col justify-center text-left pl-8 lg:pl-12 transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-4 ${
              isDarkMode ? "text-black" : "text-white"
            }`}
          >
            {t("cta_title")}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-justify text-white/90 md:text-xl">
            {t("cta_desc")}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={navigateToContact}
              className={`font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${
                isDarkMode
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-[#26A0A2] hover:bg-gray-100"
              }`}
            >
              {t("cta_btn_start")}
            </button>
            <button
              onClick={navigateToServices}
              className={`font-semibold px-8 py-4 rounded-full border-2 shadow-lg focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${
                isDarkMode
                  ? "bg-black text-white border-black hover:bg-gray-800"
                  : "bg-transparent text-white border-white hover:bg-white hover:text-[#26A0A2]"
              }`}
            >
              {t("cta_btn_learn")}
            </button>
          </div>
        </div>

        {/* Right: Image - Slide from right */}
        <div
          className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={homectaImg}
              alt={t("cta_img_alt")}
              className="object-cover w-full h-auto shadow-2xl rounded-2xl"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener("darkModeChanged", handleDarkModeChange);

    return () => {
      window.removeEventListener("darkModeChanged", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    let currentUser = { firstName: "", lastName: "" };
    try {
      currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
        firstName: "",
        lastName: "",
      };
    } catch (e) {
      /* empty */
    }
    setInitials(
      `${currentUser.firstName?.[0] || ""}${
        currentUser.lastName?.[0] || ""
      }`.toUpperCase(),
    );
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-[#f6fffd]"
      }`}
    >
      <Header />
      <Hero isDarkMode={isDarkMode} />
      <WhoWeAre isDarkMode={isDarkMode} />
      <ServicesOverview isDarkMode={isDarkMode} />
      <ImpactMetrics isDarkMode={isDarkMode} />
      <QuickTestimonialsPreview isDarkMode={isDarkMode} />
      <CallToActionBanner isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}
