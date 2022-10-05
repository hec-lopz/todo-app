import { CreateToDo, Header, ToDoList, Filter, ToDoItem } from "../components";
import { useToDoProvider } from "../hooks";
export const Dashboard = ({ handleClick }) => {
  const {
    createNewItem,
    deleteItem,
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
        {filteredTasks.map((item) => (
          <ToDoItem
            text={item.text}
            id={item._id}
            key={item._id}
            checked={item.done}
            state={{ deleteItem, completeItem }}
          />
        ))}
        <Filter state={{ length, setFilterOption, filterOption, clearList }} />
      </ToDoList>
    </>
  );
};
