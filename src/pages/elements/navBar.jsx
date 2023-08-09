import '../../style/pages/elements/navBar.css'

export default function NavBar(language = "fi") {
    return (
        <div id="navBarWrapper">
            <img id='shcLogo' src='./src/assets/shc_logo.png'></img>
            <div id='padding'></div>
            <div id='links'>
                <h2><a href='https://www.google.com'>Tietoa meistä</a></h2>
                <h2><a href='https://www.google.com'>Kumppanit</a></h2>
                <h2><a href='https://www.google.com'>Tiimi</a></h2>
                <h2><a href='https://www.google.com'>Ota yhteyttä</a></h2>
            </div>
        </div>
    )
}