import React from "react";
import { Card } from "../";
import "./CardsList.css";

const CardsList = ({ tickets }) => {
  return (
    tickets && (
      <div>
        <div className="cards-list">
          {tickets.map((ticket) => (
            <Card
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              tags={ticket.tag}
              status={ticket.status} // Pass the status prop
            />
          ))}
        </div>
      </div>
    )
  );
};

export default CardsList;
