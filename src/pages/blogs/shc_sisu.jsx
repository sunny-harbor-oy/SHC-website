import DescWithImage from "../../elements/blogit/descWithImage.jsx";
import DescWithTitle from "../../elements/blogit/descWithTitle.jsx";
import SubParagraph from "../../elements/blogit/subParagraph.jsx";
import Title from "../../elements/blogit/title.jsx";
import Author from "../../elements/blogit/author.jsx";
import Image from "../../elements/blogit/image.jsx";
import { Helmet } from "react-helmet";

import sisuImg from "../../assets/founders/sisu_blogv2.png"
import talkImg from "../../assets/sisublogtalk.jpeg";

export default function SHC_Sisu() {
  return (
    <div
      id="blog"
      className="bg-white pt-[8vh] md:pt-[18vh] md:pb-[10vh] w-screen"
    >
        <Helmet>
        <title>SHC Tiimi: Sisu Eriksson | Sunny Harbor</title>
        <meta
          name="description"
          content="“I have not failed. I’ve just found 10,000 ways that won’t work.”
          sanoi markkinoille hehkulampun tuonut Thomas Edison aikanaan. Jo
          nuorena aloin toimimaan samalla periaatteella - yritän kunnes
          onnistun ja yritettyä on myös tullut."
        />
        <meta property="og:title" content="SHC Tiimi: Sisu Eriksson" />
        <meta
          property="og:description"
          content="“I have not failed. I’ve just found 10,000 ways that won’t work.”
          sanoi markkinoille hehkulampun tuonut Thomas Edison aikanaan. Jo
          nuorena aloin toimimaan samalla periaatteella - yritän kunnes
          onnistun ja yritettyä on myös tullut."
        />
          <meta property="og:image" content={sisuImg} />
          <meta
    name="keywords"
    content="Sisu Eriksson, SHC Tiimi, Toimitusjohtaja, Ohjelmistokehitys, Koronan aika, Sovellus, Ulkosalit, Treeniohjelma, ShapeVisor, Sunny Harbor Oy, Projekti, Osakeyhtiö, Ohjelmistokehittäjä, Persoona, Arvot, Vuosi 2024"
  />
        <meta
          property="og:url"
          content="https://sunnyharbor.fi/blogs/shc_sisu"
        />
        <meta name="author" content="Sisu Eriksson" />
        <link rel="canonical" href="https://sunnyharbor.fi/blogs/shc_sisu" />
      </Helmet>
      <div className="w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white">
        <Title>
          <h1>SHC Tiimi: Sisu Eriksson</h1>
          <p>Sisu Eriksson, SHC:n toimitusjohtaja</p>
        </Title>
        <DescWithImage kuvaTeksti="Fella pitämässä pussia avaruudessa.">
          <h1>Kuka on Sisu Eriksson?</h1>
          <p>
            “I have not failed. I’ve just found 10,000 ways that won’t work.”
            sanoi markkinoille hehkulampun tuonut Thomas Edison aikanaan. Jo
            nuorena aloin toimimaan samalla periaatteella - yritän kunnes
            onnistun ja yritettyä on myös tullut. Leon Gustafsson, esikoulu
            aikainen ystäväni ja yksi SHC:n perustajista, on ollut aina
            rinnallani kehittämässä näitä ideoita. Välillä nauramme yhdessä
            ajatukselle: “kuinka monesti olemme oikein ideoissamme
            epäonnistuneet?”. Mielestäni emme kuitenkaan koskaan epäonnistuneet,
            sillä jokaisen epäonnistumisen takana on oppi, jonka avulla voit
            kasvaa paremmaksi ihmiseksi, liikekumppaniksi tai yrittäjäksi.
          </p>
          <img
            className="object-cover h-0 max-md:mx-auto md:my-auto aspect-square"
            src={sisuImg}
          />
          <p>Kuvassa </p>
        </DescWithImage>
        <SubParagraph>
          Ohjelmointi astui kuvioihin yhden idean myötä, kun aloitimme
          sovelluksen kehityksen koronan aikaan vuonna 2020. Kuntosali oli
          tuolloin minulle tärkeä harrastus, mutta pandemian vuoksi salit
          jouduttiin sulkemaan. Salien ollessa kiinni sain suihkussa idean
          sovelluksesta, joka näyttäisi kartalla kaikki läheiset ulkosalit,
          juoksuradat, koripallokentät ja muut vastaavat. Myin myös ajoittain
          saliohjelmia ystävilleni, mikä innosti minua kehittämään sovellusta
          edelleen: "Käyttäjä voisi nähdä yhteenvedon ulkosalin laitteistosta.
          Sovellus voisi myös luoda treeniohjelman käyttäjälle sen mukaan, mitä
          lihasryhmiä hän haluaa treenata ja jakaa sen ulkosalin laitteistoon
          sopivaksi." Vaikka itse sanonkin, niin tämä applikaatioidea oli
          loistava erityisesti koronan aiheuttaman liikkumattomuuden takia.
          ShapeVisorin kehitys kuitenkin tyssäsi siihen, että lukiolaisina
          selkäranka, taito eikä aika vain riittäneet kompleksin sovelluksen
          kehittämiseen.
        </SubParagraph>
        <Image>
          <img src={talkImg} className="md:h-[50vh] object-cover" />
        </Image>
        <DescWithTitle>
          <h1>Kuinka Sunny Harbor Oy syntyi?</h1>
          <p>
            13-vuotiaana olin käynyt kahdella ohjelmoinnin peruskurssilla, mutta
            ShapeVisor merkitsi ensimmäistä kunnollista syventymistä alaan.
            ShapeVisorin päätyttyä jatkoin normaalisti Asuntosatama LKV:llä
            töissä, kunnes toimitusjohtaja Erkki Murto-Koivisto tarjosi
            mahdollisuuden minulle ja Victorille toimia Korjausvelkalaskurin
            kehittäjinä. Tietysti ilmoitin asiasta heti Leonille, sillä projekti
            olisi ollut meille kaksin liian suuri haaste. Aiomme kirjoittaa
            Korjausvelkalaskurista kokonaan erillisen tarinan, joten kerron vain
            sen verran, että projekti saatiin suoritettua kunnialla.
          </p>
        </DescWithTitle>
        <SubParagraph>
          Korjausvelkalaskuri oli alku SHC tiimille. Projektin päätyttyä
          ymmärsimme, että tiiminä pystyisimme toteuttamaan samankaltaisia
          projekteja niin, että vain taivas on rajana. Useiden yhteisten vuosien
          ja projektien jälkeen ollaan päädytty tähän tilanteeseen. Osakeyhtiö
          on pystyssä ja meillä on neljän hengen joukko nuoria, osaavia ja
          intohimoisia ohjelmistokehittäjiä tekemässä yrityksille parempaa
          huomista.
        </SubParagraph>
        <SubParagraph>
          Teksti kieltämättä hieman eksyi alkuperäiseltä polulta, sillä tämän
          piti olla esittely vain itsestäni. Toivon kuitenkin, että sain
          välitettyä pienen käsityksen persoonastani ja arvoistani. Kiitos, kun
          luitte. Toivotan teille onnea, energiaa ja iloa vuodelle 2024.
        </SubParagraph>
        <Author>
          <h1>Sisu Eriksson</h1>
          <p>18.01.2024</p>
        </Author>
      </div>
    </div>
  );
}
