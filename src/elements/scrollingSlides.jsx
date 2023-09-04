import { useEffect, useRef } from "react";

const mobile = window.innerWidth < 821;

export default function ScrollingSlides({children, slideAttributes, offset, reset = null, deviceType = null}) {
    const parentSlide = useRef(null);
    const slide = useRef(null);    
    
    useEffect(() => {
        if (deviceType == "desktop" && mobile) return;

        if (!offset) {
            offset = document.getElementById("navBarWrapper").getBoundingClientRect().height;
        }

        const slideRect = slide.current.getBoundingClientRect();
        const bottom = slideRect.y + slideRect.height;
        const ogZIndex = slide.current.style['z-index'];

        parentSlide.current.style.height = `${slideRect.height}px`;

        window.addEventListener("scroll", () => {
            const scrollPos = window.scrollY;
            const slidePos = slideRect.y;

            if (scrollPos + offset > slidePos && scrollPos < bottom && (reset == null || reset == true)) {
                slide.current.style.position = "fixed";
                slide.current.style.top = `${offset}px`;
                slide.current.style['z-index'] = -1;
            }
            else if (scrollPos + offset < slidePos) {
                slide.current.style.position = "relative";
                slide.current.style.top = `${0}px`;
                slide.current.style['z-index'] = ogZIndex;
                
                if (reset != null) reset = true;
            }
            else if (scrollPos > bottom) {
                slide.current.style.position = "relative";
                slide.current.style.top = `${0}px`;
                slide.current.style['z-index'] = ogZIndex;

                if (reset != null) reset = false;
            }
        });
    }, []);

    return (
        <div ref={parentSlide} className={slideAttributes}>
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