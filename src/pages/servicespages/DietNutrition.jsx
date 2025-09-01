import AOS from "aos";
import { useEffect, useState } from "react";
import "../../aos-custom.css";
import dietBenefitsBg from "../../assets/Dietbenefits.jpg";
import dietHeroVideo from "../../assets/Diethero.mp4";
import dietSteps from "../../assets/Dietsteps.jpg";
import Header from "../../Header.jsx";
import { useLanguage } from "../../utils/LanguageContext";
import Footer from "../../footer.jsx";

const DietNutrition = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedDarkMode);
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById("key-benefits");
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Listen for dark mode changes from Header
  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener("darkModeChanged", handleDarkModeChange);
    return () => {
      window.removeEventListener("darkModeChanged", handleDarkModeChange);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const programs = [
    {
      title: t("diet_program_personalized_title"),
      description: t("diet_program_personalized_desc"),
    },
    {
      title: t("diet_program_weight_title"),
      description: t("diet_program_weight_desc"),
    },
    {
      title: t("diet_program_sports_title"),
      description: t("diet_program_sports_desc"),
    },
    {
      title: t("diet_program_medical_title"),
      description: t("diet_program_medical_desc"),
    },
    {
      title: t("diet_program_detox_title"),
      description: t("diet_program_detox_desc"),
    },
    {
      title: t("diet_program_mindful_title"),
      description: t("diet_program_mindful_desc"),
    },
  ];

  const howItWorks = [
    t("diet_how_step1"),
    t("diet_how_step2"),
    t("diet_how_step3"),
    t("diet_how_step4"),
    t("diet_how_step5"),
  ];

  const features = [
    t("diet_feature_mealplans"),
    t("diet_feature_tracking"),
    t("diet_feature_recipes"),
    t("diet_feature_consult"),
  ];

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Header />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen max-w-full px-4 overflow-hidden sm:px-6 md:px-8 lg:px-16">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src={dietHeroVideo} type="video/mp4" />
          {t("diet_video_not_supported")}
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full max-w-4xl px-4 text-center z-1">
          <h1
            className="mb-6 text-3xl font-bold leading-tight text-center text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl sm:mb-8"
            data-aos="fade-up"
          >
            {t("diet_hero_title1")} <span className="text-teal-500">{t("diet_hero_title2")}</span>
          </h1>
          <p
            className="max-w-4xl mx-auto mb-8 text-lg leading-relaxed text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("diet_hero_desc")}
          </p>
          <button
            onClick={scrollToBenefits}
            className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("diet_hero_btn")}
          </button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section
        id="key-benefits"
        className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="false"
      >
        <div className="w-full mx-auto overflow-hidden max-w-7xl">
          <div
            className="mb-16 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {t("diet_benefits_title1")} <span className="text-[#26A0A2]">{t("diet_benefits_title2")}</span>
            </h2>
            <p
              className={`text-base sm:text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("diet_benefits_desc")}
            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-6 lg:grid-cols-3 sm:gap-8">
            {/* Left Cards */}
            <div
              className="space-y-4 sm:space-y-6"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("diet_benefit_energy_title")}
                  </h3>
                </div>
                <p
                  className={`text-base ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("diet_benefit_energy_desc")}
                </p>
              </div>

              <div
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-once="false"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("diet_benefit_weight_title")}
                  </h3>
                </div>
                <p
                  className={`text-base ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("diet_benefit_weight_desc")}
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div
              className="flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
              data-aos-once="false"
            >
              <div className="w-48 h-48 mb-4 overflow-hidden shadow-2xl sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:mb-6">
                <img
                  src={dietBenefitsBg}
                  alt="Diet Benefits"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {t("diet_benefit_transform_title")}
              </h3>
              <p
                className={`text-lg max-w-md ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t("diet_benefit_transform_desc")}
              </p>
            </div>

            {/* Right Cards */}
            <div
              className="space-y-4 sm:space-y-6"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("diet_benefit_digestion_title")}
                  </h3>
                </div>
                <p
                  className={`text-base ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("diet_benefit_digestion_desc")}
                </p>
              </div>

              <div
                className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-once="false"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {t("diet_benefit_metabolism_title")}
                  </h3>
                </div>
                <p
                  className={`text-base ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("diet_benefit_metabolism_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section
        className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/dietserve.jpg"
            alt="Diet Programs Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-[#26A0A2] bg-opacity-70"></div>
        </div>

        <div className="relative w-full mx-auto overflow-hidden max-w-7xl z-1">
          <div className="mb-12" data-aos="fade-up">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}
            >
              {t("diet_programs_title1")} <span className="text-white">{t("diet_programs_title2")}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:gap-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 bg-opacity-90 backdrop-blur-sm"
                    : "bg-white bg-opacity-90 backdrop-blur-sm"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-once="false"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-[#26A0A2]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {program.title}
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="w-full mx-auto overflow-hidden max-w-7xl">
          <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Content */}
            <div
              className="flex flex-col space-y-8"
              data-aos="fade-right"
              data-aos-once="false"
            >
              <div>
                <h2
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {t("diet_how_title1")} <span className="text-[#26A0A2]">{t("diet_how_title2")}</span>
                </h2>
                <p
                  className={`text-base sm:text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("diet_how_desc")}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#26A0A2]`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold mb-2 ${
                          isDarkMode ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {t("diet_how_step_label").replace("{number}", index + 1)}
                      </h3>
                      <p
                        className={`text-base ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={scrollToPricing}
                  className="bg-[#26A0A2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#20c997] transition-colors duration-300 transform hover:scale-105"
                >
                  {t("diet_hero_btn")}
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div
              className="flex items-start justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-once="false"
            >
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img
                    src={dietSteps}
                    alt="Diet Steps"
                    className="object-cover w-full shadow-2xl rounded-2xl"
                    style={{ height: "600px", maxHeight: "none" }}
                  />

                  {/* Decorative elements */}
                  <div className="absolute w-8 h-8 bg-yellow-400 rounded-full -top-4 -left-4 opacity-80"></div>
                  <div className="absolute w-6 h-6 bg-pink-400 rounded-full -bottom-4 -right-4 opacity-80"></div>
                  <div className="absolute w-4 h-4 bg-blue-400 rounded-full top-1/2 -right-6 opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#26A0A2] to-[#20c997]">
        <div className="w-full mx-auto overflow-hidden max-w-7xl">
          <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Content */}
            <div
              className="flex flex-col space-y-8"
              data-aos="fade-right"
              data-aos-once="false"
            >
              <div>
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  <span className="text-white">{t("diet_features_title1")}</span> {t("diet_features_title2")}
                </h2>
                <p className="mb-8 text-lg text-white sm:text-xl">
                  {t("diet_features_desc")}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white">
                  {t("diet_features_p1")}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {t("diet_features_p2")}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {t("diet_features_p3")}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {t("diet_features_p4")}
                </p>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6"
              data-aos="fade-left"
              data-aos-once="false"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${
                    isDarkMode
                      ? "bg-gray-800 bg-opacity-95 backdrop-blur-sm"
                      : "bg-white bg-opacity-95 backdrop-blur-sm"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-once="false"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center mb-3 shadow-lg">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {feature}
                    </h3>
                  </div>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("diet_feature_card_desc", { feature })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="pricing-section"
        className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto overflow-hidden text-center">
          <div
            className={`rounded-3xl p-8 sm:p-12 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
            data-aos="fade-up"
          >
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {t("diet_cta_title")}
            </h2>
            <p
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {t("diet_cta_desc")}
            </p>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
              {/* Basic Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="mb-2 text-2xl font-bold text-gray-800">{t("diet_pricing_basic")}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                  $29<span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="mb-6 space-y-3 text-left">
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="250" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_basic_feature1")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_basic_feature2")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="350" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_basic_feature3")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_basic_feature4")}
                  </li>
                </ul>
                <button className="w-full px-6 py-3 font-semibold text-gray-800 transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105" data-aos="fade-up" data-aos-delay="450" data-aos-once="false">
                  {t("diet_pricing_basic_btn")}
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-[#26A0A2] to-[#20c997] rounded-2xl p-6 border-2 border-[#26A0A2] transform scale-105">
                <div
                  className="bg-white text-[#26A0A2] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse"
                  data-aos="bounce"
                  data-aos-delay="250"
                  data-aos-once="false"
                >
                  {t("diet_pricing_popular")}
                </div>
                <h3
                  className="mb-2 text-2xl font-bold text-white"
                  data-aos="fade-down"
                  data-aos-delay="250"
                  data-aos-once="false"
                >
                  {t("diet_pricing_premium")}
                </h3>
                <div
                  className="mb-4 text-4xl font-bold text-white"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-once="false"
                >
                  $59<span className="text-lg text-gray-100">/month</span>
                </div>
                <ul className="mb-6 space-y-3 text-left text-white">
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="350" data-aos-once="false">
                    <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_premium_feature1")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                    <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_premium_feature2")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="450" data-aos-once="false">
                    <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_premium_feature3")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
                    <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_premium_feature4")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="550" data-aos-once="false">
                    <svg className="w-5 h-5 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_premium_feature5")}
                  </li>
                </ul>
                <button
                  className="w-full bg-white text-[#26A0A2] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="false"
                >
                  {t("diet_pricing_premium_btn")}
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3
                  className="mb-2 text-2xl font-bold text-gray-800"
                  data-aos="fade-down"
                  data-aos-delay="350"
                  data-aos-once="false"
                >
                  {t("diet_pricing_pro")}
                </h3>
                <div
                  className="text-4xl font-bold text-[#26A0A2] mb-4"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-once="false"
                >
                  $99<span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="mb-6 space-y-3 text-left">
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="450" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_pro_feature1")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_pro_feature2")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="550" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_pro_feature3")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="600" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_pro_feature4")}
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="650" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t("diet_pricing_pro_feature5")}
                  </li>
                </ul>
                <button
                  className="w-full px-6 py-3 font-semibold text-gray-800 transition-colors duration-300 transform bg-gray-200 rounded-lg hover:bg-gray-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-once="false"
                >
                  {t("diet_pricing_pro_btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default DietNutrition;
