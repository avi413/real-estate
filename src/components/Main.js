import React, { useState, useEffect } from "react";
import Propertie from "./Propertie";
import SearchBox from "./SearchBox";

function Main(props) {
  const { properties, setProperties, value, inputValue, setInputValue,newInputValue } = props;
  return (
    <main className="content">
       <section className="search-box">
        <SearchBox data={properties} setProperties={setProperties} value={value} inputValue={inputValue} setInputValue={setInputValue}/>
        
      </section>
      <section className="properties">
        <ul className="properties__list">
          {
            properties.filter((item) => {
                if (inputValue === '') {
                    return item;
                  } else if (item.address == inputValue) {
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