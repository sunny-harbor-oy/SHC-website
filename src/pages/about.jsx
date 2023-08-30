import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'
import logo from "../assets/shc_logo.png";

//import '../style/pages/about.css';

export default function AboutPage(language = "fi") {
    console.log("aboutus");
    return (
        <div className='bg-main' id="aboutUsWrapper">
            <div id="main" className=''>
                <div className='mt-10 h-[80vh]' id='firstSection'>
                    <h1 className='text-h1 font-raleway text-6xl text-center pt-[10vh]'>Ketä olemme?</h1>
                    <div>
                        <p className='text-p font-mono text-3xl w-3/5'>
                        Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys, joka erikoistuu web- ja mobiilisovelluksiin. Vahvaa teknistä osaamista yhdistää innovatiivinen lähestymistapamme.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <a target="_blank" className='bg-white flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                            <div>
                                <h1 className='text-black font-lora text-8xl ml-32 mt-20'>Sisu Eriksson</h1>
                                <h2 className='text-black font-raleway font-bold text-2xl ml-32'>Frontend kehitäjä ja markkinointi</h2>
                                <p className='text-black font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                            </div>
                            <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/founders/transparent_sisu.png'></img>
                        </a>
                        <a target="_blank" className='bg-black flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                            <div>
                                <h1 className='text-white font-lora text-8xl ml-32 mt-20'>Leon Gustafsson</h1>
                                <h2 className='text-white font-raleway font-bold text-2xl ml-32'>Frontend kehitäjä ja suunnittelija</h2>
                                <p className='text-white font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                            </div>
                            <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/founders/transparent_leon.png'></img>
                        </a>
                        <a target="_blank" className='bg-white flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                            <div>
                                <h1 className='text-black font-lora text-8xl ml-32 mt-20'>Victor Ocampo</h1>
                                <h2 className='text-black font-raleway font-bold text-2xl ml-32'>Full stack kehittäjä</h2>
                                <p className='text-black font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                            </div>
                            <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/founders/transparent_victor.png'></img>
                        </a>
                        <a target="_blank" className='bg-black flex h-[90vh]' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                            <div>
                                <h1 className='text-white font-lora text-8xl ml-32 mt-20'>Marc Smeds</h1>
                                <h2 className='text-white font-raleway font-bold text-2xl ml-32'>Full stack kehittäjä</h2>
                                <p className='text-white font-lora mt-10 ml-20 text-8xl w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                            </div>
                            <img className='aspect-1:4 h-[80vh] mt-20 right-[10vw] object-cover grayscale absolute' src='./src/assets/team/transparent_alex.png'></img>
                        </a>
                    </div>
                </div>
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