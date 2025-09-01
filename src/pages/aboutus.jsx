import { useEffect, useState } from "react";
import aboutusVideo from "../assets/aboutus.mp4";
import ourvaluesImg from "../assets/ourvalues.jpg";
import whatwethinkImg from "../assets/whatwethink.jpg";
import whoweareImg from "../assets/whoweare.jpeg";
import Footer from "../footer";
import Header from "../Header";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../utils/LanguageContext";

// Add custom CSS animations
const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  .animate-fade-in-up-delay {
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-1 {
    animation: fadeInUp 1s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-2 {
    animation: fadeInUp 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-3 {
    animation: fadeInUp 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left {
    animation: fadeInLeft 1s ease-out forwards;
  }

  .animate-fade-in-left-delay {
    animation: fadeInLeft 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-2 {
    animation: fadeInLeft 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-3 {
    animation: fadeInLeft 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-4 {
    animation: fadeInLeft 1s ease-out 0.8s forwards;
    opacity: 0;
  }

  .animate-fade-in-right {
    animation: fadeInRight 1s ease-out 0.5s forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slideInLeft 1.2s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 1.2s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.8s ease-out forwards;
  }

  .scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-animate-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-left.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-right.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-scale {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-scale.animate {
    opacity: 1;
    transform: scale(1);
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  .hover\\:scale-110:hover {
    transform: scale(1.1);
  }

  .hover\\:-translate-y-2:hover {
    transform: translateY(-8px);
  }
`;

// Inject styles into document head
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

function AboutHero() {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);
  const { t } = useLanguage();

  return (
    <section
      ref={elementRef}
      className="relative flex items-center justify-center w-full h-screen px-4 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={aboutusVideo} type="video/mp4" />
        {t("aboutus_video_not_supported")}
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto text-center max-w-7xl">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <span
            className={`text-white transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {t("aboutus_hero_title1")} {/* About */}
          </span>
          <span
            className={`text-[#26A0A2] transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            {t("aboutus_hero_title2")} {/* Us */}
          </span>
        </h1>
        <p
          className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {t("aboutus_hero_desc")}
        </p>
      </div>
    </section>
  );
}

function OurGrowthThroughYears({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  const { t } = useLanguage();

  const milestones = [
    {
      step: "01",
      title: t("aboutus_growth_2016_title"),
      description: t("aboutus_growth_2016_desc"),
      color: "bg-[#26A0A2]",
      year: "2016",
    },
    {
      step: "02",
      title: t("aboutus_growth_2018_title"),
      description: t("aboutus_growth_2018_desc"),
      color: "bg-gray-600",
      year: "2018",
    },
    {
      step: "03",
      title: t("aboutus_growth_2020_title"),
      description: t("aboutus_growth_2020_desc"),
      color: "bg-[#26A0A2]",
      year: "2020",
    },
    {
      step: "04",
      title: t("aboutus_growth_2022_title"),
      description: t("aboutus_growth_2022_desc"),
      color: "bg-gray-600",
      year: "2022",
    },
    {
      step: "05",
      title: t("aboutus_growth_2024_title"),
      description: t("aboutus_growth_2024_desc"),
      color: "bg-[#26A0A2]",
      year: "2024",
    },
  ];

  return (
    <section
      ref={elementRef}
      className={`w-full py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } ${isDarkMode ? "text-white" : "text-[#26A0A2]"}`}
          >
            {t("aboutus_growth_title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {t("aboutus_growth_desc")}
          </p>
        </div>

        <div className="relative">
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const year = milestone.year;
              const isBlackCircle =
                year === "2016" ||
                year === "2020" ||
                year === "2024" ||
                year === "2026";

              return (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Banner */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                    } ${
                      index % 2 === 0
                        ? "scroll-animate-left"
                        : "scroll-animate-right"
                    }`}
                  >
                    <div
                      className={`p-8 rounded-2xl shadow-lg relative ${
                        isDarkMode
                          ? milestone.color === "bg-[#26A0A2]"
                            ? "bg-[#26A0A2] text-white"
                            : "bg-black text-white"
                          : milestone.color
                      }`}
                    >
                      <div className="flex items-center mb-4">
                        <h3
                          className={`text-2xl font-bold ${
                            isDarkMode ? "text-white" : "text-white"
                          }`}
                        >
                          {milestone.title}
                        </h3>
                      </div>
                      <p
                        className={`leading-relaxed text-lg ${
                          isDarkMode ? "text-gray-300" : "text-white/90"
                        }`}
                      >
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Circle with Number */}
                  <div
                    className={`hidden lg:flex items-center justify-center w-20 h-20 rounded-full shadow-lg z-10 relative scroll-animate-scale ${
                      isDarkMode
                        ? isBlackCircle
                          ? "bg-black"
                          : "bg-[#26A0A2]"
                        : isBlackCircle
                          ? "bg-gray-600"
                          : "bg-[#26A0A2]"
                    }`}
                  >
                    <div className="text-xl font-bold text-white">{year}</div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="flex-1 lg:hidden"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision({ isDarkMode }) {
  const { t } = useLanguage();
  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Image */}
          <div className="relative scroll-animate-left">
            <img
              src={whoweareImg}
              alt={t("aboutus_mission_img_alt")}
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 scroll-animate-right">
            <div>
              <h2
                className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                  isDarkMode ? "text-black" : "text-white"
                }`}
              >
                {t("aboutus_mission_title")}
              </h2>
              <p className="text-lg leading-relaxed text-justify text-white/90">
                {t("aboutus_mission_desc")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 border-l-4 border-white bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {t("aboutus_mission_card_title")}
                </h3>
                <p className="text-white/90">
                  {t("aboutus_mission_card_desc")}
                </p>
              </div>

              <div className="p-6 border-l-4 border-white bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {t("aboutus_vision_card_title")}
                </h3>
                <p className="text-white/90">{t("aboutus_vision_card_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues({ isDarkMode }) {
  const { t } = useLanguage();
  const values = [
    {
      title: t("aboutus_value_innovation_title"),
      description: t("aboutus_value_innovation_desc"),
      teal: false,
    },
    {
      title: t("aboutus_value_integrity_title"),
      description: t("aboutus_value_integrity_desc"),
      teal: true,
    },
    {
      title: t("aboutus_value_flexibility_title"),
      description: t("aboutus_value_flexibility_desc"),
      teal: true,
    },
    {
      title: t("aboutus_value_excellence_title"),
      description: t("aboutus_value_excellence_desc"),
      teal: false,
    },
  ];

  return (
    <section
      className={`w-full py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 scroll-animate-left ${
              isDarkMode ? "text-white" : "text-[#26A0A2]"
            }`}
          >
            {t("aboutus_values_title")}
          </h2>
        </div>

        <div className="grid items-stretch grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Large Image Card */}
          <div className="scroll-animate-left">
            <div className="h-full overflow-hidden bg-white shadow-2xl rounded-2xl">
              <img
                src={ourvaluesImg}
                alt={t("aboutus_values_img_alt")}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right: 2x2 Grid of Value Cards */}
          <div className="grid h-full grid-cols-2 gap-6 text-justify scroll-animate-right">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-6 shadow-md scroll-animate-scale flex flex-col justify-center ${
                  value.teal
                    ? "bg-[#26A0A2] text-white"
                    : "bg-white text-gray-900"
                }`}
                style={{
                  borderTopLeftRadius: "35px",
                  borderBottomRightRadius: "35px",
                }}
              >
                <h3
                  className={`text-xl font-bold mb-3 ${
                    value.teal ? "text-white" : "text-[#26A0A2]"
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    value.teal ? "text-white/90" : "text-gray-900"
                  }`}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeThink({ isDarkMode }) {
  const { t } = useLanguage();
  return (
    <section
      className={`w-full py-12 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="mx-auto text-justify max-w-7xl">
        <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-4 scroll-animate-left">
            <div>
              <h2
                className={`text-3xl md:text-4xl font-bold mb-3 leading-tight ${
                  isDarkMode ? "text-white" : "text-[#26A0A2]"
                }`}
              >
                {t("aboutus_think_title")}
              </h2>
              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t("aboutus_think_desc")}
              </p>
            </div>

            <div className="space-y-3">
              <div
                className={`p-4 rounded-xl border-l-4 border-[#26A0A2] hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-[#26A0A2]/5"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-[#26A0A2]"
                  }`}
                >
                  {t("aboutus_think_holistic_title")}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("aboutus_think_holistic_desc")}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border-l-4 border-[#26A0A2] animate-fade-in-left-delay-3 hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-[#26A0A2]/5"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-[#26A0A2]"
                  }`}
                >
                  {t("aboutus_think_personalized_title")}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("aboutus_think_personalized_desc")}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl border-l-4 border-[#26A0A2] animate-fade-in-left-delay-4 hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? "bg-gray-800" : "bg-[#26A0A2]/5"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-1 ${
                    isDarkMode ? "text-white" : "text-[#26A0A2]"
                  }`}
                >
                  {t("aboutus_think_evidence_title")}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("aboutus_think_evidence_desc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-2xl scroll-animate-right">
            <img
              src={whatwethinkImg}
              alt={t("aboutus_think_img_alt")}
              className="object-fill w-full h-full transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatMakesUsUnique({ isDarkMode }) {
  const { t } = useLanguage();
  const uniqueFeatures = [
    {
      title: t("aboutus_unique_holistic_title"),
      description: t("aboutus_unique_holistic_desc"),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: t("aboutus_unique_ai_title"),
      description: t("aboutus_unique_ai_desc"),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: t("aboutus_unique_expert_title"),
      description: t("aboutus_unique_expert_desc"),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="mx-auto max-w-7xl">
        {/* Main Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl scroll-animate">
            {t("aboutus_unique_title")}
          </h2>
        </div>

        {/* Three Cards Layout */}
        <div className="grid grid-cols-1 gap-8 text-justify md:grid-cols-3">
          {uniqueFeatures.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-sm p-8 hover:shadow-md transition-all duration-300 scroll-animate-scale hover:scale-105 hover:-translate-y-2 ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
              style={{
                borderTopLeftRadius: "8px",
                borderBottomRightRadius: "8px",
                borderTop: `3px solid ${isDarkMode ? "white" : "white"}`,
                borderLeft: `3px solid ${isDarkMode ? "white" : "white"}`,
                borderBottom: `3px solid ${isDarkMode ? "white" : "white"}`,
                borderRight: `3px solid ${isDarkMode ? "white" : "white"}`,
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#26A0A2] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale",
    );

    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Header />
      <AboutHero />
      <OurGrowthThroughYears isDarkMode={isDarkMode} />
      <MissionVision isDarkMode={isDarkMode} />
      <WhatWeThink isDarkMode={isDarkMode} />
      <WhatMakesUsUnique isDarkMode={isDarkMode} />
      <OurValues isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}
