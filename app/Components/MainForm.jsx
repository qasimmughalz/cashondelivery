import {
  BlockStack,
  Box,
  Divider,
  InlineStack,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
import { DataState } from "../Context/Context";
import { Form, useActionData } from "@remix-run/react";
import OrderModel from "./OrderModel";
import { Ordermodel } from "../Context/Constants";
const MainForm = () => {
  const { state , dispatch } = DataState();
  const { orderSummary, totalSummary, firstname, city, province } = state;
  const [selected, setSelected] = useState("today");
  const [value, setValue] = useState("Jaded Pixel");

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];
  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const d = useActionData();
  console.log(d , "ord")
  return (
    <div>
      <OrderModel d={d}/>
      <Form method="POST">
        <Box padding="200">
          <InlineStack align="space-between" blockAlign="center">
            <Box>
              <InlineStack>
                <img
                  src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
                  width={50}
                  height={50}
                />
                <div style={{ paddingLeft: 10 }}>
                  <Text as="p" fontWeight="bold">
                    CAR CLUB STACK{" "}
                  </Text>
                </div>
              </InlineStack>
            </Box>
            <Box>
              <Text as="h6" variant="headingMd" fontWeight="bold">
                RS. 12.90
              </Text>
            </Box>
          </InlineStack>
        </Box>
        <Box
          as="div"
          padding="400"
          paddingInlineStart="100"
          background="bg-surface-secondary"
          borderColor="border"
          borderRadius="100"
        >
          <BlockStack gap="400">
            {/* order summary  */}
            <div hidden={orderSummary}>
              <InlineStack align="space-between" blockAlign="center">
                <Text>Subtotal</Text>
                <Text fontWeight="bold">RS. 19.23</Text>
              </InlineStack>
              <InlineStack align="space-between" blockAlign="center">
                <Text>Shipping</Text>
                <Text fontWeight="bold">Free</Text>
              </InlineStack>
              <Divider borderColor="border-inverse" />
            </div>

            {/* Total SUmmary  */}
            <div hidden={totalSummary}>
              <InlineStack align="space-between" blockAlign="center">
                <Text>Total</Text>
                <Text fontWeight="bold">RS. 19.23</Text>
              </InlineStack>
            </div>
          </BlockStack>
        </Box>
        <BlockStack gap="400">
          {/* first name  */}
          <div hidden={firstname}>
            <TextField
              label="First Name"
              value={value}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          {/* Provence  */}
          <div hidden={city}>
            <Select
              label="Select Province "
              options={options}
              onChange={handleSelectChange}
              value={selected}
            />
          </div>
          {/* cirty */}
          <div hidden={province}>
            <Select
              label="City "
              options={options}
              onChange={handleSelectChange}
              value={selected}
            />
          </div>
          <button onClick={()=>dispatch( {type:Ordermodel , payload:true})}>Check Out</button>
        </BlockStack>
      </Form>
    </div>
  );
};

export default MainForm;
