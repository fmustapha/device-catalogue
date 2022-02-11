import React, { useState, useEffect, Fragment } from "react";
import { getWatches } from "../../services/WatchesService";

import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Image from "@tds/core-image";
import PriceLockup from "@tds/core-price-lockup";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import Box from "@tds/core-box";
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
      {!watches.length && <Text>No Watches found</Text>}
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
                  <Box>
                    <Strong>{watch.brand}</Strong>
                    <Heading level="h2">{watch.name}</Heading>
                  </Box>
                  <PriceLockup
                    size="medium"
                    price={getMonthlyPrice(watch.price)}
                    signDirection="left"
                    a11yText={`${getMonthlyPrice(
                      watch.price
                    )} dollars per month`}
                  />
                  <Box between={4}>
                    <Text>/mo.</Text>
                    <Text>
                      Get 3 months of Apple Fitness+
                      <FootnoteLink
                        number={[5]}
                        onClick={(number, ref) => {}}
                        copy="en"
                      />
                      free when you buy Apple Watch.
                    </Text>
                    <Text>Retails price: {watch.price}</Text>
                  </Box>
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
