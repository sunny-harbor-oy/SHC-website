export default function ContactPage() {
    return (
        <div className='bg-white 2xl:h-[80vh] 2xl:mb-0 mb-10' id="contactWrapper">
            <div id="main" className='2xl:h-full'>
                <h1 className='font-lora md:text-7xl text-4xl text-center pt-[10vh]'>Ota yhteyttä</h1>
                <div className='md:mt-5 lg:mt-20 mt-5 flex lg:flex-row flex-col grid-cols-1 lg:grid-cols-2 l:px-32' id='firstSection'>
                    <div className="2xl:w-1/2 w-4/5 lg:mx-0 mx-auto 2xl:mb-0 mb-2 flex items-start justify-center">
                        <p className='text-black font-lora text-base sm:text-2xl 2xl:text-4xl sm:w-4/5'>
                        Ota yhteyttä meihin, jos haluat lisätietoja tai haluat tehdä yhteistyötä kanssamme. Vastaamme sinulle mahdollisimman pian!
                        </p>
                    </div>
                    <div className='flex justify-center md:w-1/2 2xl:px-32 mx-auto'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col'>
                                <label className='text-black font-mono text-lg md:text-2xl'>Nimi</label>
                                <input className='text-black font-mono text-lg md:text-2xl border-solid border-2 border-black' type='text'></input>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label className='text-black font-mono text-lg md:text-2xl'>Sähköposti</label>
                                <input className='text-black font-mono text-lg md:text-2xl border-solid border-2 border-black' type='text'></input>
                            </div>
                            <div className='flex flex-col mt-5'>
                                <label className='text-black font-mono text-lg md:text-2xl'>Viesti</label>
                                <textarea className='text-black font-mono p-2 text-xl border-solid border-2 border-black min-h-[100px] max-h-56' type='text'></textarea>
                            </div>
                            <button className='text-black font-mono text-2xl bg-white text-center md:text-left mt-6'>Lähetä</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}