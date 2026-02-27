export default function ProjectDesignProcess() {
    return (
      <section id="design" className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
  
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Նախագծման փուլերը
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Մեր նախագծման գործընթացը կառուցված է հստակ և համակարգված
              փուլերով՝ ապահովելու բարձր որակ, վերահսկելիություն և
              կանխատեսելի արդյունք յուրաքանչյուր հաճախորդի համար։
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
                  🔎 Աուդիտ
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Նախագծման առաջին փուլը աուդիտի իրականացումն է։
                  Ուսումնասիրվում է կազմակերպության ՏՏ ենթակառուցվածքը,
                  բացահայտվում են առկա խնդիրներն ու հնարավոր ռիսկերը,
                  որից հետո առաջարկվում են համապատասխան լուծումների տարբերակներ։
                </p>
              </div>
  
              <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                01
              </div>
  
              <div className="md:w-1/2 md:pl-16 md:hidden mt-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">🔎 Աուդիտ</h2>
                <p className="text-gray-600">
                  Նախագծման առաջին փուլը աուդիտի իրականացումն է։
                  Ուսումնասիրվում է ՏՏ ենթակառուցվածքը և առաջարկվում են լուծումներ։
                </p>
              </div>
            </div>
  
            {/* Step 2 */}
            <div className="relative mb-20 md:mb-28 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 hidden md:block"></div>
  
              <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                02
              </div>
  
              <div className="md:w-1/2 md:pl-16 text-left mt-10 md:mt-0">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  💼 Գնային առաջարկ
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Աուդիտի արդյունքների հիման վրա ձևավորվում է անհատական
                  գնային առաջարկ։ Այն կախված է խնդիրների ծավալից,
                  օգտագործվող տեխնիկայի և սերվերների քանակից, ինչպես նաև
                  սպասարկման անհրաժեշտությունից։
                  <br /><br />
                  Գնային առաջարկը կարող է ներառել ինչպես միանվագ
                  աշխատանքներ, այնպես էլ ամսական սպասարկման ծառայություն։
                  Պատրաստ լինելուց հետո այն ուղարկվում է հաճախորդին
                  հաստատման համար։
                </p>
              </div>
            </div>
  
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 text-right hidden md:block">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  ⚙️ Իրականացում
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Գնային առաջարկը հաստատելուց հետո իրականացվում են
                  առաջարկում ներառված բոլոր աշխատանքները՝ համաձայնեցված
                  ժամկետների և տեխնիկական պահանջների համապատասխան։
                  Անհրաժեշտության դեպքում ապահովվում է նաև հետագա
                  տեխնիկական աջակցություն և սպասարկում։
                </p>
              </div>
  
              <div className="absolute md:left-1/2 transform md:-translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                03
              </div>
  
              <div className="md:w-1/2 md:pl-16 md:hidden mt-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">⚙️ Իրականացում</h2>
                <p className="text-gray-600">
                  Հաստատումից հետո իրականացվում են բոլոր աշխատանքները՝
                  համաձայնեցված տեխնիկական պահանջներով։
                </p>
              </div>
            </div>
  
          </div>
  
          {/* CTA */}
          <div className="text-center mt-24">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg transition">
              Պատվիրել աուդիտ
            </button>
          </div>
  
        </div>
      </section>
    );
  }