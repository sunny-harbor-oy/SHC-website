import { useEffect } from "react";

export default function Title({children}) {
    let elems = [];
    console.log("shit: " + children);
    if (children[1]) {
        elems.push(<h1 className="w-full text-[2.5rem] md:text-[3rem] mb-[0.4vh] md:leading-[4rem] font-semibold font-roboto text-black">
        {children[0].props.children}
        </h1>);
        elems.push(<p className="w-full text-[1.25rem] md:text-[1.2rem] mt-0 md:leading-[1.4rem] text-black font-roboto">
            {children[1].props.children}
        </p>);
    } else {
        elems.push(<h1 className="w-full text-[2.5rem] md:text-[3rem] mb-[0.4vh] md:leading-[4rem] font-semibold font-roboto text-black">
        {children}
        </h1>);
    }
    return (
        <div className="mb-[5vh] md:mb-[3vh]">
        {elems}
        </div>
    )
}