export default function ContactPage() {
    return (
        <div className='h-screen w-screen bg-[#14213D]'>
            <div className="pt-[15vh] px-[5vw]">
            <h1 className='text-[#FCA311] text-[7vh] font-semibold'>Ota yhteyttä!</h1>
            <h2 className='text-white text-[3vh] font-light w-[45vw]'>Ota meihin yhteyttä käyttämällä alla olevaa lomaketta, jätä soittopyyntö tai tee kustannusarvio laskurillamme!</h2>
            </div>
            <div className="grid grid-cols-2 w-[90vw] mx-auto pt-[7vh]">
            <div className="">
                <h2 className="">Nimi</h2>
                <input type="text" placeholder="Nimi" className="bg-[#E5E5E5] rounded-lg w-[40vw] h-[5vh] px-[2vw] py-[1vw] text-[#14213D]"></input>
            </div>
            <div className="">

            </div>
            </div>
        </div>
    );
}