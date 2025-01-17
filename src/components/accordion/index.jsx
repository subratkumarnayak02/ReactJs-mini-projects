import React, { useState } from "react";
import "./styles.css";
import data from "./data.js";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(clickedElementId) {
    setSelected(clickedElementId === selected ? null : clickedElementId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable/Disable Multi Selection
      </button>
      <div className="accordion">
        <h1>Accordion</h1>
        {data &&
          data.length > 0 &&
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="content">
                      <p>{dataItem.answer}</p>
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="content">
                      <p>{dataItem.answer}</p>
                    </div>
                  )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordion;
