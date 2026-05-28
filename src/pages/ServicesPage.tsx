
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Check, Code, ShoppingCart, Linkedin, Smartphone, Search, Wrench, ListChecks, LayoutDashboard, Rocket, Palette, Eye, Layers, Image, Monitor, MousePointer2, PenTool, BarChart, MessageSquare, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/shared/FAQSection";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

// Service Data Object (including FAQs)
const services = {
  "website-development": {
    title: "Website Development",
    hero: "Modern, responsive websites built for success",
    description: "Our website development services create custom solutions that drive results. From responsive designs to complex web applications, we build websites that stand out.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom Website Development",
      "eCommerce Solutions",
      "WordPress Development",
      "Responsive Design",
      "SEO-Friendly Websites",
      "Website Maintenance"
    ],
    services: [
      {
        title: "Custom Website Development",
        icon: Code,
        description: "Tailor-made websites designed specifically for your business needs. We create unique, high-performance websites that align with your brand and business objectives."
      },
      {
        title: "eCommerce Solutions",
        icon: ShoppingCart,
        description: "Comprehensive online store development with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales potential."
      },
      {
        title: "WordPress Development",
        icon: Linkedin, // Changed from Wordpress to Linkedin as Wordpress isn't available in lucide-react
        description: "Expert WordPress website creation with custom themes, plugins, and optimizations. We build flexible, scalable WordPress solutions that are easy to manage."
      },
      {
        title: "Responsive Design",
        icon: Smartphone,
        description: "Mobile-first websites that provide seamless experiences across all devices. Our responsive designs ensure your site looks and functions perfectly on any screen size."
      },
      {
        title: "SEO-Friendly Websites",
        icon: Search,
        description: "Websites built with search engine optimization in mind, including proper structure, fast loading speeds, and clean code to help improve your search rankings."
      },
      {
        title: "Website Maintenance",
        icon: Wrench,
        description: "Ongoing support and maintenance services to keep your website secure, updated, and performing at its best through regular monitoring and updates."
      }
    ],
    process: [
      { title: "Requirements Analysis", icon: ListChecks, description: "We collect and analyze your needs, goals and target audience." },
      { title: "Planning & Design", icon: LayoutDashboard, description: "Creating wireframes and visual designs to match your brand identity." },
      { title: "Development", icon: Code, description: "Coding your website with clean, optimized code." },
      { title: "Testing", icon: Check, description: "Comprehensive testing across devices and browsers." },
      { title: "Launch", icon: Rocket, description: "Deploying your website and ensuring everything runs smoothly." }
    ],
    faqs: [
      {
        question: "What technologies do you use for website development?",
        answer: "We use modern technologies like React, Next.js, Node.js, and other cutting-edge tools to build robust and scalable websites."
      },
      {
        question: "How long does it take to build a website?",
        answer: "Timeline varies based on complexity, typically 4-8 weeks for standard websites and 8-12 weeks for complex projects."
      },
      {
        question: "Do you provide website maintenance services?",
        answer: "Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally."
      }
    ]
  },
  "app-development": {
    title: "App Development",
    hero: "Custom mobile applications that captivate users",
    description: "We build powerful, feature-rich mobile applications for iOS and Android that provide exceptional user experiences and help your business grow.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom App Development",
      "Cross-platform Solutions",
      "Responsive UI/UX",
      "Push Notifications",
      "Analytics Integration",
      "App Maintenance & Updates"
    ],
    // Adding services array for app-development to match website-development structure
    services: [
      {
        title: "Custom App Development",
        icon: Code,
        description: "Tailor-made mobile applications designed specifically for your business needs that align perfectly with your brand and objectives."
      },
      {
        title: "Cross-platform Solutions",
        icon: Smartphone,
        description: "Build once, deploy everywhere with cross-platform development that saves time and resources while maintaining quality."
      },
      {
        title: "Responsive UI/UX",
        icon: LayoutDashboard,
        description: "Beautiful, intuitive interfaces that provide exceptional user experiences and keep users engaged with your app."
      },
      {
        title: "Push Notifications",
        icon: Search,
        description: "Engage users with timely, relevant notifications that drive app usage and increase customer retention."
      },
      {
        title: "Analytics Integration",
        icon: ListChecks,
        description: "Gain valuable insights into user behavior with powerful analytics tools integrated directly into your application."
      },
      {
        title: "App Maintenance",
        icon: Wrench,
        description: "Ongoing support and updates to keep your app running smoothly, secure, and compatible with the latest OS versions."
      }
    ],
    process: [
      { title: "App Strategy", icon: LayoutDashboard, description: "Defining your app's core features and competitive advantage." },
      { title: "UX/UI Design", icon: Smartphone, description: "Creating intuitive user interfaces with compelling user experiences." },
      { title: "Development", icon: Code, description: "Building the app with robust architecture and clean code." },
      { title: "Testing", icon: Check, description: "Rigorous testing for bugs, usability and performance." },
      { title: "Launch", icon: Rocket, description: "Deploying to app stores and marketing your app." }
    ],
    faqs: [
      {
        question: "What platforms do you develop apps for?",
        answer: "We develop apps for both iOS and Android platforms, as well as cross-platform solutions using technologies like React Native."
      },
      {
        question: "Can you help with app store submission?",
        answer: "Yes, we guide you through the app store submission process and ensure your app meets all requirements."
      },
      {
        question: "Do you offer app maintenance and updates?",
        answer: "Yes, we provide ongoing maintenance and updates to keep your app secure, compatible, and performing optimally."
      }
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    hero: "Data-driven strategies that deliver measurable results",
    description: "Our digital marketing services help you connect with your target audience, build brand awareness, and drive conversions through strategic, measurable campaigns.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Pay-Per-Click (PPC) Advertising",
      "Email Marketing",
      "Content Marketing",
      "Analytics & Reporting"
    ],
    services: [
      {
        title: "Search Engine Optimization",
        icon: Search,
        description: "Improve your website's visibility in search engine results pages (SERPs) to drive more organic traffic."
      },
      {
        title: "Social Media Marketing",
        icon: Instagram,
        description: "Engage with your audience on popular social platforms to build brand awareness and customer loyalty."
      },
      {
        title: "PPC Advertising",
        icon: BarChart,
        description: "Create targeted ad campaigns that deliver immediate results and provide measurable ROI for your business."
      },
      {
        title: "Email Marketing",
        icon: MessageSquare,
        description: "Develop personalized email campaigns that nurture leads and convert prospects into customers."
      },
      {
        title: "Content Marketing",
        icon: PenTool,
        description: "Create valuable content that attracts, engages, and converts your target audience while establishing your authority."
      },
      {
        title: "Analytics & Reporting",
        icon: ListChecks,
        description: "Track campaign performance and gain actionable insights with comprehensive analytics and detailed reports."
      }
    ],
    process: [
      { title: "Market Research", icon: Search, description: "Understanding your audience, competitors and market opportunities." },
      { title: "Strategy Development", icon: LayoutDashboard, description: "Creating a tailored marketing plan with specific KPIs." },
      { title: "Implementation", icon: Code, description: "Executing campaigns across relevant channels." },
      { title: "Monitoring", icon: ListChecks, description: "Continuous tracking of performance metrics." },
      { title: "Optimization", icon: Rocket, description: "Refining strategies based on data insights." }
    ],
    faqs: [
      {
        question: "What digital marketing channels do you specialize in?",
        answer: "We specialize in SEO, social media marketing, PPC advertising, email marketing, and content marketing."
      },
      {
        question: "How do you measure the success of a digital marketing campaign?",
        answer: "We track key performance indicators (KPIs) such as website traffic, conversion rates, and ROI to measure campaign success."
      },
      {
        question: "Can you help with content creation?",
        answer: "Yes, we offer content creation services including blog posts, articles, social media content, and email newsletters."
      }
    ]
  },
  "whatsapp-business": {
    title: "WhatsApp Business API",
    hero: "Powerful messaging solutions for modern businesses",
    description: "Leverage the world's most popular messaging platform to connect with your customers, automate responses, and drive engagement with our WhatsApp Business API solutions.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    features: [
      "WhatsApp Business API Setup",
      "Green Tick Verification",
      "Automated Messaging Flows",
      "Chatbot Development",
      "Campaign Management",
      "Performance Dashboard"
    ],
    services: [
      {
        title: "WhatsApp Business API Setup",
        icon: Smartphone,
        description: "Complete configuration and integration of WhatsApp Business API for your organization."
      },
      {
        title: "Green Tick Verification",
        icon: Check,
        description: "Official verification process to earn the green badge that builds customer trust in your business."
      },
      {
        title: "Automated Messaging",
        icon: Code,
        description: "Set up automated responses and workflows to engage customers efficiently at scale."
      },
      {
        title: "Chatbot Development",
        icon: MessageSquare,
        description: "Custom chatbots powered by AI to handle customer inquiries and provide instant support."
      },
      {
        title: "Campaign Management",
        icon: LayoutDashboard,
        description: "Strategic planning and execution of WhatsApp marketing campaigns to reach your target audience."
      },
      {
        title: "Performance Analytics",
        icon: BarChart,
        description: "Comprehensive reporting and insights to track the effectiveness of your WhatsApp business initiatives."
      }
    ],
    process: [
      { title: "Account Setup", icon: Smartphone, description: "Creating and configuring your WhatsApp Business account." },
      { title: "API Integration", icon: Code, description: "Connecting WhatsApp API with your business systems." },
      { title: "Flow Design", icon: LayoutDashboard, description: "Designing messaging flows and automated responses." },
      { title: "Bot Development", icon: Wrench, description: "Creating conversational chatbots if required." },
      { title: "Launch & Monitor", icon: Rocket, description: "Deploying your solution and tracking performance." }
    ],
    faqs: [
      {
        question: "What is the WhatsApp Business API?",
        answer: "The WhatsApp Business API allows businesses to connect with customers, automate responses, and send notifications via WhatsApp."
      },
      {
        question: "What are the benefits of using the WhatsApp Business API?",
        answer: "Benefits include improved customer engagement, automated support, and increased sales opportunities."
      },
      {
        question: "Can you help with setting up the WhatsApp Business API?",
        answer: "Yes, we offer comprehensive setup and integration services for the WhatsApp Business API."
      }
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    hero: "Creating intuitive digital experiences users love",
    description: "Our UI/UX design services focus on creating intuitive, engaging user experiences that delight your customers and achieve your business objectives.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    features: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ],
    services: [
      {
        title: "User Research",
        icon: Eye,
        description: "Gain deep insights into your users' needs, behaviors, and pain points through comprehensive research."
      },
      {
        title: "Information Architecture",
        icon: LayoutDashboard,
        description: "Organize and structure your content and functionality in a way that's intuitive and user-friendly."
      },
      {
        title: "Wireframing",
        icon: Layers,
        description: "Create the blueprint of your digital product with wireframes that outline layout and functionality."
      },
      {
        title: "Prototyping",
        icon: Smartphone,
        description: "Develop interactive prototypes that simulate the user experience and validate design decisions."
      },
      {
        title: "Visual Design",
        icon: Palette,
        description: "Create stunning visual elements and interfaces that align with your brand and appeal to users."
      },
      {
        title: "Usability Testing",
        icon: MousePointer2,
        description: "Validate designs with real users to identify and resolve usability issues before development."
      }
    ],
    process: [
      { title: "Discovery & Research", icon: Search, description: "Understanding user needs, behaviors and pain points." },
      { title: "Information Architecture", icon: LayoutDashboard, description: "Organizing content and functionality logically." },
      { title: "Wireframing", icon: Layers, description: "Creating structural layout blueprints." },
      { title: "Visual Design", icon: Palette, description: "Developing the visual language and UI elements." },
      { title: "Prototyping & Testing", icon: MousePointer2, description: "Building interactive prototypes and validating with users." }
    ],
    faqs: [
      {
        question: "What is UI/UX design?",
        answer: "UI/UX design focuses on creating user-friendly and engaging digital experiences that meet user needs and business goals."
      },
      {
        question: "What is the process for UI/UX design?",
        answer: "Our process includes user research, information architecture, wireframing, visual design, and usability testing."
      },
      {
        question: "How can UI/UX design benefit my business?",
        answer: "Good UI/UX design can improve user satisfaction, increase conversion rates, and enhance brand loyalty."
      }
    ]
  },
  "graphics-designing": {
    title: "Graphics Designing",
    hero: "Visual storytelling that strengthens your brand",
    description: "Our graphics design services create compelling visuals that communicate your brand message, engage your audience, and set you apart from competitors.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
    features: [
      "Logo Design",
      "Brand Identity",
      "Social Media Graphics",
      "Print Design",
      "Motion Graphics",
      "Packaging Design"
    ],
    services: [
      {
        title: "Logo Design",
        icon: PenTool,
        description: "Create distinctive, memorable logos that capture your brand essence and make a lasting impression."
      },
      {
        title: "Brand Identity",
        icon: Palette,
        description: "Develop comprehensive visual identity systems including colors, typography, and design elements."
      },
      {
        title: "Social Media Graphics",
        icon: Image,
        description: "Design eye-catching visuals optimized for various social platforms to boost engagement."
      },
      {
        title: "Print Design",
        icon: Monitor,
        description: "Create professional business cards, brochures, flyers, and other printed materials."
      },
      {
        title: "Motion Graphics",
        icon: Rocket,
        description: "Bring your brand to life with animated logos, explainer videos, and dynamic content."
      },
      {
        title: "Packaging Design",
        icon: ShoppingCart,
        description: "Design packaging that protects your product and creates a memorable unboxing experience."
      }
    ],
    process: [
      { title: "Brief & Research", icon: ListChecks, description: "Understanding your brand, audience and goals." },
      { title: "Concept Development", icon: LayoutDashboard, description: "Creating initial design concepts and ideas." },
      { title: "Design Creation", icon: Palette, description: "Developing detailed designs based on selected concepts." },
      { title: "Refinement", icon: Wrench, description: "Iterating based on feedback to perfect the design." },
      { title: "Finalization", icon: Check, description: "Delivering final files in appropriate formats." }
    ],
    faqs: [
      {
        question: "What types of graphics design services do you offer?",
        answer: "We offer logo design, brand identity, social media graphics, print design, motion graphics, and packaging design services."
      },
      {
        question: "What is the process for graphics design?",
        answer: "Our process includes brief and research, concept development, design creation, refinement, and finalization."
      },
      {
        question: "How can graphics design benefit my business?",
        answer: "Compelling graphics design can strengthen your brand, engage your audience, and set you apart from competitors."
      }
    ]
  }
};

// Define the types for services data to fix type errors
type ServiceProcess = {
  title: string;
  icon: React.ElementType;
  description: string;
};

type ServiceItem = {
  title: string;
  icon: React.ElementType;
  description: string;
};

type ServiceData = {
  title: string;
  hero: string;
  description: string;
  image: string;
  features: string[];
  services?: ServiceItem[];
  process: ServiceProcess[];
  faqs: Array<{ question: string; answer: string }>;
};

type ServicesType = {
  [key: string]: ServiceData;
};

const ServicesPage = () => {
  const { service } = useParams<{ service: string }>();
  
  // Fix the type casting to be more explicit and safe
  const serviceData = service ? (services as ServicesType)[service] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  // Special rendering for UI/UX and Graphics Design pages
  const isDesignService = service === "ui-ux-design" || service === "graphics-designing";

  if (!serviceData) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6">The service you're looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Special rendering for Digital Marketing page
  if (service === "digital-marketing") {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Gradient Overlay and Floating Elements */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-pyn-dark to-pyn-blue">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pyn-blue rounded-full filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pyn-blue rounded-full filter blur-3xl opacity-20 -ml-32 -mb-32"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-300 rounded-full filter blur-xl opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-pyn-amber rounded-full filter blur-xl opacity-20"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-white mb-10 md:mb-0 animate-fade-in">
                <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">
                  Expert {serviceData.title}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {serviceData.title}
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 mb-8 max-w-xl">
                  {serviceData.hero}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-white text-pyn-darkBlue hover:bg-gray-100 font-medium"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                  >
                    Start Your Campaign
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/clients">
                      View Our Results <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-10">
                <div className="relative perspective-1000">
                  {/* Floating elements animation */}
                  <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-300 rounded-lg rotate-12 animate-float opacity-70"></div>
                  <div className="absolute bottom-10 left-10 w-12 h-12 bg-pyn-amber rounded-full -rotate-12 animate-float-delay opacity-70"></div>
                  
                  <div className="relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-pyn-darkBlue to-pyn-blue opacity-40 backdrop-blur-sm rounded-xl transform rotate-3"></div>
                    <img 
                      src={serviceData.image} 
                      alt={serviceData.title} 
                      className="rounded-xl shadow-xl relative z-10 transform -rotate-3 transition-all duration-500 hover:rotate-0"
                    />
                    
                    {/* Data visualization elements */}
                    <div className="absolute -bottom-5 -right-5 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg transform rotate-6 border border-pyn-amber/20">
                      <div className="flex items-center gap-2">
                        <BarChart className="h-6 w-6 text-pyn-blue" />
                        <div className="text-sm font-semibold text-pyn-dark">+142% ROI</div>
                      </div>
                    </div>
                    
                    <div className="absolute -top-5 -left-5 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-pyn-amber/20">
                      <div className="flex items-center justify-center h-10 w-10">
                        <Search className="h-6 w-6 text-pyn-blue" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data-driven Results Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block bg-pyn-blue/10 text-pyn-darkBlue px-4 py-1 rounded-full text-sm mb-4">
                Proven Results
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Driving Growth Through Data-Driven Marketing</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our digital marketing strategies are built on analytics and insights that drive real business results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-pyn-blue rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-pyn-blue mb-2">250%</h3>
                  <p className="text-lg font-medium mb-1">Average Increase</p>
                  <p className="text-gray-600">in organic search traffic</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-pyn-blue/10">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-pyn-darkBlue rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-pyn-blue mb-2">189%</h3>
                  <p className="text-lg font-medium mb-1">Average Growth</p>
                  <p className="text-gray-600">in conversion rates</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-pyn-blue rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-pyn-blue mb-2">320%</h3>
                  <p className="text-lg font-medium mb-1">Average ROI</p>
                  <p className="text-gray-600">from PPC campaigns</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Services Section with Interactive Card Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block bg-pyn-blue/10 text-pyn-darkBlue px-4 py-1 rounded-full text-sm mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Comprehensive Digital Marketing Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From strategy to execution, we provide end-to-end digital marketing services tailored to your business goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.services?.map((item, index) => (
                <Card key={index} className="border-0 overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-pyn-darkBlue to-pyn-blue rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <ul className="space-y-2">
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span>Targeted Audience Reach</span>
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span>Performance Analytics</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pyn-darkBlue to-pyn-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section with Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-pyn-blue/10 text-pyn-darkBlue px-4 py-1 rounded-full text-sm mb-4">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">The Digital Marketing Journey</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our systematic approach ensures we deliver consistent results for your business.
                </p>
              </div>
              
              <div className="relative">
                {/* Vertical line for timeline */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pyn-lightBlue via-pyn-amber to-pyn-blue"></div>
                
                {/* Process steps */}
                <div className="space-y-20">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                      <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                        <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 hover:border-pyn-blue/30 transition-all duration-300 hover:shadow-pyn-blue/10">
                          <h3 className="text-xl font-bold mb-3 flex items-center text-pyn-darkBlue">
                            {index % 2 === 1 && <step.icon className="h-5 w-5 mr-2" />}
                            {step.title}
                            {index % 2 === 0 && <step.icon className="h-5 w-5 ml-2" />}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline dot with animation */}
                      <div className="z-10 flex items-center justify-center md:w-2/12">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pyn-darkBlue to-pyn-blue flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Empty div for alignment */}
                      <div className="md:w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section with Gradient Cards */}
        <section className="py-20 bg-gradient-to-br from-pyn-gray to-pyn-blue/10 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pyn-blue/10 rounded-full filter blur-3xl opacity-50 -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-pyn-amber/20 rounded-full filter blur-3xl opacity-50 -ml-40 -mb-40"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-pyn-blue/10 text-pyn-darkBlue px-4 py-1 rounded-full text-sm mb-4">
                  Features
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Key Elements of Our Digital Marketing</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Discover what makes our digital marketing services stand out from the competition.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {serviceData.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-pyn-blue/30 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-pyn-darkBlue to-pyn-blue flex-shrink-0">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800">{feature}</h3>
                      <p className="text-gray-600">
                        Our {feature.toLowerCase()} strategies are designed to maximize your digital presence and drive results.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Case Study Highlight */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pyn-blue/10 to-pyn-amber/20 rounded-full filter blur-3xl opacity-60 -mr-20 -mt-20"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs mb-4">
                        Case Study
                      </span>
                      <h3 className="text-2xl font-bold mb-4 text-gray-800">E-Commerce Success Story</h3>
                      <p className="text-gray-600 mb-6">
                        We helped an e-commerce client achieve a 315% increase in revenue through our integrated digital marketing approach.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-12 h-1 bg-pyn-blue/10 rounded-full overflow-hidden mr-3">
                            <div className="h-full w-3/4 bg-pyn-blue rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">75% increase in organic traffic</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-1 bg-pyn-blue/10 rounded-full overflow-hidden mr-3">
                            <div className="h-full w-full bg-pyn-blue rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">220% increase in conversion rate</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-1 bg-pyn-blue/10 rounded-full overflow-hidden mr-3">
                            <div className="h-full w-10/12 bg-pyn-blue rounded-full"></div>
                          </div>
                          <span className="text-sm font-medium">8.5X return on ad spend</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 relative">
                      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                          alt="Digital Marketing Results" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-4 rounded-full bg-white/80 backdrop-blur-sm">
                            <BarChart className="h-10 w-10 text-pyn-blue" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pyn-dark to-pyn-blue text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pyn-blue rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pyn-blue rounded-full filter blur-3xl opacity-30"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to supercharge your digital marketing?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Let's create a data-driven marketing strategy that delivers real business results.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-pyn-darkBlue hover:bg-gray-100 hover:text-pyn-dark font-medium px-8 py-6 h-auto text-lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                >
                  Get a Free Strategy Session
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg"
                  asChild
                >
                  <Link to="/clients">
                    View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {serviceData.faqs && (
          <FAQSection 
            title={`Frequently Asked Questions about ${serviceData.title}`}
            description="Get answers to common questions about our digital marketing services"
            faqs={serviceData.faqs}
          />
        )}

        {/* Final CTA Section with Contact Form Teaser */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pyn-gray rounded-full filter blur-3xl opacity-70 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pyn-amber/10 rounded-full filter blur-3xl opacity-70 -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Start Your Digital Marketing Journey Today</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact us now to discuss your project and learn how our digital marketing services can help you achieve your business goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-pyn-darkBlue to-pyn-blue hover:from-pyn-darkBlue hover:to-pyn-dark text-white"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                  >
                    Schedule a Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-pyn-blue text-pyn-blue hover:bg-pyn-gray"
                    asChild
                  >
                    <Link to="/clients">
                      Browse Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Special rendering for WhatsApp Business API page
  if (service === "whatsapp-business") {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with WhatsApp inspired design */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-700">
          {/* Decorative Chat Bubbles */}
          <div className="absolute top-20 right-10 w-24 h-24 bg-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl backdrop-blur-sm transform rotate-12"></div>
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl backdrop-blur-sm transform -rotate-6"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-tl-xl rounded-tr-xl rounded-br-xl backdrop-blur-sm"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-white mb-10 md:mb-0 animate-fade-in">
                <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4 backdrop-blur-sm">
                  Expert {serviceData.title}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {serviceData.title}
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 mb-8 max-w-xl">
                  {serviceData.hero}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-white text-green-700 hover:bg-gray-100 font-medium"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                  >
                    Start Messaging
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/clients">
                      View Success Stories <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-10">
                <div className="relative">
                  {/* Phone mockup with WhatsApp messages */}
                  <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                      {/* WhatsApp Interface */}
                      <div className="w-full h-full flex flex-col">
                        {/* Header */}
                        <div className="bg-green-600 text-white p-3 flex items-center">
                          <ArrowRight className="w-5 h-5 mr-3" />
                          <div>
                            <p className="font-bold text-sm">Business Support</p>
                            <p className="text-xs opacity-90">Online</p>
                          </div>
                        </div>
                        
                        {/* Chat area */}
                        <div className="flex-1 bg-[#e5ddd5] p-3 flex flex-col space-y-3 overflow-y-auto">
                          <div className="bg-white self-start max-w-[80%] p-2 rounded-lg rounded-tl-none">
                            <p className="text-xs">Hello! How can I help your business today?</p>
                            <p className="text-[10px] text-gray-500 text-right">10:25 AM</p>
                          </div>
                          
                          <div className="bg-[#dcf8c6] self-end max-w-[80%] p-2 rounded-lg rounded-tr-none">
                            <p className="text-xs">I'm interested in WhatsApp Business API for my company</p>
                            <p className="text-[10px] text-gray-500 text-right">10:26 AM</p>
                          </div>
                          
                          <div className="bg-white self-start max-w-[80%] p-2 rounded-lg rounded-tl-none">
                            <p className="text-xs">Great! We can help you set up and maximize the WhatsApp Business API. What's your main goal?</p>
                            <p className="text-[10px] text-gray-500 text-right">10:27 AM</p>
                          </div>
                          
                          <div className="bg-[#dcf8c6] self-end max-w-[80%] p-2 rounded-lg rounded-tr-none">
                            <p className="text-xs">We want to automate customer support and increase sales</p>
                            <p className="text-[10px] text-gray-500 text-right">10:28 AM</p>
                          </div>
                          
                          <div className="bg-white self-start max-w-[80%] p-2 rounded-lg rounded-tl-none">
                            <p className="text-xs">Perfect! Our WhatsApp Business API solutions can help with both. When would you like to schedule a demo?</p>
                            <p className="text-[10px] text-gray-500 text-right">10:29 AM</p>
                          </div>
                        </div>
                        
                        {/* Input area */}
                        <div className="bg-gray-100 p-2 flex items-center">
                          <div className="bg-white flex-1 rounded-full px-3 py-1 flex items-center">
                            <span className="text-xs text-gray-400">Type a message</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-green-600 ml-2 flex items-center justify-center">
                            <MessageSquare className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-4">
                Business Benefits
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Transform Your Customer Communication</h2>
              <p className="text-lg text-gray-600 mb-8">
                WhatsApp Business API enables seamless customer interactions, automated responses, and increased engagement rates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">24/7</h3>
                  <p className="text-lg font-medium mb-1">Customer Support</p>
                  <p className="text-gray-600">automated responses</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">98%</h3>
                  <p className="text-lg font-medium mb-1">Open Rate</p>
                  <p className="text-gray-600">for business messages</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-green-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-600 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">40%</h3>
                  <p className="text-lg font-medium mb-1">Increase</p>
                  <p className="text-gray-600">in customer engagement</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Services Section with Chat Bubble UI */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">WhatsApp Business API Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                From implementation to optimization, we provide comprehensive WhatsApp Business solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.services?.map((item, index) => (
                <Card key={index} className="border-0 overflow-hidden group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 transform rotate-3 rounded-xl transition-all duration-300 group-hover:rotate-0"></div>
                  <CardContent className="p-8 relative">
                    <div className="w-14 h-14 mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-tl-xl rounded-tr-xl rounded-br-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-green-700 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="flex items-center text-green-600 font-medium">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section with Illustrated Steps */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-4">
                  Implementation Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">How We Set Up Your WhatsApp Business API</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our streamlined process ensures a smooth transition to WhatsApp Business API.
                </p>
              </div>
              
              <div className="relative">
                {/* Connecting line for steps */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-100 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-green-200 transition-all duration-300 text-center h-full flex flex-col">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-green-700">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                      
                      {/* Step number */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm border-2 border-white">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Showcase with Chat Interface */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mb-4">
                  Key Features
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">What You Get With WhatsApp Business API</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Discover the powerful features that make WhatsApp Business API essential for modern businesses.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {serviceData.features.slice(0, 3).map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-green-100/50 hover:border-green-200 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-green-600 flex-shrink-0">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-gray-800">{feature}</h3>
                        <p className="text-gray-600 text-sm">
                          Enhance your customer communication with {feature.toLowerCase()} capabilities.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {serviceData.features.slice(3, 6).map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-green-100/50 hover:border-green-200 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-green-600 flex-shrink-0">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2 text-gray-800">{feature}</h3>
                        <p className="text-gray-600 text-sm">
                          Optimize your business operations with powerful {feature.toLowerCase()} tools.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Demo Preview */}
              <div className="mt-16 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-green-700">See It In Action</h3>
                    <p className="text-gray-600 mb-6">
                      Experience how WhatsApp Business API can transform your customer interactions with a personalized demo.
                    </p>
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                    >
                      Request a Demo
                    </Button>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gray-100 p-4 rounded-xl overflow-hidden">
                      <div className="flex flex-col space-y-3">
                        <div className="bg-white self-start max-w-[80%] p-3 rounded-lg rounded-tl-none">
                          <p className="text-sm">Hello! I'd like to know more about your products.</p>
                          <p className="text-xs text-gray-500 text-right">11:25 AM</p>
                        </div>
                        
                        <div className="bg-green-100 self-end max-w-[80%] p-3 rounded-lg rounded-tr-none">
                          <p className="text-sm">Hi there! I'd be happy to help. Would you like to see our latest catalog?</p>
                          <p className="text-xs text-gray-500 text-right">11:26 AM</p>
                        </div>
                        
                        <div className="bg-white self-start max-w-[80%] p-3 rounded-lg rounded-tl-none">
                          <p className="text-sm">Yes, please!</p>
                          <p className="text-xs text-gray-500 text-right">11:26 AM</p>
                        </div>
                        
                        <div className="bg-green-100 self-end max-w-[80%] p-3 rounded-lg rounded-tr-none">
                          <p className="text-sm">Great! Here's our latest catalog. Let me know if you have any questions.</p>
                          <div className="mt-2 bg-gray-200 rounded p-2 text-xs text-center">
                            [Product Catalog PDF]
                          </div>
                          <p className="text-xs text-gray-500 text-right">11:27 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500 to-emerald-700 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start connecting with your customers on WhatsApp today</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses transforming their customer communication with WhatsApp Business API.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-gray-100 hover:text-green-800 font-medium px-8 py-6 h-auto text-lg"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                >
                  Get Started Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 h-auto text-lg"
                  asChild
                >
                  <Link to="/clients">
                    View Success Stories <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {serviceData.faqs && (
          <FAQSection 
            title={`Frequently Asked Questions about ${serviceData.title}`}
            description="Get answers to common questions about WhatsApp Business API"
            faqs={serviceData.faqs}
          />
        )}

        {/* Final CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Ready to transform your business communication?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss how WhatsApp Business API can help you connect with customers in a more personal and efficient way.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                >
                  Request WhatsApp API Access
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  asChild
                >
                  <Link to="/clients">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (isDesignService) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with Gradient and Design Elements */}
        <section className={`relative py-24 overflow-hidden ${service === "ui-ux-design" ? "bg-gradient-to-r from-pyn-darkBlue to-pyn-blue" : "bg-gradient-to-r from-pyn-darkBlue to-pyn-blue"}`}>
          <div className="absolute inset-0 opacity-20 pattern-dots pattern-white pattern-bg-transparent pattern-size-4"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/10 blur-xl"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 text-white mb-10 md:mb-0 animate-fade-in">
                <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
                  Expert {serviceData.title}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {serviceData.title}
                </h1>
                <p className="text-xl md:text-2xl font-light opacity-90 mb-8 max-w-xl">
                  {serviceData.hero}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-white text-pyn-blue hover:bg-gray-100 font-medium"
                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                  >
                    Get Started
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                    asChild
                  >
                    <Link to="/clients">
                      View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-10 animate-slide-in">
                <div className="relative perspective-1000">
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-xl transform rotate-6"></div>
                  <img 
                    src={serviceData.image} 
                    alt={serviceData.title} 
                    className="rounded-xl shadow-xl relative z-10 transform -rotate-3 transition-all duration-500 hover:rotate-0"
                  />
                  {service === "ui-ux-design" && (
                    <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-pyn-blue/30 backdrop-blur-sm rounded-lg shadow-lg transform rotate-12 animate-pulse"></div>
                  )}
                  {service === "graphics-designing" && (
                    <div className="absolute -top-5 -left-5 w-16 h-16 bg-pyn-amber/30 backdrop-blur-sm rounded-full shadow-lg transform -rotate-12 animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Showcase Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative Shapes */}
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full ${service === "ui-ux-design" ? "bg-pyn-blue/10" : "bg-pyn-amber/10"} -mr-20 -mt-20`}></div>
          <div className={`absolute bottom-0 left-0 w-80 h-80 rounded-full ${service === "ui-ux-design" ? "bg-pyn-amber/10" : "bg-pyn-blue/10"} -ml-40 -mb-40`}></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className={`inline-block ${service === "ui-ux-design" ? "bg-pyn-blue/10 text-pyn-darkBlue" : "bg-pyn-amber/20 text-pyn-darkBlue"} px-4 py-1 rounded-full text-sm mb-4`}>
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pyn-dark">Creating Exceptional Design Solutions</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                {serviceData.description}
              </p>
            </div>
            
            {/* Creative Services Grid with Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
              {serviceData.services?.map((item, index) => (
                <Card key={index} className={`border-0 overflow-hidden group relative ${service === "ui-ux-design" ? "hover:bg-pyn-gray" : "hover:bg-pyn-gray"}`}>
                  <div className={`absolute top-0 left-0 w-1 h-full ${service === "ui-ux-design" ? "bg-pyn-blue" : "bg-pyn-blue"} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}></div>
                  <div className={`absolute bottom-0 left-0 w-full h-1 ${service === "ui-ux-design" ? "bg-pyn-blue" : "bg-pyn-blue"} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                  
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${service === "ui-ux-design" ? "bg-pyn-blue/10" : "bg-pyn-amber/20"} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className={`h-8 w-8 ${service === "ui-ux-design" ? "text-pyn-blue" : "text-pyn-darkBlue"}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-4 group-hover:${service === "ui-ux-design" ? "text-pyn-blue" : "text-pyn-darkBlue"} transition-colors`}>{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Design Process Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className={`inline-block ${service === "ui-ux-design" ? "bg-pyn-blue/10 text-pyn-darkBlue" : "bg-pyn-amber/20 text-pyn-darkBlue"} px-4 py-1 rounded-full text-sm mb-4`}>
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pyn-dark">How We Approach {serviceData.title}</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We follow a comprehensive, user-centered design process to ensure exceptional results.
                </p>
              </div>
              
              {/* Creative Process Timeline */}
              <div className="relative">
                {/* Vertical line for timeline with gradient */}
                <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${
                  service === "ui-ux-design" 
                    ? "bg-gradient-to-b from-pyn-lightBlue via-pyn-amber to-pyn-blue" 
                    : "bg-gradient-to-b from-pyn-lightBlue via-pyn-amber to-pyn-blue"
                }`}></div>
                
                {/* Process steps */}
                <div className="space-y-20">
                  {serviceData.process.map((step, index) => (
                    <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                      <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                        <div 
                          className={`
                            bg-white rounded-xl p-8 shadow-lg border ${
                              service === "ui-ux-design" 
                                ? "border-pyn-blue/15 hover:border-pyn-lightBlue" 
                                : "border-pyn-amber/20 hover:border-pyn-amber"
                            } 
                            transition-all duration-500 hover:shadow-xl ${
                              index % 2 === 0 
                                ? "transform hover:-translate-x-2" 
                                : "transform hover:translate-x-2"
                            }
                          `}
                        >
                          <h3 className={`text-xl font-semibold mb-3 flex items-center ${
                            service === "ui-ux-design" ? "text-pyn-darkBlue" : "text-pyn-darkBlue"
                          }`}>
                            {index % 2 === 1 && <step.icon className="h-5 w-5 mr-2" />}
                            {step.title}
                            {index % 2 === 0 && <step.icon className="h-5 w-5 ml-2" />}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                      
                      {/* Timeline dot with animation */}
                      <div className="z-10 flex items-center justify-center md:w-2/12">
                        <div 
                          className={`
                            w-12 h-12 rounded-full ${
                              service === "ui-ux-design" 
                                ? "bg-gradient-to-br from-pyn-blue to-pyn-darkBlue" 
                                : "bg-gradient-to-br from-pyn-amber to-pyn-blue"
                            } 
                            flex items-center justify-center text-white font-bold text-lg 
                            shadow-lg hover:scale-110 transition-transform duration-300
                          `}
                        >
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Empty div for alignment */}
                      <div className="md:w-5/12"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section with Visual Design Elements */}
        <section className={`py-24 ${service === "ui-ux-design" ? "bg-pyn-blue/10" : "bg-pyn-amber/10"} relative overflow-hidden`}>
          {/* Design Elements */}
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full border-4 border-dashed border-opacity-20 border-gray-400 animate-spin-slow"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 rounded-sm transform rotate-45 border-2 border-gray-300 border-opacity-30"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className={`inline-block ${service === "ui-ux-design" ? "bg-pyn-lightBlue/20 text-pyn-darkBlue" : "bg-pyn-amber/30 text-pyn-darkBlue"} px-4 py-1 rounded-full text-sm mb-4`}>
                  Features
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pyn-dark">Key Elements of Our {serviceData.title}</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Discover the components that make our design services exceptional
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {serviceData.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`
                      flex items-start space-x-4 bg-white rounded-xl p-6 
                      shadow-sm border border-gray-100 hover:shadow-lg 
                      transition-all duration-300 hover:border-opacity-0 
                      hover:-translate-y-1 group
                      ${service === "ui-ux-design" ? "hover:bg-gradient-to-br from-pyn-gray to-pyn-blue/10" : "hover:bg-gradient-to-br from-pyn-amber/10 to-pyn-blue/10"}
                    `}
                  >
                    <div className={`
                      p-4 rounded-full flex-shrink-0
                      ${service === "ui-ux-design" ? "bg-pyn-blue/10 text-pyn-blue group-hover:bg-pyn-blue group-hover:text-white" : "bg-pyn-amber/20 text-pyn-darkBlue group-hover:bg-pyn-blue group-hover:text-white"}
                      transition-colors duration-300
                    `}>
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                      <p className="text-gray-600 text-sm">
                        Our {feature.toLowerCase()} services are tailored to your specific business needs and goals.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Interactive Design Showcase */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <h3 className={`text-2xl font-bold mb-4 ${service === "ui-ux-design" ? "text-pyn-darkBlue" : "text-pyn-darkBlue"}`}>
                      See Our Design Process in Action
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We bring creative concepts to life through a systematic approach that ensures quality, consistency, and impact.
                    </p>
                    <ul className="space-y-3">
                      {serviceData.process.slice(0, 3).map((process, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs text-white
                            ${service === "ui-ux-design" ? "bg-pyn-blue" : "bg-pyn-darkBlue"}
                          `}>{index + 1}</span>
                          <span className="font-medium">{process.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative rounded-lg overflow-hidden shadow-lg perspective-1000">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10"></div>
                      <img 
                        src={serviceData.image} 
                        alt="Design Process" 
                        className="w-full h-64 object-cover transition-all duration-500 hover:scale-105" 
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <h4 className="text-white text-xl font-bold">Creative Excellence</h4>
                        <p className="text-white/90 text-sm">Bringing your vision to life</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Testimonial/CTA Section */}
        <section className={`py-20 ${service === "ui-ux-design" ? "bg-gradient-to-r from-pyn-darkBlue to-pyn-blue" : "bg-gradient-to-r from-pyn-amber to-pyn-blue"} text-white`}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with exceptional {serviceData.title}?</h2>
              <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                Let's discuss how we can create a tailored solution that enhances your brand and drives engagement.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button 
                  size="lg" 
                  className="bg-white text-pyn-blue hover:bg-gray-100"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                >
                  Get a Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/clients">
                    View Our Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {serviceData.faqs && (
          <FAQSection 
            title={`Frequently Asked Questions about ${serviceData.title}`}
            description="Get answers to common questions about our services"
            faqs={serviceData.faqs}
          />
        )}

        {/* Final CTA Section with Creative Design Element */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full ${service === "ui-ux-design" ? "bg-pyn-blue/10" : "bg-pyn-amber/10"} bg-opacity-70`}></div>
            <div className={`absolute top-1/2 left-1/3 w-48 h-48 rounded-full ${service === "ui-ux-design" ? "bg-pyn-amber/10" : "bg-pyn-blue/10"} bg-opacity-60`}></div>
            <div className={`absolute -bottom-32 -right-32 w-80 h-80 rounded-full ${service === "ui-ux-design" ? "bg-pyn-blue/10" : "bg-pyn-amber/10"} bg-opacity-50`}></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className={`
              rounded-2xl shadow-xl p-12 max-w-4xl mx-auto
              ${service === "ui-ux-design"
                ? "bg-gradient-to-br from-pyn-gray via-white to-pyn-blue/10 border border-pyn-blue/15"
                : "bg-gradient-to-br from-pyn-gray via-white to-pyn-amber/10 border border-pyn-amber/20"
              }
            `}>
              <div className="text-center">
                <h2 className={`text-3xl font-bold mb-4 ${service === "ui-ux-design" ? "text-pyn-darkBlue" : "text-pyn-darkBlue"}`}>
                  Ready to get started with {serviceData.title}?
                </h2>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your project and how we can help you achieve your design goals.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className={service === "ui-ux-design" ? "bg-pyn-blue hover:bg-pyn-darkBlue" : "bg-pyn-blue hover:bg-pyn-darkBlue"}
                    onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                  >
                    Start Your Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className={service === "ui-ux-design" ? "border-pyn-blue text-pyn-blue hover:bg-pyn-gray" : "border-pyn-blue text-pyn-blue hover:bg-pyn-gray"}
                    asChild
                  >
                    <Link to="/clients">
                      Browse Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Return the default service page for other services
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - with gradient overlay */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-pyn-darkBlue to-pyn-blue">
        <div className="absolute inset-0 opacity-20 pattern-dots pattern-white pattern-bg-transparent pattern-size-4"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0 animate-fade-in">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
                Expert {serviceData.title}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {serviceData.title}
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90 mb-8 max-w-xl">
                {serviceData.hero}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-white text-pyn-blue hover:bg-gray-100 font-medium"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/clients">
                    View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10 animate-slide-in">
              <div className="relative">
                <div className="absolute inset-0 bg-pyn-blue/30 backdrop-blur-sm rounded-xl transform rotate-3"></div>
                <img 
                  src={serviceData.image} 
                  alt={serviceData.title} 
                  className="rounded-xl shadow-xl relative z-10 transform -rotate-3 transition-all duration-500 hover:rotate-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-pyn-blue/10 text-pyn-blue px-4 py-1 rounded-full text-sm mb-4">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pyn-dark">What We Offer</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              {serviceData.description}
            </p>
            
            {/* Services Cards Section with nice hover effects */}
            {serviceData.services && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {serviceData.services.map((item, index) => (
                  <Card key={index} className="border border-gray-100 hover:border-pyn-blue/20 group">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-pyn-blue to-pyn-darkBlue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-pyn-blue transition-colors">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process Section with timeline */}
      <section className="py-20 bg-pyn-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-pyn-blue/10 text-pyn-blue px-4 py-1 rounded-full text-sm mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pyn-dark">How We Work</h2>
              <p className="text-lg text-gray-700 mb-8">
                We follow a structured approach to ensure your {serviceData.title.toLowerCase()} project is delivered successfully.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line for timeline */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-pyn-blue to-pyn-darkBlue"></div>
              
              {/* Process steps */}
              <div className="space-y-12">
                {serviceData.process.map((step, index) => (
                  <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                      <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:border-pyn-blue/30 transition-all duration-300 hover:shadow-xl ${index % 2 === 0 ? 'transform hover:-translate-x-2' : 'transform hover:translate-x-2'}`}>
                        <h3 className="text-xl font-semibold mb-2 flex items-center">
                          {index % 2 === 1 && <step.icon className="h-5 w-5 text-pyn-blue mr-2" />}
                          {step.title}
                          {index % 2 === 0 && <step.icon className="h-5 w-5 text-pyn-blue ml-2" />}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="z-10 flex items-center justify-center md:w-2/12">
                      <div className="w-10 h-10 rounded-full bg-pyn-blue flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Empty div for alignment */}
                    <div className="md:w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section with visuals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-pyn-blue/10 text-pyn-blue px-4 py-1 rounded-full text-sm mb-4">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pyn-dark">Key Benefits</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our {serviceData.title.toLowerCase()} solutions come with these powerful features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {serviceData.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-pyn-blue/20 transition-all duration-300">
                  <div className="bg-gradient-to-br from-pyn-blue to-pyn-darkBlue rounded-full p-3 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600 text-sm">
                      Experience the full potential of {feature.toLowerCase()} with our expert team.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial/CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pyn-darkBlue to-pyn-blue text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your business with expert {serviceData.title.toLowerCase()}?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can create a tailored solution that drives results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-white text-pyn-blue hover:bg-gray-100"
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              >
                Get a Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link to="/clients">
                  View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {serviceData.faqs && (
        <FAQSection 
          title={`Frequently Asked Questions about ${serviceData.title}`}
          description="Get answers to common questions about our services"
          faqs={serviceData.faqs}
        />
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-pyn-gray">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pyn-dark">Ready to get started with {serviceData.title}?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-pyn-blue hover:bg-pyn-darkBlue"
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
              >
                <Link to="/clients">
                  Browse Our Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
