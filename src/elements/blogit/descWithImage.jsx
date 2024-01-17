import { useEffect, useRef } from "react";

export default function DescWithImage({children, kuvaTeksti = ""}) {
    const imgRef = useRef(null);
    const imgTextRef = useRef(null);
    const textRef = useRef(null);

    function convertRemToPixels(rem) {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }

    const resize = () => {
        imgRef.current.style.height = `${textRef.current.offsetHeight /*+ imgTextRef.current.offsetHeight*/}px`;
        imgRef.current.children[0].style.height = `${textRef.current.offsetHeight /*- imgTextRef.current.offsetHeight*/}px`;
    }

    useEffect(() => {
        resize();
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, [])

    return(
        <div className="md:flex w-full py-[1vh]">
            <div ref={textRef} className="md:w-[60%]">
            <h2 className="text-black font-roboto max-md:font-semibold text-[1.6rem] md:text-[2rem]">{children[0] ? children[0].props.children : "Ei ole otsikkoa."}</h2>
            <div className="md:text-justify">
            <p className="text-black font-roboto text-[1.1rem] md:text-[1.05rem]">{children[1] ? children[1].props.children : "Ei ole leipätekstiä."}</p>
            </div>
            </div>
            <div ref={imgRef} className="md:w-[45%] max-md:py-[3vh] md:py-[2vh] md:px-[3%] overflow-hidden">
            {children[2] ? children[2] : "Ei ole kuvaa."}
            <p ref={imgTextRef} className="text-[1.1rem] md:text-[1rem] font-roboto text-black">{children[3] ? children[3].props.children : "Ei ole kuvatekstiä."}</p>
            </div>
        </div>
    )
}