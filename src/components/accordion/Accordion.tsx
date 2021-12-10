import { useState } from "react";
import * as bs from "reactstrap";

interface AccordionItemProps {
  title: string;
  className?: string;
  children: any;
}

export const AccordionItem = (props: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <bs.Card className={props.className} onClick={() => setIsOpen(!isOpen)}>
      <bs.CardHeader>{props.title}</bs.CardHeader>
      <bs.Collapse isOpen={isOpen}>
        <bs.CardBody>{props.children}</bs.CardBody>
      </bs.Collapse>
    </bs.Card>
  );
};

interface AccordionProps {
  classes?: string;
  children: any;
}
export const Accordion = (props: AccordionProps) => {
  return (
    <>
      <div className="accordion">{props.children}</div>
    </>
  );
};
