export default function DescWithTitle({children}) {
    return (
        <div className="w-full w-max-[850px] font-roboto py-[1vh]">
            <h1 className={"w-full max-md:font-semibold text-[1.6rem] md:text-[1.75rem] text-black"}>{children[0].props.children}</h1>
            <p className="text-black text-justify text-[1.1rem] md:text-[1.05rem] font-roboto w-full">{children[1].props.children}</p>
        </div>
    )
}