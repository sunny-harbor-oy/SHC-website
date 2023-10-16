import { useEffect, useRef } from "react";

export default function SlideShow({children, delay, duration, viewPortClassNames = "w-screen h-screen", slideClassNames = "w-screen h-screen", onDeivce = null}) {
    const viewPort = useRef(null);
    const content = useRef(null);

    const maxIndex = children.length;
    console.log(children);

    useEffect(() => {
        let index = 0;
        const currentLoop = setInterval(() => {
            if (index == maxIndex) index = 0;
            const slideWidth = content.current.children[0].children[index].offsetWidth;
            content.current.style.left = `-${slideWidth * index}px`;
            index++;
        }, delay);

        return () => clearInterval(currentLoop);
    });

    return (
        <div ref={viewPort} className={`relative overflow-hidden ${viewPortClassNames}`}>
            <div ref={content} className={`absolute top-0 left-0 transition-all duration-[${duration}]`}>
                <div className="flex">
                {children}
                </div>
            </div>
        </div>
    );
}