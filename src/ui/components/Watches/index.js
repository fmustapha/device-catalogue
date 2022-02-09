import React, { useState, useEffect } from "react";
import { getWatches } from "../../services/WatchesService";

import Heading from "@tds/core-heading";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(()=>{
    populateWatches();
  }, []); 

  const populateWatches = async() => {
     const { data: result} = await getWatches();
     setWatches(result.data)
  };

  return (
    <React.Fragment>
      <Heading level="h1">Watches</Heading>
      {!watches.length && <p>No list found</p>}
    </React.Fragment>
  );
};

export default Watches;
