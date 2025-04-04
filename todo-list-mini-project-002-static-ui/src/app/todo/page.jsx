
import "../globals.css";
import TodoComponent from "./_component/TodoComponent";
import SideBarComponent from "./_component/SideBarComponent";

const TodoPage = () => {
  return (
    <div className="flex">
      <div className="w-[25%] h-full">
        <SideBarComponent/>
      </div>
      <div className="w-[75%] h-full">
        <TodoComponent
        />
      </div>
    </div>
  );
};

export default TodoPage;