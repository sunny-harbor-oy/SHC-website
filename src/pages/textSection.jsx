import socialImage from "../assets/blogcard1.jpg";
import office from "../assets/office.jpeg";
import saas from "../assets/saas-blog.jpeg";


function TextSection() {
  return (
    <div className="grid grid-cols-1 mx-6 md:mx-32 gap-y-4 md:gap-y-10 md:grid-cols-5 mb-36">
      <div className="flex items-center justify-center h-full col-span-3 text-white">
        <div class="relative flex bg-clip-border rounded-xl bg-card2 shadow-md w-full flex-col md:flex-row text-white h-full">
          <div class="relative aspect-square md:h-full w-full md:w-2/5 m-0 overflow-hidden bg-white rounded-b-none md:rounded-l-lg md:rounded-r-none bg-clip-border rounded-lg shrink-0">
            <img
              src={socialImage}
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase text-gray-400">
              Arvomme
            </h6>
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Läpinäkyvyyden merkitys ohjelmistokehityksessä
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed">
              Läpinäkyvyys on meille tärkein asia asiakassuhteissa, mutta
              valitettavasti monet toimijat kuitenkin unohtavat tämän usein.
              Meidän tiimimme löysi sen arvokkuuden ennen oman yrityksen
              perustamista. Kun etsit yhteistyökumppania mihin tahansa
              tarpeeseen, varsinkin ulkopuoliselta ja IT-alan toimijalta, muista
              valita toimija läpinäkyvyyden, suorasanaisuuden ja luotettavuuden
              perusteella.
            </p>
            <a href="blogs/shc_transparency " class="inline-block">
              <button
                className="relative z-[3] flex items-center gap-1 text-base text-white text-left py-[1.0vh] px-[1.6vh] shadow-md  bg-secondary transition duration-500 hover:scale-105 hover:bg-ilmoPrimaryColor rounded-lg hover:text-secondary"
                type="button"
              >
                Lue lisää
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="flex items-center justify-center h-full col-span-3 text-white">
        <div class="relative flex bg-clip-border rounded-xl bg-card2 shadow-md w-full flex-col md:flex-row text-white h-full">
          <div class="relative aspect-square md:h-full w-full md:w-2/5 m-0 overflow-hidden bg-white rounded-b-none md:rounded-l-lg md:rounded-r-none bg-clip-border rounded-lg shrink-0">
            <img
              src={office}
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase text-gray-400">
              Sovelluskehitys
            </h6>
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Henkilöstönhallinnointi: Millon se kannattaa automatisoida?
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed">
              Tarpeellisuus työvuorojen jakamisen automatisoinnissa korostuu
              erityisesti suurissa organisaatioissa, missä manuaalinen
              koordinointi aiheuttaa tehottomuutta ja virheitä. Työvuorojen
              jakaminen ohjelmiston avulla tarjoaa tehokkaan tavan koordinoida
              eri työtehtäviä organisaatiossa. Lisäksi se mahdollistaa joustavan
              työvuorojen hallinnan ja parantaa työn tehokkuutta.
            </p>
            <a href="blogs/shc_automatization" class="inline-block">
              <button
                className="relative z-[3] flex items-center gap-1 text-base text-white text-left py-[1.0vh] px-[1.6vh] shadow-md  bg-secondary transition duration-500 hover:scale-105 hover:bg-ilmoPrimaryColor rounded-lg hover:text-secondary"
                type="button"
              >
                Lue lisää
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="flex items-center justify-center h-full col-span-3 text-white">
        <div class="relative flex bg-clip-border rounded-xl bg-card2 shadow-md w-full flex-col md:flex-row text-white h-full">
          <div class="relative aspect-square md:h-full w-full md:w-2/5 m-0 overflow-hidden bg-white rounded-b-none md:rounded-l-lg md:rounded-r-none bg-clip-border rounded-lg shrink-0">
            <img
              src={saas}
              alt="card-image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase text-gray-400">
              Analyysi
            </h6>
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Saas vai täysin räätälöity ratkaisu?
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed">
              SaaS eli “Software as a Service” on liikemalli monille
              ohjelmistoja myyville yrityksille. Hyvä esimerkki on Netflix,
              jolla on kuukausimaksu ja sillä saa käyttöön ohjelmiston, josta
              voit katsoa elokuvia. SaaS-palveluja myydään kuitenkin eniten
              yrityksille. Ne ovat yleensä tehotyökaluja esimerkiksi
              myynnin ja markkinoinnin tehostamis. Kuitenkin SaaS-mallissa on omia
              ongelmia. Jos yritys tarvitsee erittäin omalaatuisia
              ominaisuuksia, SaaS kehittäjiltä on vaikea pyytää sitä. 
            </p>
            <a href="blogs/shc_saas" class="inline-block">
              <button
                className="relative z-[3] flex items-center gap-1 text-base text-white text-left py-[1.0vh] px-[1.6vh] shadow-md  bg-secondary transition duration-500 hover:scale-105 hover:bg-ilmoPrimaryColor rounded-lg hover:text-secondary"
                type="button"
              >
                Lue lisää
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextSection;
