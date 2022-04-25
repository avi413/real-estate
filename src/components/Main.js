import React, { useState, useEffect } from "react";
import Propertie from "./Propertie";
import SearchBox from "./SearchBox";
import { useSortableData } from "../utils/useSortableData";
function Main(props) {
  const {
    properties,
    setProperties,
    value,
    inputValue,
    setInputValue,
    setRooms,
    onSortByPrice
  } = props;

  const { items, requestSort, sortConfig } = useSortableData(properties);

  return (
    <main className="content">
      <section className="search-box">
        <SearchBox
          data={properties}
          setProperties={setProperties}
          setRooms={setRooms}
          value={value}
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSortByPrice={onSortByPrice}
          requestSort={requestSort}
        />
      </section>
      <section className="properties">
        <ul className="properties__list">
          {items
            .filter((item, rooms) => {
              if (inputValue === "") {
                return item;
              }
              if (item.address == inputValue) {
                return item;
              }
              if (rooms === "") {
                return item;
              }
              if (item.rooms == inputValue) {
                return item;
              }
            })
            
            .map(function (propertie) {
              return (
                <Propertie
                  click={props.onCardClick}
                  data={propertie}
                  key={propertie.id}
                  onCardLike={props.onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
