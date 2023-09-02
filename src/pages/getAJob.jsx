import missionControl from '../assets/missionControl.jpg';

export default function GetAJobPage() {
    return (
        <div id="employmentForm">
            <div className='h-[60vh] mt-0 flex flex-col justify-center'>
                <h1 className='font-lora text-6xl text-white text-center mb-10'>Hae töihin</h1>
                <p className='w-1/2 font-raleway mx-auto text-white text-center text-3xl'>
                    Sunny Harbor Consulting tarjoaa mahtavan mahdollisuuden päästä kehittämään omaa osaamistaan ja työskentelemään mielenkiintoisten projektien parissa.
                </p>
                <img src={missionControl} className='absolute top-0 z-[-1] h-[60vh] w-full object-cover brightness-50'></img>
            </div>
            <div className="flex mt-10 pb-20">
                <p className='font-raleway text-3xl px-20 w-1/2'>
                Tarvitsemme seuraavaa osaamista tällä hetkellä:<br/>
                - Backend ohjelmointi (Golang, NodeJS)<br/>
                - Frotend ohjelmointi (TypeScript, JavaScript, HTML/CSS)<br/>
                - Moobiili ohjelmointi (Java, Kotlin, Swift)<br/>
                - Graafinen suunnittelu<br/>
                <br/><br/>
                Jos sinulta löytyy tarvitsemaamme osaamista tai muuta osaamista, jota uskot, että voisimme käyttää, ota yhteyttä! 
                </p>
                <div className='flex flex-col mt-5 px-44 w-1/2'>
                    <label className='text-black font-mono text-lg md:text-2xl'>Nimi</label>
                    <input className='text-black font-mono text-lg md:text-2xl border-solid border-2 border-black' type='text'></input>

                    <label className='text-black font-mono text-lg md:text-2xl'>Sähköposti</label>
                    <input className='text-black font-mono text-lg md:text-2xl border-solid border-2 border-black' type='text'></input>

                    <label className='text-black font-mono text-lg md:text-2xl'>Viesti</label>
                    <textarea className='text-black font-mono p-2 text-xl border-solid border-2 border-black min-h-[100px] max-h-56' type='text'></textarea>

                    <button className='text-black font-mono text-2xl bg-white text-center md:text-left mt-6'>Lähetä</button>

                </div>  
            </div>
        </div>
    );
}