import { BarProject } from "./components/BarProject";
import { ModalCreateProject } from "./components/ModalCreateProject"
import { ModalCreateTask } from "./components/ModalCreateTask"
import { useManagerData } from "./hooks/useManagerData";
import { useAppSelector } from "./store/store"

function App() {
  useManagerData();
  const { currentModal } = useAppSelector( state => state.modal);

  return (
    <div className="App p-4">
      <BarProject />
      { currentModal === "create-project" && <ModalCreateProject/> }
      {/* { currentModal === "create-task" && <ModalCreateTask/> } */}
    </div>
  )
}

export default App