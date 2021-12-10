import * as bs from "reactstrap";
import * as cpx from "../../components";
import { Link } from "react-router-dom";
import { ComponentsLayout } from "./ComponentsLayout";
import { useState } from "react";

export const ComponentsTabsView = () => {
  const [activeTab, setActiveTab] = useState(1);
  // const toggleTabs = (tab: number) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };
  return (
    <>
      <cpx.Layout>
        <bs.Row className="justify-content-between align-items-center">
          <bs.Col>
            <h1 className="display-2 text-right text-secondary">Tabs</h1>
          </bs.Col>
        </bs.Row>
        <ComponentsLayout>
          <p className="lead">
            Looking to take over the app store or simply engage your users? We can help your app{" "}
            <span className="font-weight-bold">stand out from the crowd</span>.
          </p>
          <cpx.Tabs activeTab={activeTab}>
            <cpx.TabsItem title="test1" id={1}>
              test1
            </cpx.TabsItem>
            <cpx.TabsItem title="test2" id={2}>
              test2
            </cpx.TabsItem>
            <cpx.TabsItem title="test3" id={3}>
              test3
            </cpx.TabsItem>
          </cpx.Tabs>
        </ComponentsLayout>
      </cpx.Layout>
    </>
  );
};
