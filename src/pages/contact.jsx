export default function ContactPage() {
    return (
        <div className='bg-black lg:h-[75vh] lg:pb-0 pb-10' id="contactWrapper">
            <div id="main" className='lg:h-full'>
            <h1 className='text-white font-poppins md:text-6xl text-4xl lg:pt-[10vh] md:pt-10 lg:px-24 pt-7 md:px-14 px-4 font-semibold italic'>Ota yhteyttä</h1>
                <div className='md:mt-5 lg:mt-10 mt-5 flex lg:flex-row flex-col grid-cols-1 lg:grid-cols-2' id='firstSection'>
                    <div className="lg:w-1/2 w-full lg:pl-24 lg:px-0 md:px-14 px-4 lg:mx-0 mx-auto lg:pb-0 pb-10 flex items-start justify-center">
                        <p className='text-white font-poppins font-light md:text-3xl text-lg lg:text-4xl w-full'>
                        Ota yhteyttä meihin, jos haluat lisätietoja tai haluat tehdä yhteistyötä kanssamme. Vastaamme sinulle mahdollisimman pian!
                        </p>
                    </div>
                    <div className='flex justify-center md:w-3/5 lg:w-1/2 lg:px-32 mx-auto'>
                        <div className='flex flex-col w-full font-light font-poppins'>
                            <div className='flex flex-col'>
                                <label className='text-white font-poppins text-lg md:text-2xl'>Nimi</label>
                                <input className='text-white font-mono text-lg md:text-lg border-solid border-2 border-black' type='text'></input>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label className='text-white font-poppins text-lg md:text-2xl'>Sähköposti</label>
                                <input className='text-white font-mono text-lg md:text-lg border-solid border-2 border-black' type='text'></input>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label className='text-white font-poppins text-lg md:text-2xl'>Viesti</label>
                                <textarea className='text-white font-mono p-2 text-xl border-solid border-2 border-black min-h-[100px] max-h-56' type='text'></textarea>
                            </div>
                            <button className='text-white font-poppins text-2xl text-center md:text-left mt-6'>Lähetä</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}