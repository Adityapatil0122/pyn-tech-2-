
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Globe, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TechnicalSpecs = () => {
  return <section className="mb-20">
      <div className="text-center mb-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} viewport={{
        once: true
      }}>
          <Badge variant="outline" className="mb-2 px-3 py-1 text-sm bg-pyn-blue/10 text-pyn-blue border-none">Technical Details</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Technical Approach</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base">
            We leverage the latest technologies and frameworks to build robust, 
            scalable, and maintainable AI solutions.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0
      }} viewport={{
        once: true
      }}>
          <Card className="border border-slate-200 h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-pyn-blue/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-pyn-blue" />
              </div>
              <CardTitle>Security & Compliance</CardTitle>
              <CardDescription>Enterprise-grade security for your AI solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">End-to-end data encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">GDPR, CCPA, and HIPAA compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Regular security audits and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Role-based access controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Data anonymization capabilities</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} viewport={{
        once: true
      }}>
          <Card className="border border-slate-200 h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-pyn-amber/20 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-pyn-blue" />
              </div>
              <CardTitle>Scalable Architecture</CardTitle>
              <CardDescription>Built to grow with your business needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Microservices architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Containerized deployment (Docker)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Horizontal and vertical scaling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Cloud-native design patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Multi-region deployment options</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} viewport={{
        once: true
      }}>
          <Card className="border border-slate-200 h-full">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-pyn-amber/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-pyn-darkBlue" />
              </div>
              <CardTitle>Integration Capabilities</CardTitle>
              <CardDescription>Seamless connection with your ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">RESTful and GraphQL APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Webhooks and event-driven architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Enterprise system connectors (SAP, Salesforce, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Database integration (SQL and NoSQL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">Legacy system compatibility</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>;
};
