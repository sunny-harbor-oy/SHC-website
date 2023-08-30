import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'
import logo from "../assets/shc_logo.png";

//import '../style/pages/about.css';

export default function AboutPage(language = "fi") {
    console.log("aboutus");
    return (
        <div className='bg-main' id="aboutUsWrapper">
            <div>
                <a target="_blank" className='bg-white flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                    <div className='w-full lg:pl-32 md:pl-10 pl-6 lg:mt-20 md:mt-10 mt-5'>
                        <h1 className='text-black font-lora md:text-7xl lg:text-8xl text-4xl'>Sisu Eriksson</h1>
                        <h2 className='text-black font-raleway font-bold md:text-2xl'>Front end kehitäjä ja markkinointi</h2>
                        <p className='text-black font-lora text-1xl md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-80px]'>
                        <img className='aspect-1:4 object-contain grayscale lg:w-full md:w-3/7 w-1/2' src='./src/assets/founders/transparent_sisu.png'></img>
                    </div>
                </a>
                <a target="_blank" className='bg-black flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/leon-g-732b31204/'>
                    <div className='w-full lg:pl-32 md:pl-10 pl-6 lg:mt-20 md:mt-10 mt-5'>
                        <h1 className='text-white font-lora md:text-7xl lg:text-8xl text-4xl'>Leon Gustafsson</h1>
                        <h2 className='text-white font-raleway font-bold md:text-2xl'>Front end kehittäjä ja suunnittelija</h2>
                        <p className='text-white font-lora text-1xl md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-80px]'>
                        <img className='aspect-1:4 object-contain grayscale lg:w-full md:w-3/7 w-1/2' src='./src/assets/founders/transparent_leon.png'></img>
                    </div>
                </a>
                <a target="_blank" className='bg-white flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/victor-ocampo-a609b3250/'>
                    <div className='w-full lg:pl-32 md:pl-10 pl-6 lg:mt-20 md:mt-10 mt-5'>
                        <h1 className='text-black font-lora md:text-7xl lg:text-8xl text-4xl'>Victor Ocampo</h1>
                        <h2 className='text-black font-raleway font-bold md:text-2xl'>Full stack kehittäjä</h2>
                        <p className='text-black font-lora text-1xl md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-80px]'>
                        <img className='aspect-1:4 object-contain grayscale lg:w-full md:w-3/7 w-1/2' src='./src/assets/founders/transparent_victor2.png'></img>
                    </div>
                </a>
                <a target="_blank" className='bg-black flex flex-col lg:flex-row lg:h-[90vh] lg:justify-between grid-cols-1 md:grid-cols-2' href='https://www.linkedin.com/in/marc-alex-smeds-17a08a26b/'>
                    <div className='w-full lg:pl-32 md:pl-10 pl-6 lg:mt-20 md:mt-10 mt-5'>
                        <h1 className='text-white font-lora md:text-7xl lg:text-8xl text-4xl'>Marc Smeds</h1>
                        <h2 className='text-white font-raleway font-bold md:text-2xl'>Full stack kehittäjä</h2>
                        <p className='text-white font-lora text-1xl md:text-5xl lg:text-6xl md:mt-5 lg:w-full md:w-4/7 w-2/3'>Minä rakastan Sunny Harbor Consultingia!</p>
                    </div>
                    <div className='flex lg:mr-10 lg:w-2/3 w-full justify-end lg:mt-0 mt-[-80px]'>
                        <img className='aspect-1:4 object-contain grayscale lg:w-full md:w-3/7 w-1/2' src='./src/assets/team/transparent_alex.png'></img>
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