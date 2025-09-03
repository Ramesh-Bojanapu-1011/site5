/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    // Example for English (en)
    "fitness.pricing.mostPopular": "Most Popular Plan",
    "fitness.pricing.premium": "Premium Plan",
    "fitness.pricing.premiumPrice": "$29.99",
    "fitness.pricing.premiumFeature1":
      "Access to all premium workouts and training plans",
    "fitness.pricing.premiumFeature2": "Personalized coaching and support",
    "fitness.pricing.premiumFeature3":
      "Exclusive access to live classes and events",
    "fitness.pricing.premiumFeature4": "Customized meal and nutrition plans",
    "fitness.pricing.premiumFeature5": "Priority customer support",
    "fitness.pricing.premiumBtn": "Choose Premium Plan",
    "fitness.pricing.pro": "Pro Plan",
    "fitness.pricing.proPrice": "$49.99",
    "fitness.pricing.proFeature1": "Everything in Premium",
    "fitness.pricing.proFeature2": "Advanced tracking and analytics",
    "fitness.pricing.proFeature3": "One-on-one coaching sessions",
    "fitness.pricing.proFeature4": "Access to exclusive workshops and events",
    "fitness.pricing.proFeature5": "Dedicated support and guidance",
    "fitness.pricing.proBtn": "Choose Pro Plan",

    "fitness.pricing.title": "Affordable Pricing Plans",
    "fitness.pricing.subtitle": "Choose a plan that fits your budget and goals",
    "fitness.pricing.basic": "Basic Plan ",
    "fitness.pricing.basicPrice": "$19.99",
    "fitness.pricing.month": "per month",
    "fitness.pricing.basicFeature1":
      "Access to all standard workouts and training plans",
    "fitness.pricing.basicFeature2": "Personalized workout recommendations",
    "fitness.pricing.basicFeature3":
      "Access to community support and resources",
    "fitness.pricing.basicFeature4":
      "Exclusive access to new workouts and features",
    "fitness.pricing.basicBtn": "Choose Basic Plan",
    "fitness.features.title": "Features Included",
    "fitness.features.subtitle":
      "Everything you need for a complete fitness experience",
    "fitness.features.desc1":
      "Our comprehensive fitness platform provides you with all the tools and resources needed to achieve your strength, endurance, and health goals. From personalized training to expert guidance, we've got everything covered.",
    "fitness.features.desc2":
      "Whether you're a beginner or an experienced athlete, our features are designed to support your fitness journey at every step, making exercise accessible and effective for everyone.",
    "fitness.features.desc3":
      "Our platform integrates cutting-edge fitness technology with proven training methodologies, ensuring you have access to the best workout strategies. With real-time progress tracking and adaptive recommendations, your fitness journey becomes more effective and engaging.",
    "fitness.features.desc4":
      "Join thousands of users who have transformed their bodies and lives through our comprehensive fitness approach. Experience the difference that personalized training, expert guidance, and community support can make in your health and fitness journey.",
    "fitness.hero.title": "Achieve Your Fitness Goals",
    "fitness.howItWorks.title": "How It Works",
    "fitness.howItWorks.subtitle":
      "Get started with your fitness journey in just a few simple steps",
    "fitness.howItWorks.stepLabel": "Step {number}",
    "fitness.howItWorks.cta": "Start Your Journey",

    "fitness.programs.title": "Programs we serve",
    "fitness.hero.subtitle": "Join our community and start your journey today",
    "fitness.hero.button": "Get Started",
    "fitness.benefits.subtitle":
      "Discover the advantages of our fitness programs",
    "fitness.benefits.strengthTitle": "Strength Training",
    "fitness.benefits.strengthDesc":
      "Build muscle and increase strength with our specialized programs",
    "fitness.benefits.cardioTitle": "Cardio Fitness",
    "fitness.benefits.cardioDesc":
      "Boost your heart health and endurance with our cardio workouts",
    "fitness.benefits.weightTitle": "Weight Management",
    "fitness.benefits.weightDesc":
      "Achieve and maintain a healthy weight with our tailored programs",
    "fitness.benefits.energyTitle": "Increased Energy Levels",
    "fitness.benefits.energyDesc":
      "Experience improved energy and vitality through regular exercise",
    "fitness.benefits.transformTitle": "Transformative Results",
    "fitness.benefits.transformDesc":
      "Achieve life-changing results with our comprehensive programs",

    "fitness.benefits.title": "Key Benefits of Our Programs",
    "fitness.programs.strength": "Strength Training Programs",
    "fitness.programs.strengthDesc":
      "Build muscle and increase strength with progressive resistance training",
    "fitness.programs.cardio": "Cardio Fitness Classes",
    "fitness.programs.cardioDesc":
      "Improve heart health and endurance with dynamic cardio workouts",
    "fitness.programs.hiit": "HIIT Training Sessions",
    "fitness.programs.hiitDesc":
      "High-intensity interval training for maximum fat burning and fitness",
    "fitness.programs.functional": "Functional Fitness Training",
    "fitness.programs.functionalDesc":
      "Improve daily movement patterns and overall functional strength",
    "fitness.programs.personal": "Personal Training Programs",
    "fitness.programs.personalDesc":
      "One-on-one customized fitness plans for your specific goals",
    "fitness.programs.group": "Group Fitness Classes",
    "fitness.programs.groupDesc":
      "Motivating group sessions for all fitness levels and preferences",

    "fitness.howItWorks.step1":
      "Complete a fitness assessment and goal setting",
    "fitness.howItWorks.step2": "Receive personalized workout recommendations",
    "fitness.howItWorks.step3": "Access training programs and video guides",
    "fitness.howItWorks.step4":
      "Follow structured routines with expert guidance",
    "fitness.howItWorks.step5": "Track progress and adjust your fitness plan",

    "fitness.features.personalized": "Personalized workout plans",
    "fitness.features.tracking": "Progress tracking tools",
    "fitness.features.library": "Video exercise library",
    "fitness.features.support": "Expert trainer support",

    mental_program_stress_title: "Stress Management Therapy",
    mental_program_stress_desc:
      "Learn effective techniques to manage and reduce daily stress",
    mental_program_anxiety_title: "Anxiety Relief Programs",
    mental_program_anxiety_desc:
      "Comprehensive approaches to overcome anxiety and worry",
    mental_program_mindfulness_title: "Mindfulness & Meditation",
    mental_program_mindfulness_desc:
      "Develop mindfulness practices for mental clarity and peace",
    mental_program_cbt_title: "Cognitive Behavioral Therapy",
    mental_program_cbt_desc:
      "Evidence-based therapy for thought pattern improvement",
    mental_program_emotional_title: "Emotional Wellness Workshops",
    mental_program_emotional_desc:
      "Group sessions for emotional intelligence and resilience",
    mental_program_sleep_title: "Sleep Improvement Programs",
    mental_program_sleep_desc:
      "Specialized techniques for better sleep and rest",
    mental_how_step1: "Complete a mental wellness assessment",
    mental_how_step2: "Receive personalized therapy recommendations",
    mental_how_step3: "Access guided sessions and resources",
    mental_how_step4: "Practice techniques with expert guidance",
    mental_how_step5: "Track progress and adjust your approach",
    mental_feature_personalized: "Personalized therapy sessions",
    mental_feature_tracking: "Mental health tracking tools",
    mental_feature_meditation: "Guided meditation library",
    mental_feature_consultation: "Expert consultation support",
    mental_hero_title1: "Discover",
    mental_hero_title2: "Mental Wellness",
    mental_hero_desc:
      "Transform your mental health with personalized therapy and mindfulness practices for inner peace and emotional balance.",
    mental_hero_btn: "Start Your Journey",
    mental_video_not_supported: "Your browser does not support the video tag.",
    mental_benefits_title1: "Key",
    mental_benefits_title2: "Benefits",
    mental_benefits_desc:
      "Transform your life with the proven benefits of mental wellness practices and therapeutic techniques",
    mental_benefit_stress_title: "Reduces Stress",
    mental_benefit_stress_desc:
      "Effectively manage and reduce stress levels through proven therapeutic techniques and mindfulness practices designed for modern life challenges.",
    mental_benefit_emotional_title: "Emotional Balance",
    mental_benefit_emotional_desc:
      "Develop emotional intelligence and regulation skills to maintain balance and resilience in challenging situations.",
    mental_benefit_transform_title: "Transform Your Mind",
    mental_benefit_transform_desc:
      "Experience the profound benefits of mental wellness that will enhance your emotional, cognitive, and psychological well-being.",
    mental_benefit_sleep_title: "Better Sleep",
    mental_benefit_sleep_desc:
      "Improve your sleep quality with relaxation techniques and mental wellness practices that prepare your mind for restful sleep.",
    mental_benefit_clarity_title: "Mental Clarity",
    mental_benefit_clarity_desc:
      "Enhance your cognitive function and mental clarity through mindfulness practices and therapeutic techniques.",
    mental_benefits_img_alt: "Mental Wellness Benefits",
    mental_programs_img_alt: "Mental Wellness Programs Background",
    mental_programs_title1: "Programs we",
    mental_programs_title2: "serve",
    mental_how_title1: "How It",
    mental_how_title2: "Works",
    mental_how_desc:
      "Get started with your mental wellness journey in just a few simple steps",
    mental_how_step_label: "Step {number}",
    mental_how_img_alt: "Mental Wellness Steps",
    mental_features_title1: "Features",
    mental_features_title2: "Included",
    mental_features_desc:
      "Everything you need for a complete mental wellness experience",
    mental_features_p1:
      "Our comprehensive mental wellness platform provides you with all the tools and resources needed to achieve emotional balance and psychological well-being. From personalized therapy to expert guidance, we've got everything covered.",
    mental_features_p2:
      "Whether you're dealing with stress, anxiety, or simply want to improve your mental health, our features are designed to support your journey at every step, making mental wellness accessible and effective for everyone.",
    mental_features_p3:
      "Our platform integrates evidence-based therapeutic approaches with modern technology, ensuring you have access to the best mental health strategies. With real-time progress tracking and adaptive recommendations, your mental wellness journey becomes more effective and sustainable.",
    mental_features_p4:
      "Join thousands of users who have transformed their mental health through our comprehensive approach. Experience the difference that personalized therapy, expert guidance, and ongoing support can make in your emotional and psychological well-being.",
    mental_feature_card_desc:
      "Access to {feature} for enhanced mental wellness experience and comprehensive support.",
    mental_cta_title: "Start Your Mental Wellness Journey Today",
    mental_cta_desc:
      "Get access to personalized therapy and mental wellness tools to improve your emotional and psychological well-being.",
    mental_pricing_basic: "Basic",
    mental_pricing_month: "month",
    mental_pricing_basic_feature1: "Basic therapy sessions",
    mental_pricing_basic_feature2: "Meditation library access",
    mental_pricing_basic_feature3: "Mobile app access",
    mental_pricing_basic_feature4: "Weekly progress reports",
    mental_pricing_basic_btn: "Choose Basic",
    mental_pricing_popular: "MOST POPULAR",
    mental_pricing_premium: "Premium",
    mental_pricing_premium_feature1: "Everything in Basic",
    mental_pricing_premium_feature2: "Live therapy sessions",
    mental_pricing_premium_feature3: "Personalized therapy plans",
    mental_pricing_premium_feature4: "Expert consultation",
    mental_pricing_premium_feature5: "Priority support",
    mental_pricing_premium_btn: "Choose Premium",
    mental_pricing_pro: "Pro",
    mental_pricing_pro_feature1: "Everything in Premium",
    mental_pricing_pro_feature2: "1-on-1 therapy sessions",
    mental_pricing_pro_feature3: "Custom therapy plans",
    mental_pricing_pro_feature4: "Weekend retreats access",
    mental_pricing_pro_feature5: "VIP community access",
    mental_pricing_pro_btn: "Choose Pro",

    // Diet & Nutrition Page
    diet_hero_title1: "Discover",
    diet_hero_title2: "Diet & Nutrition",
    diet_hero_desc:
      "Transform your health with personalized nutrition guidance and sustainable eating habits for optimal wellness.",
    diet_hero_btn: "Start Your Journey",
    diet_video_not_supported: "Your browser does not support the video tag.",
    diet_benefits_title1: "Key",
    diet_benefits_title2: "Benefits",
    diet_benefits_desc:
      "Transform your life with the proven benefits of proper nutrition and healthy eating habits",
    diet_benefit_energy_title: "Improves Energy",
    diet_benefit_energy_desc:
      "Boost your daily energy levels and vitality through balanced nutrition and proper meal timing designed to fuel your body optimally.",
    diet_benefit_weight_title: "Healthy Weight",
    diet_benefit_weight_desc:
      "Achieve and maintain a healthy weight through sustainable nutrition strategies that work with your body's natural metabolism.",
    diet_benefit_transform_title: "Transform Your Health",
    diet_benefit_transform_desc:
      "Experience the profound benefits of proper nutrition that will enhance your physical health, mental clarity, and overall well-being.",
    diet_benefit_digestion_title: "Better Digestion",
    diet_benefit_digestion_desc:
      "Improve your digestive health with nutrition plans that support gut health and promote optimal nutrient absorption.",
    diet_benefit_metabolism_title: "Boosts Metabolism",
    diet_benefit_metabolism_desc:
      "Enhance your metabolic function through targeted nutrition strategies that optimize your body's natural fat-burning processes.",
    diet_programs_title1: "Programs we",
    diet_programs_title2: "serve",
    diet_program_personalized_title: "Personalized Meal Planning",
    diet_program_personalized_desc:
      "Custom nutrition plans tailored to your goals and lifestyle",
    diet_program_weight_title: "Weight Management Programs",
    diet_program_weight_desc:
      "Sustainable approaches to achieving and maintaining healthy weight",
    diet_program_sports_title: "Sports Nutrition Coaching",
    diet_program_sports_desc:
      "Optimize performance with targeted nutrition strategies",
    diet_program_medical_title: "Medical Nutrition Therapy",
    diet_program_medical_desc:
      "Specialized nutrition support for health conditions",
    diet_program_detox_title: "Detox and Cleanse Programs",
    diet_program_detox_desc: "Gentle cleansing approaches for better health",
    diet_program_mindful_title: "Mindful Eating Workshops",
    diet_program_mindful_desc:
      "Develop healthy relationships with food and eating habits",
    diet_how_title1: "How It",
    diet_how_title2: "Works",
    diet_how_desc:
      "Get started with your nutrition journey in just a few simple steps",
    diet_how_step1: "Complete a comprehensive nutrition assessment",
    diet_how_step2: "Receive your personalized meal plan",
    diet_how_step3: "Access nutrition guidance and recipes",
    diet_how_step4: "Track your progress with expert support",
    diet_how_step5: "Adjust your plan based on results and feedback",
    diet_how_step_label: "Step {number}",
    diet_features_title1: "Features",
    diet_features_title2: "Included",
    diet_features_desc:
      "Everything you need for a complete nutrition experience",
    diet_features_p1:
      "Our comprehensive nutrition platform provides you with all the tools and resources needed to achieve your health and wellness goals. From personalized meal plans to expert guidance, we've got everything covered.",
    diet_features_p2:
      "Whether you're looking to lose weight, gain muscle, or simply improve your overall health, our features are designed to support your journey at every step, making healthy eating accessible and enjoyable.",
    diet_features_p3:
      "Our platform integrates cutting-edge nutrition science with practical meal planning, ensuring you have access to the best strategies for your health goals. With real-time progress tracking and adaptive recommendations, your nutrition journey becomes more effective and sustainable.",
    diet_features_p4:
      "Join thousands of users who have transformed their health through our comprehensive nutrition approach. Experience the difference that personalized meal planning, expert guidance, and ongoing support can make in your health and wellness journey.",
    diet_feature_mealplans: "Personalized meal plans",
    diet_feature_tracking: "Nutrition tracking tools",
    diet_feature_recipes: "Recipe database access",
    diet_feature_consult: "Expert consultation support",
    diet_feature_card_desc:
      "Access to {feature} for enhanced nutrition experience and comprehensive support.",
    diet_cta_title: "Start Your Nutrition Journey Today",
    diet_cta_desc:
      "Get access to personalized nutrition plans and wellness tools to improve your health and vitality.",
    diet_pricing_basic: "Basic",
    diet_pricing_basic_btn: "Choose Basic",
    diet_pricing_premium: "Premium",
    diet_pricing_premium_btn: "Choose Premium",
    diet_pricing_pro: "Pro",
    diet_pricing_pro_btn: "Choose Pro",
    diet_pricing_popular: "MOST POPULAR",
    diet_pricing_basic_feature1: "Basic meal planning",
    diet_pricing_basic_feature2: "Recipe database access",
    diet_pricing_basic_feature3: "Mobile app access",
    diet_pricing_basic_feature4: "Weekly progress reports",
    diet_pricing_premium_feature1: "Everything in Basic",
    diet_pricing_premium_feature2: "Personalized meal plans",
    diet_pricing_premium_feature3: "Expert consultation",
    diet_pricing_premium_feature4: "Nutrition tracking tools",
    diet_pricing_premium_feature5: "Priority support",
    diet_pricing_pro_feature1: "Everything in Premium",
    diet_pricing_pro_feature2: "1-on-1 coaching sessions",
    diet_pricing_pro_feature3: "Custom meal plans",
    diet_pricing_pro_feature4: "Weekend workshops access",
    diet_pricing_pro_feature5: "VIP community access",
    // Yoga & Meditation Page
    yoga_hero_title1: "Discover",
    yoga_hero_title2: "Yoga & Meditation",
    yoga_hero_desc:
      "Discover peace, flexibility, and mindfulness with guided Yoga & Meditation sessions for all levels.",
    yoga_hero_btn: "Start Your Journey",
    yoga_video_not_supported: "Your browser does not support the video tag.",
    yoga_benefits_title1: "Key",
    yoga_benefits_title2: "Benefits",
    yoga_benefits_desc:
      "Transform your life with the proven benefits of regular yoga and meditation practice",
    yoga_benefit_flex_title: "Improves Flexibility",
    yoga_benefit_flex_desc:
      "Enhance your range of motion and posture through targeted yoga poses and stretching exercises designed for all fitness levels.",
    yoga_benefit_anxiety_title: "Reduces Anxiety",
    yoga_benefit_anxiety_desc:
      "Find inner peace and calm through guided meditation techniques that help manage stress and promote mental well-being.",
    yoga_benefit_transform_title: "Transform Your Life",
    yoga_benefit_transform_desc:
      "Experience the profound benefits of yoga and meditation that will enhance your physical, mental, and spiritual well-being.",
    yoga_benefit_sleep_title: "Better Sleep",
    yoga_benefit_sleep_desc:
      "Improve your sleep quality with relaxation techniques and breathing exercises that prepare your mind and body for restful sleep.",
    yoga_benefit_energy_title: "Boosts Energy",
    yoga_benefit_energy_desc:
      "Increase your vitality and productivity through energizing yoga sequences and mindfulness practices that revitalize your body.",
    yoga_programs_title1: "Programs we",
    yoga_programs_title2: "serve",
    yoga_program_morning_title: "Morning Yoga Flow",
    yoga_program_morning_desc:
      "Start your day with energizing poses and mindful breathing",
    yoga_program_guided_title: "Guided Meditation Series",
    yoga_program_guided_desc:
      "Find inner peace through structured meditation practices",
    yoga_program_power_title: "Power Yoga Sessions",
    yoga_program_power_desc:
      "Build strength and endurance with dynamic sequences",
    yoga_program_chair_title: "Chair Yoga for Beginners",
    yoga_program_chair_desc:
      "Gentle yoga accessible to everyone, regardless of mobility",
    yoga_program_retreats_title: "Weekend Deep Relaxation Retreats",
    yoga_program_retreats_desc:
      "Immerse yourself in complete wellness experiences",
    yoga_program_breathing_title: "Breathing Techniques Practice",
    yoga_program_breathing_desc:
      "Master the art of conscious breathing for better health",
    yoga_how_title1: "How It",
    yoga_how_title2: "Works",
    yoga_how_desc:
      "Get started with your wellness journey in just a few simple steps",
    yoga_how_step1: "Choose the program that fits your lifestyle",
    yoga_how_step2: "Register and pick your preferred time",
    yoga_how_step3: "Access sessions online or through our app",
    yoga_how_step4: "Follow your routine with expert guidance",
    yoga_how_step5: "Track progress and adjust as needed",
    yoga_how_step_label: "Step {number}",
    yoga_features_title1: "Features",
    yoga_features_title2: "Included",
    yoga_features_desc:
      "Everything you need for a complete wellness experience",
    yoga_features_p1:
      "Our comprehensive wellness platform provides you with all the tools and resources needed to achieve your health and fitness goals. From personalized guidance to expert support, we've got everything covered.",
    yoga_features_p2:
      "Whether you're a beginner or an experienced practitioner, our features are designed to support your journey at every step, making wellness accessible and enjoyable for everyone.",
    yoga_features_p3:
      "Our platform integrates cutting-edge technology with traditional wellness practices, ensuring you have access to the best of both worlds. With real-time progress tracking and adaptive recommendations, your wellness journey becomes more effective and engaging.",
    yoga_features_p4:
      "Join thousands of users who have transformed their lives through our comprehensive wellness approach. Experience the difference that personalized care, expert guidance, and community support can make in your health and fitness journey.",
    yoga_feature_app: "Access to our mobile app",
    yoga_feature_routines: "Customizable daily routines",
    yoga_feature_ondemand: "On-demand video and audio sessions",
    yoga_feature_guides: "Printable wellness guides",
    yoga_feature_card_desc:
      "Access to {feature} for enhanced wellness experience and comprehensive support.",
    yoga_cta_title: "Start Your Wellness Journey Today",
    yoga_cta_desc:
      "Get access to personalized programs and wellness tools to improve your mind and body.",
    yoga_pricing_basic: "Basic",
    yoga_pricing_basic_btn: "Choose Basic",
    yoga_pricing_basic_feature1: "Access to basic yoga sessions",
    yoga_pricing_basic_feature2: "Guided meditation library",
    yoga_pricing_basic_feature3: "Mobile app access",
    yoga_pricing_basic_feature4: "Weekly progress reports",
    yoga_pricing_premium: "Premium",
    yoga_pricing_premium_feature1: "Everything in Basic",
    yoga_pricing_premium_feature2: "Live group classes",
    yoga_pricing_premium_feature3: "Personalized routines",
    yoga_pricing_premium_feature4: "Expert consultation",
    yoga_pricing_premium_feature5: "Priority support",
    yoga_pricing_pro: "Pro",
    yoga_pricing_pro_feature1: "Everything in Premium",
    yoga_pricing_pro_feature2: "1-on-1 coaching sessions",
    yoga_pricing_pro_feature3: "Custom meal plans",
    yoga_pricing_pro_feature4: "Weekend retreats access",
    yoga_pricing_pro_feature5: "VIP community access",
    yoga_pricing_popular: "MOST POPULAR",
    yoga_pricing_premium_btn: "Choose Premium",
    yoga_pricing_pro_btn: "Choose Pro",
    home2_expert4_name: "David Thompson",
    home2_expert4_title: "Yoga Instructor",
    home2_expert4_desc:
      "Certified yoga teacher with expertise in meditation and mindfulness practices.",
    // home2.jsx translations
    // aboutus.jsx translations
    aboutus_video_not_supported: "Your browser does not support the video tag.",
    aboutus_hero_title1: "About ",
    aboutus_hero_title2: "Us",
    aboutus_hero_desc:
      "Dedicated to transforming lives through comprehensive health and wellness solutions. We believe everyone deserves access to personalized care that nurtures mind, body, and spirit.",
    aboutus_growth_title: "Our Growth Through Years",
    aboutus_growth_desc:
      "A journey of continuous growth, innovation, and commitment to transforming lives through wellness.",
    aboutus_growth_2016_title: "Foundation",
    aboutus_growth_2016_desc:
      "Started with a vision to transform wellness through personalized care and evidence-based practices. Established our first wellness center with a team of certified professionals.",
    aboutus_growth_2018_title: "First 1000 Clients",
    aboutus_growth_2018_desc:
      "Reached our first milestone of 1000 satisfied clients, proving the effectiveness of our holistic approach. Expanded our services to include nutrition, fitness, and mental wellness.",
    aboutus_growth_2020_title: "Digital Transformation",
    aboutus_growth_2020_desc:
      "Launched comprehensive online wellness platforms to reach more people globally. Introduced virtual consultations, digital wellness tracking, and mobile app for personalized care.",
    aboutus_growth_2022_title: "10,000+ Lives Transformed",
    aboutus_growth_2022_desc:
      "Celebrated transforming over 10,000 lives with our holistic wellness programs. Recognized as a leading wellness destination with multiple awards and certifications.",
    aboutus_growth_2024_title: "Industry Leader",
    aboutus_growth_2024_desc:
      "Established as a leading wellness destination with cutting-edge technology, expert team, and comprehensive programs. Continuing to innovate and expand our impact globally.",
    aboutus_mission_img_alt: "Our Mission",
    aboutus_mission_title: "Our Mission & Vision",
    aboutus_mission_desc:
      "We are committed to empowering individuals to achieve their optimal well-being through evidence-based practices, personalized care, and a supportive community.",
    aboutus_mission_card_title: "Our Mission",
    aboutus_mission_card_desc:
      "To provide accessible, comprehensive wellness solutions that transform lives and create lasting positive change in our community.",
    aboutus_vision_card_title: "Our Vision",
    aboutus_vision_card_desc:
      "To be the leading wellness destination where individuals discover their path to holistic health and sustainable lifestyle transformation.",
    aboutus_values_title: "Our Values",
    aboutus_values_img_alt: "Our Values",
    aboutus_value_innovation_title: "Innovation",
    aboutus_value_innovation_desc:
      "We embrace cutting-edge wellness technology and evidence-based practices, always seeking better ways to deliver personalized health solutions.",
    aboutus_value_integrity_title: "Integrity",
    aboutus_value_integrity_desc:
      "We act with honesty, transparency, and the highest ethical standards in all our wellness practices and client relationships.",
    aboutus_value_flexibility_title: "Flexibility",
    aboutus_value_flexibility_desc:
      "We adapt quickly to individual needs and changing health goals, staying agile to meet evolving wellness requirements and lifestyle preferences.",
    aboutus_value_excellence_title: "Excellence",
    aboutus_value_excellence_desc:
      "We strive for the highest quality in everything we do, delivering outstanding wellness results and transformative experiences for our clients.",
    // About Us - What We Think
    aboutus_think_title: "What We Think",
    aboutus_think_desc:
      "At Health5, we believe that true wellness is a journey, not a destination. Our philosophy is rooted in the understanding that every individual is unique, and so are their health needs.",
    aboutus_think_holistic_title: "Holistic Approach",
    aboutus_think_holistic_desc:
      "We address the mind, body, and spirit, ensuring a comprehensive path to well-being.",
    aboutus_think_personalized_title: "Personalized Care",
    aboutus_think_personalized_desc:
      "Our solutions are tailored to your unique lifestyle, preferences, and goals.",
    aboutus_think_evidence_title: "Evidence-Based",
    aboutus_think_evidence_desc:
      "We combine the latest scientific research with traditional wisdom for optimal results.",
    aboutus_think_img_alt: "What We Think Image",

    // About Us - What Makes Us Unique
    aboutus_unique_title: "What Makes Us Unique",
    aboutus_unique_holistic_title: "Truly Holistic",
    aboutus_unique_holistic_desc:
      "We integrate nutrition, fitness, mental wellness, and lifestyle coaching for complete transformation.",
    aboutus_unique_ai_title: "AI-Powered Personalization",
    aboutus_unique_ai_desc:
      "Our advanced AI delivers insights and plans that adapt as you grow.",
    aboutus_unique_expert_title: "Expert Guidance",
    aboutus_unique_expert_desc:
      "Our team of certified professionals supports you at every step.",
    home2_ceo_title: "Meet Our CEO",
    home2_ceo_mission:
      "Leading our mission to transform lives through wellness and fitness excellence.",
    home2_ceo_experience:
      "With over 15 years of experience in the health and wellness industry, our CEO has dedicated their career to helping people achieve their fitness goals and live healthier, more fulfilling lives.",
    home2_ceo_quote:
      "We believe that true wellness comes from a balanced approach to physical fitness, mental health, and nutrition. Our team of certified experts is here to guide you every step of the way.",
    home2_ceo_name: "- John Smith, CEO",
    home2_event_instructor: "Instructor",
    home2_service1_title: "Personal Training",
    home2_service1_desc: "Customized sessions to achieve your fitness goals.",
    home2_service2_title: "Nutrition Guidance",
    home2_service2_desc: "Expert advice for a healthier you.",
    home2_service3_title: "Group Workouts",
    home2_service3_desc: "Fun, high-energy group classes for all levels.",
    home2_expert1_name: "Priya Sharma",
    home2_expert1_title: "Certified Trainer",
    home2_expert1_desc:
      "Certified trainer with 8+ years experience in strength training and cardio fitness.",
    home2_expert2_name: "Dr. Arjun Rao",
    home2_expert2_title: "Nutritionist",
    home2_expert2_desc:
      "Registered dietitian specializing in sports nutrition and weight management.",
    home2_expert3_name: "Lina Gomez",
    home2_expert3_title: "Yoga Coach",
    home2_expert3_desc:
      "Certified yoga teacher with expertise in meditation and mindfulness practices.",
    home2_faq1_q: "How do I enroll in a program?",
    home2_faq1_a: "Click 'Get Started' and choose your preferred program.",
    home2_faq2_q: "Are your coaches certified?",
    home2_faq2_a: "Yes, all our experts are certified.",
    home2_faq3_q: "Can I cancel anytime?",
    home2_faq3_a: "Absolutely! You control your membership.",
    home2_faq4_q: "Do you offer trial classes?",
    home2_faq4_a: "Yes, we offer free trial classes.",
    home2_faq5_q: "Can I switch programs?",
    home2_faq5_a: "Yes, contact support or use your dashboard.",
    home2_hero_title1: "Discover Your Potential and",
    home2_hero_title2a: "Achieve",
    home2_hero_title2b: "Wellness",
    home2_hero_desc:
      "Experience the perfect blend of fitness, nutrition, and mindfulness. Our expert-led programs are designed to help you reach your health and wellness goals with personalized guidance and support.",
    home2_hero_btn: "Start Your Journey",
    home2_experts_title: "Professional Team",
    home2_experts_desc:
      "Our dedicated wellness experts are committed to helping you achieve your health and fitness goals.",
    home2_why_title: "WHY CHOOSE US",
    home2_why_headline: "Empowering Your Success with Wellness Expertise",
    home2_why_desc:
      "Our certified experts, personalized plans, and supportive community help you achieve your health and wellness goals with confidence and care.",
    home2_why_subtitle: "Our Unique Approach",
    home2_why_subdesc:
      "We believe in a holistic approach to wellness, combining expert guidance, innovative programs, and a caring community. Our personalized plans and proven support systems ensure you get the results you deserve.",
    home2_why_bar1_label: "Personalized Plans",
    home2_why_bar2_label: "Community & Innovation",
    home2_why_bar3_label: "Support & Results",
    home2_events_title: "Upcoming Events & Classes",
    home2_events_join_btn: "Join Now",
    home2_register_title: "Register for Class",
    home2_register_fullname: "Full Name *",
    home2_register_fullname_ph: "Enter your full name",
    home2_register_email: "Email Address *",
    home2_register_email_ph: "Enter your email",
    home2_register_phone: "Phone Number *",
    home2_register_phone_ph: "Enter your phone number",
    home2_register_experience: "Experience Level",
    home2_register_experience_ph: "Select your experience level",
    home2_register_experience_beginner: "Beginner",
    home2_register_experience_intermediate: "Intermediate",
    home2_register_experience_advanced: "Advanced",
    home2_register_special: "Special Requirements",
    home2_register_special_ph: "Any special requirements or notes...",
    home2_register_btn: "Register Now",
    home2_register_terms:
      "By registering, you agree to our terms and conditions. We'll contact you shortly to confirm your registration.",
    home2_success_title: "Registration Successful!",
    home2_success_desc:
      "Thank you for registering for the class. We've sent a confirmation email with all the details.",
    home2_success_close: "Close",
    home2_insights_title1: "Wellness",
    home2_insights_title2: "Insights",
    home2_insights_desc:
      "Discover the latest trends, research, and expert insights in health and wellness. Our comprehensive analysis helps you make informed decisions about your fitness journey.",
    home2_insights_card1_title: "Evidence-Based Approach",
    home2_insights_card1_desc:
      "All our recommendations are backed by the latest scientific research and proven methodologies.",
    home2_insights_card2_title: "Personalized Strategies",
    home2_insights_card2_desc:
      "Tailored wellness strategies that adapt to your unique lifestyle and goals.",
    home2_insights_card3_title: "Community Support",
    home2_insights_card3_desc:
      "Join a supportive community of like-minded individuals on their wellness journey.",
    home2_insights_btn: "Explore Insights",
    home: "Home",
    home1: "Home1",
    home2: "Home2",
    about: "About Us",
    services: "Services",
    viewAllServices: "View All Services",
    yoga: "Yoga & Meditation",
    diet: "Diet & Nutrition",
    mental: "Mental Wellness",
    fitness: "Fitness Programs",
    sleep: "Sleep Therapy",
    lifestyle: "Lifestyle Coaching",
    blog: "Blog",
    contact: "Contact Us",
    userProfile: "User Profile",
    signedIn: "Signed in",
    logout: "Logout",
    selectLanguage: "Select Language",
    // home1.jsx translations
    home_hero_title: "Your Wellness Journey",
    home_hero_desc:
      "Discover holistic health, expert guidance, and a supportive community. Your path to a healthier, happier you starts here.",
    home_hero_btn: "Start Your Journey",
    who_we_are_img_alt: "Who We Are",
    who_we_are_title: "Who We Are",
    who_we_are_desc:
      "We are a dedicated team of wellness professionals committed to transforming lives through comprehensive health and wellness solutions. Our mission is to empower individuals to achieve their optimal well-being through personalized care, expert guidance, and evidence-based practices.",
    who_we_are_expert_team_title: "Expert Team",
    who_we_are_expert_team_desc:
      "Certified professionals with years of experience",
    who_we_are_personalized_care_title: "Personalized Care",
    who_we_are_personalized_care_desc:
      "Tailored wellness plans for individual needs",
    who_we_are_holistic_approach_title: "Holistic Approach",
    who_we_are_holistic_approach_desc:
      "Mind, body, and spirit wellness integration",
    who_we_are_proven_results_title: "Proven Results",
    who_we_are_proven_results_desc:
      "Evidence-based methods with measurable outcomes",
    who_we_are_btn: "Learn More About Us →",
    // Services Overview
    services_overview_title: "Our Top Services",
    service_yoga_title: "Yoga & Meditation",
    service_yoga_tagline: "Balance mind and body with guided sessions.",
    service_yoga_details:
      "Join our expert-led yoga and meditation classes to improve flexibility, reduce stress, and enhance your overall well-being. Suitable for all levels.",
    service_nutrition_title: "Diet & Nutrition",
    service_nutrition_tagline: "Personalized nutrition plans for your goals.",
    service_nutrition_details:
      "Get customized meal plans and nutrition advice from certified dietitians. Achieve your health goals with science-backed guidance.",
    service_fitness_title: "Fitness Programs",
    service_fitness_tagline: "Modern fitness routines for all levels.",
    service_fitness_details:
      "Access a variety of fitness programs, from strength training to cardio, designed to keep you motivated and fit.",
    service_sleep_title: "Sleep Therapy",
    service_sleep_tagline: "Improve sleep quality with expert help.",
    service_sleep_details:
      "Overcome sleep issues with our therapy sessions and expert tips for restful, rejuvenating sleep every night.",
    // --- services.jsx translations ---
    services_video_not_supported:
      "Your browser does not support the video tag.",
    services_hero_title: "Explore Our Services",
    services_hero_desc:
      "Comprehensive wellness solutions designed to transform your life. From personalized fitness programs to holistic health guidance, we provide everything you need for your wellness journey.",
    services_hero_explore_btn: "Explore Services",
    services_hero_getstarted_btn: "Get Started",
    services_ourservices_title: "Our Services",
    services_ourservices_desc:
      "Discover our comprehensive range of wellness services designed to support your health and fitness journey.",
    services_yoga_title: "Yoga & Meditation",
    services_yoga_desc:
      "Transform your mind and body through our comprehensive yoga and meditation programs. Experience deep relaxation, improved flexibility, and mental clarity with expert-guided sessions designed to reduce stress and enhance your overall well-being.",
    services_fitness_title: "Fitness Programs",
    services_fitness_desc:
      "Revolutionize your fitness journey with our personalized training programs. Our certified trainers create custom workout plans that adapt to your progress, combining strength training, cardio, and flexibility exercises to help you achieve your fitness goals faster and more effectively.",
    services_nutrition_title: "Nutrition Guidance",
    services_nutrition_desc:
      "Discover the power of proper nutrition with our expert guidance. Our nutritionists develop personalized meal plans that align with your health objectives, dietary preferences, and lifestyle, ensuring sustainable eating habits that fuel your body and mind.",
    services_yoga2_title: "Yoga & Meditation",
    services_yoga2_desc:
      "Embark on a transformative journey of self-discovery through our holistic yoga and meditation programs. Learn ancient techniques combined with modern approaches to achieve inner peace, emotional balance, and physical vitality in today's fast-paced world.",
    services_personal_title: "Personal Training",
    services_personal_desc:
      "Experience the ultimate in personalized fitness with our one-on-one training sessions. Our expert trainers provide motivation, accountability, and scientifically-proven techniques to help you build strength, endurance, and confidence in a supportive environment.",
    services_nutrition2_title: "Nutrition Guidance",
    services_nutrition2_desc:
      "Master the art of healthy eating with our comprehensive nutrition programs. From meal planning and grocery shopping guidance to cooking techniques and dietary education, we empower you to make informed food choices that support your health and wellness goals.",
    services_mental_title: "Mental Wellness",
    services_mental_desc:
      "Comprehensive mental health support including therapy, mindfulness practices, and stress management techniques. Our mental wellness programs help you build resilience and emotional well-being.",
    services_sleep_title: "Sleep Therapy",
    services_sleep_desc:
      "Specialized sleep therapy programs to help you achieve better sleep quality and overcome insomnia. Our experts provide personalized solutions for restful nights and improved overall health.",
    services_wellness_title: "Wellness Coaching",
    services_wellness_desc:
      "Holistic wellness coaching to help you achieve balance in all aspects of your life - physical, mental, and emotional.",
    services_mental2_title: "Mental Wellness",
    services_mental2_desc:
      "Comprehensive mental health support including therapy, mindfulness practices, and stress management techniques. Our mental wellness programs help you build resilience and emotional well-being.",
    services_assessments_title: "Health Assessments",
    services_assessments_desc:
      "Comprehensive health evaluations and progress tracking to monitor your wellness journey and achievements.",
    services_lifestyle_title: "Lifestyle Coaching",
    services_lifestyle_desc:
      "Personalized lifestyle coaching to help you create sustainable habits and routines. Our coaches guide you through positive lifestyle changes for long-term health and wellness success.",
    services_symptom_title: "What are your current symptoms?",
    services_symptom_desc:
      "Tell us about your symptoms and we'll guide you to the most suitable wellness services.",
    services_symptom_insomnia_title: "Insomnia",
    services_symptom_insomnia_desc: "Difficulty falling or staying asleep",
    services_symptom_stress_title: "Chronic Stress",
    services_symptom_stress_desc: "Constant worry and anxiety",
    services_symptom_fatigue_title: "Low Energy",
    services_symptom_fatigue_desc: "Feeling tired and unmotivated",
    services_symptom_weight_title: "Weight Issues",
    services_symptom_weight_desc: "Struggling with weight management",
    services_symptom_backpain_title: "Back Pain",
    services_symptom_backpain_desc: "Chronic back and neck pain",
    services_symptom_digestive_title: "Digestive Issues",
    services_symptom_digestive_desc: "Bloating, indigestion, gut problems",
    services_symptom_mood_title: "Mood Swings",
    services_symptom_mood_desc: "Irregular mood and emotional instability",
    services_symptom_headaches_title: "Frequent Headaches",
    services_symptom_headaches_desc: "Regular tension or migraine headaches",
    services_symptom_find_btn: "Find Services for My Symptoms",
    services_recommended_title: "Recommended Services for Your Symptoms",
    services_recommended_desc:
      "Based on your symptoms, these services are specifically designed to help you find relief and improve your health.",
    services_back_to_symptoms: "← Back to Symptoms",
    services_view_details_btn: "View Service Details",
    services_goal_flexibility_title: "Improved Flexibility",
    services_goal_flexibility_desc:
      "Enhance your range of motion and joint mobility through our specialized yoga and stretching programs designed for all fitness levels.",
    services_goal_anxiety_title: "Reduced Anxiety",
    services_goal_anxiety_desc:
      "Lower stress levels and improve mental clarity with our mindfulness practices, meditation sessions, and stress management techniques.",
    services_goal_posture_title: "Better Posture",
    services_goal_posture_desc:
      "Strengthen your core and achieve proper spine alignment through our posture correction programs and specialized training sessions.",
    services_goal_calm_title: "Inner Calm",
    services_goal_calm_desc:
      "Achieve deep sense of peace and emotional balance through our holistic wellness practices and expert-guided meditation programs.",
    services_tips_title: "Health & Wellness Tips",
    services_tips_desc:
      "Simple, effective strategies to enhance your daily wellness routine and improve your overall health.",
    services_tip_hydrated_title: "Stay Hydrated",
    services_tip_hydrated_desc:
      "Drink at least 8 glasses of water daily to maintain optimal body function and energy levels.",
    services_tip_sleep_title: "Get Quality Sleep",
    services_tip_sleep_desc:
      "Aim for 7-9 hours of sleep per night to support recovery and mental clarity.",
    services_tip_move_title: "Move Daily",
    services_tip_move_desc:
      "Incorporate at least 30 minutes of physical activity into your daily routine.",
    services_tip_mindfulness_title: "Practice Mindfulness",
    services_tip_mindfulness_desc:
      "Take 10-15 minutes daily for meditation or deep breathing exercises.",
    services_tip_eat_title: "Eat Balanced Meals",
    services_tip_eat_desc:
      "Focus on whole foods, lean proteins, and plenty of fruits and vegetables.",
    services_cta_title: "Ready to Transform Your Life?",
    services_cta_desc:
      "Join thousands of people who have already improved their health and wellness with our expert guidance and proven programs.",
    services_cta_getstarted_btn: "Get Started Today",
    services_cta_learnmore_btn: "Learn More",
    services_achieve_title: "What You Can Achieve",
    services_achieve_desc:
      "Discover realistic, inspiring outcomes from using our wellness services. Transform your life with proven results and sustainable improvements.",
    // Impact Metrics
    impact_title_1: "Wellness Studio is a",
    impact_title_2: "more reliable partner,",
    impact_title_3: "that listens to your needs",
    impact_desc:
      "We deeply immerse ourselves in your wellness journey to create a modern, personalized experience that reflects the identity and essence of your health goals. Our comprehensive approach combines cutting-edge wellness technology with time-tested holistic practices, ensuring every individual receives tailored guidance that addresses their unique needs. From personalized nutrition plans and expert fitness coaching to mindfulness training and stress management techniques.",
    impact_metric_sessions:
      "wellness sessions completed with personalized care",
    impact_metric_satisfaction: "client satisfaction rate with proven results",
    impact_metric_support: "expert support available for your wellness journey",
    impact_metric_experts: "certified wellness coaches and nutrition experts",
    // Testimonials
    testimonials_title: "What Our Users Say",
    testimonial_1_quote:
      "This platform has transformed my wellness journey. The personalized plans and community support are unmatched!",
    testimonial_1_name: "Ava Patel",
    testimonial_1_role: "Yoga Enthusiast",
    testimonial_2_quote:
      "I love the expert guidance and the easy-to-follow fitness programs. I feel healthier and more confident than ever!",
    testimonial_2_name: "Liam Chen",
    testimonial_2_role: "Fitness Member",
    testimonial_3_quote:
      "The nutrition advice and sleep therapy tips have made a huge difference in my daily life. Highly recommended!",
    testimonial_3_name: "Sophia Garcia",
    testimonial_3_role: "Wellness Seeker",
    testimonial_prev: "Previous testimonial",
    testimonial_next: "Next testimonial",
    // CTA
    cta_title: "Ready to Transform Your Life?",
    cta_desc:
      "Join thousands of people who have already started their wellness journey with us. Get personalized guidance, expert support, and a community that cares about your success.",
    cta_btn_start: "Start Today",
    cta_btn_learn: "Learn More",
    cta_img_alt: "Wellness Journey",
  },
  ar: {
    "fitness.pricing.mostPopular": "الخطة الأكثر شيوعًا",
    "fitness.pricing.premium": "الخطة المميزة",
    "fitness.pricing.premiumPrice": "$29.99",
    "fitness.pricing.premiumFeature1":
      "الوصول إلى جميع التدريبات والخطط المميزة",
    "fitness.pricing.premiumFeature2": "تدريب ودعم شخصي",
    "fitness.pricing.premiumFeature3": "وصول حصري إلى الفصول والأحداث المباشرة",
    "fitness.pricing.premiumFeature4": "خطط وجبات وتغذية مخصصة",
    "fitness.pricing.premiumFeature5": "أولوية في دعم العملاء",
    "fitness.pricing.premiumBtn": "اختر الخطة المميزة",
    "fitness.pricing.pro": "الخطة الاحترافية",
    "fitness.pricing.proPrice": "$49.99",
    "fitness.pricing.proFeature1": "كل ما في الخطة المميزة",
    "fitness.pricing.proFeature2": "تتبع وتحليلات متقدمة",
    "fitness.pricing.proFeature3": "جلسات تدريب فردية",
    "fitness.pricing.proFeature4": "الوصول إلى ورش عمل وأحداث حصرية",
    "fitness.pricing.proFeature5": "دعم وإرشاد مخصص",
    "fitness.pricing.proBtn": "اختر الخطة الاحترافية",
    "fitness.pricing.title": "خطط أسعار ميسورة",
    "fitness.pricing.subtitle": "اختر الخطة التي تناسب ميزانيتك وأهدافك",
    "fitness.pricing.basic": "الخطة الأساسية",
    "fitness.pricing.basicPrice": "$19.99",
    "fitness.pricing.month": "شهريًا",
    "fitness.pricing.basicFeature1":
      "الوصول إلى جميع التدريبات والخطط القياسية",
    "fitness.pricing.basicFeature2": "توصيات تدريب شخصية",
    "fitness.pricing.basicFeature3": "الوصول إلى دعم المجتمع والموارد",
    "fitness.pricing.basicFeature4": "وصول حصري إلى التدريبات والميزات الجديدة",
    "fitness.pricing.basicBtn": "اختر الخطة الأساسية",
    "fitness.features.title": "الميزات المشمولة",
    "fitness.features.subtitle": "كل ما تحتاجه لتجربة لياقة بدنية متكاملة",
    "fitness.features.desc1":
      "منصتنا الشاملة للياقة البدنية توفر لك جميع الأدوات والموارد اللازمة لتحقيق أهدافك في القوة، القدرة على التحمل، والصحة. من التدريب الشخصي إلى الإرشاد المتخصص، نحن نغطي كل شيء.",
    "fitness.features.desc2":
      "سواء كنت مبتدئًا أو رياضيًا ذا خبرة، تم تصميم ميزاتنا لدعم رحلتك في اللياقة البدنية في كل خطوة، مما يجعل التمرين متاحًا وفعالًا للجميع.",
    "fitness.features.desc3":
      "منصتنا تدمج أحدث تقنيات اللياقة البدنية مع أساليب التدريب المثبتة، مما يضمن لك الوصول إلى أفضل استراتيجيات التمرين. مع تتبع التقدم في الوقت الفعلي والتوصيات التكيفية، تصبح رحلتك الرياضية أكثر فعالية وجاذبية.",
    "fitness.features.desc4":
      "انضم إلى آلاف المستخدمين الذين غيّروا أجسامهم وحياتهم من خلال نهجنا الشامل في اللياقة البدنية. اختبر الفرق الذي يمكن أن يحدثه التدريب الشخصي، الإرشاد المتخصص، ودعم المجتمع في رحلتك نحو الصحة واللياقة.",
    "fitness.howItWorks.title": "كيف تعمل",
    "fitness.howItWorks.subtitle":
      "ابدأ رحلتك في اللياقة البدنية في بضع خطوات بسيطة فقط",
    "fitness.howItWorks.stepLabel": "الخطوة {number}",
    "fitness.howItWorks.cta": "ابدأ رحلتك",
    "fitness.benefits.title": "الفوائد الرئيسية لبرامجنا",
    "fitness.programs.title": "البرامج التي نقدمها",
    "fitness.hero.title": "حقق أهدافك في اللياقة البدنية",
    "fitness.hero.subtitle": "انضم إلى مجتمعنا وابدأ رحلتك اليوم",
    "fitness.hero.button": "ابدأ الآن",
    "fitness.benefits.subtitle": "اكتشف فوائد برامجنا الرياضية",
    "fitness.benefits.strengthTitle": "تدريب القوة",
    "fitness.benefits.strengthDesc":
      "قم ببناء العضلات وزيادة القوة من خلال برامجنا المتخصصة",
    "fitness.benefits.cardioTitle": "تمارين الكارديو",
    "fitness.benefits.cardioDesc":
      "عزز صحة قلبك وقدرتك على التحمل مع تمارين الكارديو لدينا",
    "fitness.benefits.weightTitle": "إدارة الوزن",
    "fitness.benefits.weightDesc":
      "حقق وحافظ على وزن صحي من خلال برامجنا المصممة خصيصًا لك",
    "fitness.benefits.energyTitle": "زيادة مستويات الطاقة",
    "fitness.benefits.energyDesc":
      "اشعر بزيادة في النشاط والحيوية من خلال التمارين المنتظمة",
    "fitness.benefits.transformTitle": "نتائج تحويلية",
    "fitness.benefits.transformDesc":
      "حقق نتائج تغير حياتك من خلال برامجنا الشاملة",
    "fitness.programs.strength": "برامج تدريب القوة",
    "fitness.programs.strengthDesc":
      "ابنِ العضلات وزد قوتك من خلال تدريب المقاومة التدريجي",
    "fitness.programs.cardio": "دروس اللياقة القلبية",
    "fitness.programs.cardioDesc":
      "حسّن صحة القلب والقدرة على التحمل من خلال تمارين كارديو ديناميكية",
    "fitness.programs.hiit": "جلسات تدريب HIIT",
    "fitness.programs.hiitDesc":
      "تدريب متقطع عالي الكثافة لحرق الدهون وزيادة اللياقة إلى الحد الأقصى",
    "fitness.programs.functional": "تدريب اللياقة الوظيفية",
    "fitness.programs.functionalDesc":
      "حسّن أنماط الحركة اليومية وقوة الجسم الوظيفية العامة",
    "fitness.programs.personal": "برامج التدريب الشخصي",
    "fitness.programs.personalDesc": "خطط لياقة مخصصة فردية لأهدافك الخاصة",
    "fitness.programs.group": "دروس اللياقة الجماعية",
    "fitness.programs.groupDesc":
      "جلسات جماعية محفزة لجميع مستويات اللياقة والتفضيلات",

    "fitness.howItWorks.step1": "أكمل تقييم اللياقة وتحديد الأهداف",
    "fitness.howItWorks.step2": "استلم توصيات تمرين مخصصة",
    "fitness.howItWorks.step3": "احصل على برامج تدريب وأدلة فيديو",
    "fitness.howItWorks.step4": "اتبع روتينات منظمة مع إرشاد الخبراء",
    "fitness.howItWorks.step5": "تتبع التقدم وقم بتعديل خطة لياقتك",

    "fitness.features.personalized": "خطط تمرين مخصصة",
    "fitness.features.tracking": "أدوات تتبع التقدم",
    "fitness.features.library": "مكتبة فيديو للتمارين",
    "fitness.features.support": "دعم مدربين خبراء",
    mental_program_stress_title: "علاج إدارة التوتر",
    mental_program_stress_desc: "تعلم تقنيات فعالة لإدارة وتقليل التوتر اليومي",
    mental_program_anxiety_title: "برامج تخفيف القلق",
    mental_program_anxiety_desc: "طرق شاملة للتغلب على القلق والهموم",
    mental_program_mindfulness_title: "اليقظة والتأمل",
    mental_program_mindfulness_desc:
      "طور ممارسات اليقظة من أجل صفاء الذهن والسلام",
    mental_program_cbt_title: "العلاج السلوكي المعرفي",
    mental_program_cbt_desc: "علاج قائم على الأدلة لتحسين أنماط التفكير",
    mental_program_emotional_title: "ورش عمل الصحة العاطفية",
    mental_program_emotional_desc: "جلسات جماعية للذكاء العاطفي والمرونة",
    mental_program_sleep_title: "برامج تحسين النوم",
    mental_program_sleep_desc: "تقنيات متخصصة لنوم أفضل وراحة",
    mental_how_step1: "أكمل تقييم الصحة النفسية",
    mental_how_step2: "استلم توصيات علاجية شخصية",
    mental_how_step3: "الوصول إلى جلسات وموارد موجهة",
    mental_how_step4: "مارس التقنيات مع إرشاد الخبراء",
    mental_how_step5: "تتبع التقدم وعدل نهجك",
    mental_feature_personalized: "جلسات علاجية شخصية",
    mental_feature_tracking: "أدوات تتبع الصحة النفسية",
    mental_feature_meditation: "مكتبة التأمل الموجه",
    mental_feature_consultation: "دعم استشاري من الخبراء",

    mental_hero_title1: "اكتشف",
    mental_hero_title2: "الصحة النفسية",
    mental_hero_desc:
      "حوّل صحتك النفسية من خلال العلاج الشخصي وممارسات اليقظة لتحقيق السلام الداخلي والتوازن العاطفي.",
    mental_hero_btn: "ابدأ رحلتك",
    mental_video_not_supported: "متصفحك لا يدعم وسم الفيديو.",
    mental_benefits_title1: "الفوائد",
    mental_benefits_title2: "الرئيسية",
    mental_benefits_desc:
      "حوّل حياتك مع الفوائد المثبتة لممارسات الصحة النفسية والتقنيات العلاجية.",
    mental_benefit_stress_title: "يقلل التوتر",
    mental_benefit_stress_desc:
      "قم بإدارة وتقليل مستويات التوتر بفعالية من خلال تقنيات علاجية مثبتة وممارسات اليقظة المصممة لتحديات الحياة الحديثة.",
    mental_benefit_emotional_title: "التوازن العاطفي",
    mental_benefit_emotional_desc:
      "طوّر الذكاء العاطفي ومهارات التنظيم للحفاظ على التوازن والمرونة في المواقف الصعبة.",
    mental_benefit_transform_title: "حوّل عقلك",
    mental_benefit_transform_desc:
      "اختبر الفوائد العميقة للصحة النفسية التي ستعزز رفاهيتك العاطفية والمعرفية والنفسية.",
    mental_benefit_sleep_title: "نوم أفضل",
    mental_benefit_sleep_desc:
      "حسّن جودة نومك باستخدام تقنيات الاسترخاء وممارسات الصحة النفسية التي تهيئ عقلك لنوم مريح.",
    mental_benefit_clarity_title: "صفاء ذهني",
    mental_benefit_clarity_desc:
      "عزز وظائفك الإدراكية وصفاء ذهنك من خلال ممارسات اليقظة والتقنيات العلاجية.",
    mental_benefits_img_alt: "فوائد الصحة النفسية",
    mental_programs_img_alt: "خلفية برامج الصحة النفسية",
    mental_programs_title1: "البرامج التي",
    mental_programs_title2: "نقدمها",
    mental_how_title1: "كيف",
    mental_how_title2: "يعمل",
    mental_how_desc: "ابدأ رحلتك نحو الصحة النفسية في بضع خطوات بسيطة فقط.",
    mental_how_step_label: "الخطوة {number}",
    mental_how_img_alt: "خطوات الصحة النفسية",
    mental_features_title1: "المميزات",
    mental_features_title2: "المتضمنة",
    mental_features_desc: "كل ما تحتاجه لتجربة شاملة للصحة النفسية.",
    mental_features_p1:
      "يوفر لك منصتنا الشاملة للصحة النفسية جميع الأدوات والموارد اللازمة لتحقيق التوازن العاطفي والرفاهية النفسية. من العلاج الشخصي إلى الإرشاد المتخصص، نحن نغطي كل شيء.",
    mental_features_p2:
      "سواء كنت تتعامل مع التوتر أو القلق أو ترغب ببساطة في تحسين صحتك النفسية، تم تصميم ميزاتنا لدعم رحلتك في كل خطوة، مما يجعل الصحة النفسية متاحة وفعالة للجميع.",
    mental_features_p3:
      "تدمج منصتنا الأساليب العلاجية المبنية على الأدلة مع التكنولوجيا الحديثة، مما يضمن لك الوصول إلى أفضل استراتيجيات الصحة النفسية. مع تتبع التقدم في الوقت الفعلي والتوصيات التكيفية، تصبح رحلتك أكثر فعالية واستدامة.",
    mental_features_p4:
      "انضم إلى آلاف المستخدمين الذين غيّروا صحتهم النفسية من خلال نهجنا الشامل. اختبر الفرق الذي يمكن أن يحدثه العلاج الشخصي والإرشاد المتخصص والدعم المستمر في رفاهيتك العاطفية والنفسية.",
    mental_feature_card_desc:
      "الوصول إلى {feature} لتعزيز تجربة الصحة النفسية والدعم الشامل.",
    mental_cta_title: "ابدأ رحلتك نحو الصحة النفسية اليوم",
    mental_cta_desc:
      "احصل على علاج شخصي وأدوات الصحة النفسية لتحسين رفاهيتك العاطفية والنفسية.",
    mental_pricing_basic: "أساسي",
    mental_pricing_month: "شهريًا",
    mental_pricing_basic_feature1: "جلسات علاجية أساسية",
    mental_pricing_basic_feature2: "الوصول إلى مكتبة التأمل",
    mental_pricing_basic_feature3: "الوصول إلى تطبيق الجوال",
    mental_pricing_basic_feature4: "تقارير تقدم أسبوعية",
    mental_pricing_basic_btn: "اختر الأساسي",
    mental_pricing_popular: "الأكثر شيوعًا",
    mental_pricing_premium: "مميز",
    mental_pricing_premium_feature1: "كل ما في الأساسي",
    mental_pricing_premium_feature2: "جلسات علاجية مباشرة",
    mental_pricing_premium_feature3: "خطط علاجية شخصية",
    mental_pricing_premium_feature4: "استشارة خبراء",
    mental_pricing_premium_feature5: "دعم أولوية",
    mental_pricing_premium_btn: "اختر المميز",
    mental_pricing_pro: "احترافي",
    mental_pricing_pro_feature1: "كل ما في المميز",
    mental_pricing_pro_feature2: "جلسات علاج فردية",
    mental_pricing_pro_feature3: "خطط علاجية مخصصة",
    mental_pricing_pro_feature4: "الوصول إلى رحلات نهاية الأسبوع",
    mental_pricing_pro_feature5: "الوصول إلى مجتمع VIP",
    mental_pricing_pro_btn: "اختر الاحترافي",

    // Diet & Nutrition Page
    diet_hero_title1: "اكتشف",
    diet_hero_title2: "النظام الغذائي والتغذية",
    diet_hero_desc:
      "حوّل صحتك مع إرشادات تغذية شخصية وعادات أكل مستدامة لصحة مثالية.",
    diet_hero_btn: "ابدأ رحلتك",
    diet_video_not_supported: "متصفحك لا يدعم فيديو الخلفية.",
    diet_benefits_title1: "الفوائد",
    diet_benefits_title2: "الرئيسية",
    diet_benefits_desc:
      "حوّل حياتك مع الفوائد المثبتة للتغذية السليمة والعادات الصحية",
    diet_benefit_energy_title: "تحسين الطاقة",
    diet_benefit_energy_desc:
      "عزز مستويات طاقتك اليومية وحيويتك من خلال تغذية متوازنة وتوقيت وجبات مناسب لجسمك.",
    diet_benefit_weight_title: "وزن صحي",
    diet_benefit_weight_desc:
      "حقق وزنًا صحيًا وحافظ عليه من خلال استراتيجيات تغذية مستدامة تتوافق مع عملية الأيض الطبيعية لجسمك.",
    diet_benefit_transform_title: "حوّل صحتك",
    diet_benefit_transform_desc:
      "اختبر الفوائد العميقة للتغذية السليمة التي تعزز صحتك الجسدية وصفاءك الذهني ورفاهيتك العامة.",
    diet_benefit_digestion_title: "تحسين الهضم",
    diet_benefit_digestion_desc:
      "حسّن صحة جهازك الهضمي مع خطط تغذية تدعم صحة الأمعاء وتعزز امتصاص العناصر الغذائية.",
    diet_benefit_metabolism_title: "تعزيز الأيض",
    diet_benefit_metabolism_desc:
      "عزز وظيفة الأيض لديك من خلال استراتيجيات تغذية مستهدفة لتحسين حرق الدهون الطبيعي في جسمك.",
    diet_programs_title1: "البرامج التي",
    diet_programs_title2: "نقدمها",
    diet_program_personalized_title: "تخطيط وجبات شخصي",
    diet_program_personalized_desc: "خطط تغذية مخصصة لأهدافك ونمط حياتك",
    diet_program_weight_title: "برامج إدارة الوزن",
    diet_program_weight_desc: "طرق مستدامة لتحقيق وزن صحي والحفاظ عليه",
    diet_program_sports_title: "تدريب تغذية رياضية",
    diet_program_sports_desc: "حقق الأداء الأمثل باستراتيجيات تغذية مستهدفة",
    diet_program_medical_title: "علاج تغذية طبي",
    diet_program_medical_desc: "دعم تغذية متخصص للحالات الصحية",
    diet_program_detox_title: "برامج تنظيف الجسم",
    diet_program_detox_desc: "طرق تنظيف لطيفة لصحة أفضل",
    diet_program_mindful_title: "ورش الأكل الواعي",
    diet_program_mindful_desc: "طور علاقة صحية مع الطعام والعادات الغذائية",
    diet_how_title1: "كيف",
    diet_how_title2: "تعمل",
    diet_how_desc: "ابدأ رحلتك الغذائية في خطوات بسيطة",
    diet_how_step1: "أكمل تقييمًا غذائيًا شاملاً",
    diet_how_step2: "استلم خطة وجباتك الشخصية",
    diet_how_step3: "احصل على إرشادات ووصفات غذائية",
    diet_how_step4: "تتبع تقدمك مع دعم الخبراء",
    diet_how_step5: "عدل خطتك بناءً على النتائج والملاحظات",
    diet_how_step_label: "الخطوة {number}",
    diet_features_title1: "الميزات",
    diet_features_title2: "المتضمنة",
    diet_features_desc: "كل ما تحتاجه لتجربة تغذية متكاملة",
    diet_features_p1:
      "منصتنا الشاملة توفر لك جميع الأدوات والموارد اللازمة لتحقيق أهدافك الصحية. من خطط الوجبات الشخصية إلى الإرشاد الخبير، كل شيء متوفر.",
    diet_features_p2:
      "سواء كنت ترغب في فقدان الوزن أو بناء العضلات أو تحسين صحتك العامة، ميزاتنا مصممة لدعمك في كل خطوة، مما يجعل الأكل الصحي متاحًا وممتعًا.",
    diet_features_p3:
      "منصتنا تدمج أحدث علوم التغذية مع تخطيط وجبات عملي، لتضمن لك أفضل الاستراتيجيات لأهدافك الصحية. مع تتبع التقدم الفوري والتوصيات التكيفية، تصبح رحلتك الغذائية أكثر فعالية واستدامة.",
    diet_features_p4:
      "انضم إلى آلاف المستخدمين الذين غيروا صحتهم من خلال نهجنا الشامل للتغذية. اختبر الفرق الذي تصنعه خطط الوجبات الشخصية والإرشاد الخبير والدعم المستمر في رحلتك الصحية.",
    diet_feature_mealplans: "خطط وجبات شخصية",
    diet_feature_tracking: "أدوات تتبع التغذية",
    diet_feature_recipes: "الوصول إلى قاعدة بيانات الوصفات",
    diet_feature_consult: "دعم استشاري خبير",
    diet_feature_card_desc: "الوصول إلى {feature} لتجربة تغذية أفضل ودعم شامل.",
    diet_cta_title: "ابدأ رحلتك الغذائية اليوم",
    diet_cta_desc: "احصل على خطط تغذية شخصية وأدوات صحة لتحسين صحتك وحيويتك.",
    diet_pricing_basic: "أساسي",
    diet_pricing_basic_btn: "اختر الأساسي",
    diet_pricing_premium: "مميز",
    diet_pricing_premium_btn: "اختر المميز",
    diet_pricing_pro: "محترف",
    diet_pricing_pro_btn: "اختر المحترف",
    diet_pricing_popular: "الأكثر شيوعًا",
    diet_pricing_basic_feature1: "تخطيط وجبات أساسي",
    diet_pricing_basic_feature2: "الوصول إلى قاعدة بيانات الوصفات",
    diet_pricing_basic_feature3: "الوصول إلى التطبيق",
    diet_pricing_basic_feature4: "تقارير تقدم أسبوعية",
    diet_pricing_premium_feature1: "كل ما في الأساسي",
    diet_pricing_premium_feature2: "خطط وجبات شخصية",
    diet_pricing_premium_feature3: "استشارة خبراء",
    diet_pricing_premium_feature4: "أدوات تتبع التغذية",
    diet_pricing_premium_feature5: "دعم أولوية",
    diet_pricing_pro_feature1: "كل ما في المميز",
    diet_pricing_pro_feature2: "جلسات تدريب فردية",
    diet_pricing_pro_feature3: "خطط وجبات مخصصة",
    diet_pricing_pro_feature4: "الوصول إلى ورش نهاية الأسبوع",
    diet_pricing_pro_feature5: "الوصول إلى مجتمع VIP",
    // Yoga & Meditation Page
    yoga_hero_title1: "اكتشف",
    yoga_hero_title2: "اليوغا والتأمل",
    yoga_hero_desc:
      "اكتشف السلام والمرونة والوعي الذهني مع جلسات اليوغا والتأمل الموجهة لجميع المستويات.",
    yoga_hero_btn: "ابدأ رحلتك",
    yoga_video_not_supported: "متصفحك لا يدعم فيديو الخلفية.",
    yoga_benefits_title1: "الفوائد",
    yoga_benefits_title2: "الرئيسية",
    yoga_benefits_desc:
      "حوّل حياتك مع الفوائد المثبتة لممارسة اليوغا والتأمل بانتظام",
    yoga_benefit_flex_title: "تحسين المرونة",
    yoga_benefit_flex_desc:
      "عزز نطاق حركتك ووضعيتك من خلال تمارين اليوغا المصممة لجميع مستويات اللياقة البدنية.",
    yoga_benefit_anxiety_title: "تقليل القلق",
    yoga_benefit_anxiety_desc:
      "اعثر على السلام الداخلي والهدوء من خلال تقنيات التأمل الموجهة التي تساعد في إدارة التوتر وتعزيز الصحة النفسية.",
    yoga_benefit_transform_title: "حوّل حياتك",
    yoga_benefit_transform_desc:
      "اختبر الفوائد العميقة لليوغا والتأمل التي ستعزز صحتك الجسدية والعقلية والروحية.",
    yoga_benefit_sleep_title: "نوم أفضل",
    yoga_benefit_sleep_desc:
      "حسّن جودة نومك مع تقنيات الاسترخاء وتمارين التنفس التي تهيئ عقلك وجسمك لنوم مريح.",
    yoga_benefit_energy_title: "تعزيز الطاقة",
    yoga_benefit_energy_desc:
      "زد من حيويتك وإنتاجيتك من خلال تمارين اليوغا النشطة وممارسات الوعي الذهني التي تنشط جسمك.",
    yoga_programs_title1: "البرامج التي",
    yoga_programs_title2: "نقدمها",
    yoga_program_morning_title: "تدفق يوغا الصباح",
    yoga_program_morning_desc: "ابدأ يومك بوضعيات نشطة وتنفس واعٍ",
    yoga_program_guided_title: "سلسلة التأمل الموجه",
    yoga_program_guided_desc:
      "اعثر على السلام الداخلي من خلال ممارسات التأمل المنظمة",
    yoga_program_power_title: "جلسات يوغا القوة",
    yoga_program_power_desc:
      "ابنِ القوة والقدرة على التحمل من خلال التسلسلات الديناميكية",
    yoga_program_chair_title: "يوغا الكرسي للمبتدئين",
    yoga_program_chair_desc:
      "يوغا لطيفة متاحة للجميع بغض النظر عن القدرة الحركية",
    yoga_program_retreats_title: "عطلات الاسترخاء العميق",
    yoga_program_retreats_desc: "انغمس في تجارب العافية الكاملة",
    yoga_program_breathing_title: "تمارين تقنيات التنفس",
    yoga_program_breathing_desc: "أتقن فن التنفس الواعي لصحة أفضل",
    yoga_how_title1: "كيف",
    yoga_how_title2: "تعمل",
    yoga_how_desc: "ابدأ رحلتك الصحية في خطوات بسيطة",
    yoga_how_step1: "اختر البرنامج المناسب لنمط حياتك",
    yoga_how_step2: "سجل واختر الوقت المفضل لديك",
    yoga_how_step3: "ادخل الجلسات عبر الإنترنت أو التطبيق",
    yoga_how_step4: "اتبع روتينك مع إرشاد الخبراء",
    yoga_how_step5: "تتبع التقدم وعدل حسب الحاجة",
    yoga_how_step_label: "الخطوة {number}",
    yoga_features_title1: "الميزات",
    yoga_features_title2: "المتضمنة",
    yoga_features_desc: "كل ما تحتاجه لتجربة عافية متكاملة",
    yoga_features_p1:
      "منصتنا الشاملة توفر لك جميع الأدوات والموارد اللازمة لتحقيق أهدافك الصحية والبدنية. من الإرشاد الشخصي إلى الدعم الخبير، كل شيء متوفر.",
    yoga_features_p2:
      "سواء كنت مبتدئًا أو ممارسًا ذا خبرة، ميزاتنا مصممة لدعمك في كل خطوة، مما يجعل العافية متاحة وممتعة للجميع.",
    yoga_features_p3:
      "منصتنا تدمج أحدث التقنيات مع الممارسات التقليدية، لتضمن لك أفضل ما في العالمين. مع تتبع التقدم الفوري والتوصيات التكيفية، تصبح رحلتك الصحية أكثر فعالية وجاذبية.",
    yoga_features_p4:
      "انضم إلى آلاف المستخدمين الذين غيروا حياتهم من خلال نهجنا الشامل للعافية. اختبر الفرق الذي تصنعه الرعاية الشخصية والإرشاد الخبير والدعم المجتمعي في رحلتك الصحية.",
    yoga_feature_app: "الوصول إلى تطبيقنا",
    yoga_feature_routines: "روتينات يومية قابلة للتخصيص",
    yoga_feature_ondemand: "جلسات فيديو وصوت عند الطلب",
    yoga_feature_guides: "أدلة عافية قابلة للطباعة",
    yoga_feature_card_desc: "الوصول إلى {feature} لتجربة عافية أفضل ودعم شامل.",
    yoga_cta_title: "ابدأ رحلتك الصحية اليوم",
    yoga_cta_desc: "احصل على برامج مخصصة وأدوات عافية لتحسين عقلك وجسمك.",
    yoga_pricing_basic: "أساسي",
    yoga_pricing_basic_btn: "اختر الأساسي",
    yoga_pricing_basic_feature1: "الوصول إلى جلسات اليوغا الأساسية",
    yoga_pricing_basic_feature2: "مكتبة التأملات الموجهة",
    yoga_pricing_basic_feature3: "الوصول إلى التطبيق",
    yoga_pricing_basic_feature4: "تقارير التقدم الأسبوعية",
    yoga_pricing_premium: "مميز",
    yoga_pricing_premium_feature1: "كل ما في الأساسي",
    yoga_pricing_premium_feature2: "دروس جماعية مباشرة",
    yoga_pricing_premium_feature3: "روتينات مخصصة",
    yoga_pricing_premium_feature4: "استشارة خبراء",
    yoga_pricing_premium_feature5: "دعم أولوية",
    yoga_pricing_pro: "محترف",
    yoga_pricing_pro_feature1: "كل ما في المميز",
    yoga_pricing_pro_feature2: "جلسات تدريب فردية",
    yoga_pricing_pro_feature3: "خطط وجبات مخصصة",
    yoga_pricing_pro_feature4: "الوصول إلى عطلات نهاية الأسبوع",
    yoga_pricing_pro_feature5: "الوصول إلى مجتمع VIP",
    yoga_pricing_popular: "الأكثر شيوعًا",
    yoga_pricing_premium_btn: "اختر المميز",
    yoga_pricing_pro_btn: "اختر المحترف",
    home2_expert4_name: "ديفيد طومسون",
    home2_expert4_title: "مدرب يوغا",
    home2_expert4_desc: "مدرب يوغا معتمد بخبرة في التأمل واليقظة الذهنية.",
    // home2.jsx translations (Arabic placeholders)
    // aboutus.jsx translations
    aboutus_video_not_supported: "متصفحك لا يدعم فيديو HTML5.",
    aboutus_hero_title1: "معلومات ",
    aboutus_hero_title2: "عنا",
    aboutus_hero_desc:
      "مكرسون لتحويل الحياة من خلال حلول الصحة والعافية الشاملة. نؤمن أن الجميع يستحق رعاية شخصية تغذي العقل والجسم والروح.",
    aboutus_growth_title: "نمونا عبر السنوات",
    aboutus_growth_desc:
      "رحلة من النمو المستمر والابتكار والالتزام بتحويل الحياة من خلال العافية.",
    aboutus_growth_2016_title: "التأسيس",
    aboutus_growth_2016_desc:
      "بدأنا برؤية لتحويل العافية من خلال الرعاية الشخصية والممارسات المبنية على الأدلة. أنشأنا أول مركز عافية مع فريق من المحترفين المعتمدين.",
    aboutus_growth_2018_title: "أول 1000 عميل",
    aboutus_growth_2018_desc:
      "وصلنا إلى أول 1000 عميل راضٍ، مما يثبت فعالية نهجنا الشمولي. قمنا بتوسيع خدماتنا لتشمل التغذية واللياقة والصحة النفسية.",
    aboutus_growth_2020_title: "التحول الرقمي",
    aboutus_growth_2020_desc:
      "أطلقنا منصات عافية رقمية شاملة للوصول إلى المزيد من الناس عالميًا. قدمنا الاستشارات الافتراضية وتتبع العافية الرقمي وتطبيق الهاتف للرعاية الشخصية.",
    aboutus_growth_2022_title: "أكثر من 10,000 حياة متغيرة",
    aboutus_growth_2022_desc:
      "احتفلنا بتحويل أكثر من 10,000 حياة من خلال برامج العافية الشاملة. تم الاعتراف بنا كوجهة رائدة للعافية مع العديد من الجوائز والشهادات.",
    aboutus_growth_2024_title: "ريادة الصناعة",
    aboutus_growth_2024_desc:
      "تأسسنا كوجهة رائدة للعافية مع أحدث التقنيات وفريق خبراء وبرامج شاملة. نواصل الابتكار وتوسيع تأثيرنا عالميًا.",
    aboutus_mission_img_alt: "مهمتنا",
    aboutus_mission_title: "مهمتنا ورؤيتنا",
    aboutus_mission_desc:
      "نلتزم بتمكين الأفراد من تحقيق رفاهيتهم المثلى من خلال الممارسات المبنية على الأدلة والرعاية الشخصية والمجتمع الداعم.",
    aboutus_mission_card_title: "مهمتنا",
    aboutus_mission_card_desc:
      "تقديم حلول عافية شاملة ومتاحة للجميع تغير الحياة وتخلق تغييرًا إيجابيًا دائمًا في مجتمعنا.",
    aboutus_vision_card_title: "رؤيتنا",
    aboutus_vision_card_desc:
      "أن نكون الوجهة الرائدة للعافية حيث يكتشف الأفراد طريقهم نحو الصحة الشاملة والتحول المستدام في نمط الحياة.",
    aboutus_values_title: "قيمنا",
    aboutus_values_img_alt: "قيمنا",
    aboutus_value_innovation_title: "الابتكار",
    aboutus_value_innovation_desc:
      "نحتضن أحدث تقنيات العافية والممارسات المبنية على الأدلة، ونبحث دائمًا عن طرق أفضل لتقديم حلول صحية شخصية.",
    aboutus_value_integrity_title: "النزاهة",
    aboutus_value_integrity_desc:
      "نتصرف بأمانة وشفافية وأعلى المعايير الأخلاقية في جميع ممارساتنا وعلاقاتنا مع العملاء.",
    aboutus_value_flexibility_title: "المرونة",
    aboutus_value_flexibility_desc:
      "نتكيف بسرعة مع الاحتياجات الفردية والأهداف الصحية المتغيرة، ونبقى مرنين لتلبية متطلبات العافية المتطورة وتفضيلات نمط الحياة.",
    aboutus_value_excellence_title: "التميز",
    aboutus_value_excellence_desc:
      "نسعى لتحقيق أعلى جودة في كل ما نقوم به، ونقدم نتائج عافية متميزة وتجارب تحويلية لعملائنا.",
    // About Us - What We Think
    aboutus_think_title: "ما نعتقده",
    aboutus_think_desc:
      "في Health5، نؤمن أن العافية الحقيقية هي رحلة وليست وجهة. فلسفتنا متجذرة في فهم أن كل فرد فريد من نوعه، وكذلك احتياجاته الصحية.",
    aboutus_think_holistic_title: "نهج شامل",
    aboutus_think_holistic_desc:
      "نحن نعالج العقل والجسم والروح، لضمان مسار شامل نحو الرفاهية.",
    aboutus_think_personalized_title: "رعاية مخصصة",
    aboutus_think_personalized_desc:
      "حلولنا مصممة خصيصًا لنمط حياتك وتفضيلاتك وأهدافك الفريدة.",
    aboutus_think_evidence_title: "قائم على الأدلة",
    aboutus_think_evidence_desc:
      "نحن نجمع بين أحدث الأبحاث العلمية والحكمة التقليدية لتحقيق أفضل النتائج.",
    aboutus_think_img_alt: "صورة ما نعتقده",

    // About Us - What Makes Us Unique
    aboutus_unique_title: "ما الذي يجعلنا مميزين",
    aboutus_unique_holistic_title: "شامل حقًا",
    aboutus_unique_holistic_desc:
      "نحن ندمج التغذية واللياقة البدنية والصحة النفسية وتدريب أسلوب الحياة من أجل تحول كامل.",
    aboutus_unique_ai_title: "تخصيص مدعوم بالذكاء الاصطناعي",
    aboutus_unique_ai_desc:
      "يقدم الذكاء الاصطناعي المتقدم لدينا رؤى وخطط تتكيف مع تطورك.",
    aboutus_unique_expert_title: "إرشاد الخبراء",
    aboutus_unique_expert_desc:
      "يدعمك فريقنا من المحترفين المعتمدين في كل خطوة.",
    home2_ceo_title: "تعرف على المدير التنفيذي",
    home2_ceo_mission:
      "يقود مهمتنا لتحويل الحياة من خلال التميز في العافية واللياقة البدنية.",
    home2_ceo_experience:
      "بخبرة تزيد عن 15 عامًا في مجال الصحة والعافية، كرس المدير التنفيذي حياته لمساعدة الناس على تحقيق أهدافهم الصحية والعيش بشكل أكثر صحة وسعادة.",
    home2_ceo_quote:
      "نؤمن أن العافية الحقيقية تأتي من التوازن بين اللياقة البدنية والصحة النفسية والتغذية. فريق خبرائنا المعتمدين هنا لإرشادك في كل خطوة.",
    home2_ceo_name: "- جون سميث، المدير التنفيذي",
    home2_event_instructor: "المدرب",
    home2_service1_title: "تدريب شخصي",
    home2_service1_desc: "جلسات مخصصة لتحقيق أهداف لياقتك البدنية.",
    home2_service2_title: "إرشادات التغذية",
    home2_service2_desc: "نصائح الخبراء لصحة أفضل.",
    home2_service3_title: "تمارين جماعية",
    home2_service3_desc: "دروس جماعية ممتعة وحيوية لجميع المستويات.",
    home2_expert1_name: "برية شارما",
    home2_expert1_title: "مدربة معتمدة",
    home2_expert1_desc:
      "مدربة معتمدة بخبرة تزيد عن 8 سنوات في تدريب القوة واللياقة القلبية.",
    home2_expert2_name: "د. أرجون راو",
    home2_expert2_title: "أخصائي تغذية",
    home2_expert2_desc:
      "أخصائي تغذية مسجل متخصص في تغذية الرياضة وإدارة الوزن.",
    home2_expert3_name: "لينا غوميز",
    home2_expert3_title: "مدربة يوغا",
    home2_expert3_desc: "مدربة يوغا معتمدة ومتخصصة في التأمل واليقظة الذهنية.",
    home2_faq1_q: "كيف يمكنني التسجيل في برنامج؟",
    home2_faq1_a: "اضغط على 'ابدأ' واختر البرنامج المفضل لديك.",
    home2_faq2_q: "هل المدربون معتمدون؟",
    home2_faq2_a: "نعم، جميع خبرائنا معتمدون.",
    home2_faq3_q: "هل يمكنني الإلغاء في أي وقت؟",
    home2_faq3_a: "بالتأكيد! يمكنك التحكم بعضويتك.",
    home2_faq4_q: "هل تقدمون دروس تجريبية؟",
    home2_faq4_a: "نعم، نقدم دروس تجريبية مجانية.",
    home2_faq5_q: "هل يمكنني تغيير البرنامج؟",
    home2_faq5_a: "نعم، تواصل مع الدعم أو استخدم لوحة التحكم.",
    home2_hero_title1: "اكتشف إمكانياتك و",
    home2_hero_title2a: "حقق",
    home2_hero_title2b: "العافية",
    home2_hero_desc:
      "اختبر مزيجًا مثاليًا من اللياقة والتغذية واليقظة الذهنية. برامجنا بقيادة خبراء مصممة لمساعدتك في تحقيق أهدافك الصحية مع إرشاد ودعم شخصي.",
    home2_hero_btn: "ابدأ رحلتك",
    home2_experts_title: "فريق محترف",
    home2_experts_desc:
      "خبراؤنا المكرسون ملتزمون بمساعدتك في تحقيق أهدافك الصحية والبدنية.",
    home2_why_title: "لماذا تختارنا",
    home2_why_headline: "تمكين نجاحك بخبرة العافية",
    home2_why_desc:
      "خبراؤنا المعتمدون، الخطط الشخصية، والمجتمع الداعم يساعدونك في تحقيق أهدافك الصحية بثقة ورعاية.",
    home2_why_subtitle: "نهجنا الفريد",
    home2_why_subdesc:
      "نؤمن بنهج شامل للعافية يجمع بين الإرشاد الخبير، البرامج المبتكرة، والمجتمع الداعم. خططنا الشخصية وأنظمة الدعم المثبتة تضمن لك النتائج التي تستحقها.",
    home2_why_bar1_label: "خطط شخصية",
    home2_why_bar2_label: "المجتمع والابتكار",
    home2_why_bar3_label: "الدعم والنتائج",
    home2_events_title: "الفعاليات والدروس القادمة",
    home2_events_join_btn: "انضم الآن",
    home2_register_title: "سجل في الدرس",
    home2_register_fullname: "الاسم الكامل *",
    home2_register_fullname_ph: "أدخل اسمك الكامل",
    home2_register_email: "البريد الإلكتروني *",
    home2_register_email_ph: "أدخل بريدك الإلكتروني",
    home2_register_phone: "رقم الهاتف *",
    home2_register_phone_ph: "أدخل رقم هاتفك",
    home2_register_experience: "مستوى الخبرة",
    home2_register_experience_ph: "اختر مستوى خبرتك",
    home2_register_experience_beginner: "مبتدئ",
    home2_register_experience_intermediate: "متوسط",
    home2_register_experience_advanced: "متقدم",
    home2_register_special: "متطلبات خاصة",
    home2_register_special_ph: "أي متطلبات أو ملاحظات خاصة...",
    home2_register_btn: "سجل الآن",
    home2_register_terms:
      "بتسجيلك، أنت توافق على الشروط والأحكام. سنتواصل معك قريبًا لتأكيد التسجيل.",
    home2_success_title: "تم التسجيل بنجاح!",
    home2_success_desc:
      "شكرًا لتسجيلك في الدرس. أرسلنا رسالة تأكيد بجميع التفاصيل.",
    home2_success_close: "إغلاق",
    home2_insights_title1: "العافية",
    home2_insights_title2: "رؤى",
    home2_insights_desc:
      "اكتشف أحدث الاتجاهات والأبحاث والرؤى من الخبراء في الصحة والعافية. تحليلاتنا الشاملة تساعدك في اتخاذ قرارات مستنيرة حول رحلتك الصحية.",
    home2_insights_card1_title: "نهج قائم على الأدلة",
    home2_insights_card1_desc:
      "جميع توصياتنا مدعومة بأحدث الأبحاث العلمية والأساليب المثبتة.",
    home2_insights_card2_title: "استراتيجيات شخصية",
    home2_insights_card2_desc:
      "استراتيجيات عافية مصممة خصيصًا لتناسب نمط حياتك وأهدافك.",
    home2_insights_card3_title: "دعم المجتمع",
    home2_insights_card3_desc:
      "انضم إلى مجتمع داعم من أشخاص يشاركونك رحلة العافية.",
    home2_insights_btn: "استكشف الرؤى",
    home: "الصفحة الرئيسية",
    home1: "الصفحة 1",
    home2: "الصفحة 2",
    about: "معلومات عنا",
    services: "الخدمات",
    viewAllServices: "عرض جميع الخدمات",
    yoga: "اليوغا والتأمل",
    diet: "النظام الغذائي والتغذية",
    mental: "الصحة النفسية",
    fitness: "برامج اللياقة البدنية",
    sleep: "علاج النوم",
    lifestyle: "تدريب أسلوب الحياة",
    blog: "مدونة",
    contact: "اتصل بنا",
    userProfile: "ملف المستخدم",
    signedIn: "تم تسجيل الدخول",
    logout: "تسجيل الخروج",
    selectLanguage: "اختر اللغة",
    // home1.jsx translations
    home_hero_title: "رحلة العافية الخاصة بك",
    home_hero_desc:
      "اكتشف الصحة الشاملة، والإرشاد من الخبراء، ومجتمع داعم. تبدأ رحلتك نحو صحة وسعادة أفضل هنا.",
    home_hero_btn: "ابدأ رحلتك",
    who_we_are_img_alt: "من نحن",
    who_we_are_title: "من نحن",
    who_we_are_desc:
      "نحن فريق مكرس من المتخصصين في العافية ملتزمون بتحويل الحياة من خلال حلول الصحة والعافية الشاملة. مهمتنا هي تمكين الأفراد من تحقيق رفاهيتهم المثلى من خلال الرعاية الشخصية، والإرشاد الخبير، والممارسات المبنية على الأدلة.",
    who_we_are_expert_team_title: "فريق خبراء",
    who_we_are_expert_team_desc: "محترفون معتمدون لديهم سنوات من الخبرة",
    who_we_are_personalized_care_title: "رعاية شخصية",
    who_we_are_personalized_care_desc:
      "خطط عافية مصممة خصيصًا لاحتياجات الأفراد",
    who_we_are_holistic_approach_title: "نهج شامل",
    who_we_are_holistic_approach_desc: "تكامل صحة العقل والجسم والروح",
    who_we_are_proven_results_title: "نتائج مثبتة",
    who_we_are_proven_results_desc: "طرق قائمة على الأدلة بنتائج قابلة للقياس",
    who_we_are_btn: "تعرف أكثر عنا →",
    // Services Overview
    services_overview_title: "أفضل خدماتنا",
    service_yoga_title: "اليوغا والتأمل",
    service_yoga_tagline: "وازن بين العقل والجسم مع جلسات موجهة.",
    service_yoga_details:
      "انضم إلى دروس اليوغا والتأمل بقيادة خبراء لتحسين المرونة وتقليل التوتر وتعزيز رفاهيتك العامة. مناسب لجميع المستويات.",
    service_nutrition_title: "النظام الغذائي والتغذية",
    service_nutrition_tagline: "خطط تغذية شخصية لأهدافك.",
    service_nutrition_details:
      "احصل على خطط وجبات مخصصة ونصائح تغذية من اختصاصيي تغذية معتمدين. حقق أهدافك الصحية بإرشادات علمية.",
    service_fitness_title: "برامج اللياقة البدنية",
    service_fitness_tagline: "برامج لياقة حديثة لجميع المستويات.",
    service_fitness_details:
      "احصل على مجموعة متنوعة من برامج اللياقة البدنية، من تدريب القوة إلى الكارديو، مصممة لتحفيزك والحفاظ على لياقتك.",
    service_sleep_title: "علاج النوم",
    service_sleep_tagline: "حسّن جودة نومك بمساعدة الخبراء.",
    service_sleep_details:
      "تغلب على مشاكل النوم مع جلسات العلاج ونصائح الخبراء لنوم مريح ومنعش كل ليلة.",
    // --- services.jsx translations ---
    services_video_not_supported: "متصفحك لا يدعم فيديو HTML5.",
    services_hero_title: "استكشف خدماتنا",
    services_hero_desc:
      "حلول عافية شاملة مصممة لتحويل حياتك. من برامج اللياقة الشخصية إلى الإرشاد الصحي الشامل، نقدم لك كل ما تحتاجه في رحلتك الصحية.",
    services_hero_explore_btn: "استكشف الخدمات",
    services_hero_getstarted_btn: "ابدأ الآن",
    services_ourservices_title: "خدماتنا",
    services_ourservices_desc:
      "اكتشف مجموعتنا الشاملة من خدمات العافية المصممة لدعم رحلتك الصحية والبدنية.",
    services_yoga_title: "اليوغا والتأمل",
    services_yoga_desc:
      "حوّل عقلك وجسمك من خلال برامج اليوغا والتأمل الشاملة لدينا. اختبر الاسترخاء العميق، وزيادة المرونة، وصفاء الذهن مع جلسات موجهة من خبراء لتقليل التوتر وتعزيز رفاهيتك.",
    services_fitness_title: "برامج اللياقة البدنية",
    services_fitness_desc:
      "غيّر رحلتك الرياضية مع برامج التدريب الشخصية. ينشئ مدربونا المعتمدون خطط تمارين مخصصة تتكيف مع تقدمك، وتجمع بين تمارين القوة والكارديو والمرونة لتحقيق أهدافك بسرعة وفعالية.",
    services_nutrition_title: "إرشاد التغذية",
    services_nutrition_desc:
      "اكتشف قوة التغذية السليمة مع إرشاد خبرائنا. يطور اختصاصيو التغذية لدينا خطط وجبات شخصية تتماشى مع أهدافك الصحية وتفضيلاتك ونمط حياتك، لضمان عادات غذائية مستدامة تغذي جسمك وعقلك.",
    services_yoga2_title: "اليوغا والتأمل",
    services_yoga2_desc:
      "ابدأ رحلة تحول ذاتي من خلال برامج اليوغا والتأمل الشاملة لدينا. تعلم تقنيات قديمة مع أساليب حديثة لتحقيق السلام الداخلي والتوازن العاطفي والحيوية الجسدية في عالم اليوم السريع.",
    services_personal_title: "تدريب شخصي",
    services_personal_desc:
      "اختبر التميز في اللياقة مع جلسات تدريب فردية. يقدم مدربونا الخبراء التحفيز والمساءلة والتقنيات العلمية لمساعدتك على بناء القوة والقدرة على التحمل والثقة في بيئة داعمة.",
    services_nutrition2_title: "إرشاد التغذية",
    services_nutrition2_desc:
      "أتقن فن الأكل الصحي مع برامج التغذية الشاملة لدينا. من تخطيط الوجبات وإرشادات التسوق إلى تقنيات الطهي والتعليم الغذائي، نمنحك القوة لاتخاذ خيارات غذائية تدعم أهدافك الصحية والعافية.",
    services_mental_title: "الصحة النفسية",
    services_mental_desc:
      "دعم شامل للصحة النفسية يشمل العلاج، وممارسات اليقظة، وتقنيات إدارة التوتر. تساعدك برامج الصحة النفسية لدينا على بناء المرونة والرفاهية العاطفية.",
    services_sleep_title: "علاج النوم",
    services_sleep_desc:
      "برامج علاج النوم المتخصصة لمساعدتك على تحقيق جودة نوم أفضل والتغلب على الأرق. يقدم خبراؤنا حلولاً شخصية لليالي هادئة وصحة محسنة.",
    services_wellness_title: "تدريب العافية",
    services_wellness_desc:
      "تدريب عافية شامل لمساعدتك على تحقيق التوازن في جميع جوانب حياتك - الجسدية والنفسية والعاطفية.",
    services_mental2_title: "الصحة النفسية",
    services_mental2_desc:
      "دعم شامل للصحة النفسية يشمل العلاج، وممارسات اليقظة، وتقنيات إدارة التوتر. تساعدك برامج الصحة النفسية لدينا على بناء المرونة والرفاهية العاطفية.",
    services_assessments_title: "تقييمات صحية",
    services_assessments_desc:
      "تقييمات صحية شاملة وتتبع التقدم لمراقبة رحلتك الصحية وإنجازاتك.",
    services_lifestyle_title: "تدريب أسلوب الحياة",
    services_lifestyle_desc:
      "تدريب أسلوب حياة شخصي لمساعدتك على إنشاء عادات وروتينات مستدامة. يوجهك مدربونا خلال تغييرات إيجابية طويلة الأمد في الصحة والعافية.",
    services_symptom_title: "ما هي الأعراض الحالية لديك؟",
    services_symptom_desc: "أخبرنا عن أعراضك وسنرشدك إلى أنسب خدمات العافية.",
    services_symptom_insomnia_title: "الأرق",
    services_symptom_insomnia_desc: "صعوبة في النوم أو البقاء نائمًا",
    services_symptom_stress_title: "التوتر المزمن",
    services_symptom_stress_desc: "قلق وتوتر مستمر",
    services_symptom_fatigue_title: "انخفاض الطاقة",
    services_symptom_fatigue_desc: "الشعور بالتعب وعدم التحفيز",
    services_symptom_weight_title: "مشاكل الوزن",
    services_symptom_weight_desc: "صعوبة في إدارة الوزن",
    services_symptom_backpain_title: "آلام الظهر",
    services_symptom_backpain_desc: "آلام مزمنة في الظهر والرقبة",
    services_symptom_digestive_title: "مشاكل الهضم",
    services_symptom_digestive_desc: "انتفاخ، عسر هضم، مشاكل في الأمعاء",
    services_symptom_mood_title: "تغيرات المزاج",
    services_symptom_mood_desc: "تغيرات مزاجية وعدم استقرار عاطفي",
    services_symptom_headaches_title: "الصداع المتكرر",
    services_symptom_headaches_desc: "صداع توتري أو نصفي منتظم",
    services_symptom_find_btn: "ابحث عن خدمات لأعراضي",
    services_recommended_title: "الخدمات الموصى بها لأعراضك",
    services_recommended_desc:
      "استنادًا إلى الأعراض الخاصة بك، تم تصميم هذه الخدمات خصيصًا لمساعدتك في إيجاد الراحة وتحسين صحتك.",
    services_back_to_symptoms: "← العودة إلى الأعراض",
    services_view_details_btn: "عرض تفاصيل الخدمة",
    services_goal_flexibility_title: "مرونة محسنة",
    services_goal_flexibility_desc:
      "عزز نطاق حركتك ومرونة المفاصل من خلال برامج اليوغا والتمدد المتخصصة لجميع مستويات اللياقة.",
    services_goal_anxiety_title: "تقليل القلق",
    services_goal_anxiety_desc:
      "قلل من مستويات التوتر وحسن صفاء الذهن من خلال ممارسات اليقظة وجلسات التأمل وتقنيات إدارة التوتر.",
    services_goal_posture_title: "وضعية أفضل",
    services_goal_posture_desc:
      "قوِّ عضلاتك الأساسية وحقق محاذاة صحيحة للعمود الفقري من خلال برامج تصحيح الوضعية وجلسات التدريب المتخصصة.",
    services_goal_calm_title: "الهدوء الداخلي",
    services_goal_calm_desc:
      "حقق شعورًا عميقًا بالسلام والتوازن العاطفي من خلال ممارسات العافية الشاملة وبرامج التأمل الموجهة من الخبراء.",
    services_tips_title: "نصائح الصحة والعافية",
    services_tips_desc:
      "استراتيجيات بسيطة وفعالة لتعزيز روتين العافية اليومي وتحسين صحتك العامة.",
    services_tip_hydrated_title: "حافظ على الترطيب",
    services_tip_hydrated_desc:
      "اشرب ما لا يقل عن 8 أكواب من الماء يوميًا للحفاظ على وظائف الجسم المثلى ومستويات الطاقة.",
    services_tip_sleep_title: "نم جيدًا",
    services_tip_sleep_desc:
      "احرص على النوم من 7 إلى 9 ساعات كل ليلة لدعم التعافي وصفاء الذهن.",
    services_tip_move_title: "تحرك يوميًا",
    services_tip_move_desc:
      "أضف 30 دقيقة على الأقل من النشاط البدني إلى روتينك اليومي.",
    services_tip_mindfulness_title: "مارس اليقظة",
    services_tip_mindfulness_desc:
      "خصص 10-15 دقيقة يوميًا للتأمل أو تمارين التنفس العميق.",
    services_tip_eat_title: "تناول وجبات متوازنة",
    services_tip_eat_desc:
      "ركز على الأطعمة الكاملة، البروتينات الخالية من الدهون، والكثير من الفواكه والخضروات.",
    services_cta_title: "هل أنت مستعد لتغيير حياتك؟",
    services_cta_desc:
      "انضم إلى الآلاف الذين حسّنوا بالفعل صحتهم وعافيتهم بإرشاد خبرائنا وبرامجنا المثبتة.",
    services_cta_getstarted_btn: "ابدأ اليوم",
    services_cta_learnmore_btn: "تعرف أكثر",
    services_achieve_title: "ما الذي يمكنك تحقيقه",
    services_achieve_desc:
      "اكتشف نتائج واقعية وملهمة من خلال استخدام خدمات العافية لدينا. حوّل حياتك بنتائج مثبتة وتحسينات مستدامة.",
    // Impact Metrics
    impact_title_1: "استوديو العافية هو",
    impact_title_2: "شريك أكثر موثوقية،",
    impact_title_3: "يستمع إلى احتياجاتك",
    impact_desc:
      "نغمر أنفسنا بعمق في رحلتك الصحية لإنشاء تجربة حديثة وشخصية تعكس هوية وأهداف صحتك. يجمع نهجنا الشامل بين أحدث تقنيات العافية والممارسات الشاملة المجربة، مما يضمن حصول كل فرد على إرشادات مخصصة تلبي احتياجاته الفريدة. من خطط التغذية الشخصية والتدريب الرياضي إلى التدريب الذهني وتقنيات إدارة التوتر.",
    impact_metric_sessions: "جلسات عافية مكتملة برعاية شخصية",
    impact_metric_satisfaction: "معدل رضا العملاء بنتائج مثبتة",
    impact_metric_support: "دعم خبراء متاح لرحلتك الصحية",
    impact_metric_experts: "مدربو عافية وخبراء تغذية معتمدون",
    // Testimonials
    testimonials_title: "ماذا يقول مستخدمونا",
    testimonial_1_quote:
      "لقد غيرت هذه المنصة رحلتي الصحية. الخطط الشخصية ودعم المجتمع لا مثيل لهما!",
    testimonial_1_name: "آفا باتيل",
    testimonial_1_role: "محبة اليوغا",
    testimonial_2_quote:
      "أحب الإرشاد الخبير وبرامج اللياقة السهلة. أشعر بصحة وثقة أكثر من أي وقت مضى!",
    testimonial_2_name: "ليام تشين",
    testimonial_2_role: "عضو لياقة",
    testimonial_3_quote:
      "نصائح التغذية وعلاج النوم أحدثت فرقًا كبيرًا في حياتي اليومية. أوصي بها بشدة!",
    testimonial_3_name: "صوفيا غارسيا",
    testimonial_3_role: "باحثة عن العافية",
    testimonial_prev: "الشهادة السابقة",
    testimonial_next: "الشهادة التالية",
    // CTA
    cta_title: "هل أنت مستعد لتغيير حياتك؟",
    cta_desc:
      "انضم إلى الآلاف الذين بدأوا بالفعل رحلتهم الصحية معنا. احصل على إرشاد شخصي، ودعم خبير، ومجتمع يهتم بنجاحك.",
    cta_btn_start: "ابدأ اليوم",
    cta_btn_learn: "تعرف أكثر",
    cta_img_alt: "رحلة العافية",
  },
  he: {
    "fitness.pricing.mostPopular": "התוכנית הפופולרית ביותר",
    "fitness.pricing.premium": "תוכנית פרימיום",
    "fitness.pricing.premiumPrice": "$29.99",
    "fitness.pricing.premiumFeature1":
      "גישה לכל האימונים ותוכניות האימון בפרימיום",
    "fitness.pricing.premiumFeature2": "אימון אישי ותמיכה",
    "fitness.pricing.premiumFeature3": "גישה בלעדית לשיעורים ואירועים חיים",
    "fitness.pricing.premiumFeature4": "תוכניות תזונה וארוחות מותאמות אישית",
    "fitness.pricing.premiumFeature5": "תמיכת לקוחות בעדיפות גבוהה",
    "fitness.pricing.premiumBtn": "בחר תוכנית פרימיום",
    "fitness.pricing.pro": "תוכנית פרו",
    "fitness.pricing.proPrice": "$49.99",
    "fitness.pricing.proFeature1": "הכול כלול בפרימיום",
    "fitness.pricing.proFeature2": "מעקב וניתוחים מתקדמים",
    "fitness.pricing.proFeature3": "מפגשי אימון אישיים אחד על אחד",
    "fitness.pricing.proFeature4": "גישה לסדנאות ואירועים בלעדיים",
    "fitness.pricing.proFeature5": "תמיכה והדרכה ייעודית",
    "fitness.pricing.proBtn": "בחר תוכנית פרו",
    "fitness.pricing.title": "תוכניות תמחור משתלמות",
    "fitness.pricing.subtitle": "בחר תוכנית שמתאימה לתקציב ולמטרות שלך",
    "fitness.pricing.basic": "תוכנית בסיסית",
    "fitness.pricing.basicPrice": "$19.99",
    "fitness.pricing.month": "לחודש",
    "fitness.pricing.basicFeature1":
      "גישה לכל האימונים ותוכניות האימון הסטנדרטיות",
    "fitness.pricing.basicFeature2": "המלצות אימון מותאמות אישית",
    "fitness.pricing.basicFeature3": "גישה לתמיכת הקהילה ולמשאבים",
    "fitness.pricing.basicFeature4": "גישה בלעדית לאימונים ותכונות חדשות",
    "fitness.pricing.basicBtn": "בחר תוכנית בסיסית",

    "fitness.features.title": "תכונות כלולות",
    "fitness.features.subtitle": "הכול כדי לחוות חוויית כושר מלאה",
    "fitness.features.desc1":
      "הפלטפורמה המקיפה שלנו לכושר מספקת לך את כל הכלים והמשאבים הדרושים להשגת מטרות הכוח, הסיבולת והבריאות שלך. מהדרכה מותאמת אישית ועד ליווי מקצועי – דאגנו להכול.",
    "fitness.features.desc2":
      "בין אם אתה מתחיל או ספורטאי מנוסה, התכונות שלנו נועדו לתמוך במסע הכושר שלך בכל שלב, ולהפוך את האימון לנגיש ויעיל עבור כולם.",
    "fitness.features.desc3":
      "הפלטפורמה שלנו משלבת טכנולוגיות כושר מתקדמות עם שיטות אימון מוכחות, כדי להבטיח לך גישה לאסטרטגיות האימון הטובות ביותר. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, מסע הכושר שלך הופך ליעיל ומעורר יותר.",
    "fitness.features.desc4":
      "הצטרף לאלפי משתמשים ששינו את גופם וחייהם באמצעות הגישה המקיפה שלנו לכושר. גלה את ההבדל שהדרכה מותאמת אישית, ליווי מקצועי ותמיכת הקהילה יכולים לעשות במסע הבריאות והכושר שלך.",
    "fitness.howItWorks.title": "איך זה עובד",
    "fitness.howItWorks.subtitle": "התחל את מסע הכושר שלך בכמה צעדים פשוטים",
    "fitness.howItWorks.stepLabel": "שלב {number}",
    "fitness.howItWorks.cta": "התחל את המסע שלך",
    "fitness.programs.title": "תוכניות שאנו מציעים",
    "fitness.benefits.title": "היתרונות המרכזיים של התוכניות שלנו",
    "fitness.hero.title": "השג את מטרות הכושר שלך",
    "fitness.hero.subtitle": "הצטרף לקהילה שלנו והתחל את המסע שלך היום",
    "fitness.hero.button": "התחל עכשיו",
    "fitness.benefits.subtitle": "גלה את היתרונות של תוכניות הכושר שלנו",
    "fitness.benefits.strengthTitle": "אימוני כוח",
    "fitness.benefits.strengthDesc":
      "בנה שרירים והגדל את הכוח עם התוכניות המיוחדות שלנו",
    "fitness.benefits.cardioTitle": "כושר קרדיו",
    "fitness.benefits.cardioDesc":
      "שפר את בריאות הלב והסיבולת שלך עם אימוני הקרדיו שלנו",
    "fitness.benefits.weightTitle": "ניהול משקל",
    "fitness.benefits.weightDesc":
      "השג ושמור על משקל בריא עם התוכניות המותאמות שלנו",
    "fitness.benefits.energyTitle": "רמות אנרגיה מוגברות",
    "fitness.benefits.energyDesc":
      "חווה עלייה באנרגיה ובחיוניות באמצעות פעילות גופנית סדירה",
    "fitness.benefits.transformTitle": "תוצאות משנות חיים",
    "fitness.benefits.transformDesc":
      "השג תוצאות שמשנות חיים עם התוכניות המקיפות שלנו",
    "fitness.programs.strength": "תוכניות אימון כוח",
    "fitness.programs.strengthDesc":
      "בנה שרירים והגדל כוח באמצעות אימוני התנגדות מתקדמים",
    "fitness.programs.cardio": "שיעורי כושר קרדיו",
    "fitness.programs.cardioDesc":
      "שפר את בריאות הלב והסיבולת עם אימוני קרדיו דינמיים",
    "fitness.programs.hiit": "מפגשי אימון HIIT",
    "fitness.programs.hiitDesc":
      "אימון אינטרוולים בעצימות גבוהה לשריפת שומן מקסימלית וכושר משופר",
    "fitness.programs.functional": "אימוני כושר פונקציונליים",
    "fitness.programs.functionalDesc":
      "שפר דפוסי תנועה יומיומיים וכוח פונקציונלי כללי",
    "fitness.programs.personal": "תוכניות אימון אישיות",
    "fitness.programs.personalDesc":
      "תוכניות כושר מותאמות אישית אחד על אחד למטרות שלך",
    "fitness.programs.group": "שיעורי כושר קבוצתיים",
    "fitness.programs.groupDesc":
      "מפגשים קבוצתיים מעוררי מוטיבציה לכל רמות הכושר וההעדפות",

    "fitness.howItWorks.step1": "השלם הערכת כושר והגדרת מטרות",
    "fitness.howItWorks.step2": "קבל המלצות אימון מותאמות אישית",
    "fitness.howItWorks.step3": "גש לתוכניות אימון ומדריכי וידאו",
    "fitness.howItWorks.step4": "עקוב אחרי שגרות מובנות עם הדרכה מקצועית",
    "fitness.howItWorks.step5": "עקוב אחרי ההתקדמות והתאם את תוכנית הכושר שלך",

    "fitness.features.personalized": "תוכניות אימון מותאמות אישית",
    "fitness.features.tracking": "כלי מעקב התקדמות",
    "fitness.features.library": "ספריית סרטוני תרגילים",
    "fitness.features.support": "תמיכת מדריכים מומחים",
    mental_program_stress_title: "טיפול בניהול לחץ",
    mental_program_stress_desc: "למד טכניקות יעילות לניהול והפחתת לחץ יומיומי",
    mental_program_anxiety_title: "תוכניות להקלה על חרדה",
    mental_program_anxiety_desc: "גישות מקיפות להתמודדות עם חרדה ודאגה",
    mental_program_mindfulness_title: "מיינדפולנס ומדיטציה",
    mental_program_mindfulness_desc:
      "פיתוח תרגולי מיינדפולנס לבהירות נפשית ושלווה",
    mental_program_cbt_title: "טיפול קוגניטיבי-התנהגותי",
    mental_program_cbt_desc: "טיפול מבוסס ראיות לשיפור דפוסי חשיבה",
    mental_program_emotional_title: "סדנאות רווחה רגשית",
    mental_program_emotional_desc: "מפגשים קבוצתיים לאינטליגנציה רגשית וחוסן",
    mental_program_sleep_title: "תוכניות לשיפור השינה",
    mental_program_sleep_desc: "טכניקות מיוחדות לשינה טובה ומנוחה",
    mental_how_step1: "השלם הערכת רווחה נפשית",
    mental_how_step2: "קבל המלצות טיפול מותאמות אישית",
    mental_how_step3: "גש למפגשים ומשאבים מודרכים",
    mental_how_step4: "תרגל טכניקות בהדרכת מומחים",
    mental_how_step5: "עקוב אחר ההתקדמות והתאם את הגישה",
    mental_feature_personalized: "מפגשי טיפול מותאמים אישית",
    mental_feature_tracking: "כלי מעקב לבריאות נפשית",
    mental_feature_meditation: "ספריית מדיטציה מודרכת",
    mental_feature_consultation: "תמיכה וייעוץ מומחים",
    mental_hero_title1: "גלה",
    mental_hero_title2: "בריאות נפשית",
    mental_hero_desc:
      "שפר את בריאותך הנפשית באמצעות טיפול אישי ותרגולי מיינדפולנס להשגת שלווה פנימית ואיזון רגשי.",
    mental_hero_btn: "התחל את המסע שלך",
    mental_video_not_supported: "הדפדפן שלך אינו תומך בתגית וידאו.",
    mental_benefits_title1: "יתרונות",
    mental_benefits_title2: "עיקריים",
    mental_benefits_desc:
      "שנה את חייך עם היתרונות המוכחים של תרגולי בריאות נפשית וטכניקות טיפוליות.",
    mental_benefit_stress_title: "מפחית מתח",
    mental_benefit_stress_desc:
      "נהל והפחת רמות מתח בצורה יעילה באמצעות טכניקות טיפוליות מוכחות ותרגולי מיינדפולנס המותאמים לאתגרי החיים המודרניים.",
    mental_benefit_emotional_title: "איזון רגשי",
    mental_benefit_emotional_desc:
      "פתח אינטליגנציה רגשית וכישורי ויסות לשמירה על איזון וחוסן במצבים מאתגרים.",
    mental_benefit_transform_title: "שנה את מחשבתך",
    mental_benefit_transform_desc:
      "חווה את היתרונות העמוקים של בריאות נפשית שישפרו את הרווחה הרגשית, הקוגניטיבית והפסיכולוגית שלך.",
    mental_benefit_sleep_title: "שינה טובה יותר",
    mental_benefit_sleep_desc:
      "שפר את איכות השינה שלך עם טכניקות הרפיה ותרגולי בריאות נפשית שמכינים את מחשבתך לשינה נינוחה.",
    mental_benefit_clarity_title: "צלילות מחשבתית",
    mental_benefit_clarity_desc:
      "שפר את התפקוד הקוגניטיבי וצלילות המחשבה שלך באמצעות תרגולי מיינדפולנס וטכניקות טיפוליות.",
    mental_benefits_img_alt: "יתרונות בריאות נפשית",
    mental_programs_img_alt: "רקע תוכניות בריאות נפשית",
    mental_programs_title1: "תוכניות שאנו",
    mental_programs_title2: "מגישים",
    mental_how_title1: "איך זה",
    mental_how_title2: "עובד",
    mental_how_desc: "התחל את מסע בריאות הנפש שלך בכמה צעדים פשוטים בלבד.",
    mental_how_step_label: "שלב {number}",
    mental_how_img_alt: "צעדי בריאות נפשית",
    mental_features_title1: "מאפיינים",
    mental_features_title2: "כלולים",
    mental_features_desc: "הכול בשביל חוויה מלאה של בריאות נפשית.",
    mental_features_p1:
      "הפלטפורמה המקיפה שלנו לבריאות נפשית מספקת לך את כל הכלים והמשאבים הדרושים להשגת איזון רגשי ורווחה פסיכולוגית. מטיפול אישי ועד לייעוץ מקצועי – יש לנו הכול.",
    mental_features_p2:
      "בין אם אתה מתמודד עם מתח, חרדה או פשוט רוצה לשפר את בריאותך הנפשית, המאפיינים שלנו נבנו כדי לתמוך במסע שלך בכל שלב, ולהפוך את בריאות הנפש לנגישה ויעילה לכולם.",
    mental_features_p3:
      "הפלטפורמה שלנו משלבת גישות טיפוליות מבוססות-ראיות עם טכנולוגיה מודרנית, כדי להבטיח לך גישה לאסטרטגיות בריאות הנפש הטובות ביותר. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, המסע שלך הופך ליעיל ובר-קיימא יותר.",
    mental_features_p4:
      "הצטרף לאלפי משתמשים ששינו את בריאותם הנפשית באמצעות הגישה המקיפה שלנו. גלה את ההבדל שטיפול אישי, ייעוץ מקצועי ותמיכה מתמשכת יכולים לעשות ברווחתך הרגשית והפסיכולוגית.",
    mental_feature_card_desc:
      "גישה ל-{feature} לחוויית בריאות נפשית משופרת ותמיכה מקיפה.",
    mental_cta_title: "התחל את מסע בריאות הנפש שלך היום",
    mental_cta_desc:
      "קבל גישה לטיפול אישי וכלי בריאות נפשיים לשיפור הרווחה הרגשית והפסיכולוגית שלך.",
    mental_pricing_basic: "בסיסי",
    mental_pricing_month: "לחודש",
    mental_pricing_basic_feature1: "מפגשי טיפול בסיסיים",
    mental_pricing_basic_feature2: "גישה לספריית מדיטציה",
    mental_pricing_basic_feature3: "גישה לאפליקציה לנייד",
    mental_pricing_basic_feature4: "דוחות התקדמות שבועיים",
    mental_pricing_basic_btn: "בחר בסיסי",
    mental_pricing_popular: "הכי פופולרי",
    mental_pricing_premium: "פרימיום",
    mental_pricing_premium_feature1: "הכל בבסיסי",
    mental_pricing_premium_feature2: "מפגשי טיפול חיים",
    mental_pricing_premium_feature3: "תוכניות טיפול מותאמות אישית",
    mental_pricing_premium_feature4: "ייעוץ מומחה",
    mental_pricing_premium_feature5: "תמיכה בעדיפות",
    mental_pricing_premium_btn: "בחר פרימיום",
    mental_pricing_pro: "מקצועי",
    mental_pricing_pro_feature1: "הכל בפרימיום",
    mental_pricing_pro_feature2: "מפגשי טיפול אחד על אחד",
    mental_pricing_pro_feature3: "תוכניות טיפול מותאמות אישית",
    mental_pricing_pro_feature4: "גישה לריטריטים בסופי שבוע",
    mental_pricing_pro_feature5: "גישה לקהילת VIP",
    mental_pricing_pro_btn: "בחר מקצועי",

    // Diet & Nutrition Page
    diet_hero_title1: "גלה",
    diet_hero_title2: "תזונה ודיאטה",
    diet_hero_desc:
      "שנה את בריאותך עם הדרכה תזונתית אישית והרגלי אכילה בריאים ומתמשכים לבריאות מיטבית.",
    diet_hero_btn: "התחל את המסע שלך",
    diet_video_not_supported: "הדפדפן שלך אינו תומך בוידאו.",
    diet_benefits_title1: "יתרונות",
    diet_benefits_title2: "עיקריים",
    diet_benefits_desc:
      "שנה את חייך עם היתרונות המוכחים של תזונה נכונה והרגלי אכילה בריאים",
    diet_benefit_energy_title: "משפר אנרגיה",
    diet_benefit_energy_desc:
      "הגבר את רמות האנרגיה והחיוניות היומית שלך באמצעות תזונה מאוזנת ותזמון ארוחות נכון לגופך.",
    diet_benefit_weight_title: "משקל בריא",
    diet_benefit_weight_desc:
      "השג ושמור על משקל בריא באמצעות אסטרטגיות תזונה מתמשכות המתאימות לחילוף החומרים הטבעי שלך.",
    diet_benefit_transform_title: "שנה את בריאותך",
    diet_benefit_transform_desc:
      "חווה את היתרונות העמוקים של תזונה נכונה שישפרו את בריאותך הפיזית, הבהירות המנטלית והרווחה הכללית שלך.",
    diet_benefit_digestion_title: "שיפור העיכול",
    diet_benefit_digestion_desc:
      "שפר את בריאות מערכת העיכול שלך עם תוכניות תזונה התומכות בבריאות המעיים ומקדמות ספיגת חומרים מזינים מיטבית.",
    diet_benefit_metabolism_title: "מגביר חילוף חומרים",
    diet_benefit_metabolism_desc:
      "שפר את תפקוד חילוף החומרים שלך באמצעות אסטרטגיות תזונה ממוקדות לשיפור תהליכי שריפת השומן הטבעיים של גופך.",
    diet_programs_title1: "תוכניות שאנו",
    diet_programs_title2: "מגישים",
    diet_program_personalized_title: "תכנון ארוחות אישי",
    diet_program_personalized_desc:
      "תוכניות תזונה מותאמות אישית למטרותיך ואורח חייך",
    diet_program_weight_title: "תוכניות ניהול משקל",
    diet_program_weight_desc: "גישות מתמשכות להשגת ושמירה על משקל בריא",
    diet_program_sports_title: "אימון תזונה לספורטאים",
    diet_program_sports_desc: "השג ביצועים מיטביים עם אסטרטגיות תזונה ממוקדות",
    diet_program_medical_title: "טיפול תזונתי רפואי",
    diet_program_medical_desc: "תמיכה תזונתית מיוחדת למצבים בריאותיים",
    diet_program_detox_title: "תוכניות ניקוי רעלים",
    diet_program_detox_desc: "גישות ניקוי עדינות לבריאות טובה יותר",
    diet_program_mindful_title: "סדנאות אכילה מודעת",
    diet_program_mindful_desc: "פיתוח יחסים בריאים עם אוכל והרגלי אכילה",
    diet_how_title1: "איך זה",
    diet_how_title2: "עובד",
    diet_how_desc: "התחל את מסע התזונה שלך בכמה צעדים פשוטים",
    diet_how_step1: "השלים הערכת תזונה מקיפה",
    diet_how_step2: "קבל את תוכנית הארוחות האישית שלך",
    diet_how_step3: "גש להדרכה תזונתית ומתכונים",
    diet_how_step4: "עקוב אחרי ההתקדמות שלך עם תמיכת מומחים",
    diet_how_step5: "התאם את התוכנית שלך לפי תוצאות ומשוב",
    diet_how_step_label: "שלב {number}",
    diet_features_title1: "תכונות",
    diet_features_title2: "כלולות",
    diet_features_desc: "הכל לחוויית תזונה שלמה",
    diet_features_p1:
      "הפלטפורמה המקיפה שלנו מספקת את כל הכלים והמשאבים להשגת מטרות הבריאות והרווחה שלך. מתוכניות ארוחות אישיות ועד הדרכה מקצועית, הכל כלול.",
    diet_features_p2:
      "בין אם אתה רוצה לרדת במשקל, לעלות במסת שריר או פשוט לשפר את הבריאות הכללית שלך, התכונות שלנו נועדו לתמוך בך בכל שלב, ולהפוך את האכילה הבריאה לנגישה ומהנה.",
    diet_features_p3:
      "הפלטפורמה שלנו משלבת מדע תזונה מתקדם עם תכנון ארוחות מעשי, כדי להבטיח לך את האסטרטגיות הטובות ביותר למטרות הבריאות שלך. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, מסע התזונה שלך הופך ליעיל ובר קיימא יותר.",
    diet_features_p4:
      "הצטרף לאלפי משתמשים ששינו את בריאותם עם הגישה המקיפה שלנו לתזונה. חווה את ההבדל שתכנון ארוחות אישי, הדרכה מקצועית ותמיכה מתמשכת יכולים לעשות במסע הבריאות שלך.",
    diet_feature_mealplans: "תוכניות ארוחות אישיות",
    diet_feature_tracking: "כלי מעקב תזונה",
    diet_feature_recipes: "גישה למאגר מתכונים",
    diet_feature_consult: "תמיכה בייעוץ מקצועי",
    diet_feature_card_desc: "גישה ל{feature} לחוויית תזונה משופרת ותמיכה מלאה.",
    diet_cta_title: "התחל את מסע התזונה שלך היום",
    diet_cta_desc:
      "קבל גישה לתוכניות תזונה אישיות וכלי בריאות לשיפור הבריאות והחיוניות שלך.",
    diet_pricing_basic: "בסיסי",
    diet_pricing_basic_btn: "בחר בסיסי",
    diet_pricing_premium: "פרימיום",
    diet_pricing_premium_btn: "בחר פרימיום",
    diet_pricing_pro: "מקצועי",
    diet_pricing_pro_btn: "בחר מקצועי",
    diet_pricing_popular: "הכי פופולרי",
    diet_pricing_basic_feature1: "תכנון ארוחות בסיסי",
    diet_pricing_basic_feature2: "גישה למאגר מתכונים",
    diet_pricing_basic_feature3: "גישה לאפליקציה",
    diet_pricing_basic_feature4: "דוחות התקדמות שבועיים",
    diet_pricing_premium_feature1: "הכל בבסיסי",
    diet_pricing_premium_feature2: "תוכניות ארוחות אישיות",
    diet_pricing_premium_feature3: "ייעוץ מקצועי",
    diet_pricing_premium_feature4: "כלי מעקב תזונה",
    diet_pricing_premium_feature5: "תמיכה בעדיפות",
    diet_pricing_pro_feature1: "הכל בפרימיום",
    diet_pricing_pro_feature2: "מפגשי אימון אישיים",
    diet_pricing_pro_feature3: "תוכניות ארוחות מותאמות",
    diet_pricing_pro_feature4: "גישה לסדנאות סוף שבוע",
    diet_pricing_pro_feature5: "גישה לקהילת VIP",
    // Yoga & Meditation Page
    yoga_hero_title1: "גלה",
    yoga_hero_title2: "יוגה ומדיטציה",
    yoga_hero_desc:
      "גלה שלווה, גמישות ומודעות עם מפגשי יוגה ומדיטציה מודרכים לכל הרמות.",
    yoga_hero_btn: "התחל את המסע שלך",
    yoga_video_not_supported: "הדפדפן שלך אינו תומך בוידאו.",
    yoga_benefits_title1: "יתרונות",
    yoga_benefits_title2: "עיקריים",
    yoga_benefits_desc:
      "שנה את חייך עם היתרונות המוכחים של תרגול יוגה ומדיטציה קבוע",
    yoga_benefit_flex_title: "משפר גמישות",
    yoga_benefit_flex_desc:
      "שפר את טווח התנועה והיציבה שלך עם תנוחות יוגה ותרגילי מתיחה לכל רמות הכושר.",
    yoga_benefit_anxiety_title: "מפחית חרדה",
    yoga_benefit_anxiety_desc:
      "מצא שלווה פנימית ורוגע עם טכניקות מדיטציה מודרכות המסייעות בניהול מתחים וברווחה נפשית.",
    yoga_benefit_transform_title: "שנה את חייך",
    yoga_benefit_transform_desc:
      "חווה את היתרונות העמוקים של יוגה ומדיטציה שישפרו את בריאותך הפיזית, הנפשית והרוחנית.",
    yoga_benefit_sleep_title: "שינה טובה יותר",
    yoga_benefit_sleep_desc:
      "שפר את איכות השינה שלך עם טכניקות הרפיה ותרגילי נשימה שמכינים את הגוף והנפש לשינה רגועה.",
    yoga_benefit_energy_title: "מגביר אנרגיה",
    yoga_benefit_energy_desc:
      "הגבר את החיוניות והתפוקה שלך עם תרגולי יוגה ומיינדפולנס שמחדשים את הגוף.",
    yoga_programs_title1: "תוכניות שאנו",
    yoga_programs_title2: "מגישים",
    yoga_program_morning_title: "יוגה בוקר",
    yoga_program_morning_desc: "התחל את היום עם תנוחות מעוררות ונשימה מודעת",
    yoga_program_guided_title: "סדרת מדיטציה מודרכת",
    yoga_program_guided_desc: "מצא שלווה פנימית עם תרגולי מדיטציה מובנים",
    yoga_program_power_title: "מפגשי יוגה עוצמתית",
    yoga_program_power_desc: "בנה כוח וסיבולת עם רצפים דינמיים",
    yoga_program_chair_title: "יוגה בכיסא למתחילים",
    yoga_program_chair_desc: "יוגה עדינה נגישה לכולם, ללא תלות בניידות",
    yoga_program_retreats_title: "סדנאות רגיעה עמוקה",
    yoga_program_retreats_desc: "היכנס לחוויות בריאות שלמות",
    yoga_program_breathing_title: "תרגול טכניקות נשימה",
    yoga_program_breathing_desc: "שלוט באמנות הנשימה המודעת לבריאות טובה יותר",
    yoga_how_title1: "איך זה",
    yoga_how_title2: "עובד",
    yoga_how_desc: "התחל את מסע הבריאות שלך בכמה צעדים פשוטים",
    yoga_how_step1: "בחר את התוכנית המתאימה לאורח חייך",
    yoga_how_step2: "הירשם ובחר את הזמן המועדף",
    yoga_how_step3: "גש למפגשים אונליין או באפליקציה",
    yoga_how_step4: "עקוב אחרי השגרה שלך עם הדרכת מומחים",
    yoga_how_step5: "עקוב אחרי ההתקדמות והתאם לפי הצורך",
    yoga_how_step_label: "שלב {number}",
    yoga_features_title1: "תכונות",
    yoga_features_title2: "כלולות",
    yoga_features_desc: "הכל לחוויית בריאות שלמה",
    yoga_features_p1:
      "הפלטפורמה המקיפה שלנו מספקת את כל הכלים והמשאבים להשגת מטרות הבריאות והכושר שלך. מהכוונה אישית ועד תמיכה מקצועית, הכל כלול.",
    yoga_features_p2:
      "בין אם אתה מתחיל או מתרגל מנוסה, התכונות שלנו נועדו לתמוך בך בכל שלב, ולהפוך את הבריאות לנגישה ומהנה לכולם.",
    yoga_features_p3:
      "הפלטפורמה שלנו משלבת טכנולוגיה מתקדמת עם שיטות מסורתיות, כדי להבטיח לך את הטוב משני העולמות. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, מסע הבריאות שלך הופך ליעיל ומרתק יותר.",
    yoga_features_p4:
      "הצטרף לאלפי משתמשים ששינו את חייהם עם הגישה המקיפה שלנו לבריאות. חווה את ההבדל שטיפול אישי, הדרכה מקצועית ותמיכה קהילתית יכולים לעשות במסע הבריאות שלך.",
    yoga_feature_app: "גישה לאפליקציה שלנו",
    yoga_feature_routines: "שגרות יומיות מותאמות אישית",
    yoga_feature_ondemand: "מפגשי וידאו ואודיו לפי דרישה",
    yoga_feature_guides: "מדריכי בריאות להדפסה",
    yoga_feature_card_desc:
      "גישה ל{feature} לחוויית בריאות משופרת ותמיכה מלאה.",
    yoga_cta_title: "התחל את מסע הבריאות שלך היום",
    yoga_cta_desc:
      "קבל גישה לתוכניות מותאמות אישית וכלי בריאות לשיפור הגוף והנפש.",
    yoga_pricing_basic: "בסיסי",
    yoga_pricing_basic_btn: "בחר בסיסי",
    yoga_pricing_basic_feature1: "גישה למפגשי יוגה בסיסיים",
    yoga_pricing_basic_feature2: "ספריית מדיטציות מודרכות",
    yoga_pricing_basic_feature3: "גישה לאפליקציה",
    yoga_pricing_basic_feature4: "דוחות התקדמות שבועיים",
    yoga_pricing_premium: "פרימיום",
    yoga_pricing_premium_feature1: "הכל בבסיסי",
    yoga_pricing_premium_feature2: "שיעורים קבוצתיים חיים",
    yoga_pricing_premium_feature3: "שגרות מותאמות אישית",
    yoga_pricing_premium_feature4: "ייעוץ מומחה",
    yoga_pricing_premium_feature5: "תמיכה בעדיפות",
    yoga_pricing_pro: "מקצועי",
    yoga_pricing_pro_feature1: "הכל בפרימיום",
    yoga_pricing_pro_feature2: "מפגשי אימון אישיים",
    yoga_pricing_pro_feature3: "תוכניות ארוחות מותאמות",
    yoga_pricing_pro_feature4: "גישה לריטריטים בסופי שבוע",
    yoga_pricing_pro_feature5: "גישה לקהילת VIP",
    yoga_pricing_popular: "הכי פופולרי",
    yoga_pricing_premium_btn: "בחר פרימיום",
    yoga_pricing_pro_btn: "בחר מקצועי",
    home2_expert4_name: "דייוויד תומפסון",
    home2_expert4_title: "מדריך יוגה",
    home2_expert4_desc: "מדריך יוגה מוסמך עם התמחות במדיטציה ומיינדפולנס.",

    aboutus_video_not_supported: "הדפדפן שלך אינו תומך בוידאו.",
    aboutus_hero_title1: "על ",
    aboutus_hero_title2: "ינו",
    aboutus_hero_desc:
      "מחויבים לשנות חיים באמצעות פתרונות בריאות מקיפים. אנו מאמינים שלכל אחד מגיע טיפול אישי שמטפח את הנפש, הגוף והרוח.",
    aboutus_growth_title: "הצמיחה שלנו לאורך השנים",
    aboutus_growth_desc:
      "מסע של צמיחה מתמשכת, חדשנות ומחויבות לשינוי חיים באמצעות בריאות.",
    aboutus_growth_2016_title: "הקמה",
    aboutus_growth_2016_desc:
      "התחלנו עם חזון לשנות את תחום הבריאות באמצעות טיפול אישי ושיטות מבוססות ראיות. הקמנו את מרכז הבריאות הראשון שלנו עם צוות מקצועי מוסמך.",
    aboutus_growth_2018_title: "1000 הלקוחות הראשונים",
    aboutus_growth_2018_desc:
      "הגענו לאבן הדרך של 1000 לקוחות מרוצים, מה שמוכיח את יעילות הגישה ההוליסטית שלנו. הרחבנו את השירותים לכלול תזונה, כושר ובריאות הנפש.",
    aboutus_growth_2020_title: "טרנספורמציה דיגיטלית",
    aboutus_growth_2020_desc:
      "השקנו פלטפורמות בריאות דיגיטליות מקיפות כדי להגיע ליותר אנשים ברחבי העולם. הצגנו ייעוץ וירטואלי, מעקב בריאות דיגיטלי ואפליקציה מותאמת אישית.",
    aboutus_growth_2022_title: "10,000+ חיים שהשתנו",
    aboutus_growth_2022_desc:
      "חגגנו שינוי של מעל 10,000 חיים עם תוכניות הבריאות ההוליסטיות שלנו. הוכתרנו כיעד מוביל לבריאות עם פרסים ותעודות רבות.",
    aboutus_growth_2024_title: "מנהיגות בתעשייה",
    aboutus_growth_2024_desc:
      "הפכנו ליעד מוביל לבריאות עם טכנולוגיה מתקדמת, צוות מומחים ותוכניות מקיפות. ממשיכים לחדש ולהרחיב את ההשפעה שלנו בעולם.",
    aboutus_mission_img_alt: "המשימה שלנו",
    aboutus_mission_title: "המשימה והחזון שלנו",
    aboutus_mission_desc:
      "אנו מחויבים להעצים אנשים להשיג רווחה מיטבית באמצעות שיטות מבוססות ראיות, טיפול אישי וקהילה תומכת.",
    aboutus_mission_card_title: "המשימה שלנו",
    aboutus_mission_card_desc:
      "להעניק פתרונות בריאות מקיפים ונגישים שמביאים לשינוי חיים ולשינוי חיובי מתמשך בקהילה שלנו.",
    aboutus_vision_card_title: "החזון שלנו",
    aboutus_vision_card_desc:
      "להיות היעד המוביל לבריאות בו אנשים מגלים את הדרך לבריאות הוליסטית ושינוי אורח חיים בר קיימא.",
    aboutus_values_title: "הערכים שלנו",
    aboutus_values_img_alt: "הערכים שלנו",
    aboutus_value_innovation_title: "חדשנות",
    aboutus_value_innovation_desc:
      "אנו מאמצים טכנולוגיות בריאות מתקדמות ושיטות מבוססות ראיות, ותמיד מחפשים דרכים טובות יותר להעניק פתרונות בריאות מותאמים אישית.",
    aboutus_value_integrity_title: "יושרה",
    aboutus_value_integrity_desc:
      "אנו פועלים ביושר, בשקיפות ובסטנדרטים האתיים הגבוהים ביותר בכל העשייה והקשר עם הלקוחות.",
    aboutus_value_flexibility_title: "גמישות",
    aboutus_value_flexibility_desc:
      "אנו מסתגלים במהירות לצרכים אישיים ולמטרות בריאות משתנות, ונשארים גמישים כדי לענות על דרישות בריאות משתנות והעדפות אורח חיים.",
    aboutus_value_excellence_title: "מצוינות",
    aboutus_value_excellence_desc:
      "אנו שואפים לאיכות הגבוהה ביותר בכל תחום, ומספקים תוצאות בריאות יוצאות דופן וחוויות משנות חיים ללקוחותינו.",
    // About Us - What We Think
    aboutus_think_title: "מה אנחנו חושבים",
    aboutus_think_desc:
      "ב-Health5 אנו מאמינים שרווחה אמיתית היא מסע, לא יעד. הפילוסופיה שלנו מושרשת בהבנה שכל אדם הוא ייחודי, וכך גם הצרכים הבריאותיים שלו.",
    aboutus_think_holistic_title: "גישה הוליסטית",
    aboutus_think_holistic_desc:
      "אנו מטפלים בנפש, בגוף וברוח, ומבטיחים מסלול כולל לרווחה.",
    aboutus_think_personalized_title: "טיפול מותאם אישית",
    aboutus_think_personalized_desc:
      "הפתרונות שלנו מותאמים לאורח החיים, להעדפות ולמטרות הייחודיות שלך.",
    aboutus_think_evidence_title: "מבוסס ראיות",
    aboutus_think_evidence_desc:
      "אנו משלבים את המחקר המדעי העדכני ביותר עם חוכמה מסורתית לתוצאות מיטביות.",
    aboutus_think_img_alt: "תמונה מה אנחנו חושבים",

    // About Us - What Makes Us Unique
    aboutus_unique_title: "מה מייחד אותנו",
    aboutus_unique_holistic_title: "הוליסטי באמת",
    aboutus_unique_holistic_desc:
      "אנו משלבים תזונה, כושר, רווחה נפשית ואימון אורח חיים לשינוי מלא.",
    aboutus_unique_ai_title: "התאמה אישית מבוססת בינה מלאכותית",
    aboutus_unique_ai_desc:
      "ה-AI המתקדם שלנו מספק תובנות ותוכניות שמסתגלות ככל שאתה מתפתח.",
    aboutus_unique_expert_title: "הכוונת מומחים",
    aboutus_unique_expert_desc: "הצוות המקצועי המוסמך שלנו תומך בך בכל שלב.",
    home2_ceo_title: 'הכירו את המנכ"ל שלנו',
    home2_ceo_mission:
      "מוביל את המשימה שלנו לשנות חיים באמצעות מצוינות בבריאות וכושר.",
    home2_ceo_experience:
      'עם ניסיון של מעל 15 שנה בתחום הבריאות, המנכ"ל שלנו הקדיש את הקריירה שלו לעזור לאנשים להשיג מטרות כושר ולחיות חיים בריאים ומספקים יותר.',
    home2_ceo_quote:
      "אנחנו מאמינים שרווחה אמיתית מגיעה מגישה מאוזנת לכושר גופני, בריאות נפשית ותזונה. צוות המומחים המוסמכים שלנו כאן כדי להדריך אותך בכל שלב.",
    home2_ceo_name: "- ג'ון סמית, מנכ\"ל",
    home2_event_instructor: "מדריך",
    home2_service1_title: "אימון אישי",
    home2_service1_desc: "מפגשים מותאמים אישית להשגת מטרות הכושר שלך.",
    home2_service2_title: "הכוונה תזונתית",
    home2_service2_desc: "ייעוץ מומחים לבריאות טובה יותר.",
    home2_service3_title: "אימונים קבוצתיים",
    home2_service3_desc: "שיעורים קבוצתיים מהנים ואנרגטיים לכל הרמות.",
    home2_expert1_name: "פריה שארמה",
    home2_expert1_title: "מאמנת מוסמכת",
    home2_expert1_desc:
      "מאמנת מוסמכת עם ניסיון של מעל 8 שנים באימוני כוח וכושר קרדיו.",
    home2_expert2_name: "ד\"ר ארג'ון ראו",
    home2_expert2_title: "תזונאי",
    home2_expert2_desc: "דיאטן מוסמך המתמחה בתזונת ספורט וניהול משקל.",
    home2_expert3_name: "לינה גומז",
    home2_expert3_title: "מאמנת יוגה",
    home2_expert3_desc: "מדריכת יוגה מוסמכת עם התמחות במדיטציה ומיינדפולנס.",
    home2_faq1_q: "איך נרשמים לתוכנית?",
    home2_faq1_a: "לחץ 'התחל' ובחר את התוכנית המועדפת עליך.",
    home2_faq2_q: "האם המאמנים שלכם מוסמכים?",
    home2_faq2_a: "כן, כל המומחים שלנו מוסמכים.",
    home2_faq3_q: "האם אפשר לבטל בכל עת?",
    home2_faq3_a: "בהחלט! אתה שולט במנוי שלך.",
    home2_faq4_q: "האם יש שיעורי ניסיון?",
    home2_faq4_a: "כן, אנו מציעים שיעורי ניסיון חינם.",
    home2_faq5_q: "האם אפשר להחליף תוכנית?",
    home2_faq5_a: "כן, פנה לתמיכה או השתמש בלוח הבקרה.",
    home2_hero_title1: "גלה את הפוטנציאל שלך ו-",
    home2_hero_title2a: "השג",
    home2_hero_title2b: "בריאות",
    home2_hero_desc:
      "חווה את השילוב המושלם של כושר, תזונה ומיינדפולנס. התוכניות בהובלת מומחים שלנו נועדו לעזור לך להשיג את מטרות הבריאות שלך עם הדרכה ותמיכה אישית.",
    home2_hero_btn: "התחל את המסע שלך",
    home2_experts_title: "צוות מקצועי",
    home2_experts_desc:
      "המומחים המסורים שלנו מחויבים לעזור לך להשיג את מטרות הבריאות והכושר שלך.",
    home2_why_title: "למה לבחור בנו",
    home2_why_headline: "מעצימים את ההצלחה שלך עם מומחיות בריאות",
    home2_why_desc:
      "המומחים המוסמכים שלנו, תוכניות מותאמות אישית וקהילה תומכת עוזרים לך להשיג את מטרות הבריאות שלך בביטחון ובדאגה.",
    home2_why_subtitle: "הגישה הייחודית שלנו",
    home2_why_subdesc:
      "אנו מאמינים בגישה הוליסטית לבריאות, המשלבת הדרכה מקצועית, תוכניות חדשניות וקהילה אכפתית. התוכניות האישיות ומערכות התמיכה המוכחות שלנו מבטיחות שתקבל את התוצאות שמגיעות לך.",
    home2_why_bar1_label: "תוכניות מותאמות אישית",
    home2_why_bar2_label: "קהילה וחדשנות",
    home2_why_bar3_label: "תמיכה ותוצאות",
    home2_events_title: "אירועים ושיעורים קרובים",
    home2_events_join_btn: "הצטרף עכשיו",
    home2_register_title: "הרשמה לשיעור",
    home2_register_fullname: "שם מלא *",
    home2_register_fullname_ph: "הזן את שמך המלא",
    home2_register_email: "כתובת אימייל *",
    home2_register_email_ph: "הזן את האימייל שלך",
    home2_register_phone: "מספר טלפון *",
    home2_register_phone_ph: "הזן את מספר הטלפון שלך",
    home2_register_experience: "רמת ניסיון",
    home2_register_experience_ph: "בחר את רמת הניסיון שלך",
    home2_register_experience_beginner: "מתחיל",
    home2_register_experience_intermediate: "בינוני",
    home2_register_experience_advanced: "מתקדם",
    home2_register_special: "דרישות מיוחדות",
    home2_register_special_ph: "הערות או דרישות מיוחדות...",
    home2_register_btn: "הרשם עכשיו",
    home2_register_terms:
      "בהרשמתך, אתה מסכים לתנאים וההגבלות. ניצור איתך קשר בקרוב לאישור ההרשמה.",
    home2_success_title: "ההרשמה הצליחה!",
    home2_success_desc: "תודה שנרשמת לשיעור. שלחנו מייל אישור עם כל הפרטים.",
    home2_success_close: "סגור",
    home2_insights_title1: "בריאות",
    home2_insights_title2: "תובנות",
    home2_insights_desc:
      "גלה את המגמות, המחקרים והתובנות העדכניות ביותר בתחום הבריאות. הניתוחים המקיפים שלנו עוזרים לך לקבל החלטות מושכלות במסע הכושר שלך.",
    home2_insights_card1_title: "גישה מבוססת ראיות",
    home2_insights_card1_desc:
      "כל ההמלצות שלנו מגובות במחקר מדעי עדכני ושיטות מוכחות.",
    home2_insights_card2_title: "אסטרטגיות מותאמות אישית",
    home2_insights_card2_desc:
      "אסטרטגיות בריאות מותאמות לאורח החיים והמטרות הייחודיות שלך.",
    home2_insights_card3_title: "תמיכה קהילתית",
    home2_insights_card3_desc: "הצטרף לקהילה תומכת של אנשים בעלי מטרות דומות.",
    home2_insights_btn: "גלה תובנות",
    home: "בית",
    home1: "בית 1",
    home2: "בית 2",
    about: "עלינו",
    services: "שירותים",
    viewAllServices: "הצג את כל השירותים",
    yoga: "יוגה ומדיטציה",
    diet: "תזונה ודיאטה",
    mental: "בריאות הנפש",
    fitness: "תוכניות כושר",
    sleep: "טיפול שינה",
    lifestyle: "אימון אורח חיים",
    blog: "בלוג",
    contact: "צור קשר",
    userProfile: "פרופיל משתמש",
    signedIn: "מחובר",
    logout: "התנתק",
    selectLanguage: "בחר שפה",
    // home1.jsx translations
    home_hero_title: "המסע לבריאות שלך",
    home_hero_desc:
      "גלה בריאות הוליסטית, הדרכה מקצועית וקהילה תומכת. הדרך שלך לבריאות ואושר מתחילה כאן.",
    home_hero_btn: "התחל את המסע שלך",
    who_we_are_img_alt: "מי אנחנו",
    who_we_are_title: "מי אנחנו",
    who_we_are_desc:
      "אנחנו צוות מקצועני בריאות מסור המחויב לשנות חיים באמצעות פתרונות בריאות מקיפים. המשימה שלנו היא להעצים אנשים להשיג רווחה מיטבית באמצעות טיפול אישי, הדרכה מקצועית ושיטות מבוססות ראיות.",
    who_we_are_expert_team_title: "צוות מומחים",
    who_we_are_expert_team_desc: "אנשי מקצוע מוסמכים עם שנות ניסיון",
    who_we_are_personalized_care_title: "טיפול מותאם אישית",
    who_we_are_personalized_care_desc: "תוכניות בריאות מותאמות לצרכים אישיים",
    who_we_are_holistic_approach_title: "גישה הוליסטית",
    who_we_are_holistic_approach_desc: "שילוב בריאות גוף, נפש ורוח",
    who_we_are_proven_results_title: "תוצאות מוכחות",
    who_we_are_proven_results_desc: "שיטות מבוססות ראיות עם תוצאות מדידות",
    who_we_are_btn: "למידע נוסף עלינו →",
    // Services Overview
    services_overview_title: "השירותים המובילים שלנו",
    service_yoga_title: "יוגה ומדיטציה",
    service_yoga_tagline: "איזון גוף ונפש עם מפגשים מודרכים.",
    service_yoga_details:
      "הצטרף לשיעורי יוגה ומדיטציה בהנחיית מומחים לשיפור הגמישות, הפחתת מתחים ושיפור הרווחה הכללית שלך. מתאים לכל הרמות.",
    service_nutrition_title: "תזונה ודיאטה",
    service_nutrition_tagline: "תוכניות תזונה מותאמות אישית למטרותיך.",
    service_nutrition_details:
      "קבל תוכניות ארוחות מותאמות אישית ועצות תזונה מדיאטנים מוסמכים. השג את מטרות הבריאות שלך עם הדרכה מדעית.",
    service_fitness_title: "תוכניות כושר",
    service_fitness_tagline: "שגרות כושר מודרניות לכל הרמות.",
    service_fitness_details:
      "גש למגוון תוכניות כושר, מאימוני כוח ועד קרדיו, שנועדו לשמור על מוטיבציה וכושר.",
    service_sleep_title: "טיפול שינה",
    service_sleep_tagline: "שפר את איכות השינה בעזרת מומחים.",
    service_sleep_details:
      "התגבר על בעיות שינה עם מפגשי טיפול וטיפים של מומחים לשינה נינוחה ומרעננת בכל לילה.",
    // --- services.jsx translations ---
    services_video_not_supported: "הדפדפן שלך אינו תומך בוידאו.",
    services_hero_title: "גלה את השירותים שלנו",
    services_hero_desc:
      "פתרונות בריאות מקיפים שנועדו לשנות את חייך. מתוכניות כושר מותאמות אישית ועד הדרכה בריאותית הוליסטית, אנו מספקים את כל מה שאתה צריך למסע הבריאות שלך.",
    services_hero_explore_btn: "גלה שירותים",
    services_hero_getstarted_btn: "התחל עכשיו",
    services_ourservices_title: "השירותים שלנו",
    services_ourservices_desc:
      "גלה את מגוון שירותי הבריאות המקיפים שלנו שנועדו לתמוך במסע הבריאות והכושר שלך.",
    services_yoga_title: "יוגה ומדיטציה",
    services_yoga_desc:
      "שנה את גופך ונפשך באמצעות תוכניות היוגה והמדיטציה המקיפות שלנו. חווה הרפיה עמוקה, גמישות משופרת ובהירות מנטלית עם מפגשים מודרכים של מומחים להפחתת מתחים ושיפור הרווחה הכללית שלך.",
    services_fitness_title: "תוכניות כושר",
    services_fitness_desc:
      "שנה את מסע הכושר שלך עם תוכניות אימון מותאמות אישית. המאמנים המוסמכים שלנו יוצרים תוכניות אימון מותאמות שמסתגלות להתקדמות שלך, ומשלבות אימוני כוח, קרדיו וגמישות כדי לעזור לך להשיג את מטרותיך מהר ויעיל יותר.",
    services_nutrition_title: "הדרכת תזונה",
    services_nutrition_desc:
      "גלה את כוח התזונה הנכונה עם ההדרכה של המומחים שלנו. התזונאים שלנו מפתחים תוכניות ארוחות מותאמות אישית שמתאימות ליעדי הבריאות שלך, להעדפותיך ולאורח החיים שלך, ומבטיחים הרגלי אכילה בריאים שמזינים את גופך ונפשך.",
    services_yoga2_title: "יוגה ומדיטציה",
    services_yoga2_desc:
      "צא למסע טרנספורמטיבי של גילוי עצמי באמצעות תוכניות היוגה והמדיטציה ההוליסטיות שלנו. למד טכניקות עתיקות בשילוב גישות מודרניות להשגת שלווה פנימית, איזון רגשי וחיוניות גופנית בעולם המהיר של היום.",
    services_personal_title: "אימון אישי",
    services_personal_desc:
      "חווה את המיטב בכושר אישי עם מפגשי אימון אחד על אחד. המאמנים המומחים שלנו מספקים מוטיבציה, אחריות וטכניקות מוכחות מדעית כדי לעזור לך לבנות כוח, סיבולת וביטחון בסביבה תומכת.",
    services_nutrition2_title: "הדרכת תזונה",
    services_nutrition2_desc:
      "שלוט באמנות האכילה הבריאה עם תוכניות התזונה המקיפות שלנו. מתכנון ארוחות והכוונה בקניות ועד טכניקות בישול וחינוך תזונתי, אנו מעצימים אותך לקבל החלטות מזון מושכלות שתומכות בבריאותך ובמטרותיך.",
    services_mental_title: "בריאות נפשית",
    services_mental_desc:
      "תמיכה מקיפה בבריאות הנפש כולל טיפול, תרגולי מיינדפולנס וטכניקות ניהול מתחים. תוכניות הבריאות הנפשית שלנו עוזרות לך לבנות חוסן ורווחה רגשית.",
    services_sleep_title: "טיפול שינה",
    services_sleep_desc:
      "תוכניות טיפול שינה מתמחות שיעזרו לך להשיג איכות שינה טובה יותר ולהתגבר על נדודי שינה. המומחים שלנו מספקים פתרונות מותאמים ללילות רגועים ובריאות משופרת.",
    services_wellness_title: "אימון בריאות",
    services_wellness_desc:
      "אימון בריאות הוליסטי שיעזור לך להשיג איזון בכל תחומי חייך - פיזי, נפשי ורגשי.",
    services_mental2_title: "בריאות נפשית",
    services_mental2_desc:
      "תמיכה מקיפה בבריאות הנפש כולל טיפול, תרגולי מיינדפולנס וטכניקות ניהול מתחים. תוכניות הבריאות הנפשית שלנו עוזרות לך לבנות חוסן ורווחה רגשית.",
    services_assessments_title: "הערכות בריאות",
    services_assessments_desc:
      "הערכות בריאות מקיפות ומעקב התקדמות למעקב אחר מסע הבריאות וההישגים שלך.",
    services_lifestyle_title: "אימון אורח חיים",
    services_lifestyle_desc:
      "אימון אורח חיים מותאם אישית שיעזור לך ליצור הרגלים ושגרות בריאות. המאמנים שלנו מדריכים אותך בשינויים חיוביים ארוכי טווח בבריאות ובהצלחה.",
    services_symptom_title: "מהם הסימפטומים הנוכחיים שלך?",
    services_symptom_desc:
      "ספר לנו על הסימפטומים שלך ואנו נכוון אותך לשירותי הבריאות המתאימים ביותר.",
    services_symptom_insomnia_title: "נדודי שינה",
    services_symptom_insomnia_desc: "קושי להירדם או להישאר ישן",
    services_symptom_stress_title: "מתח כרוני",
    services_symptom_stress_desc: "דאגה וחרדה מתמשכות",
    services_symptom_fatigue_title: "אנרגיה נמוכה",
    services_symptom_fatigue_desc: "תחושת עייפות וחוסר מוטיבציה",
    services_symptom_weight_title: "בעיות משקל",
    services_symptom_weight_desc: "קושי בניהול משקל",
    services_symptom_backpain_title: "כאבי גב",
    services_symptom_backpain_desc: "כאבים כרוניים בגב ובצוואר",
    services_symptom_digestive_title: "בעיות עיכול",
    services_symptom_digestive_desc: "נפיחות, עיכול לקוי, בעיות במעיים",
    services_symptom_mood_title: "שינויים במצב הרוח",
    services_symptom_mood_desc:
      "שינויים לא סדירים במצב הרוח וחוסר יציבות רגשית",
    services_symptom_headaches_title: "כאבי ראש תכופים",
    services_symptom_headaches_desc: "כאבי ראש מתחים או מיגרנות קבועות",
    services_symptom_find_btn: "מצא שירותים עבור הסימפטומים שלי",
    services_recommended_title: "שירותים מומלצים לסימפטומים שלך",
    services_recommended_desc:
      "בהתבסס על הסימפטומים שלך, שירותים אלה נועדו במיוחד לעזור לך למצוא הקלה ולשפר את בריאותך.",
    services_back_to_symptoms: "← חזרה לסימפטומים",
    services_view_details_btn: "צפה בפרטי השירות",
    services_goal_flexibility_title: "גמישות משופרת",
    services_goal_flexibility_desc:
      "שפר את טווח התנועה וגמישות המפרקים שלך באמצעות תוכניות היוגה והמתיחות המיוחדות שלנו לכל רמות הכושר.",
    services_goal_anxiety_title: "הפחתת חרדה",
    services_goal_anxiety_desc:
      "הפחת רמות מתח ושפר את הבהירות המנטלית עם תרגולי מיינדפולנס, מפגשי מדיטציה וטכניקות ניהול מתחים.",
    services_goal_posture_title: "יציבה טובה יותר",
    services_goal_posture_desc:
      "חזק את שרירי הליבה שלך והשג יישור נכון של עמוד השדרה באמצעות תוכניות תיקון יציבה ומפגשי אימון מיוחדים.",
    services_goal_calm_title: "רוגע פנימי",
    services_goal_calm_desc:
      "השג תחושת שלווה עמוקה ואיזון רגשי באמצעות שיטות הבריאות ההוליסטיות שלנו ותוכניות מדיטציה מודרכות על ידי מומחים.",
    services_tips_title: "טיפים לבריאות ורווחה",
    services_tips_desc:
      "אסטרטגיות פשוטות ויעילות לשיפור שגרת הבריאות היומית שלך ולשיפור הבריאות הכללית.",
    services_tip_hydrated_title: "הישאר hydrated",
    services_tip_hydrated_desc:
      "שתה לפחות 8 כוסות מים ביום לשמירה על תפקוד גוף מיטבי ורמות אנרגיה.",
    services_tip_sleep_title: "שינה איכותית",
    services_tip_sleep_desc:
      "שאב 7-9 שעות שינה בלילה כדי לתמוך בהתאוששות ובהירות מנטלית.",
    services_tip_move_title: "הזז את הגוף כל יום",
    services_tip_move_desc:
      "שלב לפחות 30 דקות של פעילות גופנית בשגרה היומית שלך.",
    services_tip_mindfulness_title: "תרגל מיינדפולנס",
    services_tip_mindfulness_desc:
      "הקדש 10-15 דקות ביום למדיטציה או לתרגילי נשימה עמוקה.",
    services_tip_eat_title: "אכול ארוחות מאוזנות",
    services_tip_eat_desc:
      "התמקד במזונות מלאים, חלבונים רזים והרבה פירות וירקות.",
    services_cta_title: "מוכן לשנות את חייך?",
    services_cta_desc:
      "הצטרף לאלפי אנשים שכבר שיפרו את בריאותם ורווחתם בהדרכת המומחים שלנו ובתוכניות המוכחות שלנו.",
    services_cta_getstarted_btn: "התחל היום",
    services_cta_learnmore_btn: "למידע נוסף",
    services_achieve_title: "מה תוכל להשיג",
    services_achieve_desc:
      "גלה תוצאות מציאותיות ומעוררות השראה משימוש בשירותי הבריאות שלנו. שנה את חייך עם תוצאות מוכחות ושיפורים ברי קיימא.",
    // Impact Metrics
    impact_title_1: "סטודיו לבריאות הוא",
    impact_title_2: "שותף אמין יותר,",
    impact_title_3: "שמקשיב לצרכים שלך",
    impact_desc:
      "אנו מעמיקים במסע הבריאות שלך כדי ליצור חוויה מודרנית ואישית המשקפת את הזהות והמטרות הבריאותיות שלך. הגישה המקיפה שלנו משלבת טכנולוגיית בריאות מתקדמת עם שיטות הוליסטיות מוכחות, ומבטיחה שכל אדם יקבל הדרכה מותאמת לצרכיו הייחודיים. מתוכניות תזונה אישיות ואימון כושר מקצועי ועד אימון מיינדפולנס וטכניקות ניהול מתחים.",
    impact_metric_sessions: "מפגשי בריאות שהושלמו עם טיפול אישי",
    impact_metric_satisfaction: "שיעור שביעות רצון לקוחות עם תוצאות מוכחות",
    impact_metric_support: "תמיכה מקצועית זמינה למסע הבריאות שלך",
    impact_metric_experts: "מאמני בריאות ותזונה מוסמכים",
    // Testimonials
    testimonials_title: "מה המשתמשים שלנו אומרים",
    testimonial_1_quote:
      "הפלטפורמה הזו שינתה את מסע הבריאות שלי. התוכניות האישיות והתמיכה הקהילתית שאין להן תחליף!",
    testimonial_1_name: "אווה פאטל",
    testimonial_1_role: "חובבת יוגה",
    testimonial_2_quote:
      "אני אוהב את ההדרכה המקצועית ואת תוכניות הכושר הקלות. אני מרגיש בריא ובטוח יותר מאי פעם!",
    testimonial_2_name: "ליאם צ'ן",
    testimonial_2_role: "חבר כושר",
    testimonial_3_quote:
      "העצות התזונתיות וטיפים לטיפול בשינה שיפרו מאוד את חיי היומיום שלי. מומלץ בחום!",
    testimonial_3_name: "סופיה גרסיה",
    testimonial_3_role: "מחפשת בריאות",
    testimonial_prev: "המלצה קודמת",
    testimonial_next: "המלצה הבאה",
    // CTA
    cta_title: "מוכן לשנות את חייך?",
    cta_desc:
      "הצטרף לאלפי אנשים שכבר התחילו את מסע הבריאות שלהם איתנו. קבל הדרכה אישית, תמיכה מקצועית וקהילה שאכפת לה מההצלחה שלך.",
    cta_btn_start: "התחל היום",
    cta_btn_learn: "למידע נוסף",
    cta_img_alt: "מסע בריאות",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "en";
    setLanguage(storedLang);
    const handler = (e) => setLanguage(e.detail);
    window.addEventListener("languageChanged", handler);
    return () => window.removeEventListener("languageChanged", handler);
  }, []);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
