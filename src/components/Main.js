import React, { useContext } from "react";
import Propertie from "./Propertie";


function Main(props) {

  return (
    <main className="content">
      <section className="properties">
        <ul className="properties__list">
          {props.properties.map(function(propertie) {
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
