import { ButtonFilter } from "./barFilter"

interface props {
    set: React.Dispatch<React.SetStateAction<"active" | "all" | "complete">>
    current: "active" | "all" | "complete"
}

export const BarFilterState = ({ current, set }:props) => (
    <div className="flex justify-center space-x-2 mb-4">
        <ButtonFilter label="Todas" active={current === "all"} onClick={()=>(set("all"))} />
        <ButtonFilter label="Activas" active={current === "active"} onClick={()=>(set("active"))} />
        <ButtonFilter label="Completadas" active={current === "complete"} onClick={()=>(set("complete"))} />
    </div>
)
