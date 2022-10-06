import React, { useState } from "react";
import { ReactComponent as CrossIcon } from "../../assets/icon-cross.svg";
import EditItem from "./EditItem";

import {
  ListItemStyle,
  CheckButton,
  Options,
  Icon,
} from "../../styles/Todos/ListItemStyles";

import { StyledLi, StyledSpan } from "../../styles/Todos/ToDoListStyles";

// const StyledListItem = styled.li(ListItemStyle);
//

export const ToDoItem = ({ _id, text, done, state }) => {
  const { deleteItem, completeItem } = state;
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => setEdit((prev) => !prev);
  const handleComplete = (e) => completeItem(_id, done);
  const handleDelete = (e) => deleteItem(_id);
  if (edit) {
    return (
      <EditItem text={text} _id={_id} {...state} toggleEdit={toggleEdit} />
    );
  }
  return (
    <StyledLi>
      <ListItemStyle>
        <CheckButton onClick={handleComplete} checked={done} readOnly />
        <StyledSpan onClick={handleComplete} checked={done}>
          {text}
        </StyledSpan>
        <Options>
          {!done && (
            <Icon
              onClick={() => setEdit(true)}
              className="material-symbols-outlined"
            >
              edit_note
            </Icon>
          )}
          <Icon onClick={handleDelete}>
            <CrossIcon />
          </Icon>
        </Options>
      </ListItemStyle>
    </StyledLi>
  );
};

export default ToDoItem;
