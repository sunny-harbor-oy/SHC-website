import SHCFooter from '../pages/elements/shcFooter.jsx'
import NavBar from '../pages/elements/navBar.jsx'

import '../style/pages/home.css';

export default function AboutUsPage(language = "fi") {
    return (
        <div id="aboutUsWrapper">
            <NavBar/>
            <div id="main">
                <h1>Ketä olemme?</h1>
            </div>
            <SHCFooter/>
        </div>
    );
}