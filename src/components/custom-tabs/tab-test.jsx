import React from "react";
import Tabs from "./tabs";
import "./tabs.css";

const RandomContent = () => {
  return <div>This is random content</div>;
};

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return <Tabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
