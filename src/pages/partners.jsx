import SHCFooter from '../elements/shcFooter.jsx'
import NavBar from '../elements/navBar.jsx'

//import '../style/pages/partner.css';

export default function PartnersPage() {
    return (
    <div className='bg-white w-full lg:h-4/5' id='Partners'>
        <h1 className='text-black text-center font-poppins md:text-6xl text-3xl lg:pt-16 py-7 font-semibold italic'>Yhteistyökumppanit</h1>
        <div className='lg:flex block w-full lg:px-20 px-5 overflow-hidden'>
            <a  href='/partners/sykekotipalvelut'
                className='bg-white lg:w-1/2 w-full lg:px-10 hover:cursor-pointer'> 
            <div className=''>
                <h1 className='lg:text-6xl md:text-5xl text-2xl text-center underline font-poppins font-bold italic lg:mt-20 md:mt-8'>Syke Kotipalvelut</h1>
                <p className='font-poppins font-light lg:mt-10 md:mt-6 mt-3 lg:text-3xl md:text-2xl lg:px-0 md:px-20 px-3 text-lg'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                </p>
            </div>
            <img className='mx-auto md:mt-7 mt-3 w-1/2 md:w-2/5 lg:w-1/3 object-contain lg:mb-0 md:mb-20 mb-10' alt="Partner Image" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
            </a>
            <a  href='/partners/sykekotipalvelut'
                className='bg-white lg:w-1/2 w-full lg:px-10 hover:cursor-pointer'> 
            <div className=''>
                <h1 className='lg:text-6xl md:text-5xl text-2xl text-center underline font-poppins font-bold italic lg:mt-20 md:mt-8'>Korjausvelkalaskuri</h1>
                <p className='font-poppins font-light lg:mt-10 md:mt-6 mt-3 lg:text-3xl md:text-2xl lg:px-0 md:px-20 px-3 text-lg'> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
                </p>
            </div>
            <img className='mx-auto md:mt-7 mt-3 w-1/2 md:w-2/5 lg:w-1/3 object-contain lg:mb-0 md:mb-20 mb-10' alt="Partner Image" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
            </a>
        </div>
    </div>
    );
}

{/* 
    <div className='bg-white w-full pb-20' id='Partners'>
        <h1 className='text-black text-center font-poppins md:text-7xl text-4xl pt-[10vh] font-semibold italic 2xl:px-24'>Yhteistyökumppanit</h1>
        <a href='/partners/sykekotipalvelut'> 
        <div className='flex bg-white h-[40vh]'>
            <div className='ml-20'>
            <h1 className='text-4xl xl:text-6xl font-poppins font-bold italic mt-20'>Syke Kotipalvelut</h1>
            <p className='font-poppins font-extralight text-4xl'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
            </p>
            </div>
            <img className='ml-10 mr-20 w-1/4 object-contain' alt="Partner Image" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
        </div>
        </a>
        <a href='/partners/sykekotipalvelut'> 
        <div className='flex bg-white h-[40vh]'>
            <img className='mx-28 w-1/4 object-contain' alt="Partner Image" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
            <div>
            <h1 className='text-4xl xl:text-6xl font-poppins font-bold italic mt-20'>Korjausvelkalaskuri</h1>
            <p className='font-poppins font-extralight text-4xl'> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
            </p>
            </div>
        </div>
        </a>
    </div>





<div className="2xl:h-[80vh]">
<h1 className='text-black text-right font-poppins md:text-7xl text-4xl pt-[10vh] font-semibold italic 2xl:px-24'>Yhteistyökumppanit</h1>
<div
  id="Partners"
  className="flex mx-auto w-2/3 justify-center mt-20"
>
  <Link to="/partners/sykekotipalvelut" className=" w-1/3 aspect-square">
    <img
      className="object-contain w-full h-full px-10 hover:cursor-pointer"
      alt="Partner Image"
      src="https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png"
    ></img>
  </Link>
  <Link
    to="/partners/korjausvelkalaskuri"
    className="w-1/3 aspect-square brightness-50"
  >
    <img
      className="object-contain w-full h-full px-10 hover:cursor-pointer"
      alt="Partner Image"
      src="https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp"
    ></img>
  </Link>
</div>
</div> */}