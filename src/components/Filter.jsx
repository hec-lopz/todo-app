import React, { useState } from "react";
import {
  Wrapper,
  Counter,
  FilterContainer,
  FilterButton,
  ClearButton,
} from "../styles/FilterStyles";

const Filter = () => {
  const [option, setOption] = useState("");

  const handleOptionSelection = (e) => {
    setOption(e.target.id);
    console.log("newvalue:", e.target.id, "current value: ", option);
  };

  return (
    <Wrapper>
      <Counter>5 items left</Counter>
      <FilterContainer>
        <FilterButton
          id="all"
          checked={option === "" || option === "all" ? true : false}
          onChange={(e) => handleOptionSelection(e)}
        />
        <label htmlFor="all">All</label>
        <FilterButton
          id="active"
          onChange={(e) => handleOptionSelection(e)}
          checked={option === "active" ? true : false}
        />
        <label htmlFor="active">Active</label>
        <FilterButton
          onChange={(e) => handleOptionSelection(e)}
          id="completed"
          checked={option === "completed" ? true : false}
        />
        <label htmlFor="completed">Completed</label>
      </FilterContainer>
      <ClearButton>Clear all</ClearButton>
    </Wrapper>
  );
};

export default Filter;
