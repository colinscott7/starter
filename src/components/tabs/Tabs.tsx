import * as bs from "reactstrap";
import { TabsProps } from "../../interfaces/TabsProps";

export const Tabs = (props: TabsProps) => {
  return (
    <>
      <bs.Nav tabs>
        <bs.NavItem>
          <bs.NavLink className="active" onClick={function noRefCheck() {}}>
            Tab1
          </bs.NavLink>
        </bs.NavItem>
        <bs.NavItem>
          <bs.NavLink className="" onClick={function noRefCheck() {}}>
            More Tabs
          </bs.NavLink>
        </bs.NavItem>
      </bs.Nav>
      <bs.TabContent activeTab={props.activeTab}>{props.children}</bs.TabContent>
    </>
  );
};
