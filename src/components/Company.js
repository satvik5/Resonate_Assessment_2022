import React from "react";
import Classes from "./Company.module.css";
//import "bootstrap/dist/css/bootstrap.css";
import Badge from "react-bootstrap/Badge";
//import MapEmbedded from "./MapEmbedded";

const Company = (props) => {
  const { company } = props;
  return (
    <div className={Classes.bs}>
      <div>
        <span>Company Name: </span>
        {company.name}
      </div>

      <div>
        <span>Catch Phrase: </span>
        <div style={{ fontStyle: "italic" }}>{company.catchPhrase}</div>
      </div>
      <div>
        <span>Business Areas: </span>
        {company.bs.split(" ").map((i, k) => (
          <Badge key={k} pill bg="warning" style={{ margin: "1%" }}>
            {i}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Company;
