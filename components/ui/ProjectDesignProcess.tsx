import { useI18n } from "@/lib/i18n-context";
import Link from "next/link";
export default function ProjectDesignProcess() {
  const { t, locale, setLocale } = useI18n()

  return (
    <section id="design" className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t.designStages}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            {t.OurDesignProcess}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-100 hidden md:block" />

          {/* Step 1 */}
          <div className="relative mb-20 md:mb-28 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16 text-right hidden md:block">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                🔎 {t.Audit}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.processAudit}
              </p>
            </div>

            <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full text-xl font-bold shadow-lg items-center justify-center">
              01
            </div>

            <div className="md:w-1/2 md:pl-16 md:hidden mt-10 text-center">
              <h2 className="text-2xl font-semibold mb-4">🔎 {t.Audit}</h2>
              <p className="text-gray-600">
                {t.firststagedesignprocess}
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-20 md:mb-28 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16 hidden md:block"></div>

            <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full text-xl font-bold shadow-lg items-center justify-center">
              02
            </div>

            <div className="md:w-1/2 md:pl-16 text-left mt-10 md:mt-0">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                💼 {t.CommercialProposal}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.auditResults}
                <br /><br />
                {t.commercialProposalMayInclude}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-16 text-right hidden md:block">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                ⚙️ {t.Implementation}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.commercialProposalApproved}
              </p>
            </div>

            <div className="hidden md:flex absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full text-xl font-bold shadow-lg items-center justify-center">
              03
            </div>

            <div className="md:w-1/2 md:pl-16 md:hidden mt-10 text-center">
              <h2 className="text-2xl font-semibold mb-4">⚙️ {t.Implementation}</h2>
              <p className="text-gray-600">
                {t.afterApproval}
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            className="text-sm font-medium"
            href={'#contact'} >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg transition" style={{ cursor: 'pointer' }}
            >
              {t.orderAudit}
            </button></a>
        </div>

      </div>
    </section>
  );
}