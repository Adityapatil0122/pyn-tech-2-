
import { GraduationCap, Users, CreditCard, CalendarCheck, Bell, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const StudyRoomManagement = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-pyn-blue" />,
      title: "Student Management",
      description: "Efficiently manage student profiles, attendance, and performance tracking"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-pyn-blue" />,
      title: "Fee Management",
      description: "Streamline fee collection, generate receipts, and track payment history"
    },
    {
      icon: <Layout className="h-6 w-6 text-pyn-blue" />,
      title: "Seat Management",
      description: "Monitor and manage seat allocation, availability, and reservations"
    },
    {
      icon: <Bell className="h-6 w-6 text-pyn-blue" />,
      title: "Notifications & Reminders",
      description: "Automated alerts for fee dues, renewals, and important announcements"
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-pyn-blue" />,
      title: "Renewal Management",
      description: "Handle subscription renewals and membership extensions seamlessly"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-pyn-blue" />,
      title: "Admin Dashboard",
      description: "Comprehensive dashboard for monitoring and managing all operations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Updated to match clients page style */}
      <section className="bg-pyn-blue text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Study Room Management App <span className="opacity-90">(Coming Soon)</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            A comprehensive SaaS solution designed specifically for Abhyasika and study halls
            to streamline operations and enhance student experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Powerful Features for Study Hall Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow before:hidden shadow-md">
                <div className="flex flex-col items-start">
                  <div className="mb-4 p-2 bg-pyn-blue/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyRoomManagement;
