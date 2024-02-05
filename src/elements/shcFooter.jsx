import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function SHCFooter() {
  useEffect(() => {
    if (document.getElementById("blog")) {
      console.log("asda");
      document.getElementById("footer").classList.replace("bg-[#14213D]", "bg-black");
    }
});
  return (
    <div id="footer" className="bg-primary w-screen md:pb-[3vw] sm:pt-[4vh] pt-[1vh]">
      <div className="text-white relative bg-card2 py-[2vw] md:w-[80vh] w-screen mx-auto px-[3vw] font-poppins md:rounded-lg">
      <h1 className="md:text-[3vh] text-[5vw] font-semibold w-full px-[2vw] text-center md:mb-[0.5vw] mb-[3vw] md:pt-0 pt-[2vw]">Sunny Harbor</h1>
      <div className="md:w-[95%] w-[90%] mx-auto pb-[3vh]">
      <div className="md:flex block justify-center gap-[2vw] md:pb-[1vh] w-full mx-auto">
      <div className="flex my-auto md:pb-0 pb-[1vw]">
        <div className="my-auto md:mr-[0.5vw] mr-[2vw]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="md:w-[1.5vw] w-[5vw] md:h-[1.5vw]">
            <path fillRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="mx-[0] my-auto text-md">3419146-6</h2>
      </div>
      <div className="flex my-auto md:pb-0 pb-[1vw]">
        <div className="my-auto md:mr-[0.5vw] mr-[2vw]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="md:w-[1.5vw] w-[5vw] md:h-[1.5vw]">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="mx-[0] my-auto text-md">+358 44 544 7577</h2>
      </div>
      </div>
      <div className="flex my-auto md:justify-center md:pb-0 pb-[1vw]">
        <div className="my-auto md:mr-[0.5vw] mr-[2vw]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF" className="md:w-[1.5vw] w-[5vw] md:h-[1.5vw]">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </div>
        <h2 className="mx-[0] my-auto text-md">sunnyharborconsulting@gmail.com</h2>
      </div>
      </div>
      <div className="md:flex md:justify-center hidden grid-cols-2 md:w-full w-[80%] mx-auto text-center gap-[1vw]">
        <Link to={"/price-estimate"} reloadDocument="true">Kustannusarvio</Link>
        <p className="hover:cursor-pointer" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("team").offsetTop);
            } else {
              window.location = "/#team";
              document.cookie = "scrollTo=true";
            }
        }}>Tiimi</p>
        <p className="hover:cursor-pointer" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("customers").offsetTop);
            } else {
              window.location = "/#customers";
              document.cookie = "scrollTo=true";
            }
        }}>Asiakkaat</p>
        <Link to={"/contact"} reloadDocument="true">Ota yhteyttä</Link>
      </div>
    </div>
    </div>

  );
}


/*    <div className="text-white border-t-[0.25vh] border-[#FCA311] bg-[#1b2843]">
      <h1 className="text-[#FCA311] text-[1.5vw] font-semibold w-full pt-[1vw] px-[2vw]">Sunny Harbor Consulting</h1>
      <div className="pb-[4vw] w-screen grid grid-cols-3 gap-[5vw]">
      <div>
        <p className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Y-tunnus: 321321321</p>
        <p className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Osoite: Esimerkkikatu 1, 00000 Helsinki</p>
        <p className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Puhelin: +358 50 123 4567</p>
        <p className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">sunnyharborconsulting@gmail.com</p>
      </div>
      <div>
        <Link reloadDocument="true"  to={"/price-estimate"}><p className="hover:cursor-pointer text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Kustannusarvio</p></Link>
        <p className="hover:cursor-pointer text-[2vh] font-light w-full pt-[1vw] px-[2vw]" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("team").offsetTop);
            } else {
              window.location = "/#team";
              document.cookie = "scrollTo=true";
            }
        }}>Tiimi</p>
        <p className="hover:cursor-pointer text-[2vh] font-light w-full pt-[1vw] px-[2vw]" onClick={() => {
            if (window.location.pathname == "/") {
              window.scrollTo(0, document.getElementById("customers").offsetTop);
            } else {
              window.location = "/#customers";
              document.cookie = "scrollTo=true";
            }
        }}>Asiakkaat</p>
        <Link reloadDocument="true" to={"/contact"}><p className="hover:cursor-pointer text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Ota yhteyttä</p></Link>
      </div>
      <div className="flex flex-col overflow-hidden">
        <a href="https://www.instagram.com/sunnyharborconsulting/" target="_blank" className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Instagram</a>
        <a href="https://www.linkedin.com/company/sunny-harbor-consulting/" className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">LinkedIn</a>
        <a className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Twitter</a>
      </div>
      </div>
    </div>
    



          <img src={logo} className="h-[4vw] top-[1vw] left-[2vw] absolute"></img>
      <div className="w-screen grid grid-cols-3 gap-[5vw]">
        <div>
          <div className="flex absolute top-[9vh] left-[2vw] w-[4.2vw] justify-between">
            <Link>
            <img src={linkedin} className="h-[2vw]"></img>
            </Link>
            <Link>
            <img src={instagram} className="h-[2vw]"></img>
            </Link>
          </div>
        </div>
      </div>
*/