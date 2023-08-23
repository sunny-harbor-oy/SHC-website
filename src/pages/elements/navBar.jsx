import '../../style/pages/elements/navBar.css'

export default function NavBar(language = "fi") {
    return (
        <div id="navBarWrapper" className='fixed top-0 left-0 bg-blue-800 w-screen h-7 flex overflow-hidden z-50'>
            <a href='/'>
            <img id='shcLogo' src='./src/assets/shc_logo.png' className='h-7 ml-2 my-0'></img>
            </a>
            <div id='padding' className='w-80'></div>
            <div id='links'>
                <h2><a href='./about'>Tietoa meistä</a></h2>
                <h2><a href='./partners'>Kumppanit</a></h2>
                <h2><a href='https://www.google.com'>Tiimi</a></h2>
                <h2><a href='https://www.google.com'>Ota yhteyttä</a></h2>
            </div>
        </div>
    )
}