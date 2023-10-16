import { Link } from "react-router-dom";

export default function ContactPage() {
    return (
        <div className='relative w-screen z-[0] bg-[#14213D] font-poppins'>
            <div className="pt-[16vh] w-[90vw] mx-auto">
            <h1 className='text-[#FCA311] text-[7vh] font-semibold'>Ota yhteyttä!</h1>
            <h2 className='text-white text-[3vh] font-light pb-[6vh] w-[90vh]'>Ota meihin yhteyttä käyttämällä alla olevaa lomaketta tai tee kustannusarvio laskurillamme, niin vastaamme mahdollisimman pian!</h2>
            </div>
             <div className="grid grid-cols-2 w-[90vw] mx-auto pb-[20vh]"> 
            <div className="border-r-[4px] border-[#FCA311] h-full overflow-hidden px-[2vw] w-full">
                <h2 className="text-[1.8vw] text-[#FCA311] pb-[1vh]">Nimi</h2>
                <input for="name" type="text" placeholder="Nimi" className="bg-[#E5E5E5] px-[1vw] w-[90%] h-[5vh] py-[1vw] text-[#14213D] mb-[3vh]"></input>
                <h2 className="text-[1.8vw] text-[#FCA311] pb-[1vh]">Sähköposti</h2>
                <input type="text" placeholder="Sähköposti" className="bg-[#E5E5E5] px-[1vw] w-[90%] h-[5vh] py-[1vw] text-[#14213D] mb-[3vh]"></input>
                <h2 for="email" className="text-[1.8vw] text-[#FCA311] pb-[1vh]">Puhelinnumero</h2>
                <input type="text" placeholder="Puhelinnumero" className="bg-[#E5E5E5] px-[1vw] w-[90%] h-[5vh] py-[1vw] text-[#14213D] mb-[3vh]"></input>
                <h2 className="text-[1.8vw] text-[#FCA311] pb-[0vh] leading-[1.8vw]">Kuvaus</h2>
                <p className="text-[1.2vw] text-white pb-[1.5vh] font-light]">Kuvaile yksityiskohtaisesti tarvettasi.</p>
                <textarea className="bg-[#E5E5E5] px-[1vw] w-[90%] h-[20vh] py-[1vw] text-[#14213D] mb-[3vh]"></textarea>
                <button className="bg-[#1b2843] w-[12vw] px-[1vw] py-[0.5vw] text-[1.8vw] text-[#FCA311] rounded-lg">Lähetä <i className="fa fa-angle-right"></i></button>
            </div>
            <div className="flex flex-col justify-center items-center border-l-[0px] border-[#FCA311] h-[90%] overflow-hidden px-[2vw] w-full hover:cursor-pointer">
                <Link to={"/price-estimate"} reloadDocument="true" className="w-[70%]">
                <h1 className="relative
                text-[#FCA311] text-[4vw] font-semibold
                ">Kustannusarvio<br/>laskuriin<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FCA311" className="z-[-1] absolute top-[4.75vw] right-[3vw] w-[8vw] h-[8vw]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg></h1>
                </Link>
            </div>
            </div>
        </div>
    );
}