import * as bs from "reactstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { SvgIcon } from "./svg/SvgIcon";
import { PagesData } from "../Data";

export const ServicesSidebar = () => {
  const getServicesPages = PagesData.filter((item) => item.url.includes("services"));
  const pathname = window.location.pathname;
  const servicesSidebarItems = getServicesPages.map((page, index) => {
    const itemClasses = classNames({
      active: pathname === page.url,
    });

    return (
      <bs.Col sm="12">
        <Link to={page.url} className="card-link">
          <bs.Card className={`card-tile mb-2 view-list icon-${page.theme} ${itemClasses}`}>
            <bs.CardBody>
              <div>
                <h2 className="card-title">{page.title}</h2>
              </div>
            </bs.CardBody>
          </bs.Card>
        </Link>
      </bs.Col>
    );
  });
  return (
    <>
      <bs.Row className="services-sidebar">{servicesSidebarItems}</bs.Row>
    </>
  );
};
