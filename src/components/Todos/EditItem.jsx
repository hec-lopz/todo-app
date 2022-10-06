import { useForm } from "../../hooks";
import { ListItemStyle, Icon } from "../../styles/Todos/ListItemStyles";

import { StyledLi } from "../../styles/Todos/ToDoListStyles";

import { StyledInput } from "../../styles/Todos/CreateToDoStyles";

const EditItem = ({ text, _id, deleteItem, editItem, toggleEdit }) => {
  const { data, handleChange } = useForm({ text });

  const onEditItem = () => {
    if (!data.text) {
      deleteItem(_id);
    }

    editItem(_id, data.text);
    toggleEdit();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEditItem();
    }
  };
  return (
    <StyledLi>
      <ListItemStyle>
        <Icon className="material-symbols-outlined">edit_note</Icon>
        <StyledInput
          onKeyPress={handleKeyPress}
          name="text"
          value={data.text}
          onChange={handleChange}
        />
        <Icon onClick={onEditItem} className="material-symbols-outlined">
          add
        </Icon>
      </ListItemStyle>
    </StyledLi>
  );
};

export default EditItem;
