import DescWithImage from "../../elements/blogit/descWithImage.jsx";
import DescWithTitle from "../../elements/blogit/descWithTitle.jsx";
import SubParagraph from "../../elements/blogit/subParagraph.jsx";
import Title from "../../elements/blogit/title.jsx";
import Author from "../../elements/blogit/author.jsx";
import Image from "../../elements/blogit/image.jsx";

import sisuImg from "../../assets/founders/sisu_blogv2.png";
import talkImg from "../../assets/sisublogtalk.jpeg";

export default function TransparencyBlog() {
  return (
    <div
      id="blog"
      className="bg-white pt-[8vh] md:pt-[18vh] md:pb-[10vh] w-screen"
    >
      <div className="w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white">
        <Title>
          <h1>Läpinäkyvyyden merkitys ohjelmistokehityksessä</h1>
        </Title>

        <SubParagraph>
          Läpinäkyvyys on ehkä tärkein asia kaikessa asiakassuhteissa. Monet
          yritykset kuitenkin unohtavat tämän usein. Meidän tiimimme oppi tämän
          ennen edes oman yrityksen perustamista. <br /> <br />
          Minä ja Sisu saimme harvinaisen mahdollisuuden saada työkokemusta
          ohjelmistoihin liittyen tehdessä työtä Suomen Asuntosatamalla.
          Työtehtävämme oli pääosin Korjausvelkalaskurin alkuperäisen demon
          kokeileminen. Sen oli kehittänyt luotettu ohjelmistokehitysyritys.
          Minä ja Sisu, kaksi kokenutta nuorta harrastelijaa, huomasimme heti
          sen, että demossa ilmaantui uusia ohjelmistovirheitä vanhiin
          ominaisuuksiin. Huomasimme myös kuinka vähän kommunikaatiota oli
          asiakkaan (Asuntosataman) ja ohjelmiston toteuttajan kanssa.
          Kommunikaatio oli myös aina epäsuoraa eikä virheitä myönnetty. <br />{" "}
          <br />
          Sain tilaisuuden jopa päästä Asuntosataman ja softatalon väliseen
          kokoukseen. Vaikka olin silloin vielä nuori lukiolainen, tajusin
          itsekkin harrastelijana kuinka väärää kuvaa yritys oli antanut
          ohjelmiston toteutuksesta. Lisäksi tämän ohjelmistoon meni erittäin
          paljon rahaa, enemmän kuin markkinahintaan. Pohdin Sisun kanssa onko
          tällästä aina ohjelmistokehitys alalla. Vedetäänkö ihmisiä aina
          harhaan tällä tavalla? Pitääkö tähän tyytyä?
        </SubParagraph>

        <SubParagraph>
          Lopulta Erkki Murto-Koivisto, Asuntosataman operatiivinen johtaja ja
          Korjausvelkalaskurista vastaava konsultti Jaakko Järvistö antoi
          periksi ja päätti vaihtaa toimijaa. Olimme jo kertoneet meidän kahden
          ohjelmointi kokemuksesta ja lopulta sain Erkiltä soiton: “voisitteko
          te yrittää ohjelmoida Korjausvelkalaskurin?” <br /> <br />
          Tuo puhelu muutti meidän elämämme. Alkuperäinen toimija kuitenkin
          väitti, että heillä oli immateriaalioikeudet ohjelmistoon.
          Asuntosatama ei saanut yhtään koodinpätkään uudelleenkäyttöön. Meidän
          piti aloittaa nollasta. Sen jälkeen aloitimme Korjausvelkalaskurin
          kehittämisen ja tuona kesänä Korjausvelkalaskurin ensimmäinen versio
          päätyi lukuisien kiinteistövälittäjien käsiin. Hyvä loppu
          varoittavalle tarinalle. Aina loppu ei kuitenkaan ole hyvä. Se voi
          olla vaikka projektin loppu tai koko yrityksen liiketoiminnan loppu.{" "}
          <br /> <br />
          Kun haluat ohjelmistokehitystä nettisivua, sovellusta tai vaikkapa
          peliä varten, varsinkin ulkopuoliselta toimijalta, muista valita
          toimija läpinäkyvyyden ja suorasanaisuuden perusteella. Paras toimija
          on sellainen, joka kommunikoi rehellisesti ja useasti. Lisäksi
          parhaassa tapauksessa pääset suoraan kommunikoimaan
          ohjelmistokehittäjän kanssa etkä ylhäällä johtoportaissa olevien
          managereiden. <br /> <br />
          Muista lisäksi ohjelmistokehityksen toteuttajan kanssa tehdyissä
          sopimuksissa seuraavat asiat:
          <br /> <br />
          1. kaikkien ominaisuuksien tulee olla mainittuna selkeästi sopimuksessa
          tai sen liitteissä, <br/> 2. Lisämaksuilla, kuten ylläpidosta ja
          jatkokehityksestä, pitää olla selkeä hinta, <br/> 3. Projektin toteutus
          kannattaa tehdä sopimuksessa määritellyissä osissa/vaiheissa (esim.
          suunnitteluvaihe tehdään aluksi, jonka jälkeen pääset vaikuttamaan
          projektin suunnitteluun ennen kuin sitä aletaan toteuttamaan); <br/> 4.
          Ohjelmiston immateriaalioikeuksista pitää olla selkeys sopimuksissa
          AINA. Immateriaalioikeudet tässä tapaukset ovat oikeudet jostain
          ohjelmiston koodista ja sen käytöstä. Käytännössä siis omistukset
          ohjelmasta. Sunny Harbor yrittää aina olla rehellisyyden A-luokassa.
          Olemme pieni tiimi (ainakin toistaiseksi), joten joka kokouksessa
          pääset puhumaan suoraan projektin toteuttajille, eikä johtoportaissa
          ylhäällä oleville managereille.
<br/> <br/>
          Sunny Harbor yrittää aina olla rehellisyyden A-luokassa. Olemme pieni tiimi (ainakin toistaiseksi), joten joka kokouksessa pääset puhumaan suoraan projektin toteuttajille, eikä johtoportaissa ylhäällä oleville managereille.
        </SubParagraph>

        <Author>
          <h1>Sisu Eriksson</h1>
          <p>18.01.2024</p>
        </Author>
      </div>
    </div>
  );
}
