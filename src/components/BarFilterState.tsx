interface propsButton {
    label: string;
    onClick: ()=>void;
    active: boolean;
}
// bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2
const ButtonFilter = ({ active, label, onClick }: propsButton) => 
    <button 
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2
    ${ active === false && "border border-input bg-background" }
    ${ active === true && "bg-primary text-primary-foreground hover:bg-primary" }
    `}>
        {label}
    </button>




interface props {
    set: React.Dispatch<React.SetStateAction<"active" | "all" | "complete">>
    current: "active" | "all" | "complete"
}

export const BarFilterState = ({ current, set }:props) => {
    return (
        <div className="flex justify-center space-x-2 mb-4">
            <ButtonFilter label="Todas" active={current === "all"} onClick={()=>(set("all"))} />
            <ButtonFilter label="Activas" active={current === "active"} onClick={()=>(set("active"))} />
            <ButtonFilter label="Completadas" active={current === "complete"} onClick={()=>(set("complete"))} />
        </div>
    )
}