// app/services/[id]/page.tsx
'use client';

import { serviceDetails } from '@/lib/services-data';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Wifi, Shield, Cloud, Home, Video, Key, Droplets, Server, Cpu, Activity, AlertTriangle, HelpCircle, Users, Star } from 'lucide-react';

// Icons map for different services
const iconMap: Record<string, React.ReactNode> = {
  "IT Infrastructure": <Server className="h-12 w-12" />,
  "Ցանցային ծառայություններ": <Wifi className="h-12 w-12" />,
  "Network Security": <Shield className="h-12 w-12" />,
  "Cloud Services": <Cloud className="h-12 w-12" />,
  "Smart Buildings": <Home className="h-12 w-12" />,
  "Video Surveillance": <Video className="h-12 w-12" />,
  "Access Control": <Key className="h-12 w-12" />,
  "Smart Home": <Home className="h-12 w-12" />,
  "Water Systems": <Droplets className="h-12 w-12" />,
};

const getIcon = (title: string) => {
  return iconMap[title] || <Server className="h-12 w-12" />;
};

export default function ServicePage() {
  const { id } = useParams();
  const index = parseInt(id as string);
  const service = serviceDetails[index];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/" className="text-indigo-400 hover:text-indigo-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className={`relative min-h-[40vh] bg-gradient-to-r ${service.imageColor} overflow-hidden`}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center py-20">
          <div className="text-center px-4">
            <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl backdrop-blur-sm mb-6">
              {getIcon(service.title)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {service.heroTitle || service.title}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {service.heroSubtitle || service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <Link 
          href="/#services" 
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Բոլոր ծառայությունները
        </Link>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Նկարագրություն</h2>
          <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
            {service.longDescription}
          </p>
        </div>

        {/* Target Audience Section */}
        {service.targetAudience && service.targetAudience.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Ում համար են նախատեսված մեր ծառայությունները</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.targetAudience.map((audience, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-gray-300 text-sm hover:bg-indigo-500/20 transition-colors"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        

        {/* Stats Section */}
        {service.stats && service.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {service.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
                <Activity className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-white font-bold text-lg">{stat}</p>
              </div>
            ))}
          </div>
        )}

        {/* Problems We Solve Section */}
        {service.problems && service.problems.length > 0 && (
          <div className="bg-red-500/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Մենք լուծում ենք հետևյալ խնդիրները</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {service.problems.map((problem, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features & Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Հնարավորություններ</h2>
            </div>
            <div className="space-y-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Առավելություններ</h2>
            </div>
            <div className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        {service.technologies && service.technologies.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Cpu className="h-5 w-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Տեխնոլոգիաներ</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-300 text-sm hover:bg-indigo-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

{service.whyChooseUs && service.whyChooseUs.length > 0 && (
          <div className="bg-gradient-to-r from-amber-500/5 to-orange-500/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Star className="h-5 w-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Ինչու ընտրել FortisTeach-ը</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.whyChooseUs.map((reason, idx) => {
                // Split the reason into title and description if it contains ' - '
                const parts = reason.split(' - ');
                const title = parts[0];
                const description = parts.slice(1).join(' - ');
                
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                    <div className="h-6 w-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-500/30 transition-colors">
                      <div className="h-2 w-2 rounded-full bg-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{title}</h3>
                      {description && (
                        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Հաճախ տրվող հարցեր</h2>
            </div>
            <div className="space-y-4">
              {service.faq.map((item, idx) => (
                <details key={idx} className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <span className="font-medium text-white">{item.question}</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-gray-300 p-4 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl p-12 border border-indigo-500/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Պատրա՞ստ եք սկսել
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Կապվեք մեզ հետ այսօր և ստացեք անվճար նախնական խորհրդատվություն
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Կապվել մեզ հետ
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  );
}