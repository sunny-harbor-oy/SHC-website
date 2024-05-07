import SlideShow from "../slideShow"

export default function SubParagraph({children}) {
    console.log(children); // max-w-[720px]
    return(  
        <p className="text-black font-roboto max-w-[850px] md:text-justify text-[0.9rem] md:text-[1.05rem] w-full py-[1vh]">{children}</p>
    )
}