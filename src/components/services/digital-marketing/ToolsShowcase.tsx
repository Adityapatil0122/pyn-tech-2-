
import React from "react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ToolsShowcase = () => {
  const toolCategories = [{
    id: "analytics",
    name: "Analytics & Tracking",
    tools: [{
      name: "Google Analytics 4",
      logo: "https://images.unsplash.com/photo-1579547945413-497e1b99f8b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Advanced user behavior tracking and reporting with machine learning insights."
    }, {
      name: "Hotjar",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Heatmaps, session recordings, and user feedback to understand user behavior."
    }, {
      name: "Looker Studio",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Custom data visualization dashboards for comprehensive reporting."
    }, {
      name: "Tag Manager",
      logo: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Centralized tag management for seamless tracking implementation."
    }]
  }, {
    id: "seo",
    name: "SEO Tools",
    tools: [{
      name: "Semrush",
      logo: "https://images.unsplash.com/photo-1607697364093-ef06ef08d9af?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Comprehensive competitor analysis, keyword research, and site auditing."
    }, {
      name: "Ahrefs",
      logo: "https://images.unsplash.com/photo-1576834759835-9a937daa08da?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Backlink analysis, content gap research, and rank tracking tools."
    }, {
      name: "Screaming Frog",
      logo: "https://images.unsplash.com/photo-1612133728302-64bc409e4987?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Website crawler for technical SEO audits and improvements."
    }, {
      name: "Google Search Console",
      logo: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Direct insights from Google about your site's search performance."
    }]
  }, {
    id: "paid",
    name: "Paid Advertising",
    tools: [{
      name: "Google Ads",
      logo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Search, display, video, shopping, and app campaigns with advanced targeting."
    }, {
      name: "Meta Ads Manager",
      logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Facebook and Instagram ad campaigns with detailed demographic targeting."
    }, {
      name: "LinkedIn Campaign Manager",
      logo: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "B2B advertising with professional targeting capabilities."
    }, {
      name: "TikTok Ads",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Reach younger demographics with engaging video ad formats."
    }]
  }, {
    id: "content",
    name: "Content & Automation",
    tools: [{
      name: "HubSpot",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d65?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "All-in-one marketing, sales, and service platform with powerful automation."
    }, {
      name: "ActiveCampaign",
      logo: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Email marketing automation and customer experience management."
    }, {
      name: "Canva",
      logo: "https://images.unsplash.com/photo-1613473060226-dd81153a63db?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Visual content creation for social media and marketing materials."
    }, {
      name: "Hootsuite",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80",
      description: "Social media scheduling and management across multiple platforms."
    }]
  }];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Industry-Leading Marketing Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage the best marketing technologies to deliver exceptional results for your business
          </p>
        </motion.div>
        
        <Tabs defaultValue="analytics" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {toolCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {toolCategories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover:shadow-lg transition-shadow">
                          <div className="h-16 w-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <img src={tool.logo} alt={tool.name} className="h-10 w-10 object-contain" />
                          </div>
                          <h3 className="font-medium">{tool.name}</h3>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <div>
                            <h4 className="text-sm font-semibold">{tool.name}</h4>
                            <p className="text-sm">{tool.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ToolsShowcase;
