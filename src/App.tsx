
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

// Components
import Layout from "./components/layout/Layout";

// Pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ClientsPage = React.lazy(() => import("./pages/ClientsPage"));
const BlogsPage = React.lazy(() => import("./pages/BlogsPage"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// AI Pages
const AIChatbots = React.lazy(() => import("./pages/ai/AIChatbots"));
const CustomAISolutions = React.lazy(() => import("./pages/ai/CustomAISolutions"));
const AIIntegration = React.lazy(() => import("./pages/ai/AIIntegration"));
const DataAnalytics = React.lazy(() => import("./pages/ai/DataAnalytics"));
const AISolutions = React.lazy(() => import("./pages/ai/AISolutions"));

// Service Pages
const WebsiteDevelopment = React.lazy(() => import("./pages/services/website-development"));
const AppDevelopment = React.lazy(() => import("./pages/services/app-development"));
const DigitalMarketing = React.lazy(() => import("./pages/services/digital-marketing"));
const WhatsAppBusiness = React.lazy(() => import("./pages/services/whatsapp-business"));
const UiUxDesign = React.lazy(() => import("./pages/services/ui-ux-design"));
const GraphicsDesigning = React.lazy(() => import("./pages/services/graphics-designing"));
const StudyRoomManagementPage = React.lazy(() => import("./pages/services/study-room-management"));

// Legal Pages
const PrivacyPolicy = React.lazy(() => import("./pages/legal/PrivacyPolicy"));
const TermsOfService = React.lazy(() => import("./pages/legal/TermsOfService"));
const CookiePolicy = React.lazy(() => import("./pages/legal/CookiePolicy"));

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/clients" element={<ClientsPage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/blogs/:id" element={<BlogPost />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* AI Solution Pages */}
                  <Route path="/ai/chatbots" element={<AIChatbots />} />
                  <Route path="/ai/custom-solutions" element={<CustomAISolutions />} />
                  <Route path="/ai/integration" element={<AIIntegration />} />
                  <Route path="/ai/analytics" element={<DataAnalytics />} />
                  <Route path="/ai/solutions" element={<AISolutions />} />
                  
                  {/* Service Pages */}
                  <Route path="/services/website-development" element={<WebsiteDevelopment />} />
                  <Route path="/services/app-development" element={<AppDevelopment />} />
                  <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                  <Route path="/services/whatsapp-business" element={<WhatsAppBusiness />} />
                  <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
                  <Route path="/services/graphics-designing" element={<GraphicsDesigning />} />
                  <Route path="/products/study-room" element={<StudyRoomManagementPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
