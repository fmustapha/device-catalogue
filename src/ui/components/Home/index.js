import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Heading from '@tds/core-heading';

const Home = () => {

  return(
    <Fragment>
      <Heading level="h1">Device Catalogue</Heading>
      <Link to="/watches"> Watches </Link>
    </Fragment>
  );
};


export default Home;
