import { StateTask } from "../../../types/states"

interface props {
    state: StateTask;
    onClick: () => void;
}

const dictionary = {
    "complete": { bg: "#000", color: "#fff" },
    "in-progress": { bg: "#fff", color: "#000" },
    "not-complete": { bg: "#fff", color: "#000" },
}

export const ButtonCheck = ({ state, onClick }: props) => {
  return (
    <button
      style={{backgroundColor: dictionary[state].bg, color: dictionary[state].color}}
      onClick={onClick} 
      className={`peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 flex justify-center items-center`}>
        {
            state === "complete" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4"><path d="M20 6 9 17l-5-5"/></svg>
            : state === "in-progress" ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-3"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
            : null
        }
    </button>
  )
}
