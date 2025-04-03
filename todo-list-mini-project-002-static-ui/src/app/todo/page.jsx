
import "../globals.css";
import TodoComponent from "./_component/TodoComponent";
import SideBarComponent from "./_component/SideBarComponent";

const TodoPage = () => {
  // const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  // // Handle workspace updates from TodoComponent
  // const handleWorkspaceUpdated = (newWorkspace) => {
  //   setSelectedWorkspace(newWorkspace); // Automatically select the new workspace
  // };

  return (
    <div className="flex">
      <div className="w-[25%] h-full">
        <SideBarComponent/>
      </div>
      <div className="w-[75%] h-full">
        <TodoComponent
          // selectedWorkspace={selectedWorkspace}
          // onWorkspaceUpdated={handleWorkspaceUpdated}
        />
      </div>
    </div>
  );
};

export default TodoPage;