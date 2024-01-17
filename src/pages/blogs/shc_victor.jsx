import DescWithImage from '../../elements/blogit/descWithImage.jsx';
import DescWithTitle from '../../elements/blogit/descWithTitle.jsx';
import SubParagraph from '../../elements/blogit/subParagraph.jsx';
import Title from '../../elements/blogit/title.jsx';
import Author from '../../elements/blogit/author.jsx';

import victorImg from "../../assets/founders/victor.jpg";

export default function SHC_Victor() {
    return (
        <div id='blog' className='bg-gray-200 pt-[8vh] md:pt-[10vh] md:pb-[10vh] w-screen'>
        <div className='w-[100vw] md:w-[80vw] mx-auto max-w-[900px] md:mt-[1v] py-[4vh] px-[4vh] rounded-lg bg-white'>
            <Title>
                <h1>SHC tiimi: Victor</h1>
                <p>Victor, SHC:n teknologia johtaja</p>
            </Title>
            <DescWithImage kuvaTeksti='Fella pitämässä pussia avaruudessa.'>
                <h1>Tarinani</h1>
                <p>Olen ohjelmoinut jo lapsuudesta asti erilaisia ohjelmia ja olen aina ollut kiinnostunut teknologiasta. Ennen kun olin edes oli tavannut SHC:n muut perustajat, ohjelmoin Scratch ohjelmistolla erilaisia pelejä ja siitä lopulta hyppäsin koodaamaan C-kielellä shakkipeliä, erilaisia emulaattoreita, evoluutio simulaattoreita ja muita nörtti-hommia.</p>
                <img className='max-md:mx-auto object-cover aspect-square h-0' src={victorImg} />
                <p>Kuvassa Victor Ocampo</p>
            </DescWithImage>
            <SubParagraph>
            Tykkään tietysti teknologiasta ja ohjelmoinnista. Kunnon ylläpitämistä varten tykkään juosta ja käydä salilla. Tällä hetkellä Victor käyttää suurimman osan ajastansa töissä ja opiskeluun. Victor lukee innokkaasti ja on kiinnostunut erittäin monesta aiheesta. Puhun sujuvasti perhetaustani vuoksi suomen lisäksi englantia ja espanjaa.
            </SubParagraph>
            <SubParagraph>
            COVID-19 pandemian alussa olin perus teknologialuokan oppilas Aurinkolahden peruskoulussa. En yhtään tiennyt mihin mennä TET-harjoitteluun koronan takia. Melkein jäin vaille TET-kokemuksesta mutta viime hetkellä matematiikan opettajansa antoi minulle yhden puhelinnumeron, johon soittaminen muuttaisi minun elämän lopullisesti.
            </SubParagraph>
            <SubParagraph>
            Yhden lyhyen puhelun jälkeen sain TET-paikan Vuosaaren kuuluisimassa kiinteistövälitysliikkeessä, eli Asuntosatamassa. Siellä pääsin tekemään toimistotöitä ja tutustuin kiinteistövälitysalaan. Tämän jälkeen sain toimitusjohtaja Erkki Murto-Koivistolta kesätyöpaikan. 
            </SubParagraph>
            <SubParagraph>
            Kesätöissä tutustuin Sisuun ja lopulta päätyi tekemään hänen ja Sisun ystävän Leonin kanssa Korjausvelkalaskuri® kiinteistön korjausvelan ja korjaustietojen analysoinnin työkalun. Tästä kirjoitamme vielä toiseen blogiin.
            </SubParagraph>
            <SubParagraph>
            Nyt olen Sunny Harbor Consulting Oy:n CTO, eli Chief Technology Officer. Käytännössä se tarkoittaa sitä, että vastaan SHC:n teknologisesta kehityksestä ja johdan projektien teknillistä suunnittelua ja toteutusta.
            </SubParagraph>
            <SubParagraph>
            Mikäli haluatte kuulla lisää SHC:n tuotteiden (kuten Ilmon) teknillisestä toteutuksesta tai haluatte kysellä mahdollisen yhteistyön teknologisista rajoista ja mahdollisuuksista, ottakaa minuun yhteyttä LinkedInin tai sähköpostin kautta!
            </SubParagraph>
            <Author>
            <h1>Victor Ocampo</h1>
            <p>17.01.2024</p>
           </Author>
        </div>
        </div>
    )
}