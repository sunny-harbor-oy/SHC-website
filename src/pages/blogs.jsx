import { Link } from "react-router-dom";
import SlideShow from "../elements/slideShow.jsx";

import victorImg from "../assets/founders/victor.jpg";

export default function BlogitPage() { 
    return (
        <div className="min-h-screen mt-[8vh] bg-primary w-screen font-poppins">
            <h1 className="text-center pt-[4vh] text-[5vh] text-secondary font-semibold">Blogit</h1>
            <h2 className="text-center md:text-[1.3rem] md:w-[40%] mx-auto text-white text-[1]">Blogi tekstimme tarjoavat oivan mahdollisuuden tutustua teknologian maailmaan ja sen kiperiin kysymyksiin.</h2>
            <div className="grid min-h-[60vh] gap-20 md:gap-10 mt-[5vh] md:grid-cols-3 xl:grid-cols-4 md:px-[10vw]">
                <Link to={"/blogs/shc_victor"} className="w-full h-[60vh] md:h-full relative bg-card2 md:aspect-[5/7] rounded-lg overflow-hidden">
                    <img src={victorImg} className="w-full h-[50%] object-cover"/>
                    <div className="mt-[4%] px-[5%] w-full h-full">
                        <h2 className="text-secondary font-semibold text-left border-l-secondary border-l-[3px] pl-[3%] max-md:text-[140%] max-xl:text-[1.65vw] xl:text-[140%]">SHC tiimi: Victor Ocampo</h2>
                        <p className="text-white mt-[3%] max-md:text-[120%] max-xl:text-[1.3vw]">Tutustu SHC:n teknologiajohtajaan Victor Ocampoon. Scratchistä C-kieleen ja shakkipelistä simulaattoreista. Hän on yksi Sunny Harbour Oy:n perustajista ja IT konkari.</p>
                        <div className="absolute bottom-[2%] left-0 px-[5%] flex justify-between w-full">
                        <p className="text-gray-300 max-md:text-[2vh] md:text-[1rem] max-2xl:text-[1.5vw]">Victor Ocampo</p>
                        <p className="text-gray-300 max-md:text-[2vh] md:text-[1rem] max-2xl:text-[1.5vw]">17.01.2024</p>                        
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}