import React, { useState } from 'react';
import { Globe, ShoppingCart, Zap, CheckCircle, Clock, Shield } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Portfolio Websites',
      price: '₹3,999',
      originalPrice: '₹4,999',
      description: 'Professional portfolio websites that showcase your work beautifully',
      features: [
        'Responsive Design',
        'Contact Forms',
        'Gallery Integration',
        'SEO Optimized',
        'Fast Loading'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Websites',
      price: '₹11,999',
      originalPrice: '₹15,999',
      description: 'Complete online stores with payment integration and inventory management',
      features: [
        'Payment Gateway',
        'Product Management',
        'Shopping Cart',
        'Order Tracking',
        'Mobile Friendly'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      popular: true
    }
  ];

  const commonFeatures = [
    { icon: Clock, text: 'Delivered in 10 days' },
    { icon: CheckCircle, text: 'WhatsApp + Paymentgateway Integration + Custom Domain + Admin panel + Authentication' },
    { icon: Shield, text: 'SEO-ready' }
  ];

  const packages = [
    {
      name: 'Basic Website',
      features: '4–5 pages static design, Mobile-friendly, Contact form, Basic SEO',
      price: '₹6,999'
    },
    {
      name: 'E-commerce + Admin Panel (Most Popular)',
      features: 'All Basic features + E-commerce store, Payment gateway, Product management dashboard',
      price: '₹11,999'
    },
    {
      name: 'Advanced Business Website',
      features: 'All Standard features + Unlimited products, Order tracking, User accounts, Advanced analytics dashboard',
      price: '₹18,999'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>My Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What I
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional web development services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                hoveredCard === index ? 'shadow-2xl' : 'shadow-xl hover:shadow-2xl'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              

              <div className={`bg-gradient-to-br ${service.bgGradient} p-8 h-full`}>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/919027723883?text=${encodeURIComponent(
                    `Hi, I'm interested in your ${service.title}. Please share more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 group flex items-center justify-center space-x-2`}
                >
                  <span>Get Started</span>
                  <Zap className="h-5 w-5 group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Common Features */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Included with Every Project</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {commonFeatures.map((feature, index) => (
              <div key={feature.text} className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Website Packages */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Website Packages</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md">
              <thead>
                <tr>
                  <th className="py-3 px-6 bg-gray-100 text-left text-sm font-semibold text-gray-700">Package Name</th>
                  <th className="py-3 px-6 bg-gray-100 text-left text-sm font-semibold text-gray-700">Features Included</th>
                  <th className="py-3 px-6 bg-gray-100 text-left text-sm font-semibold text-gray-700">Price (₹)</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={pkg.name} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className={`py-4 px-6 font-medium ${pkg.name.includes('Most Popular') ? 'text-blue-600' : 'text-gray-900'}`}>
                      {pkg.name}
                      {pkg.name.includes('Most Popular') && (
                        <span className="ml-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Most Popular</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-gray-700">{pkg.features}</td>
                    <td className="py-4 px-6 font-bold text-green-700">{pkg.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;