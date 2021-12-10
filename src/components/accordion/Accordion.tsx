import { AccordionProps } from "../../interfaces/AccordionProps";

export const Accordion = (props: AccordionProps) => {
  return (
    <>
      <div className="accordion">{props.children}</div>
    </>
  );
};
