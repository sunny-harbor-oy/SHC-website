import { useRef } from "react";

//import '../style/pages/about.css';

export default function AboutPage(language = "fi") {
    const aboutUsWrapper = useRef(null);

    return (
        <div className='bg-main relative z-[10]' ref={aboutUsWrapper} id='aboutUsWrapper'>
            <div>
                <a target="_blank" className='bg-white flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                    <div className='w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10'>
                        <h1 className='text-4xl text-black font-lora md:text-7xl lg:text-8xl'>Sisu Eriksson</h1>
                        <h2 className='w-5/6 font-bold text-black font-raleway md:text-2xl md:w-full'>Frontend kehitäjä ja markkinointi</h2>
                        <p className='text-black font-lora text-lg md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-[70vw]'>Suunnitellaan rauhassa, toteutetaan kunnialla ja digimaailma on meidän!</p>
                        <p className='hidden text-black font-raleway lg:text-4xl lg:mt-10 lg:block' >
                        Lukuisissa johtajuushommissa toiminut Sisu on oppinut paljon kiinteistövälitysalalla ja nyt ohjelmointialalla. Hän osaa organisoida omia ja muiden työtehtäviä sekä saattaa niiden toteutus loppuun. Nykyään hän toimii toimitusjohtajana, suunnitelee käyttöliittymää ja ohjelmoi frontend puolella.
                        </p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-110px]'>
                        <img alt='A handsome man' className='object-contain w-1/2 aspect-1:4 grayscale lg:w-full md:w-3/7' src='./src/assets/founders/transparent_sisu.webp'></img>
                    </div>
                </a>
                <a target="_blank" className='bg-black flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/leon-g-732b31204/'>
                    <div className='w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10'>
                        <h1 className='text-4xl text-white font-lora md:text-7xl lg:text-8xl'>Leon Gustafsson</h1>
                        <h2 className='w-5/6 font-bold text-white font-raleway md:text-2xl md:w-full'>Frontend kehittäjä ja suunnittelija</h2>
                        <p className='text-white font-lora text-lg md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-[64vw]'>Päämääränä on käyttäjälle huomattava helpotus arjessa.</p>
                        <p className='hidden mt-10 text-4xl text-white font-raleway lg:block'>
                        Leon on tehnyt pitkään suunnittelua ja editointia sekä viime vuosina aloittanut ohjelmoinnin. Hän erikoistuu mobiilisovelluksissa sekä nettisivujen sovittamisessa puhelinnäkymään. Hän johtaa mobiilikehitystä ja suunnittelee yhdessä ammattisuunnittelijoiden kanssa käyttöliittymät.
                        </p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-110px]'>
                        <img alt='A handsome man' className='object-contain w-1/2 -rotate-180 -scale-y-100 aspect-1:4 grayscale lg:w-full md:w-3/7' src='./src/assets/founders/transparent_leon.webp'></img>
                    </div>
                </a>
                <a target="_blank" className='bg-white flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/victor-ocampo-a609b3250/'>
                    <div className='w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10'>
                        <h1 className='text-4xl text-black font-lora md:text-7xl lg:text-8xl'>Victor Ocampo</h1>
                        <h2 className='w-5/6 font-bold text-black font-raleway md:text-2xl md:w-full'>Full stack kehittäjä</h2>
                        <p className='text-black font-lora text-lg md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-[64vw]'>Yhdistämällä hyvän suhteen asiakkaisiin ja luotettavan teknologian, kaikki on mahdollista.</p>
                        <p className='hidden mt-10 text-4xl text-black font-raleway lg:block' >
                        Vaikka Victor on johdon nuorin jäsen hän on kuitenkin tehnyt pitkään teknologia hommia. Hän on ollut mukana lukuisissa ohjelmointiprojekteissa, tehnyt kovaa työtä kiinteistö-alalla ohjelmointi puolella ja nykyään johtaa tiimimme ohjelmointi puolta. Hän lisäksi johtaa SHC:n kansainvälistymistä.
                        </p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-110px]'>
                        <img alt='A handsome man' className='object-contain w-1/2 aspect-1:4 grayscale lg:w-full md:w-3/7' src='./src/assets/founders/transparent_victor.webp'></img>
                    </div>
                </a>
                <a target="_blank" className='bg-black flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/'>
                    <div className='w-full pl-6 mt-5 lg:pl-32 md:pl-10 lg:mt-20 md:mt-10'>
                        <h1 className='text-4xl text-white font-lora md:text-7xl lg:text-8xl'>Marc Smeds</h1>
                        <h2 className='w-5/6 font-bold text-white font-raleway md:text-2xl md:w-full'>Full stack kehittäjä</h2>
                        <p className='text-white font-lora text-lg md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-[75vw]'>Teknologia ja digitalisaatio on menestyksen kulmakivi.</p>
                        <p className='hidden mt-10 text-4xl text-white font-raleway lg:block' >
                        Marc on nettimaailmassa kunniakas veteraani. Hän on toiminut sekä frontendin että backendin puolella nettimaailmassa ja sovellusmaailmassa. Hän nykyään toimii pääosin palvelimen puolen ohjelmoijana sekä on vastuussa Android sovelluksien toteutuksesta.
                        </p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-110px]'>
                        <img alt='A handsome man' className='object-contain w-1/2 aspect-1:4 grayscale lg:w-full md:w-3/7' src='./src/assets/team/transparent_alex.webp'></img>
                    </div>
                </a>
            </div>
        </div>
    );
}

/*

        <br></br><br></br>Olemme jatkuvasti ajan hermoilla, oppien uutta teknologiaa ja kehittyen, jotta voimme tarjota parasta palvelua asiakkaillemme.

        Avoimen viestinnän ja tiiviin yhteistyön periaatteemme mahdollistavat syvällisen ymmärryksen asiakkaidemme tarpeista, jotta voimme räätälöidä juuri heille sopivia ohjelmistoratkaisuja. Toteutamme projektit sovitussa aikataulussa ja budjetissa.

        <br></br><br></br>Olemme ylpeitä nuoresta, taitavasta tiimistämme ja kyvystämme luoda ainutlaatuisia ohjelmistoratkaisuja. Missiomme on auttaa asiakkaitamme menestymään modernin teknologian avulla.
               
                            <a target="_blank" href='https://www.linkedin.com/in/leon-g-732b31204/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/leon.png'></img>
                                    <h2>Leon</h2>
                                    <p>Frontend kehittäjä ja suunnittelija</p>
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/in/victor-ocampo-a609b3250/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/victor.jpeg'></img>
                                    <h2>Victor</h2>
                                    <p>Full stack kehittäjä</p>
                                </div>
                            </a>
                            <a target="_blank" href='https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/team/alex.png'></img>
                                    <h2>Marc</h2>
                                    <p>Full stack kehittäjä</p>
                                </div>
                            </a>
*/