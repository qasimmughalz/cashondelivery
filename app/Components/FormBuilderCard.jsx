import {
  Card,
  Text,
  Button,
  Icon,
  InlineStack,
  Collapsible,
} from "@shopify/polaris";
import { ViewMajor, EditMajor, HideMinor } from "@shopify/polaris-icons";
import { useCallback, useState } from "react";
import { DataState } from "../Context/Context";

const FormBuilderCard = ({ text,type, show}) => {
  console.log(type);
  const { state, dispatch } = DataState();
  const [open, setOpen] = useState(false);
  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  return (
    <Card padding="400">
      <InlineStack align="space-between" inlineAlign="start">
        <InlineStack blockAlign="center">
          <Button>
            {!show ? (
              <div onClick={() => dispatch({ type: type, payload: true },console.log(type))}>
                <Icon source={ViewMajor} tone="base" />
              </div>
            ) : (
              <div onClick={() => dispatch({ type: type, payload: false })}>
                <Icon source={HideMinor} tone="base" />
              </div>
            )}
          </Button>
          <div style={{ paddingLeft: 10 }}>
            <Text as="h6" variant="headingMd" alignment="center">
              {text}
            </Text>
          </div>
        </InlineStack>
        <InlineStack>
          <Button
            onClick={handleToggle}
            ariaExpanded={open}
            ariaControls="basic-collapsible"
          >
            <Icon source={EditMajor} tone="base" />
          </Button>
        </InlineStack>
        <Collapsible
          open={open}
          id="basic-collapsible"
          transition={{ duration: "500ms", timingFunction: "ease-in-out" }}
          expandOnPrint
        >
          <p>
            Your mailing list lets you contact customers or visitors who have
            shown an interest in your store. Reach out to them with exclusive
            offers or updates about your products.
          </p>
        </Collapsible>
      </InlineStack>
    </Card>
  );
};

export default FormBuilderCard;
