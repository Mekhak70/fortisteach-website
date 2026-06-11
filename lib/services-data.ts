// lib/services-data.ts
export interface ServiceDetail {
    title: string
    description: string
    longDescription: string
    shortDescription?: string
    heroTitle?: string
    heroSubtitle?: string
    features: string[]
    benefits: string[]
    technologies?: string[]
    stats?: string[]
    problems?: string[]
    targetAudience?: string[]
    whyChooseUs?: string[]
    faq?: { question: string; answer: string }[]            
    imageColor: string
  }
  
  export const serviceDetails: ServiceDetail[] = [
    {
      title: "IT Infrastructure",
      description: "Modern infrastructure solutions",
      shortDescription: "Scalable, secure, and optimized IT infrastructure for your business.",
      longDescription: "We provide end-to-end IT infrastructure solutions that are scalable, secure, and optimized for performance. Our team designs, implements, and manages infrastructure that grows with your business.",
      features: ["Cloud migration", "Network optimization", "Server management", "Disaster recovery"],
      benefits: ["99.9% uptime guaranteed", "Reduced operational costs", "Enhanced security", "24/7 monitoring"],
      imageColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Ցանցային ծառայություններ",
      
        description: "Ձեր բիզնեսի թվային ենթակառուցվածքի հիմքը",
      
        heroTitle: "Professional Network Solutions",
      
        heroSubtitle:
          "Հուսալի, անվտանգ և մասշտաբավորվող ցանցային լուծումներ բիզնեսի, կազմակերպությունների և առանձնատների համար",
      
        shortDescription:
          "Ժամանակակից ցանցային ենթակառուցվածքների նախագծում, ներդրում, անվտանգություն և տեխնիկական սպասարկում։",
      
        longDescription: `
      FortisTeach-ը տրամադրում է ցանցային տեխնոլոգիաների ամբողջական ծառայություններ՝ նախագծումից մինչև ներդրում, կարգավորում, օպտիմալացում և երկարաժամկետ տեխնիկական սպասարկում։
      
      Մենք ստեղծում ենք բարձր արդյունավետությամբ ցանցային միջավայրեր, որոնք ապահովում են արագություն, անվտանգություն, կայունություն և ապագա ընդլայնման հնարավորություն։
      
      Մեր ծառայությունները ներառում են LAN/WAN ենթակառուցվածքների նախագծում, MikroTik և Enterprise սարքավորումների կարգավորում, VPN լուծումների ներդրում, Wi-Fi համակարգերի կառուցում, ցանցային անվտանգության բարձրացում, տեսահսկման համակարգերի ինտեգրում և գործող ցանցերի ախտորոշում։
      `,
      
        features: [
          "LAN և WAN ցանցերի նախագծում և կառուցում",
          "MikroTik RouterOS պրոֆեսիոնալ կարգավորում",
          "VPN լուծումներ (WireGuard, OpenVPN, L2TP/IPsec)",
          "Site-to-Site VPN",
          "Remote Access VPN",
          "Enterprise Wi-Fi ենթակառուցվածքների նախագծում",
          "Firewall Configuration",
          "Network Security",
          "VLAN և Network Segmentation",
          "QoS և Traffic Management",
          "Load Balancing",
          "Internet Failover",
          "Dynamic Routing",
          "Network Monitoring",
          "IP Camera և CCTV ինտեգրում",
          "Remote Access Solutions",
          "Network Diagnostics",
          "Infrastructure Optimization"
        ],
      
        benefits: [
          "Բարձր արագություն և արտադրողականություն",
          "Անխափան աշխատանք 24/7",
          "Առավելագույն անվտանգություն",
          "Հեռավար կառավարում",
          "Ավելի քիչ downtime",
          "Ապագա ընդլայնման հնարավորություն",
          "Կայուն Wi-Fi ամբողջ տարածքում",
          "Անվտանգ կապ մասնաճյուղերի միջև",
          "Արագ խնդիրների հայտնաբերում",
          "Պրոֆեսիոնալ տեխնիկական աջակցություն"
        ],
      
        technologies: [
          "MikroTik",
          "Cisco",
          "Ubiquiti",
          "TP-Link Omada",
          "Ruijie",
          "Grandstream",
          "Dahua",
          "Hikvision",
          "Synology"
        ],
      
        stats: [
          "99.9% Uptime",
          "24/7 Support",
          "Enterprise Security",
          "Scalable Infrastructure"
        ],
      
        problems: [
          "Ինտերնետը հաճախ ընդհատվում է",
          "Wi-Fi-ը չի ծածկում ամբողջ տարածքը",
          "Տեսախցիկները հասանելի չեն հեռավար",
          "Աշխատակիցները չեն կարող անվտանգ աշխատել հեռավար",
          "Ցանցը դանդաղ է աշխատում",
          "Մասնաճյուղերի միջև կապի խնդիրներ",
          "Հաճախակի ցանցային խափանումներ",
          "Ցանցային անվտանգության բացեր"
        ],
      
        faq: [
          {
            question: "Կարո՞ղ եք կարգավորել MikroTik սարքավորումներ",
            answer:
              "Այո, իրականացնում ենք MikroTik RouterOS համակարգերի ամբողջական կարգավորում, օպտիմալացում և տեխնիկական սպասարկում։"
          },
          {
            question: "Կարո՞ղ եմ հեռախոսով դիտել իմ տեսախցիկները",
            answer:
              "Այո, կարգավորում ենք անվտանգ հեռավար հասանելիություն հեռախոսների, պլանշետների և համակարգիչների համար։"
          },
          {
            question: "Կարո՞ղ եք բարելավել Wi-Fi-ի ծածկույթը",
            answer:
              "Այո, կատարում ենք տարածքի վերլուծություն և նախագծում օպտիմալ Wi-Fi ենթակառուցվածք։"
          },
          {
            question: "Աշխատո՞ւմ եք Հայաստանի մարզերում",
            answer:
              "Այո, ծառայություններ ենք մատուցում ինչպես Երևանում, այնպես էլ Հայաստանի ամբողջ տարածքում։"
          },
          {
            question: "Կարո՞ղ եք արդիականացնել գործող ցանցը",
            answer:
              "Այո, իրականացնում ենք գործող ցանցերի ախտորոշում և արդիականացում՝ առանց ամբողջ ենթակառուցվածքը փոխելու։"
          }
        ],

        targetAudience: [
          "Փոքր և միջին բիզնես",
          "Խոշոր կազմակերպություններ",
          "Գրասենյակներ",
          "Բիզնես կենտրոններ",
          "Հյուրանոցներ",
          "Սրճարաններ և ռեստորաններ",
          "Դպրոցներ և ուսումնական կենտրոններ",
          "Բազմաբնակարան շենքեր",
          "Արտադրական ձեռնարկություններ",
          "Պահեստային համալիրներ",
          "Առանձնատներ և բնակարաններ"
        ],

        whyChooseUs: [
          "Պրոֆեսիոնալ փորձ - Տարիների փորձ ցանցային ենթակառուցվածքների նախագծման և շահագործման ոլորտում",
          "Անհատական մոտեցում - Յուրաքանչյուր նախագիծ մշակվում է հաճախորդի պահանջներին համապատասխան",
          "Ժամանակակից տեխնոլոգիաներ - Օգտագործում ենք միջազգային ստանդարտներին համապատասխան լուծումներ",
          "Անվտանգություն առաջնահերթ - Ցանկացած լուծում նախագծվում է անվտանգության բարձր չափանիշներով",
          "Տեխնիկական աջակցություն - Ապահովում ենք հետագա սպասարկում և խորհրդատվություն նաև նախագծի ավարտից հետո"
        ],
      
        imageColor: "from-blue-500/20 via-indigo-500/20 to-cyan-500/20",
      },
    {
      title: "Network Security",
      description: "Protect your digital assets",
      shortDescription: "Multi-layered security to protect your business from cyber threats.",
      longDescription: "Comprehensive security solutions that protect your business from cyber threats. We implement multi-layered security protocols and continuous monitoring.",
      features: ["Firewall management", "Intrusion detection", "Security audits", "Data encryption"],
      benefits: ["Threat prevention", "Compliance assurance", "Peace of mind", "Risk reduction"],
      imageColor: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions",
      shortDescription: "Expert cloud migration, management, and optimization.",
      longDescription: "Leverage the power of cloud computing with our expert cloud services. We help you migrate, manage, and optimize your cloud infrastructure.",
      features: ["Cloud migration", "Hybrid cloud", "Cloud security", "Cost optimization"],
      benefits: ["Scalability", "Flexibility", "Cost efficiency", "Global reach"],
      imageColor: "from-sky-500/20 to-indigo-500/20",
    },
    {
      title: "Smart Buildings",
      description: "Intelligent building systems",
      shortDescription: "IoT-enabled solutions for smart, efficient buildings.",
      longDescription: "Transform your buildings into smart, efficient spaces with our IoT-enabled solutions. Automate and optimize building operations.",
      features: ["IoT sensors", "Energy management", "Access control", "Lighting automation"],
      benefits: ["Energy savings", "Improved comfort", "Maintenance alerts", "Data insights"],
      imageColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Video Surveillance",
      description: "Advanced security monitoring",
      shortDescription: "AI-powered video surveillance for proactive security.",
      longDescription: "State-of-the-art video surveillance solutions with AI-powered analytics for proactive security management.",
      features: ["HD cameras", "AI analytics", "Remote access", "Motion detection"],
      benefits: ["24/7 monitoring", "Evidence collection", "Deterrence", "Rapid response"],
      imageColor: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Access Control",
      description: "Secure entry management",
      shortDescription: "Modern systems ensuring only authorized access.",
      longDescription: "Modern access control systems that ensure only authorized personnel can access sensitive areas.",
      features: ["Biometric access", "RFID cards", "Mobile credentials", "Audit trails"],
      benefits: ["Enhanced security", "Access logs", "Remote management", "Integration ready"],
      imageColor: "from-amber-500/20 to-yellow-500/20",
    },
    {
      title: "Smart Home",
      description: "Connected living solutions",
      shortDescription: "Integrated automation for comfort, security, and efficiency.",
      longDescription: "Create your ideal smart home with our integrated automation solutions for comfort, security, and energy efficiency.",
      features: ["Voice control", "Automation rules", "Energy monitoring", "Security integration"],
      benefits: ["Convenience", "Energy savings", "Enhanced security", "Future ready"],
      imageColor: "from-green-500/20 to-lime-500/20",
    },
    {
      title: "Water Systems",
      description: "Intelligent water management",
      shortDescription: "Real-time monitoring and control of water usage.",
      longDescription: "Smart water management solutions that monitor, control, and optimize water usage in real-time.",
      features: ["Leak detection", "Usage analytics", "Remote control", "Automated valves"],
      benefits: ["Water conservation", "Cost reduction", "Prevent damage", "Environmental impact"],
      imageColor: "from-cyan-500/20 to-blue-500/20",
    },
  ]