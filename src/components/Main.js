import React from "react";
import Propertie from "./Propertie";
import SearchBox from "./SearchBox";
import { useSortableData } from "../utils/useSortableData";
function Main(props) {
  const {
    properties,
    setProperties,
    value,
    rooms,
    inputValue,
    setInputValue,
    setRooms,
    onSortByPrice,
    rommsInput,
    setRommsInput,
  } = props;

  const { items, requestSort, sortConfig } = useSortableData(properties);
  return (
    <main className="content">
      <section className="search-box">
        <SearchBox
          data={properties}
          setProperties={setProperties}
          setRooms={setRooms}
          rooms={rooms}
          value={value}
          inputValue={inputValue}
          rommsInput={rommsInput}
          setInputValue={setInputValue}
          onSortByPrice={onSortByPrice}
          setRommsInput={setRommsInput}
          requestSort={requestSort}
        />
      </section>
      <section className="properties">
        <ul className="properties__list">
          {items
            .filter((item, rooms) => {
              if (inputValue === "" && rommsInput === "") {
                return item;
              }
              if (inputValue === "" && rommsInput == item.num_rooms) {
                return item;
              }
              if (inputValue === item.address && rommsInput == "") {
                return item;
              }
              if (inputValue === item.address && rommsInput == item.num_rooms) {
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
