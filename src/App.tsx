import { ModalCreateProject } from "./components/ModalCreateProject"
import { ModalCreateTask } from "./components/ModalCreateTask"
import { useAppSelector } from "./store/store"

function App() {
  const { currentModal } = useAppSelector( state => state.modal);

  return (
    <div className="App">
      { currentModal === "create-project" && <ModalCreateProject/> }
      {/* { currentModal === "create-task" && <ModalCreateTask/> } */}
    </div>
  )
}

export default App