import SubParagraph from "../../elements/blogit/subParagraph.jsx";
import Title from "../../elements/blogit/title.jsx";
import Author from "../../elements/blogit/author.jsx";
import Image from "../../elements/blogit/image.jsx";
import talkImg from "../../assets/sisublogtalk.jpeg";
import saas from "../../assets/saas-blog.jpeg";
import { Helmet } from "react-helmet";

export default function SHC_saas() {
  return (
    <div
      id="blog"
      className="bg-white pt-[8vh] md:pt-[18vh] md:pb-[10vh] w-screen"
    >
      <Helmet>
        <title>SaaS vai täysin räätälöity ratkaisu?</title>
        <meta
          name="description"
          content="   Toisaalta ohjelmistoa tarvitseva yritys voi itse kehittää, ostaa tai
          teettää ohjelmiston, varsinkin jos yritys tarvitsee ohjelmistoa
          pitkäksi aikaa. Ohjelmistoa hankkiessa yritykset/yrittäjät joutuvat
          päättämään maksavatko ne SaaS-ohjelmistosta tai hankkivatko täysin
          räätälöidyn ohjelmiston. Yleensä täysin räätälöity ohjelmisto pitää
          teettää joltain ohjelmistokehitysyritykseltä (kuten Sunny Harborilta"
        />
        <meta
          property="og:title"
          content="SaaS vai täysin räätälöity ratkaisu?"
        />
        <meta
          property="og:description"
          content="   Toisaalta ohjelmistoa tarvitseva yritys voi itse kehittää, ostaa tai
          teettää ohjelmiston, varsinkin jos yritys tarvitsee ohjelmistoa
          pitkäksi aikaa. Ohjelmistoa hankkiessa yritykset/yrittäjät joutuvat
          päättämään maksavatko ne SaaS-ohjelmistosta tai hankkivatko täysin
          räätälöidyn ohjelmiston. Yleensä täysin räätälöity ohjelmisto pitää
          teettää joltain ohjelmistokehitysyritykseltä (kuten Sunny Harborilta"
        />
        <meta property="og:image" content={saas} />
        <meta
          name="keywords"
          content="SaaS, räätälöity ratkaisu, ohjelmistokehitys, yritys, ohjelmisto, kehittäminen, ostaminen, teettäminen, liikemalli, kuukausimaksu, Netflix, tehotyökalu, myynti, markkinointi, käyttöönotto, kustannustehokkuus, päivitykset, asiakkaan hallinnassa"
        />
        <meta
          property="og:url"
          content="https://sunnyharbor.fi/blogs/shc_saas"
        />
        <meta name="author" content="Victor Ocampo" />
        <link rel="canonical" href="https://sunnyharbor.fi/blogs/shc_saas" />
      </Helmet>
      <div className="w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white">
        <Title>
          <h1>SaaS vai täysin räätälöity ratkaisu?</h1>
        </Title>
        <SubParagraph>
          SaaS eli “Software as a Service” on liikemalli monille ohjelmistoja
          myyville yrityksille. Hyvä esimerkki tästä on Netflix: Netflixillä on
          kuukausimaksu ja sillä saa käyttöön ohjelmiston, josta voi katsoa
          elokuvia. SaaS-palveluja myydään kuitenkin yleensä yrityksille, toisin
          kuin Netflix. Ne ovat yleensä yrityksille tehotyökaluja esimerkiksi
          myyntiä ja markkinointia varten.
        </SubParagraph>
        <br />
        <SubParagraph>
          Toisaalta ohjelmistoa tarvitseva yritys voi itse kehittää, ostaa tai
          teettää ohjelmiston, varsinkin jos yritys tarvitsee ohjelmistoa
          pitkäksi aikaa. Ohjelmistoa hankkiessa yritykset/yrittäjät joutuvat
          päättämään maksavatko ne SaaS-ohjelmistosta tai hankkivatko täysin
          räätälöidyn ohjelmiston. Yleensä täysin räätälöity ohjelmisto pitää
          teettää joltain ohjelmistokehitysyritykseltä (kuten Sunny Harborilta
          🙂).
        </SubParagraph>
        <Image>
          <img src={saas} className="md:h-[50vh] object-cover" />
        </Image>
        <SubParagraph>
          SaaS ratkaisussa seuraavat asiat ovat positiivisia puolia:
        </SubParagraph>
        <SubParagraph>
          <ul className="list-disc">
            <li>
              <strong>Matala kynnys käyttöönotossa</strong>
              <ul>
                <li>
                  SaaS-ohjelmistot ovat jo kehitettyjä ohjelmistoja, joten
                  niiden käyttöönotto on lähtökohtaisesti helppoa.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Ohjelmisto oletettavasti toimii heti käyttöönotosta
              </strong>
              <ul>
                <li>
                  SaaS-ohjelmistoilla on harvoin “kasvukipuja”, eli siis niillä
                  on harvoin suuria teknisiä vikoja, joita ilmenee käyttöönoton
                  yhteydessä, sillä SaaS-ohjelmistoja ollaan käytetty paljon
                  muiden asiakkaiden toimesta.
                </li>
              </ul>
            </li>
            <li>
              <strong>Kustannustehokkuus (lyhyellä aikavälillä)</strong>
              <ul>
                <li>
                  SaaS-ohjelmiston käyttö on lähes aina halvempaa lyhyellä
                  aikavälillä kuin kokonaisen ohjelmiston ostaminen. Se on
                  varsinkin halvempaa kuin räätälöidyn ohjelmiston kehittäminen.
                  Toisaalta jos jotain
                </li>
              </ul>
            </li>
            <li>
              <strong>Automaattiset päivitykset</strong>
              <ul>
                <li>
                  Kun ostat ohjelmiston tai itse kehität sen päivitykset
                  maksavat yhtä paljon - jos ei enemmän - kuin kehittäminen.
                  SaaS-ohjelmistoihin tulee yleensä päivityksiä jatkuvasti,
                  joten niistä ei tarvitse huolehtia.
                </li>
              </ul>
            </li>
          </ul>
        </SubParagraph>
        <SubParagraph>
          <br /> <br />
          Toisaalta räätälöidyn digitaalisen työkalun teettäminen
          ohjelmstokehittäjältä voi olla hyvä päätös:
        </SubParagraph>
        <SubParagraph>
          <ul className="list-disc">
            <li>
              <strong>Ohjelmisto on täysin räätälöitävissä</strong>
              <ul>
                <li>
                  Sillä ohjelmisto kehitetään vain ja ainoastaan teidän yritystä
                  varten sen ominaisuudet täysin perustuvat teidän tarpeisiin.
                  SaaS-ohjelmisto ei välttämättä vastaa yrityksenne tarpeisiin
                  kokonaan, joten tällöin räätälöidyn ohjelmiston hankkiminen
                  voi olla tarpeen.
                </li>
              </ul>
            </li>
            <li>
              <strong>Ohjelmiston käyttö loppuiäksi</strong>
              <ul>
                <li>
                  SaaS-ohjelmistot ostetaan “palveluna”, eli niistä pitää maksaa
                  tietyin väliajoin. Kun hankit ohjelmiston kokonaisuudessa saat
                  sen ohjelmiston itsellesi (tietysti sopimuksesta riippuen),
                  joten saat oikeuden ohjelmiston käyttöön ikiajoiksi.
                </li>
              </ul>
            </li>
            <li>
              <strong>Päivitykset ovat asiakkaan hallinnassa</strong>
              <ul>
                <li>
                  Ärsyttääkö uudet päivitykset Slackiin tai Windowsiin tai mihin
                  tahansa muuhun ohjelmaan? Tunteen tajuaa varmasti kaikki
                  tietokoneen käyttäjät. Tällaista tunnetta ei kuitenkaan tule
                  itselle räätälöidyn ohjelmiston kanssa, sillä kehitys on
                  täysin asiakkaan käsissä.
                </li>
              </ul>
            </li>
            <li>
              <strong>Kustannustehokkuus pitkällä aikavälillä</strong>
              <ul>
                <li>
                  SaaS-ohjelmiston hinta voi nousta rajusti, joten niistä
                  riippuminen päivittäisessä liiketoiminnassa voi koitua koko
                  liiketoiminnalle vaaraksi. Pitkällä aikavälillä ohjelmiston
                  hankkiminen itselle voi koitua halvimmaksi vaihtoehdoksi,
                  sillä maksut ovat aluksi suuria, mutta sen jälkeen vähäisiä.
                  Yleensä jäät kuitenkin maksamaan ohjelmiston ylläpidosta,
                  joten varmista, että ylläpito paketti räätälöityyn
                  ohjelmistoon on hyvä.
                </li>
              </ul>
            </li>
          </ul>
        </SubParagraph>
        <SubParagraph>
          Hyviä (ja huonoja) puolia löytyy varmasti lisää molemmille puolille.
        </SubParagraph>
        <SubParagraph>
          Jos yrityksesi pohtii näiden kahden mallin välillä, voimme auttaa!
          Ottakaa yhteyttä ja voimme vaikka pitää palaverin.
        </SubParagraph>
        <Author>
          <h1>Victor Ocampo</h1>
          <p>02.05.2024</p>
        </Author>
      </div>
    </div>
  );
}
