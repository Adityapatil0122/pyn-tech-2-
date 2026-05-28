
import React from "react";
import { motion } from "framer-motion";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import Counter from "@/components/Counter";

const ResultsDashboard = () => {
  // Chart data
  const barData = [{
    name: "Jan",
    Organic: 4000,
    Paid: 2400
  }, {
    name: "Feb",
    Organic: 4500,
    Paid: 2800
  }, {
    name: "Mar",
    Organic: 5000,
    Paid: 3000
  }, {
    name: "Apr",
    Organic: 7000,
    Paid: 3300
  }, {
    name: "May",
    Organic: 8500,
    Paid: 3500
  }, {
    name: "Jun",
    Organic: 9800,
    Paid: 3700
  }];
  
  const lineData = [{
    name: "Week 1",
    value: 10
  }, {
    name: "Week 2",
    value: 15
  }, {
    name: "Week 3",
    value: 25
  }, {
    name: "Week 4",
    value: 30
  }, {
    name: "Week 5",
    value: 40
  }, {
    name: "Week 6",
    value: 35
  }, {
    name: "Week 7",
    value: 50
  }, {
    name: "Week 8",
    value: 65
  }];
  
  const pieData = [{
    name: "Social",
    value: 35
  }, {
    name: "Search",
    value: 25
  }, {
    name: "Direct",
    value: 20
  }, {
    name: "Email",
    value: 15
  }, {
    name: "Referral",
    value: 5
  }];
  
  const COLORS = ["#8B5CF6", "#3B82F6", "#10B981", "#F59E0B", "#EF4444"];
  
  const chartConfig = {
    Organic: {
      color: "#3B82F6"
    },
    Paid: {
      color: "#8B5CF6"
    },
    value: {
      color: "#3B82F6"
    },
    Social: {
      color: "#8B5CF6"
    },
    Search: {
      color: "#3B82F6"
    },
    Direct: {
      color: "#10B981"
    },
    Email: {
      color: "#F59E0B"
    },
    Referral: {
      color: "#EF4444"
    }
  };
  
  const metrics = [{
    label: "Increase in Traffic",
    value: "217%"
  }, {
    label: "Conversion Rate",
    value: "12.8%"
  }, {
    label: "Return on Ad Spend",
    value: "570%"
  }, {
    label: "New Leads Generated",
    value: "1240+"
  }];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Real Campaign Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our data-driven approach consistently delivers measurable results across key performance indicators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl font-bold text-pyn-blue mb-2">
                <Counter end={parseInt(metric.value) || 0} duration={2000} suffix={metric.value.replace(/[0-9]/g, '')} />
              </div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChartContainer config={chartConfig} className="bg-white p-6 rounded-lg shadow-lg h-96">
              {/* Wrap children in a fragment to fix the type error */}
              <>
                <h3 className="text-xl font-semibold mb-6">Traffic Growth</h3>
                <ResponsiveContainer width="100%" height="85%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="Organic" fill={chartConfig.Organic.color} />
                    <Bar dataKey="Paid" fill={chartConfig.Paid.color} />
                  </BarChart>
                </ResponsiveContainer>
              </>
            </ChartContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChartContainer config={chartConfig} className="bg-white p-6 rounded-lg shadow-lg h-96">
              {/* Wrap children in a fragment to fix the type error */}
              <>
                <h3 className="text-xl font-semibold mb-6">Conversion Rate Optimization</h3>
                <ResponsiveContainer width="100%" height="85%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke={chartConfig.value.color} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </>
            </ChartContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 mx-auto"
        >
          <ChartContainer config={chartConfig} className="bg-white p-6 rounded-lg shadow-lg h-96">
            {/* Wrap children in a fragment to fix the type error */}
            <>
              <h3 className="text-xl font-semibold mb-6">Traffic Sources</h3>
              <ResponsiveContainer width="100%" height="85%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </>
          </ChartContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsDashboard;
