import {
    Box,
    Card,
    Layout,   
    Text,
    BlockStack,
    Button,
    ButtonGroup,
  } from "@shopify/polaris";
import { DataState } from "../Context/Context";
import { ActiveIndex } from "../Context/Constants";
const FormbuilderType = () => {
   const { state ,  dispatch} = DataState();
   const {IndexValue}=state;
   
  return (
    <Layout.Section variant="oneThird">
    <Box padding="400">
      <Text variant="headingMd" as="h6">
        1. Select your form mode
      </Text>
    </Box>
    <Card>
      <BlockStack  >
        <ButtonGroup variant="segmented" fullWidth>
          <Button
            pressed={IndexValue === false}
            onClick={() => dispatch({ type: ActiveIndex , payload : false })}
          >
            Embedded
          </Button>
          <Button
            pressed={IndexValue === true}
            onClick={() => dispatch({ type: ActiveIndex , payload : true })}
          >
            Popup
          </Button>
        </ButtonGroup>
      </BlockStack>
    </Card>
    
  </Layout.Section>
  )
}

export default FormbuilderType