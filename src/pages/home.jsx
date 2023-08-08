import SHCFooter from 'C:/Users/MarcSmeds/Documents/GitHub/SHC-website/src/pages/elements/shcFooter.jsx'

const motto = [
    "Developing technology beyond the horizon.",
    "Your step ahead.",
    "Enabling your edge in technology.",
    "Websites.",
    "Apps.",
    "Software.",
    "Hardware.",
    "We do it all.",
    "We are Sunny Harbor Consulting."
]

export default function HomePage(language = "fi") {
    return (
        <div id="homeWrapper">
            <div id="main">
                <video autoPlay muted loop id="backgroundVideo">
                    <source src="./src/assets/HomePageBackground.mp4" type="video/mp4" />
                </video>
                <div id="content">
                    <h1>Sunny Harbor Consulting</h1>
                    <hr></hr>
                    <div id="test">
                        <p id="titleDesc">Developing technology beyond the horizon.</p>
                        <div className="underscore"></div>
                    </div>
                </div> 
            </div>
            <div>
    
            </div>
            <SHCFooter />
        </div>
    )
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeout(() => {
    const video = document.getElementById('backgroundVideo');
    video.playbackRate = 0.7;
    let deg = 0;

    const titleDesc = document.getElementById('titleDesc');
    titleDesc.innerHTML = "";
    let current = 0;
    let currentChar = 0;
    let charLimit = motto[current].length;
    let waiting = 0;

    setInterval(() => {
        video.style.filter = `sepia(100%) hue-rotate(${deg}deg) saturate(1000%) brightness(50%) contrast(1.2)`
        deg++;
    }, 1000);

    setInterval( () => {
        if (waiting == 0) {
            if (currentChar == 0) titleDesc.innerHTML = "";
            if (currentChar < charLimit) {
                titleDesc.innerHTML += motto[current][currentChar];
                currentChar++;
            } else {
                currentChar = 0;
                current++;
                if (current >= motto.length) {
                    current = 0;
                }
                charLimit = motto[current].length;
                waiting = 20;
            }
        } else {
            waiting--;
        }
    }, 100);

    const underscore = document.getElementsByClassName('underscore')[0];
    setInterval(() => {
        console.log(underscore.style.display);
        underscore.style.display = underscore.style.display == "none" ? "block" : "none";
    }, 500);
  }, 1000);