import React from "react";

function ourServices() {
  return (
    <div className="w-screen px-5 py-12 mb-20 overflow-x-hidden md:px-28 lg:px-36">
      <h2 className="items-center justify-center w-full mb-6 text-4xl font-bold text-white md:mb-0 hover-text text-start">
        Meidän palvelut
      </h2>
      <br />
      <div className="hover:cursor-pointer grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-4">
        <div 
          className="h-[380px] rounded-2xl p-7 flex flex-col justify-between hover:bg-card2 shadow-[1px_2px_5px_0px_rgba(0,0,0,1)] shadow-secondary"
          onClick={() => {
            document.cookie = "scrollTo=true";
            window.location = "/palvelut#app";
          }}
        >
          <h2 className="text-xl font-bold text-white uppercase">
            Web- ja sovellusekehitys
          </h2>
          <p className="text-white text-md">
            Meillä on vankka kokemus skaalautuvien mobiili- ja web sovelluksien
            tekemisestä. Erityisosaamisemme on monialustakehityksessä, mikä
            mahdollistaa saman koodin hyödyntämisen sekä iOS- että
            Android-alustoilla. Näin kehitys on nopeaa ja mutkatonta.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#FCA311"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div 
          className="hover:cursor-pointer h-[380px] rounded-2xl p-7 flex flex-col justify-between hover:bg-card2 shadow-[1px_2px_5px_0px_rgba(0,0,0,1)] shadow-secondary"
          onClick={() => {
            document.cookie = "scrollTo=true";
            window.location = "/palvelut#web";
          }}
        >
          <h2 className="text-xl font-bold text-white uppercase">Nettisivut</h2>
          <p className="text-white text-md">
            Nykyään nettisivut on yrityksen käyntikortti verkossa ja usein
            ensimmäinen kosketuspiste potentiaalisten asiakkaiden kanssa. Siksi
            on tärkeää, että nettisivut ovat sekä visuaalisesti houkuttelevat
            että helppokäyttöiset. Meidän tiimimme on erikoistunut luomaan juuri
            tällaisia kokonaisuuksia.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#FCA311"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        {/*       <div className="h-[380px] rounded-2xl p-7 flex flex-col justify-between hover:bg-card2 shadow-[1px_2px_5px_0px_rgba(0,0,0,1)] shadow-secondary">
          <h2 className="text-xl font-bold text-white uppercase">
            Markkinointi
          </h2>
          <p className="text-white text-md">

          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#FCA311"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div> */}
        <div 
          className="hover:cursor-pointer h-[380px] rounded-2xl p-7 flex flex-col justify-between hover:bg-card2 shadow-[1px_2px_5px_0px_rgba(0,0,0,1)] shadow-secondary"
          onClick={() => {
            document.cookie = "scrollTo=true";
            window.location = "/palvelut#ui";
          }}
        >
          <h2 className="text-xl font-bold text-white uppercase">
            Käyttöliittymä suunnittelu
          </h2>
          <p className="text-white text-md">
            Käyttöliittymämme on suunniteltu helpottamaan palvelun käyttöä
            kaikille. Pyrimme selkeään ja intuitiiviseen navigointiin, jotta
            kaikki löytäisivät tarvitsemansa tiedon vaivatta. Tavoitteenamme on
            tarjota yksinkertainen ja miellyttävä käyttökokemus kaikille
            käyttäjille.
          </p>
          <div className="flex justify-end w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="#FCA311"
              className="w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ourServices;
