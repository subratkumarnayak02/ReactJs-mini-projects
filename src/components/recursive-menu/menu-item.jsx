import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentLabel) => {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [currentLabel]: !prev[currentLabel],
    }));
  };

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item?.children?.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item?.children?.length && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
