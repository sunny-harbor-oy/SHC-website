import { Link } from "react-router-dom";

export default function SHCFooter() {
  return (
    <div className="text-white border-t-[0.25vh] border-[#FCA311] bg-[#1b2843]">
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
      <div className="flex-col flex overflow-hidden">
        <a href="https://www.instagram.com/sunnyharborconsulting/" target="_blank" className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Instagram</a>
        <a href="https://www.linkedin.com/company/sunny-harbor-consulting/" className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">LinkedIn</a>
        <a className="text-[2vh] font-light w-full pt-[1vw] px-[2vw]">Twitter</a>
      </div>
      </div>
    </div>
  );
}
