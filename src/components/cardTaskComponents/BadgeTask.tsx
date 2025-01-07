import { Task } from "../../../types";

interface props {
  type: "difficulty" | "priority";
  task: Task;
}

const dictionary = {
  difficulty: {
    hard: {label: "Difícil", color: "#fff", bg: "#F26969"},
    medium: {label: "Medio", color: "#202020", bg: "#d9d9d9"},
    easy: {label: "Fácil", color: "#", bg: "#fff"},
  },
  priority: {
    high: {label: "Alta", color: "#fff", bg: "#F26969"},
    medium: {label: "Media", color: "#202020", bg: "#d9d9d9"},
    low: {label: "Baja", color: "#000", bg: "#fff"},
  }
}

export const BadgeTask = ({ task, type }: props) => (
  <div
  // @ts-ignore
    style={{backgroundColor: dictionary[type][task[type]].bg, color: dictionary[type][task[type]].color}}
    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent`}>
    {type === "difficulty" ? dictionary.difficulty[task.difficulty].label : "" }
    {type === "priority" ? dictionary.priority[task.priority].label : "" }
  </div>
)