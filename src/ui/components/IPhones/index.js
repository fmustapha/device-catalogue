import React, { useState, useEffect, Fragment } from "react";
import { getIPhones } from "../../services/iphonesService";

import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import Card from "@tds/core-card";
import Image from "@tds/core-image";
import PriceLockup from "@tds/core-price-lockup";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import Box from "@tds/core-box";
import Text from "@tds/core-text";
import Strong from "@tds/core-strong";

import iphoneImage from "../../../../public/images/iphone.jpg";

const IPhones = () => {
  const [iphones, setIPhones] = useState([]);

  useEffect(() => {
    populateIPhones();
  }, []);

  const populateIPhones = async () => {
    const { data: result } = await getIPhones();
    setIPhones(result.data);
  };

  const getMonthlyPrice = (price) => {
    const NUMBER_OF_MONTHS = 24;
    const monthlyPrice = price / NUMBER_OF_MONTHS;
    return Number.parseFloat(monthlyPrice).toFixed(2);
  };

  return (
    <React.Fragment>
      <Heading level="h1">iPhones</Heading>
      {!iphones.length && <Text>No iphones found</Text>}
      {iphones.length && (
        <FlexGrid>
          <FlexGrid.Row horizontalAlign="start">
            {iphones.map((iphone, index) => (
              <FlexGrid.Col xs={12} md={3}>
                <Card variant="defaultWithBorder" key={index}>
                  <Image
                    src={iphoneImage}
                    rounded="corners"
                    width={200}
                    height={0}
                    alt="Image of a iphone"
                  />
                  <Box>
                    <Strong>{iphone.brand}</Strong>
                    <Heading level="h2">{iphone.name}</Heading>
                  </Box>
                  <PriceLockup
                    size="medium"
                    price={getMonthlyPrice(iphone.price)}
                    signDirection="left"
                    a11yText={`${getMonthlyPrice(
                      iphone.price
                    )} dollars per month`}
                  />
                  <Box between={4}>
                    <Text>/mo.</Text>
                    <Text>
                      TELUS Easy Payment applied.
                      <FootnoteLink
                        number={[3]}
                        onClick={(number, ref) => {}}
                        copy="en"
                      />
                      Taxes due upfront.
                    </Text>
                    <Text>Retails price: {iphone.price}</Text>
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

export default IPhones;
