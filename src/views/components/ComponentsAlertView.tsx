import * as bs from "reactstrap";
import * as cpx from "../../components";
import { Link } from "react-router-dom";

export const ComponentsAlertView = () => {
  return (
    <>
      <cpx.Layout>
        <bs.Row>
          <bs.Col xl={4}>
            <cpx.ServicesSidebar />
          </bs.Col>
          <bs.Col>
            <bs.Row className="justify-content-between align-items-center">
              <bs.Col sm={12}>
                <bs.Breadcrumb className="breadcrumb-wrapper">
                  <bs.BreadcrumbItem>
                    <Link to="/">Home</Link>
                  </bs.BreadcrumbItem>
                  <bs.BreadcrumbItem>
                    <Link to="/components">Components</Link>
                  </bs.BreadcrumbItem>
                  <bs.BreadcrumbItem active>Alert</bs.BreadcrumbItem>
                </bs.Breadcrumb>
              </bs.Col>
              <bs.Col>
                <h1 className="display-2 text-right text-secondary">Alert</h1>
              </bs.Col>
            </bs.Row>
            <bs.Row>
              <bs.Col>
                <bs.Row>
                  <bs.Col>
                    <p className="lead">
                      Looking to take over the app store or simply engage your users? We can help
                      your app <span className="font-weight-bold">stand out from the crowd</span>.
                    </p>
                  </bs.Col>
                </bs.Row>
                <bs.Row className="pb-5">
                  <bs.Col sm="12">
                    <p>
                      All of our applications are built using the latest technologies and are built
                      to support all screen sizes and device types unless requirements do not
                      permit. We also make an effort to ensure that all our products are AA
                      compliant by default.
                    </p>
                  </bs.Col>
                </bs.Row>
              </bs.Col>
            </bs.Row>
          </bs.Col>
        </bs.Row>
      </cpx.Layout>
    </>
  );
};
