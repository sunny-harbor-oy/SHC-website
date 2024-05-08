import DescWithImage from "../../elements/blogit/descWithImage.jsx";
import DescWithTitle from "../../elements/blogit/descWithTitle.jsx";
import SubParagraph from "../../elements/blogit/subParagraph.jsx";
import Title from "../../elements/blogit/title.jsx";
import Author from "../../elements/blogit/author.jsx";
import Image from "../../elements/blogit/image.jsx";
import { Helmet } from "react-helmet";
import socialImage from "../../assets/blogcard1.jpg";

export default function TransparencyBlog() {
  return (
    <div
      id="blog"
      className="bg-white pt-[8vh] md:pt-[18vh] md:pb-[10vh] w-screen"
    >
      <Helmet>
        <title>Läpinäkyvyyden merkitys ohjelmistokehityksessä</title>
        <meta
          name="description"
          content="Kun haluat ohjelmistokehitystä nettisivuja, sovellusta tai vaikkapa
          peliä varten, varsinkin ulkopuoliselta toimijalta, muista valita
          toimija läpinäkyvyyden ja suorasanaisuuden perusteella."
        />
        <meta
          property="og:title"
          content="Läpinäkyvyyden merkitys ohjelmistokehityksessä"
        />
        <meta
          property="og:description"
          content="Kun haluat ohjelmistokehitystä nettisivuja, sovellusta tai vaikkapa
          peliä varten, varsinkin ulkopuoliselta toimijalta, muista valita
          toimija läpinäkyvyyden ja suorasanaisuuden perusteella."
        />
        <meta property="og:image" content={socialImage} />
        <meta
          name="keywords"
          content="läpinäkyvyys, ohjelmistokehitys, nettisivut, sovellus, peli, ulkopuolinen toimija, kommunikaatio, sopimukset, ominaisuudet, hinta, ylläpito, jatkokehitys, projektin toteutus, suunnittelu, immateriaalioikeudet, rehellisyys, suora kommunikaatio, ohjelmistokehittäjät, suunnittelijat"
        />
        <meta
          property="og:url"
          content="https://sunnyharbor.fi/blogs/shc_transparency"
        />
        <meta name="author" content="Victor Ocampo" />
        <link
          rel="canonical"
          href="https://sunnyharbor.fi/blogs/shc_transparency"
        />
      </Helmet>
      <div className="w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white">
        <Title>
          <h1>Läpinäkyvyyden merkitys ohjelmistokehityksessä</h1>
        </Title>
        <SubParagraph>
          Kun haluat ohjelmistokehitystä nettisivuja, sovellusta tai vaikkapa
          peliä varten, varsinkin ulkopuoliselta toimijalta, muista valita
          toimija läpinäkyvyyden ja suorasanaisuuden perusteella.{" "}
          <Image>
            <img src={socialImage} className="md:h-[50vh] object-cover" />
          </Image>
          Paras toimija on sellainen, joka kommunikoi rehellisesti,
          läpinäkyvästi ja useasti. Lisäksi parhaassa tapauksessa pääset suoraan
          kommunikoimaan ohjelmistokehittäjän kanssa etkä ylhäällä
          johtoportaissa olevien managereiden kanssa.
        </SubParagraph>

        <SubParagraph>
          Muista lisäksi ohjelmistokehityksen toteuttajan kanssa tehdyissä
          sopimuksissa seuraavat asiat: <br /> <br />
          1. kaikkien ominaisuuksien tulee olla mainittuna selkeästi
          sopimuksessa tai sen liitteissä, <br /> 2. Lisämaksuilla, kuten
          ylläpidosta ja jatkokehityksestä, pitää olla selkeä hinta, <br />
          3. Projektin toteutus kannattaa tehdä sopimuksessa määritellyissä
          osissa/vaiheissa (esim. suunnitteluvaihe tehdään aluksi, jonka jälkeen
          pääset vaikuttamaan projektin suunnitteluun ennen kuin sitä aletaan
          toteuttamaan); <br /> 4. Ohjelmiston immateriaalioikeuksista pitää
          olla selkeys sopimuksissa AINA. Immateriaalioikeudet tässä tapaukset
          ovat oikeudet jostain ohjelmiston koodista ja sen käytöstä.
          Käytännössä siis omistukset ohjelmasta.
          <br /> <br />
          Yritämme aina olla rehellisyyden A-luokassa. Olemme pieni tiimi
          (ainakin toistaiseksi), joten meillä joka kokouksessa pääset puhumaan
          suoraan ohjelmistokehittäjille ja suunnittelijoille.
        </SubParagraph>

        <Author>
          <h1>Victor Ocampo</h1>
          <p>29.04.2024</p>
        </Author>
      </div>
    </div>
  );
}
