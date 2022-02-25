import React from "react";
import {
  Wrapper,
  Counter,
  FilterContainer,
  FilterButton,
  ClearButton,
} from "../styles/FilterStyles";

const Filter = ({ state }) => {
  const { length, setFilterOption, filterOption, clearList } = state;

  const handleOptionSelection = (e) => {
    setFilterOption(e.target.id);
  };

  return (
    <Wrapper>
      <Counter>{length} items left</Counter>
      <FilterContainer>
        <FilterButton
          id="all"
          checked={filterOption === "all" ? true : false}
          onChange={(e) => handleOptionSelection(e)}
        />
        <label htmlFor="all">All</label>
        <FilterButton
          id="active"
          onChange={(e) => handleOptionSelection(e)}
          checked={filterOption === "active" ? true : false}
        />
        <label htmlFor="active">Active</label>
        <FilterButton
          onChange={(e) => handleOptionSelection(e)}
          id="completed"
          checked={filterOption === "completed" ? true : false}
        />
        <label htmlFor="completed">Completed</label>
      </FilterContainer>
      <ClearButton onClick={clearList}>Clear all</ClearButton>
    </Wrapper>
  );
};

export default Filter;
