import { useEffect, useRef } from "react";
let globalIdCount = 0;

export default function ScrollingSlides({children, slideAttributes, offset, reset = null, deviceType = null}) {
    let mobile = null;
    let slideRect = null;
    let bottom = null;
    let localOffset = null;
    let localReset = null;
    let widhtOffset = null;
    let ogWidth = null;

    let localId = 0;

    let parentSlide = useRef(null);
    let slide = useRef(null);

    const assignValues = () => {
        resetElem();

        mobile = window.innerWidth < 1024;

        let slideChild = slide.current.children[0];
    
        slideRect = slide.current.getBoundingClientRect();
        bottom = slideRect.height;
        widhtOffset = slideChild.getBoundingClientRect().width - window.innerWidth;

        parentSlide.current.style.height = `${slideChild.getBoundingClientRect().height}px`;
        ogWidth = `${slideChild.getBoundingClientRect().width}px`;       
    }

    const resetElem = () => {
        slide.current.style.position = "relative";
        slide.current.style.top = `${0}px`;
        slide.current.style.width = ``;
    }

    const activateElem = () => {
        slide.current.style.position = "fixed";
        slide.current.style.top = `${localOffset}px`;
        slide.current.style.width = `${ogWidth}`;
    }
    
    const scrollingEffect = () => {
        if (deviceType == "desktop" && mobile) return;

        const rect = parentSlide.current.getBoundingClientRect();

        if (rect.y <= 0 + localOffset && rect.y > -bottom && (localReset == null || localReset == true)) {
            activateElem();
        }
        else if (rect.y > 0) {
            resetElem();
            
            if (localReset != null) localReset = true;
        }
        else if (rect.y < -bottom) {
            resetElem();

            if (localReset != null) localReset = false;
        } else {
            //console.log(`Slide element error: Something went wrong... \nValue dump:\nelem y: ${rect.y}\nbottom: ${-bottom}\noffset: ${localOffset}\nlocalReset: ${localReset}\n1st logic: ${rect.y <= 0 + localOffset}\n2nd logic: ${rect.y > -bottom}`);
        }
    }
    
    useEffect(() => {
        if (!offset || isNaN(offset)) {
            localOffset = document.getElementById("navBarWrapper").getBoundingClientRect().height;
        } else localOffset = offset;

        parentSlide.current.style.position = "relative";
        slide.current.style.position = "relative";

        assignValues(offset, deviceType);
        localReset = reset;

        window.addEventListener("scroll", scrollingEffect);

        window.addEventListener("resize", assignValues);

        localId = globalIdCount;
        globalIdCount++;
        return () => {
            window.removeEventListener("scroll", () => {});
            window.removeEventListener("resize", () => {});
        }
    }, []);

    return (
        <div ref={parentSlide} style={{overflow: "hidden"}} className={slideAttributes}>
            <div ref={slide}>
                {children}
            </div>
        </div>
    )
}

/*                ESIMERKKI KÄYTTÖ:
<ScrollingSlides reset={true} deviceType={"desktop"} slideAttributes={"w-full"}>

</ScrollingSlides> 
*/