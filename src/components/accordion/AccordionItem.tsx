import { useState } from "react";
import * as bs from "reactstrap";
import { AccordionItemProps } from "../../interfaces/AccordionItemProps";

export const AccordionItem = (props: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <bs.AccordionItem className={props.className}>
      <h2 className="accordion-header">
        <bs.Button
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
        >
          {props.title}
        </bs.Button>
      </h2>
      <bs.Collapse className="accordion-collapse" isOpen={isOpen}>
        <div className="accordion-body">{props.children}</div>
      </bs.Collapse>
    </bs.AccordionItem>
  );
};
