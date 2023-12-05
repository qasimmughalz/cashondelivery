import { BlockStack, Box, Text } from "@shopify/polaris";
import FormBuilderCard from "./FormBuilderCard";
import { DataState } from "../Context/Context";
import { City, Firstname, Ordersummary , Province, TotalSummary} from "../Context/Constants";
const Formbuilders = () => {
  const { state } = DataState();
  const { orderSummary, totalSummary, firstname, city, province } = state;
  return (
    <div>
      <Box padding="400">
        <Text variant="headingMd" as="h6">
          2. Customize your form
        </Text>
      </Box>
      <BlockStack gap="400">
        <FormBuilderCard text="ORDER SUMMARY" type={Ordersummary}   show={orderSummary}/>
        <FormBuilderCard text="TOTAL SUMMARY"  type={TotalSummary} show={totalSummary}/>
        <FormBuilderCard text="FIRST NAME"  type={Firstname} show={firstname}/>
        <FormBuilderCard text="CITY"  type={City} show={city} />
        <FormBuilderCard text="PROVINCE"  type={Province} show={province}/>
      </BlockStack>
    </div>
  );
};

export default Formbuilders;
