import { useEffect } from "react"

export default function Author({children}) {
    useEffect(() => {
        if (document.getElementById("blog")) {
          document.getElementById("footer").classList.replace("bg-[#14213D]", "bg-gray-200");
        }
    });

    return (
        <div className="pt-[3vh]">
            <h3 className="text-black text-[1.4rem] md:text-[1.3rem] md:leading-[1.3rem] font-bold">{children[0].props.children}</h3>
            <p className="text-black text-[1.25rem] md:text-[1rem]">{children[1].props.children}</p>
        </div>  
    ) 
}