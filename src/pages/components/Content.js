import React from "react";
import Card from "./Card";

function Content({ items, category }) {
  return (
    <div className="content-container">
      <div className="content">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Content;
