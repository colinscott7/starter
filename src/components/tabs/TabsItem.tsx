import { useState } from "react";
import * as bs from "reactstrap";
import { TabsItemProps } from "../../interfaces/TabsItemProps";

export const TabsItem = (props: TabsItemProps) => {
  return (
    <bs.TabPane tabId={props.id}>
      <bs.Row>
        <bs.Col sm="12">
          <h4>{props.children}</h4>
        </bs.Col>
      </bs.Row>
    </bs.TabPane>
  );
};
