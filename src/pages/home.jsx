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
                    <div id='perustajat'>
                        <h1>Tiimimme</h1>
                        <div>
                            <div id='perustaja'>
                                <img src='./src/assets/founders/sisu.png'></img>
                                <h2>Sisu</h2>
                                <p>Frontend kehitäjä ja markkinointi</p>
                            </div>
                            <div id='perustaja'>
                                <img src='./src/assets/founders/leon.png'></img>
                                <h2>Leon</h2>
                                <p>Frontend kehittäjä ja suunnittelija</p>
                            </div>
                            <div id='perustaja'>
                                <img src='./src/assets/founders/victor.jpeg'></img>
                                <h2>Victor</h2>
                                <p>Full stack kehittäjä</p>
                            </div>
                            <div id='perustaja'>
                                <img src='./src/assets/team/alex.png'></img>
                                <h2>Marc</h2>
                                <p>Full stack kehittäjä</p>
                            </div>
                        </div>
                    </div>
                    <div id='kumppanitCarusell'>
                        <h1>Projektit</h1>
                        <div id='carusell'>
                            <p></p>
                            <div id='content'>
                                <div id='item'>
                                    <h2>Korjausvelkalaskuri</h2>
                                    <h3>"Minä rakastan Sunny Harbor Consultingia!"</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse a consequatur voluptates, eum iste fuga, est repellat dolorum autem quam, nemo alias? Sapiente, illum reprehenderit in minima amet ad.</p>
                                    <img src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
                                </div>
                                <div id='item'>
                                    <h2>Syke Kotipalvelut</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse a consequatur voluptates, eum iste fuga, est repellat dolorum autem quam, nemo alias? Sapiente, illum reprehenderit in minima amet ad.</p>
                                    <h3>"Minä rakastan Sunny Harbor Consultingia!"</h3>
                                    <img src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    </div>
                    <div id="storyDiv">
                        <div id='story'>
                            <h1>Tietoa meistä</h1>
                            <div>
                                <p> 
                                    Sunny Harbor Consulting is a company that specializes in software and hardware development.
                                    We are a small company that is based in Finland, but we are able to work with clients from all over the world.
                                    We have a wide range of skills and we are able to work on many different types of projects.
                                    We are able to work on projects of all sizes, from small websites to large software projects.
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
                </div>
            </div>
            <SHCFooter />
        </div>
    )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
  }, 100);