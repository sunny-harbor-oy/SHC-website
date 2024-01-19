import DescWithImage from '../../../elements/blogit/descWithImage.jsx';
import DescWithTitle from '../../../elements/blogit/descWithTitle.jsx';
import SubParagraph from '../../../elements/blogit/subParagraph.jsx';
import Title from '../../../elements/blogit/title.jsx';
import Author from '../../../elements/blogit/author.jsx';

import PlaceHolderImg from '../../../assets/founders/victor.jpg';

export default function BlogV1() {
    return (
        <div id='blog' className='bg-white pt-[8vh] md:pt-[10vh] md:pb-[10vh] w-screen'>
        <div className='w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white'>
            <Title>
                <h1>Mitä on tekoäly ja viekö se työni?</h1>
                <p>Seuratessa uutisia tuntuu siltä, että jokaisessa ohjelmistossa on nyt tekoäly jotenkin mukana tai että tekoäly on tulossa niihin mukaan kohta. Samaan aikaan usein jää epäselväksi miten tekoäly näihin ohjelmistoihin konkreettisesti vaikuttaa.</p>
            </Title>
            <DescWithImage kuvaTeksti='Fella pitämässä pussia avaruudessa.'>
                <h1>Mutta mitä tekoäly edes on?</h1>
                <p>Tämä on ihan ohjelmistojen kehittäjille välillä vaikea kysymys. Melkein mitä tahansa tietokoneen suorittamaa algoritmia voidaan kutsua tekoälyksi, kunhan ne suorittavat jotain, johon vaaditaan älykyyttä, esimerkiksi vaikka shakin pelaaminen tai videopelissä ei-pelattavan hahmon liikkuminen.</p>
                <img className='max-md:mx-auto object-cover h-0' src={PlaceHolderImg} />
                <p>Kuva</p>
            </DescWithImage>
            <SubParagraph>Kuitenkin tällä hetkellä esillä ovat suuret kielimallit, kuten Chat-GPT. Nämä käyttävät niin sanottua koneoppimista, jotta voisivat oppimaan vastaamaan eri kysymyksiin ja pyyntöihin järkevästi. Koneoppiminen on sitä, kun syötetään algoritmiin tietoja ja sen perusteella saadaan tämä algoritmi tekemään tiettyjä asioita. Tämän jälkeen algoritmia tuunataan, jotta se vastaisi odotuksiamme. Lopulta saadaan ohjelma, joka pystyy tietyllä syötteellä luomaan tulosteen, joka on järkevä ja vastaa meidän ihmisten odotuksia.</SubParagraph>
            <SubParagraph>Koneoppia ollaan käytetty, kun Google ennustaa mitä mainoksia haluat nähdä tai mitä hakuja tulet tekemään seuraavaksi. Tai kun Youtube tarjoaa sinulle kissavideoita kun klikkasit yhtä. Nämä algoritmit ottavat vastaan kaiken datan sinun käyttäjään liittyen ja tekevät ennustuksia (jotka paranevat koko ajan) näiden pohjalta. Tekoäly on siis pitkään ollut meidän ympärillä, mutta nytten Chat-GPT:n kaltaisilla ohjelmilla pääsemme itse nyt käyttämään näitä teknologioita. </SubParagraph>
            <DescWithTitle>
                <h2>Onko tämä uhka vai mahdollisuus?</h2>
                <p>Työnantajille ja työntekijöille tekoäly on tärkeä mahdollisuus, ja se kannattaa vähintään tiedostaa nyt. Tekoäly voi merkittävästi tehostaa työtämme ja poistaa työstämme tylsät osuudet. Tekoäly ohjelmat voivat tehdä erittäin hyvin esimerkiksi eri muuttujien analysointia. Tekoäly ohjelmat voivat myös hoitaa vaikka tiettyjä osia yrityksen hallituksen pöytäkirjan laatimisessa. Tekoäly on siis, ainakin tällä hetkellä, enemmän tehostava työkalu meille, aivan kuten tietokoneet.</p>
            </DescWithTitle>
            <SubParagraph>Seuratessa uutisia tuntuu siltä, että jokaisessa ohjelmistossa on nyt tekoäly jotenkin mukana tai että tekoäly on tulossa niihin mukaan kohta. Samaan aikaan usein jää epäselväksi miten tekoäly näihin ohjelmistoihin konkreettisesti vaikuttaa.</SubParagraph>
            <SubParagraph>Jos teillä on jotain kysyttävää tekoälyn käytössä organisaatiossanne tai mahdollisista siihen liittyvistä projekteista, ota heti yhteyttä meihin!</SubParagraph>
            <Author>
            <h1>Victor Ocampo</h1>
            <p>28.10.2019</p>
           </Author>
        </div>
        </div>
    )
}