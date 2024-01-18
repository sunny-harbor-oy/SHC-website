export default function Image({ children }) {
    return (
        <div className="w-full w-max-[850px] font-roboto py-[1vh]">
            <img src={children.props.src} className={"w-full object-contain py-[2vh] " + children.props.className} />
            <p className="text-black md:text-justify text-[1.1rem] md:text-[1.05rem] font-roboto w-full">{children.props.alt}</p>
        </div>
    )
}