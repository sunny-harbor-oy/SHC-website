export default function ContactPage() {
    return (
        <div className='bg-white h-[80vh]' id="contactWrapper">
            <div id="main" className='h-full'>
                <h1 className='font-lora text-7xl text-center pt-[10vh]'>Ota yhteyttä</h1>
                <div className='mt-20 h-full flex' id='firstSection'>
                    <div>
                        <p className='text-black ml-10 font-lora text-5xl w-4/5'>
                        Ota yhteyttä meihin, jos haluat lisätietoja tai haluat tehdä yhteistyötä kanssamme. Vastaamme sinulle mahdollisimman pian!
                        </p>
                    </div>
                    <div className='flex justify-center w-2/3 mr-36'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col'>
                                <label className='text-black font-mono text-2xl'>Nimi</label>
                                <input className='text-black font-mono text-2xl border-solid border-2 border-black' type='text'></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black font-mono text-2xl'>Sähköposti</label>
                                <input className='text-black font-mono text-2xl border-solid border-2 border-black' type='text'></input>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-black font-mono text-2xl'>Viesti</label>
                                <textarea className='text-black font-mono text-2xl border-solid border-2 border-black' type='text'></textarea>
                            </div>
                            <button className='text-black font-mono text-2xl bg-white text-left mt-4'>Lähetä</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}