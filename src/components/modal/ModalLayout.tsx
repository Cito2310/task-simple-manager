import { useEffect } from "react";
import { ButtonExit } from "./ButtonExit";

interface props {
    children: JSX.Element | JSX.Element[] | string;
    title: string;
    onExit: ()=>void;
}

export const ModalLayout = ({ children, title, onExit }: props) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto" }
    }, [])

    return (<>
        <div className="w-screen h-screen fixed z-10 top-0 left-0 bg-[#000000d0]"></div>

        <div className="
        translate-x-[-50%] left-[50%] top-[100px] z-20
        rounded-lg bg-background shadow-lg fixed 
        p-6 border gap-4 max-w-lg w-full flex flex-col
        ">
            <div className="flex justify-between">
                <h2 className="font-GeistSans text-lg font-semibold leading-none tracking-tight">
                    {title}
                </h2>

                <ButtonExit onClick={onExit} />
            </div>

            {children}
        </div>
    </>)
}