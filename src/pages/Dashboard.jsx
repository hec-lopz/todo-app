import { CreateToDo, Header, ToDoList, Filter, ToDoItem } from "../components";
import { useToDoProvider } from "../hooks";
export const Dashboard = ({ handleClick }) => {
  const {
    createNewItem,
    deleteItem,
    editItem,
    completeItem,
    length,
    filteredTasks,
    setFilterOption,
    filterOption,
    clearList,
  } = useToDoProvider();
  return (
    <>
      <Header handleClick={handleClick} />
      <CreateToDo state={{ createNewItem }} />
      <ToDoList>
        {filteredTasks.map((task) => (
          <ToDoItem
            key={task._id}
            {...task}
            state={{ deleteItem, completeItem, editItem }}
          />
        ))}
      </ToDoList>
      <Filter state={{ length, setFilterOption, filterOption, clearList }} />
    </>
  );
};
