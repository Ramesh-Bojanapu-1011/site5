import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import lifestyleCoachingImg from "../assets/detailed/Lifestyle Coaching.webp";
import fitnessImg from "../assets/fitness.jpeg";
import lifeImg from "../assets/life.jpg";
import mentalWellnessImg from "../assets/mental.jpg";
import nutritionImg from "../assets/nutrition.jpeg";
import servicesVideo from "../assets/services.mp4";
import sleepImg from "../assets/sleep.jpeg";
import wellnessTipsImg from "../assets/tips.jpg";
import yogaImg from "../assets/yoga.jpeg";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useLanguage } from "../utils/LanguageContext";

function ServicesHero() {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const scrollToServices = () => {
    const servicesSection = document.getElementById("our-services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

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
        <source src={servicesVideo} type="video/mp4" />
        {t("services_video_not_supported")}
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 mx-auto text-center max-w-7xl">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {t("services_hero_title")}
        </h1>
        <p
          className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {t("services_hero_desc")}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <button
            onClick={scrollToServices}
            className="bg-white text-[#26A0A2] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t("services_hero_explore_btn")}
          </button>
          <button
            onClick={navigateToContact}
            className="bg-transparent text-white font-semibold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-[#26A0A2] transition-all duration-300"
          >
            {t("services_hero_getstarted_btn")}
          </button>
        </div>
      </div>
    </section>
  );
}

function OurServices({ isDarkMode }) {
  const [currentSection, setCurrentSection] = React.useState(0);
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  const { t } = useLanguage();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const section1 = [
    {
      type: "image",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      title: t("services_yoga_title"),
      description: t("services_yoga_desc"),
    },
    {
      type: "content",
      title: t("services_fitness_title"),
      description: t("services_fitness_desc"),
      icon: "💪",
      color: "bg-blue-500",
    },
    {
      type: "image",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      title: t("services_nutrition_title"),
      description: t("services_nutrition_desc"),
    },
    {
      type: "content",
      title: t("services_yoga2_title"),
      description: t("services_yoga2_desc"),
      icon: "🧘",
      color: "bg-purple-500",
    },
    {
      type: "image",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: t("services_personal_title"),
      description: t("services_personal_desc"),
    },
    {
      type: "content",
      title: t("services_nutrition2_title"),
      description: t("services_nutrition2_desc"),
      icon: "🥗",
      color: "bg-green-500",
    },
  ];

  const section2 = [
    {
      type: "image",
      image: mentalWellnessImg,
      title: t("services_mental_title"),
      description: t("services_mental_desc"),
    },
    {
      type: "content",
      title: t("services_sleep_title"),
      description: t("services_sleep_desc"),
      icon: "💤",
      color: "bg-blue-500",
    },
    {
      type: "image",
      image: lifeImg,
      title: t("services_wellness_title"),
      description: t("services_wellness_desc"),
    },
    {
      type: "content",
      title: t("services_mental2_title"),
      description: t("services_mental2_desc"),
      icon: "🧠",
      color: "bg-purple-500",
    },
    {
      type: "image",
      image: sleepImg,
      title: t("services_assessments_title"),
      description: t("services_assessments_desc"),
    },
    {
      type: "content",
      title: t("services_lifestyle_title"),
      description: t("services_lifestyle_desc"),
      icon: "🌟",
      color: "bg-green-500",
    },
  ];

  return (
    <section
      id="our-services"
      ref={elementRef}
      className={`w-full py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {t("services_ourservices_title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            {t("services_ourservices_desc")}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSection(0)}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentSection === 0
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:scale-110"
            }`}
            disabled={currentSection === 0}
          >
            <svg
              className="w-6 h-6 text-[#26A0A2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            onClick={() => setCurrentSection(1)}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              currentSection === 1
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 hover:scale-110"
            }`}
            disabled={currentSection === 1}
          >
            <svg
              className="w-6 h-6 text-[#26A0A2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <div
            className={`grid grid-cols-3 text-justify gap-0 transition-opacity duration-1000 ${
              currentSection === 0
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
          >
            {section1.map((service, index) => (
              <div key={index} className="relative">
                {service.type === "image" ? (
                  <div className="w-full h-64 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="bg-[#26A0A2] p-8 h-64 flex flex-col justify-center">
                    <h3 className="mb-4 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className={`grid grid-cols-3 gap-0 text-justify transition-opacity duration-1000 ${
              currentSection === 1
                ? "opacity-100"
                : "opacity-0 absolute inset-0"
            }`}
          >
            {section2.map((service, index) => (
              <div key={index} className="relative">
                {service.type === "image" ? (
                  <div className="w-full h-64 overflow-hidden bg-gray-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="bg-[#26A0A2] p-8 h-64 flex flex-col justify-center">
                    <h3 className="mb-4 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/90">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSection === 0 ? "bg-[#26A0A2]" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSection === 1 ? "bg-[#26A0A2]" : "bg-gray-300"
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
}

function SymptomGoalChecker({ isDarkMode }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);

  const clientSymptoms = [
    {
      id: "insomnia",
      title: t("services_symptom_insomnia_title"),
      description: t("services_symptom_insomnia_desc"),
    },
    {
      id: "stress",
      title: t("services_symptom_stress_title"),
      description: t("services_symptom_stress_desc"),
    },
    {
      id: "fatigue",
      title: t("services_symptom_fatigue_title"),
      description: t("services_symptom_fatigue_desc"),
    },
    {
      id: "weight_gain",
      title: t("services_symptom_weight_title"),
      description: t("services_symptom_weight_desc"),
    },
    {
      id: "back_pain",
      title: t("services_symptom_backpain_title"),
      description: t("services_symptom_backpain_desc"),
    },
    {
      id: "digestive",
      title: t("services_symptom_digestive_title"),
      description: t("services_symptom_digestive_desc"),
    },
    {
      id: "mood_swings",
      title: t("services_symptom_mood_title"),
      description: t("services_symptom_mood_desc"),
    },
    {
      id: "headaches",
      title: t("services_symptom_headaches_title"),
      description: t("services_symptom_headaches_desc"),
    },
  ];

  const serviceRecommendations = {
    insomnia: [
      {
        title: "Sleep Therapy",
        description:
          "Specialized sleep therapy programs to help you achieve better sleep quality and overcome insomnia",
        image: sleepImg,
        servicePage: "sleep-therapy",
      },
      {
        title: "Yoga & Meditation",
        description:
          "Mind-body wellness through yoga classes and meditation sessions for stress relief and inner peace",
        image: yogaImg,
        servicePage: "yoga-meditation",
      },
    ],
    stress: [
      {
        title: "Mental Wellness",
        description:
          "Comprehensive mental health support including therapy, mindfulness practices, and stress management",
        image: mentalWellnessImg,
        servicePage: "mental-wellness",
      },
      {
        title: "Yoga & Meditation",
        description:
          "Transform your mind and body through comprehensive yoga and meditation programs",
        image: yogaImg,
        servicePage: "yoga-meditation",
      },
    ],
    fatigue: [
      {
        title: "Fitness Programs",
        description:
          "Revolutionize your fitness journey with personalized training programs to boost energy",
        image: fitnessImg,
        servicePage: "fitness-programs",
      },
      {
        title: "Nutrition Guidance",
        description:
          "Expert nutrition advice and meal planning to fuel your body and mind",
        image: nutritionImg,
        servicePage: "nutrition-guidance",
      },
    ],
    weight_gain: [
      {
        title: "Personal Training",
        description:
          "One-on-one fitness coaching tailored to your weight loss goals and fitness level",
        image: fitnessImg,
        servicePage: "personal-training",
      },
      {
        title: "Nutrition Guidance",
        description:
          "Master the art of healthy eating with comprehensive nutrition programs",
        image: nutritionImg,
        servicePage: "nutrition-guidance",
      },
    ],
    back_pain: [
      {
        title: "Yoga & Meditation",
        description:
          "Improve flexibility and reduce pain through yoga classes and meditation sessions",
        image: yogaImg,
        servicePage: "yoga-meditation",
      },
      {
        title: "Personal Training",
        description:
          "Expert trainers provide techniques to strengthen core and improve posture",
        image: fitnessImg,
        servicePage: "personal-training",
      },
    ],
    digestive: [
      {
        title: "Nutrition Guidance",
        description:
          "Expert nutrition advice and meal planning to support digestive health",
        image: nutritionImg,
        servicePage: "nutrition-guidance",
      },
      {
        title: "Lifestyle Coaching",
        description:
          "Personalized lifestyle coaching to create sustainable healthy habits",
        image: lifestyleCoachingImg,
        servicePage: "lifestyle-coaching",
      },
    ],
    mood_swings: [
      {
        title: "Mental Wellness",
        description:
          "Comprehensive mental health support to help you build resilience and emotional well-being",
        image: mentalWellnessImg,
        servicePage: "mental-wellness",
      },
      {
        title: "Lifestyle Coaching",
        description:
          "Holistic wellness coaching to help you achieve balance in all aspects of your life",
        image: lifestyleCoachingImg,
        servicePage: "lifestyle-coaching",
      },
    ],
    headaches: [
      {
        title: "Yoga & Meditation",
        description:
          "Mind-body wellness through yoga classes and meditation sessions for stress relief",
        image: yogaImg,
        servicePage: "yoga-meditation",
      },
      {
        title: "Sleep Therapy",
        description:
          "Specialized sleep therapy programs to improve sleep quality and reduce headaches",
        image: sleepImg,
        servicePage: "sleep-therapy",
      },
    ],
  };

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId)
        ? prev.filter((id) => id !== symptomId)
        : [...prev, symptomId],
    );
  };

  const handleFindServices = () => {
    if (selectedSymptoms.length > 0) {
      // Scroll to top when showing results
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setShowResults(true);
    }
  };

  const getRecommendedServices = () => {
    const allServices = [];
    const seenServices = new Set();

    selectedSymptoms.forEach((symptomId) => {
      if (serviceRecommendations[symptomId]) {
        serviceRecommendations[symptomId].forEach((service) => {
          // Use service title as unique identifier to avoid duplicates
          if (!seenServices.has(service.title)) {
            seenServices.add(service.title);
            allServices.push(service);
          }
        });
      }
    });
    return allServices;
  };

  const handleServiceClick = (servicePage) => {
    try {
      // Scroll to top before navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      // Navigate to the specific service page based on servicePage value
      switch (servicePage) {
        case "yoga-meditation":
          navigate("/yoga-meditation");
          break;
        case "sleep-therapy":
          navigate("/sleep-therapy");
          break;
        case "mental-wellness":
          navigate("/mental-wellness");
          break;
        case "fitness-programs":
          navigate("/fitness-programs");
          break;
        case "nutrition-guidance":
          navigate("/diet-nutrition");
          break;
        case "personal-training":
          navigate("/fitness-programs");
          break;
        case "lifestyle-coaching":
          navigate("/lifestyle-coaching");
          break;
        default:
          console.warn(`Unknown service page: ${servicePage}`);
          break;
      }
    } catch (error) {
      console.error("Error navigating to service page:", error);
    }
  };

  return (
    <section ref={elementRef} className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {t("services_symptom_title")}
          </h2>
          <p
            className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {t("services_symptom_desc")}
          </p>
        </div>

        {!showResults ? (
          <>
            <div className="max-w-6xl mx-auto mb-12">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Left Column - First 4 symptoms */}
                <div className="space-y-4">
                  {clientSymptoms.slice(0, 4).map((symptom) => (
                    <label
                      key={symptom.id}
                      className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        selectedSymptoms.includes(symptom.id)
                          ? `border-[#26A0A2] shadow-lg ${
                              isDarkMode ? "bg-black" : "bg-white"
                            }`
                          : `${
                              isDarkMode
                                ? "border-gray-600 bg-black hover:border-[#26A0A2]"
                                : "border-gray-200 bg-white hover:border-[#26A0A2]"
                            } hover:shadow-md`
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedSymptoms.includes(symptom.id)}
                        onChange={() => handleSymptomToggle(symptom.id)}
                        className="w-5 h-5 text-[#26A0A2] border-gray-300 rounded focus:ring-[#26A0A2] focus:ring-2 mr-4"
                      />
                      <div className="flex-1">
                        <div
                          className={`font-semibold text-lg ${
                            selectedSymptoms.includes(symptom.id)
                              ? "text-[#26A0A2]"
                              : isDarkMode
                                ? "text-white"
                                : "text-gray-900"
                          }`}
                        >
                          {symptom.title}
                        </div>
                        <div
                          className={`text-sm mt-1 ${
                            selectedSymptoms.includes(symptom.id)
                              ? "text-[#26A0A2]/80"
                              : isDarkMode
                                ? "text-gray-300"
                                : "text-gray-600"
                          }`}
                        >
                          {symptom.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Right Column - Last 4 symptoms */}
                <div className="space-y-4">
                  {clientSymptoms.slice(4, 8).map((symptom) => (
                    <label
                      key={symptom.id}
                      className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                        selectedSymptoms.includes(symptom.id)
                          ? `border-[#26A0A2] shadow-lg ${
                              isDarkMode ? "bg-black" : "bg-white"
                            }`
                          : `${
                              isDarkMode
                                ? "border-gray-600 bg-black hover:border-[#26A0A2]"
                                : "border-gray-200 bg-white hover:border-[#26A0A2]"
                            } hover:shadow-md`
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedSymptoms.includes(symptom.id)}
                        onChange={() => handleSymptomToggle(symptom.id)}
                        className="w-5 h-5 text-[#26A0A2] border-gray-300 rounded focus:ring-[#26A0A2] focus:ring-2 mr-4"
                      />
                      <div className="flex-1">
                        <div
                          className={`font-semibold text-lg ${
                            selectedSymptoms.includes(symptom.id)
                              ? "text-[#26A0A2]"
                              : isDarkMode
                                ? "text-white"
                                : "text-gray-900"
                          }`}
                        >
                          {symptom.title}
                        </div>
                        <div
                          className={`text-sm mt-1 ${
                            selectedSymptoms.includes(symptom.id)
                              ? "text-[#26A0A2]/80"
                              : isDarkMode
                                ? "text-gray-300"
                                : "text-gray-600"
                          }`}
                        >
                          {symptom.description}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleFindServices}
                disabled={selectedSymptoms.length === 0}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedSymptoms.length > 0
                    ? "bg-[#26A0A2] text-white hover:bg-[#1f8a8c] shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {t("services_symptom_find_btn")}
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-8">
            <div className="mb-8 text-center">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {t("services_recommended_title")}
              </h3>
              <p
                className={`mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t("services_recommended_desc")}
              </p>
              <button
                onClick={() => {
                  // Scroll to top
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  setShowResults(false);
                  setSelectedSymptoms([]);
                }}
                className="bg-white text-[#26A0A2] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t("services_back_to_symptoms")}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {getRecommendedServices().map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                    isDarkMode
                      ? "bg-black border-gray-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="w-16 h-16 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image}
                      alt={service.title || "Service"}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.style.display = "none";
                        console.warn(
                          `Failed to load image for service: ${service.title}`,
                        );
                      }}
                    />
                  </div>
                  <h4
                    className={`text-lg font-bold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title || "Service"}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {service.description || "No description available"}
                  </p>
                  <button
                    onClick={() => handleServiceClick(service.servicePage)}
                    className="bg-[#26A0A2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1f8a8c] transition-colors duration-300"
                  >
                    {t("services_view_details_btn")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatYouCanAchieve({ isDarkMode }) {
  const { t } = useLanguage();
  const goals = [
    {
      title: t("services_goal_flexibility_title"),
      description: t("services_goal_flexibility_desc"),
      color: "bg-[#26A0A2]",
      number: "01",
    },
    {
      title: t("services_goal_anxiety_title"),
      description: t("services_goal_anxiety_desc"),
      color: "bg-[#26A0A2]",
      number: "02",
    },
    {
      title: t("services_goal_posture_title"),
      description: t("services_goal_posture_desc"),
      color: "bg-[#26A0A2]",
      number: "03",
    },
    {
      title: t("services_goal_calm_title"),
      description: t("services_goal_calm_desc"),
      color: "bg-[#26A0A2]",
      number: "04",
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
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {t("services_achieve_title")}
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("services_achieve_desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 text-justify md:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                isDarkMode ? "bg-black" : "bg-white"
              }`}
            >
              {/* Colored Tab */}
              <div className={`${goal.color} text-white p-4 rounded-tl-xl`}>
                <div className="text-3xl font-bold">{goal.number}</div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title and Description */}
                <div>
                  <h3
                    className={`text-lg font-bold mb-3 ${goal.color.replace(
                      "bg-",
                      "text-",
                    )}`}
                  >
                    {goal.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthWellnessTips({ isDarkMode }) {
  const { t } = useLanguage();
  const tips = [
    {
      title: t("services_tip_hydrated_title"),
      description: t("services_tip_hydrated_desc"),
    },
    {
      title: t("services_tip_sleep_title"),
      description: t("services_tip_sleep_desc"),
    },
    {
      title: t("services_tip_move_title"),
      description: t("services_tip_move_desc"),
    },
    {
      title: t("services_tip_mindfulness_title"),
      description: t("services_tip_mindfulness_desc"),
    },
    {
      title: t("services_tip_eat_title"),
      description: t("services_tip_eat_desc"),
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-stretch grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="flex items-center order-2 lg:order-1">
            <img
              src={wellnessTipsImg}
              alt="Health and Wellness"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Side - Tips */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-black" : "text-white"
              }`}
            >
              {t("services_tips_title")}
            </h2>
            <p className="mb-8 text-xl text-white/90">
              {t("services_tips_desc")}
            </p>

            <div className="space-y-6">
              {tips.map((tip, index) => (
                <div key={index} className="py-2 pl-6 border-l-4 border-white">
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-black" : "text-white"
                    }`}
                  >
                    {tip.title}
                  </h3>
                  <p className="leading-relaxed text-white/80">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ isDarkMode }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("our-services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`w-full py-20 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="mx-auto text-center max-w-7xl">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-[#26A0A2]"
          }`}
        >
          {t("services_cta_title")}
        </h2>
        <p
          className={`text-xl max-w-3xl mx-auto mb-8 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {t("services_cta_desc")}
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={navigateToContact}
            className="bg-[#26A0A2] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1f8a8c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t("services_cta_getstarted_btn")}
          </button>
          <button
            onClick={scrollToServices}
            className="bg-transparent text-[#26A0A2] font-semibold px-8 py-4 rounded-xl border-2 border-[#26A0A2] hover:bg-[#26A0A2] hover:text-white transition-all duration-300"
          >
            {t("services_cta_learnmore_btn")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  React.useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
  }, []);

  React.useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener("darkModeChanged", handleDarkModeChange);

    return () => {
      window.removeEventListener("darkModeChanged", handleDarkModeChange);
    };
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Header />
      <ServicesHero />
      <OurServices isDarkMode={isDarkMode} />
      <SymptomGoalChecker isDarkMode={isDarkMode} />
      <WhatYouCanAchieve isDarkMode={isDarkMode} />
      <HealthWellnessTips isDarkMode={isDarkMode} />
      <CTASection isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}
