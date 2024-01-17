import { useRef, useEffect } from "react";

export default function DropDown({children, test}) {
    const box = useRef(null);
    let height = 0;
    let open = false;

    const updateHeight = () => {
        open = false;
        height = box.current.children[0].offsetHeight;
        box.current.style.height = open ? `auto` : `${height}px`;
        box.current.children[0].style.borderRadius = open ? `10px 10px 0px 0px` : `10px`;
   
    }

    useEffect(() => {
        updateHeight();

        box.current.addEventListener("click", () => {
            console.log("click");
            open = !open;
            box.current.style.height = open ? `auto` : `${height}px`;
            box.current.children[0].style.borderRadius = open ? `10px 10px 0px 0px` : `10px`;
            box.current.children[1].style.hidden = open ? `hidden` : `visible`;
        });

        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
        }
    }, []);

    return (
        <div ref={box} className={`transition-all duration-200 overflow-hidden ${test}`}>
            {children}
        </div>
    );
}