import { BarFilterState, BarProject, ModalCreateProject, ModalCreateTask, ModalDeleteTask, ModalEditTask, SectionTask } from "./components";
import { useApp } from "./hooks/useApp";

function App() {
  const { currentModal, currentProject, filterState, onModalCreateTask, selectedTask, setFilterState } = useApp();

  return (
    <div className="App p-4">
      <BarProject />
      <BarFilterState current={filterState} set={setFilterState} />

      <SectionTask
        currentProject={currentProject}
        filterState={filterState}
        onCreateTask={onModalCreateTask}
      />

      { currentModal === "create-project" && <ModalCreateProject/> }
      { currentModal === "create-task" && <ModalCreateTask project={currentProject!}/> }
      { currentModal === "edit-task" && <ModalEditTask project={currentProject!} selectedTask={selectedTask!}/> }
      { currentModal === "delete-task" && <ModalDeleteTask project={currentProject!} selectedTask={selectedTask!}/> }
    </div>
  )
}

export default App