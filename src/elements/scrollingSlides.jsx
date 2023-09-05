import { useEffect, useRef } from "react";
let globalZIndex = -10;

export default function ScrollingSlides({children, slideAttributes, offset, reset = null, deviceType = null}) {
    let mobile = null;
    let slideRect = null;
    let bottom = null;
    let localOffset = null;
    let localReset = null;
    let slidePos = null;
    let widhtOffset = null;
    let ogWidth = null;
    let ogHeight = null;

    let localZIndex = 0;

    let parentSlide = useRef(null);
    let slide = useRef(null);

    const assignValues = () => {
        mobile = window.innerWidth < 1024;

        let slideChild = slide.current.children[0];
    
        slideRect = slide.current.getBoundingClientRect();
        slidePos = slideRect.y + window.scrollY;
        bottom = slidePos + slideRect.height;
        widhtOffset = slideChild.getBoundingClientRect().width - window.innerWidth;

        parentSlide.current.style.height = `${slideChild.getBoundingClientRect().height}px`;
        ogWidth = `${slideChild.getBoundingClientRect().width}px`;
    }
    
    const scrollingEffect = () => {
        if (deviceType == "desktop" && mobile) return;
        const scrollPos = window.scrollY;

        if (scrollPos + localOffset > slidePos && scrollPos < bottom && (localReset == null || localReset == true)) {
            slide.current.style.position = "fixed";
            slide.current.style.top = `${localOffset}px`;
            slide.current.style.width = `${ogWidth}`;
        }
        else if (scrollPos + localOffset < slidePos) {
            slide.current.style.position = "relative";
            slide.current.style.top = `${0}px`;
            slide.current.style.width = ``;

            if (localReset != null) localReset = true;
        }
        else if (scrollPos > bottom) {
            slide.current.style.position = "relative";
            slide.current.style.top = `${0}px`;
            slide.current.style.width = ``;
    
            if (localReset != null) localReset = false;
        }
    }
    
    useEffect(() => {
        localZIndex = globalZIndex;

        if (!offset || isNaN(offset)) {
            localOffset = document.getElementById("navBarWrapper").getBoundingClientRect().height;
        } else localOffset = offset;

        parentSlide.current.style.position = "relative";
        slide.current.style.position = "relative";

        assignValues(offset, deviceType);
        localReset = reset;

        window.addEventListener("scroll", scrollingEffect);

        window.addEventListener("resize", assignValues);

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