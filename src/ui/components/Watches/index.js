import React, { useState, useEffect, Fragment } from "react";
import { getWatches } from "../../services/WatchesService";

import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Image from "@tds/core-image";
import PriceLockup from "@tds/core-price-lockup";
import HairlineDivider from "@tds/core-hairline-divider";
import Text from "@tds/core-text";
import Strong from "@tds/core-strong";

import watchImage from "../../../../public/images/watch.jpg";

const Watches = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    populateWatches();
  }, []);

  const populateWatches = async () => {
    const { data: result } = await getWatches();
    setWatches(result.data);
  };

  const getMonthlyPrice = (price) => {
    const NUMBER_OF_MONTHS = 24;
    const monthlyPrice = price / NUMBER_OF_MONTHS;
    return Number.parseFloat(monthlyPrice).toFixed(2);
  };

  return (
    <React.Fragment>
      <Heading level="h1">Watches</Heading>
      {!watches.length && <p>No Watches found</p>}
      {watches.length && (
        <FlexGrid>
          <FlexGrid.Row horizontalAlign="start">
            {watches.map((watch, index) => (
              <FlexGrid.Col xs={12} md={3}>
                <Card variant="defaultWithBorder" key={index}>
                  <Image
                    src={watchImage}
                    rounded="corners"
                    width={200}
                    height={0}
                    alt="Image of a watch"
                  />
                  <br />
                  <Strong>{watch.brand}</Strong>
                  <Heading level="h3">{watch.name}</Heading>
                  <PriceLockup
                    size="medium"
                    price={getMonthlyPrice(watch.price)}
                    rateText="per month"
                    bottomText="for 24 months, then $75 per month"
                    signDirection="left"
                  />
                  <HairlineDivider />
                  <Text>Retails price: {watch.price}</Text>
                </Card>
              </FlexGrid.Col>
            ))}
          </FlexGrid.Row>
        </FlexGrid>
      )}
    </React.Fragment>
  );
};

export default Watches;
