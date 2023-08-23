import SHCFooter from '../pages/elements/shcFooter.jsx'
import NavBar from '../pages/elements/navBar.jsx'

import '../style/pages/home.css';

const motto = [
    "Developing technology beyond the horizon.",
    "Your edge in technology.",
    "Web.",
    "Apps.",
    "Software & Hardware.",
    "We do it all.",
    "We are Sunny Harbor Consulting."
]

export default function HomePage(language = "fi") {
    return (
        <div id="homeWrapper">
            <NavBar/>
            <div id="main">
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="./src/assets/HomePageBackground.mp4" type="video/mp4" />
                </video>
                <div id="content">
                    <h1>Sunny Harbor Consulting</h1>
                    <hr></hr>
                    <div id="test">
                        <p id="titleDesc"></p>
                        <div className="underscore"></div>
                    </div>
                </div> 
            </div>
            <div id='homePadding'></div>
            <div id='content'>
                <div id='about'>
                    <div id="storyDiv">
                        <div id='story'>
                            <h1>Tietoa meistä</h1>
                            <div>
                                <p> 
                                Sunny Harbor Consulting on nuori ja taitava ohjelmistoyritys, joka erikoistuu web- ja mobiilisovelluksiin. Vahvaa teknistä osaamista yhdistää innovatiivinen lähestymistapamme.

Olemme jatkuvasti ajan hermoilla, oppien uutta teknologiaa ja kehittyen, jotta voimme tarjota parasta palvelua asiakkaillemme.

Avoimen viestinnän ja tiiviin yhteistyön periaatteemme mahdollistavat syvällisen ymmärryksen asiakkaidemme tarpeista, jotta voimme räätälöidä juuri heille sopivia ohjelmistoratkaisuja. Toteutamme projektit sovitussa aikataulussa ja budjetissa.

Olemme ylpeitä nuoresta, taitavasta tiimistämme ja kyvystämme luoda ainutlaatuisia ohjelmistoratkaisuja. Missiomme on auttaa asiakkaitamme menestymään modernin teknologian avulla.
                                </p>
                            </div>
                        </div>
                        <div id='kumppanit'>
                            <h1>Projektit</h1>
                            <div>
                                <img src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
                            </div>
                            <div>
                                <img src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
                            </div>
                        </div>
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
            </div>
            <SHCFooter />
        </div>
    )
}

setTimeout(() => {
    window.scrollTo(0, 0);
    // Animation for the background video
    const video = document.getElementById('backgroundVideo');
    video.playbackRate = 0.7;
    let deg = 0;

    setInterval(() => {
        video.style.filter = `sepia(100%) hue-rotate(${deg}deg) saturate(1000%) brightness(50%) contrast(1.2)`
        deg++;
    }, 1000);

    // Animation for the title description
    const titleDesc = document.getElementById('titleDesc');
    let current = 0;
    let currentChar = 0;
    let charLimit = motto[current].length;
    let waiting = 0;

    setInterval( () => {
        if (waiting == 0) {
            if (currentChar == 0) titleDesc.innerHTML = "";
            if (currentChar < charLimit) {
                titleDesc.innerHTML += motto[current][currentChar];
                currentChar++;
            } else {
                currentChar = 0;
                current++;
                waiting = current == motto.length ? 100 : 40;
                if (current >= motto.length) {
                    current = 0;
                }
                charLimit = motto[current].length;
            }
        } else {
            waiting--;
        }
    }, 60);

    const underscore = document.getElementsByClassName('underscore')[0];
    setInterval(() => {
        //console.log(underscore.style.display);
        //underscore.style.display = underscore.style.display == "none" ? "block" : "none";
    }, 500);

    // Animation for magnetic scrolling
    const padding = document.getElementById('homePadding');
    const navBar = document.getElementById('navBarWrapper');

    window.addEventListener('wheel', (x) => {
        if (window.scrollY == 0) {
            if (x.deltaY > 0) {
                padding.style.marginTop = "80vh";
                navBar.style.height = "7vh";
            } else {
                padding.style.marginTop = "100vh";
                navBar.style.height = "0";
            }   
        }
    });

    // Kumppanit carusell
    const carusell = document.getElementById('carusell');
    const carusellContent = carusell.children[1];

    let carusellIndex = 0;
  }, 100);