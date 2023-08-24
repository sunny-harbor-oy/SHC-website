import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'

//import '../style/pages/partner.css';

export default function PartnersPage() {
    return (
        <div id="aboutUsWrapper">
            <div id="main">
                <h1 className="font-montserrat font-medium text-2xl text-center select-none cursor-default pt-32 text-main">Yhteistyökumppanit</h1>
                <a href='/partners/sykekotipalvelut'> 
                    <div id='partner' className="w-3/6 mx-auto pb-60 flex justify-around">
                        <div id='text' className="w-[25vw] mx-5">
                            <h1 className="font-montserrat font-medium text-2xl text-left select-none cursor-default pt-16 text-main">Syke Kotipalvelut</h1>
                            <p className="font-montserrat font-medium text-sm text-left select-none cursor-default mt-8 w-full"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                            </p>
                        </div>
                        <img  alt="Partner Image" className="w-[15vw] rounded-lg my-auto cursor-pointer hover:opacity-90" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
                    </div>
                </a>
                <a href='/partners/sykekotipalvelut'> 
                    <div id='partner' className="w-80 mx-auto pb-60 flex">
                        <div id='text' className="w-3/4 mx-5">
                            <h1 className="font-montserrat font-medium text-2xl text-left select-none cursor-default pt-16 text-main">Syke Kotipalvelut</h1>
                            <p className="font-montserrat font-medium text-sm text-left select-none cursor-default mt-8 w-full"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                            </p>
                        </div>
                        <img  alt="Partner Image" className="w-full h-full rounded-lg my-auto cursor-pointer hover:opacity-75" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
                    </div>
                </a>
            </div>
        </div>
    );
}