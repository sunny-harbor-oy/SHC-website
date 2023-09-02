import missionControl from '../assets/missionControl.jpg';

export default function GetAJobPage() {
    return (
        <div id="employmentForm">
            <div className='h-[48vh] lg:mt-0 mt-5 flex flex-col justify-center'>
                <h1 className='font-lora lg:text-6xl md:text-5xl text-4xl text-white text-center'>Hae töihin</h1>
                <p className='lg:w-1/2 w-4/5 lg:mt-10 mt-4 font-oxanium mx-auto text-white text-center lg:text-3xl md:text-2xl text-base'>
                    Sunny Harbor Consulting tarjoaa mahtavan mahdollisuuden päästä kehittämään omaa osaamistaan ja työskentelemään mielenkiintoisten projektien parissa.
                </p>
                <img src={missionControl} className='absolute top-0 z-[-1] h-[48vh] w-full object-cover brightness-50'></img>
            </div>
            <div className="md:flex lg:mt-10 lg:mx-0 mx-3 lg:pb-20">
                <p className='font-raleway lg:text-3xl md:text-lg lg:px-20 lg:w-1/2'>
                Tarvitsemme seuraavaa osaamista tällä hetkellä:<br/>
                - Backend ohjelmointi (Golang, NodeJS)<br/>
                - Frotend ohjelmointi (TypeScript, JavaScript, HTML/CSS)<br/>
                - Moobiili ohjelmointi (Java, Kotlin, Swift)<br/>
                - Graafinen suunnittelu<br/>
                <br/>
                Jos sinulta löytyy tarvitsemaamme osaamista tai muuta osaamista, jota uskot, että voisimme käyttää, ota yhteyttä! 
                </p>
                <div className='flex flex-col md:mt-0 mt-5 mb-5 lg:px-44 md:px-5 lg:w-1/2 w-full'>
                    <label className='text-black font-mono text-lg lg:text-2xl'>Nimi</label>
                    <input className='text-black font-mono text-lg lg:text-2xl border-solid border-2 border-black' type='text'></input>

                    <label className='text-black font-mono text-lg lg:text-2xl'>Sähköposti</label>
                    <input className='text-black font-mono text-lg lg:text-2xl border-solid border-2 border-black' type='text'></input>

                    <label className='text-black font-mono text-lg lg:text-2xl'>Viesti</label>
                    <textarea className='text-black font-mono p-2 text-xl border-solid border-2 border-black min-h-[100px] max-h-56' type='text'></textarea>

                    <button className='text-black font-mono text-2xl bg-white text-center md:text-left mt-6'>Lähetä</button>
                </div>  
            </div>
        </div>
    );
}