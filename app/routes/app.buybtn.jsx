import {
  Box,
  Card,
  Layout,
  Page,
  Text,
  BlockStack,
  TextField,
  Button,
  ColorPicker,
  RangeSlider,
  ButtonGroup,
  Icon,
  InlineStack,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import {
  CheckoutMajor,
  CartMajor,
  QuickSaleMajor,
} from "@shopify/polaris-icons";
import createApp from "@shopify/app-bridge";

export default function Buybtn() {
  const [BtnText, setValue] = useState("Buy With Cash on Delivery");
  const [rangeValue, setRangeValue] = useState(10);
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleChange = useCallback((newValue) => setValue(newValue), []);
  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    []
  );
  const icons = [CheckoutMajor, QuickSaleMajor, CartMajor];
  const handleButtonClick = useCallback(
    (index) => {
      if (activeButtonIndex === index) return;
      setActiveButtonIndex(index);
    },
    [activeButtonIndex]
  );

  const modalOptions = {
    title: "My Modal",
    message: "Hello world!",
  };
  return (
    <Page>
      <Box padding="400">
        <Text variant="headingMd" as="h6">
          Customize the form Buy Now button
        </Text>
      </Box>
      <Layout>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="300" width="200">
              <TextField
                label="Button text"
                value={BtnText}
                onChange={handleChange}
                autoComplete="off"
              />
              <TextField
                label="Button subtitle"
                autoComplete="off"
                width="200"
              />
              <Text as="p">Button icon</Text>
              <ButtonGroup variant="segmented">
                <Button
                  pressed={activeButtonIndex === 0}
                  onClick={() => handleButtonClick(0)}
                >
                  <Icon source={CartMajor} tone="base" />
                </Button>
                <Button
                  pressed={activeButtonIndex === 1}
                  onClick={() => handleButtonClick(1)}
                >
                  <Icon source={QuickSaleMajor} tone="base" />
                </Button>
                <Button
                  pressed={activeButtonIndex === 2}
                  onClick={() => handleButtonClick(2)}
                >
                  <Icon source={CheckoutMajor} tone="base" />
                </Button>
              </ButtonGroup>
              <Text as="p">Button Color</Text>
              <Box width="50" background="bg-fill-caution-secondary"></Box>
              <ColorPicker onChange={setColor} color={color} />
              <Text as="p">Text Color</Text>
              <ColorPicker onChange={setColor} color={color} />
              <RangeSlider
                label="Font Size"
                value={rangeValue}
                onChange={handleRangeSliderChange}
                output
                width="200"
                min={5}
                max={20}
              />
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Box as="div" position="sticky">
            <Box padding="300">
            <Text variant="headingSm" as="h3">
              Live Preview :
            </Text>
            </Box>
            <Card padding="800">
              <BlockStack gap="200">
                <Button fullWidth background={color} size="large">
                  <InlineStack>
                    <Icon source={icons[activeButtonIndex]} tone="base" />
                    <Text as="h5"> {BtnText}</Text>
                  </InlineStack>
                </Button>
              </BlockStack>
            </Card>
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
