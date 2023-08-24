import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'

import '../style/pages/about.css';

export default function AboutPage(language = "fi") {
    console.log("aboutus");
    return (
        <div id="aboutUsWrapper">
            <NavBar/>
            <div id="main">
                <div id='firstSection'>
                    <div>
                        <h1>Ketä olemme?</h1>
                        <p>
                        Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys, joka erikoistuu web- ja mobiilisovelluksiin. Vahvaa teknistä osaamista yhdistää innovatiivinen lähestymistapamme.

        <br></br><br></br>Olemme jatkuvasti ajan hermoilla, oppien uutta teknologiaa ja kehittyen, jotta voimme tarjota parasta palvelua asiakkaillemme.

        Avoimen viestinnän ja tiiviin yhteistyön periaatteemme mahdollistavat syvällisen ymmärryksen asiakkaidemme tarpeista, jotta voimme räätälöidä juuri heille sopivia ohjelmistoratkaisuja. Toteutamme projektit sovitussa aikataulussa ja budjetissa.

        <br></br><br></br>Olemme ylpeitä nuoresta, taitavasta tiimistämme ja kyvystämme luoda ainutlaatuisia ohjelmistoratkaisuja. Missiomme on auttaa asiakkaitamme menestymään modernin teknologian avulla.
                        </p>
                    </div>
                    <img src='./src/assets/shc_logo.png'></img>
                </div>
                <div id='perustajat'>
                        <h1>Tiimimme</h1>
                        <div>
                            <a target="_blank" href='https://www.linkedin.com/in/sisu-eriksson-b69475231/'>
                                <div id='perustaja'>
                                    <img src='./src/assets/founders/sisu.png'></img>
                                    <h2>Sisu</h2>
                                    <p>Frontend kehitäjä ja markkinointi</p>
                                </div>
                            </a>
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
                        </div>
                    </div>
            </div>
            <SHCFooter/>
        </div>
    );
}