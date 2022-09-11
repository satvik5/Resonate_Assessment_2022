import React from "react";

const Address = (props) => {
  const { address } = props;
  //   console.log(address.geo);
  return (
    <div>
      <div>
        <span>City: </span> {address.city}
      </div>
      <div>
        <span>Street: </span> {address.street}
      </div>
      <div>
        <span>Suite: </span> {address.suite}
      </div>
      <div>
        <span>Zipcode: </span> {address.zipcode}
      </div>
      {/* <MapEmbedded latlon={address.geo} /> */}
    </div>
  );
};

export default Address;
