import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Heading from "@tds/core-heading";
import Box from "@tds/core-box";

const Home = () => {
  return (
    <Fragment>
      <Heading level="h1">Device Catalogue</Heading>
      <Box between={2}>
        <Link to="/watches"> Watches </Link>
        <Link to="/iphones"> iPhones</Link>
      </Box>
    </Fragment>
  );
};

export default Home;
