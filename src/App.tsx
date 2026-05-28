
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
import HomePage from "./pages/HomePage";
import ClientsPage from "./pages/ClientsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// AI Pages
import AIChatbots from "./pages/ai/AIChatbots";
import CustomAISolutions from "./pages/ai/CustomAISolutions";
import AIIntegration from "./pages/ai/AIIntegration";
import DataAnalytics from "./pages/ai/DataAnalytics";
import AISolutions from "./pages/ai/AISolutions";

// Service Pages
import WebsiteDevelopment from "./pages/services/website-development";
import AppDevelopment from "./pages/services/app-development";
import DigitalMarketing from "./pages/services/digital-marketing";
import WhatsAppBusiness from "./pages/services/whatsapp-business";
import UiUxDesign from "./pages/services/ui-ux-design";
import GraphicsDesigning from "./pages/services/graphics-designing";
import StudyRoomManagementPage from "./pages/services/study-room-management";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";

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
