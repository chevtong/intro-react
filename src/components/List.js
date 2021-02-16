import React from "react";

const List = () => {
  return (
    <div className="list">
      <ul>
        <li>
          Item1
          <i class="fas fa-check"></i>
          <i class="far fa-trash-alt"></i>
        </li>
        <li>
          Item2
          <i class="fas fa-check"></i>
          <i class="far fa-trash-alt"></i>
        </li>
        <li>
          Item3
          <i class="fas fa-check"></i>
          <i class="far fa-trash-alt"></i>
        </li>
      </ul>
    </div>
  );
};

export default List;
