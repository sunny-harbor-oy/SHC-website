import '../../style/pages/elements/footer.css'

export default function SHCFooter() {
    return (
        <div id="footerWrapper">
            <div>
                <div>
                    <h1>Sunny Harbor Consulting<hr></hr></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequuntur excepturi et sapiente cum quasi labore maxime officia iusto. Officiis nemo ab repellendus ipsam consectetur debitis quis officia reiciendis neque.</p>
                </div>
                <div>
                    <h1>Linkit<hr></hr></h1>
                    <a href='./about'><h2>Tietoa meistä</h2></a>
                    <a href='./partners'><h2>Kumppanit</h2></a>
                    <h2>Tiimi</h2>
                    <h2>Lorem Ipsum</h2>
                </div>
                <div>
                    <h1>Yhteystiedot<hr></hr></h1>
                    <h2>Aurinkoinenkatu 4B, 00990 HELSINKI</h2>
                    <h2>sunnyharborconsulting@gmail.com</h2>
                    <h2>+358 000000000</h2>
                    <h2>Y-Tunnus: 0000000-0</h2>
                </div>
            </div>
            <h2>© 2023 Sunny Harbor Consulting</h2>
        </div>
    );
}