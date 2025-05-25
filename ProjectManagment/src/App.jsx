import { useState } from "react"
import NewProject from "./components/NewProject.jsx"
import NoProjectSelected from "./components/NoProjectSelected.jsx"
import ProjectsSidebar from "./components/ProjectSidebar.jsx"

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const taskObject = {
        text: text,
        projectId: prevState.selctedProjectId,
        id: projectId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((tasks) => task.id !== id),
      };
    });
  }


  function HandleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  function HandleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleAddProject() {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = (
    <selectedProjectId 
      project={selectedProject}
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      task={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={HandleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={HandleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />

      {content}
    </main>
  )
}

export default App
