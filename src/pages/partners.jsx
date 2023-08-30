import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'

//import '../style/pages/partner.css';

export default function PartnersPage() {
    return (
    <div className='bg-white w-full pb-20'>
        <h1 className='pt-28 pb-10 font-lora text-7xl text-center text-black bg-white'>Yhteistyökumppanit</h1>
        <a href='/partners/sykekotipalvelut'> 
        <div className='flex bg-white h-[40vh]'>
            <div className='ml-20'>
            <h1 className='font-lora text-6xl mt-20'>Syke Kotipalvelut</h1>
            <p className='font-raleway text-4xl'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
            </p>
            </div>
            <img className='ml-10 mr-20 w-2/5 object-contain' alt="Partner Image" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
        </div>
        </a>
        <a href='/partners/sykekotipalvelut'> 
        <div className='flex bg-white h-[40vh]'>
            <img className='ml-20 mr-10 w-2/5 object-contain' alt="Partner Image" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
            <div>
            <h1 className='font-lora text-6xl mt-20'>Korjausvelkalaskuri</h1>
            <p className='font-raleway text-4xl'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
            </p>
            </div>
        </div>
        </a>
    </div>
    );
}