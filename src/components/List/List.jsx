import React, { useState } from "react";
import AddItem from "../Modal/AddItem";

const List = () => {
  const [haja, setHaja] = useState([]);

  return (
    <div>
      <AddItem setHaja={setHaja} />
      <h2>하자 목록</h2>
      {haja?.map((h, index) => (
        <div key={index}>
          <span>{h?.cate} : </span>
          <span>{h?.description}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
