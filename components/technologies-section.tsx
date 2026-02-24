"use client"

import { useI18n } from "@/lib/i18n-context"

const technologiesGroupOne = [
  'LAN',
  'VLAN',
  'VPN',
  'L2TP',
  'OpenVPN',
  'WireGuard',
  'Firewall',
  'Routing',
  'Wi-Fi',
]

const technologiesGroupTwo = [
  'Server',
  'Hypervisor',
  'Virtualization',
  'RAID',
  'NAS',
  'Web Server',
  'Backup',
  'Snapshot'
]

const technologiesGroupThree = [
  'Access Control',
  'User Permissions',
  'Data Encryption',
  'Secure Backup',
  'Network Security',
  'Monitoring'
]

const technologiesGroupSeven = [
  'Active Directory',
  'Group Policy',
  'Centralized Management',
  'Remote Support',
  'IT Monitoring',
]

const technologiesGroupFour = [
  'Cloud',
  'Hybrid Infrastructure',
  'Cloud Backup',
  'Offsite Backup'
]

const technologiesGroupFive = [
  'CCTV',
  'IP Camera',
  'NVR',
  'DVR',
  'Smart Home',
  'Remote View',
]

const technologiesGroupSix = [
  'MikroTik',
  'TP-Link',
  'Cisco',
  'Ubiquiti'
]

export function TechnologiesSection() {
  const { t } = useI18n()

  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16 text-balance">
          {t.technologies.title}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
          🌐 Ցանցեր և VPN
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {technologiesGroupOne.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              {tech}
            </span>
          ))}
          </div>
          <div style={{paddingTop:'30px'}}>

          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
            🖥 Սերվերներ և Վիրտուալիզացիա
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologiesGroupTwo.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          </div>
          <div style={{paddingTop:'30px'}}>

          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
            🔐 Անվտանգություն և Պաշտպանություն
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologiesGroupThree.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          </div>
          <div style={{paddingTop:'30px'}}>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
            🧠 Կառավարում և Կորպորատիվ ՏՏ
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologiesGroupSeven.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          </div>
          <div style={{paddingTop:'30px'}}>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
            ☁️ Cloud & Հիբրիդ լուծումներ
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologiesGroupFour.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          </div>
          <div style={{paddingTop:'30px'}}>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
            📹 Տեսահսկում և Smart լուծումներ
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologiesGroupFive.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          </div>
          <div style={{paddingTop:'30px'}}>
          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8 text-balance">
            🧰 Սարքավորումներ և Բրենդներ
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologiesGroupSix.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
