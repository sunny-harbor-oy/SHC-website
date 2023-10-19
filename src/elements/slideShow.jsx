import { useEffect, useRef } from "react";

export default function SlideShow({children, delay, duration, swipeTimer, swipeThreshold, maxAfk, viewPortClassNames = "w-screen h-screen", slideClassNames = "w-screen h-screen", onDeivce = null}) {
    const viewPort = useRef(null);
    const content = useRef(null);
    const status = useRef(null);

    let slideWidth = 0;
    const statusSymbolSize = window.innerHeight/100*3;
    let loop = true;
    let afkCount = 0;

    const maxIndex = children.length;
    let index = 0;

    let mobileSize = false;
    let touchX = null;
    let touchY = null;
    let timeFromSwipte = 0;

    const swipeStart = (e) => {
        touchX = e.touches[0].clientX;
        touchY = e.touches[0].clientY;
    }

    const swipeEnd = (e) => {
        if (touchX == null || swipeTimer > (Date.now() - timeFromSwipte)) return;
        timeFromSwipte = Date.now();

        const diffX = touchX - e.changedTouches[0].clientX;
        const diffY = touchY - e.changedTouches[0].clientY;

        if (Math.abs(diffY) > Math.abs(diffX)) return;

        if (diffX > swipeThreshold) {
            index++;
            if (index >= maxIndex) index = maxIndex - 1;
        } else if (diffX < -swipeThreshold) {
            index--;
            if (index < 0) index = 0;
        }
        slideAnim();
        touchX = null;
        touchY = null;
        loop = false;
    }

    const slideAnim = () => {
        content.current.style.left = `-${slideWidth * index}px`;
        updateStatus();
    }

    const funcResize = () => {
        mobileSize = window.innerWidth < 640;
        slideWidth = content.current.children[0].children[index].offsetWidth;
        content.current.style.left = `-${slideWidth * index}px`;
        if (mobileSize) {
            content.current.addEventListener("touchstart", swipeStart);
            content.current.addEventListener("touchend", swipeEnd);
        }
    }

    const statusSymbols = children.map((child, i) => {
        return <div className="bg-[#14213D] transition-all hover:cursor-pointer duration-[250ms] opacity-[0.7] h-[2vh] w-[2vh] rounded-[2vh] md:mx-[0.5vw] mx-[1vw]" onClick={() => {
            if (!mobileSize) {
                index = i;
                slideAnim();
                loop = false;
            }
        }}></div>
    });

    const updateStatus = () => {
        for (let i = 0; i < maxIndex; i++) {
            status.current.children[i].style.backgroundColor = "#14213D";
        }
        status.current.children[index].style.backgroundColor = "#FCA311";
    }

    useEffect(() => {
        updateStatus();
        funcResize();
        const currentLoop = setInterval(() => {
            if (!loop) {
                if (afkCount < maxAfk) {
                    afkCount++;
                    return;
                } else {
                    afkCount = 0;
                    loop = true;
                }
            }
            index++;
            if (index == maxIndex) index = 0;
            slideAnim();
        }, delay);

        window.addEventListener("resize", funcResize);

        return () => {
            clearInterval(currentLoop);
            window.removeEventListener("resize", funcResize);
        }
    });

    return (
        <div ref={viewPort} className={`relative overflow-hidden ${viewPortClassNames}`}>
            <div ref={content} className={`absolute top-0 left-0 transition-all duration-[300ms]`}>
                <div className="flex">
                {children}
                </div>
            </div>
            <div className="absolute w-full justify-center flex z-[10] bottom-[2.5vh]">
                <div ref={status} className="flex">
                {statusSymbols}
                </div>
            </div>
        </div>
    );
}