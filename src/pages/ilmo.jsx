import ilmoImg from "../assets/Ilmo.png";

export default function IlmoPage() {
    return (
        <div id="ilmoWrapper" className="w-screen">
        <div className="bg-[#BFA28E] relative grid w-screen h-screen grid-cols-1 md:grid-cols-2 font-semibold text-white font-poppins">
          <div className="px-[5vw] pb-[2vh] h-screen flex flex-col md:justify-center md:pt-0 pt-[13vh] z-[1]">
            <h1 className="sm:text-[7vh] text-[10vw]">ILMO</h1>
            <h2 className="sm:w-[80vh] sm:text-[3.43vh] text-[2.8vh] sm:h-[20vh] h-[35vh] font-medium">
              ILMO on helppokäyttöinen työnjakosovellus, joka on suunniteltu
              helpottamaan organisaatioiden arkea tarjoamalla selkeän ja
              tehokkaan tavan hallita, jakaa ja seurata työtehtäviä.
            </h2>
            <div className="relative sm:mt-[10vh] sm:h-[2.43vh] h-[4.6vw] py-[1.5vh] px-[2vh] w-[1vw]"></div>
            {/* <div className="relative sm:mt-[13vh]">
              <Link
                onClick={ilmoFunc}
                className="relative z-[3] text-[2.4vh] text-left py-[1.5vh] px-[2vh] bg-ilmoPrimaryColor rounded-lg"
              >
                Katso tarkemmin! &rarr;
              </Link>
            </div> */}
          </div>
          {/*           <div className="ml-16 h-screen mt-[25vh] flex flex-col justify-center md:relative absolute z-[0]">
            <img src={ilmoImg} className="w-3/4 my-auto"/>
          </div> */}
          <div className="h-screen md:relative absolute md:bottom-auto bottom-[-40vh] 2xl:left-0 2xl:right-auto lg:right-[-7vw] md:right-[-8vh] right-0 lg:ml-[1vw] md:top-[14vh] z-[0]">
            <img
              src={ilmoImg}
              className="md:w-[70vh] h-screen w-screen md:my-auto md:object-cover object-contain"
            />
          </div>
        </div>
        <div className="bg-ilmoSecondaryColor h-screen w-screen">

        </div>
        </div>
    );
}