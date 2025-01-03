import { useState } from "react";
import { BarFilterState } from "./components/BarFilterState";
import { BarProject } from "./components/BarProject";
import { ModalCreateProject } from "./components/ModalCreateProject"
import { ModalCreateTask } from "./components/ModalCreateTask"
import { useManagerData } from "./hooks/useManagerData";
import { useAppSelector } from "./store/store"

function App() {
  useManagerData();
  const { currentModal } = useAppSelector( state => state.modal);
  const [filterState, setFilterState] = useState<"active" | "all" | "complete">("all");

  return (
    <div className="App p-4">
      <BarProject />
      <BarFilterState current={filterState} set={setFilterState} />
      { currentModal === "create-project" && <ModalCreateProject/> }
      {/* { currentModal === "create-task" && <ModalCreateTask/> } */}
    </div>
  )
}

export default App