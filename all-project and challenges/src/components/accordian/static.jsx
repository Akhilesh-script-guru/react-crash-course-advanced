import { useState } from "react";
import "./index.css";

export default function StaticAccordion() {
  const [toggle, setToggle] = useState(false);

  const handleTOggle = () => {
    setToggle((prev) => !prev);
  };

  const accordionData = [
    {
      title: "Accordion Item 1",
      content:
        "This is the content for accordion item 1. It is always visible.",
    },
    {
      title: "Accordion Item 2",
      content:
        "This is the content for accordion item 2. It is always visible.",
    },
    {
      title: "Accordion Item 3",
      content:
        "This is the content for accordion item 3. It is always visible.",
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div className="accordion-item" onClick={handleTOggle} key={index}>
          <div className="accordion-header">{item.title}</div>
          {toggle && (
            <div className="accordion-body">
              <p>{item.content}</p>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
