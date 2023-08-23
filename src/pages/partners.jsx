import SHCFooter from './elements/shcFooter.jsx'
import NavBar from './elements/navBar.jsx'

//import '../style/pages/partner.css';

export default function PartnersPage() {
    return (
        <div id="aboutUsWrapper">
            <NavBar/>
            <div id="main">
                <h1 class="font-montserrat font-medium text-2xl text-center select-none cursor-default pt-16 text-blue-700">Yhteistyökumppanit</h1>
                <a href='/partners/sykekotipalvelut'> 
                    <div id='partner' class="w-80 mx-auto pb-60 flex">
                        <div id='text' class="w-3/4 mx-5">
                            <h1 class="font-montserrat font-medium text-2xl text-left select-none cursor-default pt-16 text-blue-700">Syke Kotipalvelut</h1>
                            <p class="font-montserrat font-medium text-sm text-left select-none cursor-default mt-8 w-full"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                            </p>
                        </div>
                        <img  alt="Partner Image" class="w-full h-full rounded-lg my-auto cursor-pointer hover:opacity-75" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
                    </div>
                </a>
                <a href='/partners/sykekotipalvelut'> 
                    <div id='partner' class="w-80 mx-auto pb-60 flex">
                        <div id='text' class="w-3/4 mx-5">
                            <h1 class="font-montserrat font-medium text-2xl text-left select-none cursor-default pt-16 text-blue-700">Syke Kotipalvelut</h1>
                            <p class="font-montserrat font-medium text-sm text-left select-none cursor-default mt-8 w-full"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                            </p>
                        </div>
                        <img  alt="Partner Image" class="w-full h-full rounded-lg my-auto cursor-pointer hover:opacity-75" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
                    </div>
                </a>
            </div>
            <SHCFooter/>
        </div>
    );
}