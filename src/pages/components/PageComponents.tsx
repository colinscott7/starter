import * as bs from "reactstrap";
import * as cpx from "../../components";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

export const PageComponents = (props: RouteComponentProps) => {
  const navigateToPath = (id: string) => (evt: any) => {
    evt.preventDefault();
    evt.stopPropagation();
    props.history.push(id);
  };

  return (
    <>
      <cpx.Layout>
        <bs.Row className="justify-content-between align-items-center">
          <bs.Col>
            <bs.Breadcrumb className="breadcrumb-wrapper">
              <bs.BreadcrumbItem>
                <Link to="/">Home</Link>
              </bs.BreadcrumbItem>
              <bs.BreadcrumbItem active>Components</bs.BreadcrumbItem>
            </bs.Breadcrumb>
          </bs.Col>
          <bs.Col>
            <h1 className="display-2 text-right text-secondary">Components</h1>
          </bs.Col>
        </bs.Row>
        <bs.Row>
          <bs.Col xl="4">
            <cpx.ServicesSidebar />
          </bs.Col>
          <bs.Col>
            <bs.Row>
              <bs.Col sm="12">
                <p className="lead">
                  We offer a wide variety of digital services to meet all of your needs and we also
                  offer a range of maintenance and partnership contracts to help you either manage
                  the delivered products or we can provide you with a dedicated team for your
                  company.
                </p>
                <p className="lead">
                  All of our products are built using HTML5, CSS3 and JS and are built to support
                  all screen sizes and device types. We also make an effort to ensure that all our
                  products are AA compliant by default.
                </p>
              </bs.Col>
            </bs.Row>
            <bs.Row>
              <bs.Col sm="12">
                {/* <p className="lead">
                  We like to build long-standing relationships with our clients and that means we
                  also provide maintenance contracts for all of our services. A maintenance contract
                  is an agreement to maintain the delivered product for a monthly fee.
                </p> */}
                <p className="lead">
                  If you would like to work with us or would like more details, please just{" "}
                  <Link to="/contact">get in touch</Link>.
                </p>
              </bs.Col>
            </bs.Row>
          </bs.Col>
        </bs.Row>
      </cpx.Layout>
    </>
  );
};
