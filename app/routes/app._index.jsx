import { json, redirect } from "@remix-run/node";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  InlineStack,
  Icon,
} from "@shopify/polaris";
import {
  CircleTickMajor,
  SettingsMajor,
  ChevronDownMinor,
} from "@shopify/polaris-icons";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  return null
};

export default function Index() {
  return (
    <Page>
      <ui-title-bar title="COD DASHBOARD"></ui-title-bar>
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text as="h5" variant="headingLg">
                  Welcome to Our COD App!
                </Text>
                <Text variant="headingLg" as="h5">
                  Complete the following steps to configure the app:
                </Text>
              </BlockStack>
              <Placeholder height="14px" />
              <BlockStack gap="200">
                <Card background="bg-surface-success">
                  <InlineStack align="start" gap="10">
                    <Box width="30">
                      <Icon source={CircleTickMajor} tone="success" />
                    </Box>
                    <Text as="h2" variant="headingMd">
                      1. Install the app
                    </Text>
                  </InlineStack>
                </Card>
                <Card background="bg-surface-success">
                  <InlineStack
                    align="space-between"
                    inlineAlign="start"
                    blockAlign="center"
                  >
                    <Box>
                      <InlineStack gap="400" wrap={false} blockAlign="center">
                        <Box width="30">
                          <Icon source={CircleTickMajor} tone="success" />
                        </Box>
                        <Box width="100">
                          <Text as="h2" variant="headingMd">
                            2. Enable the app on your store
                          </Text>
                        </Box>
                      </InlineStack>
                      <p>
                        To change where you want to show the COD button and
                        other options click on Open Visibility.
                      </p>
                    </Box>
                    <Button>
                      <InlineStack>
                        <Icon
                          source={SettingsMajor}
                          tone="base"
                          size="medium"
                        />
                        Open Visibility
                      </InlineStack>
                    </Button>
                  </InlineStack>
                </Card>
                <Card background="bg-surface-success">
                  <InlineStack
                    gap="10"
                    align="space-between"
                    inlineAlign="start"
                    blockAlign="center"
                  >
                    <Box>
                      <InlineStack>
                        <Icon source={CircleTickMajor} tone="success" />

                        <Text as="h2" variant="headingMd">
                          3. Customize your form layout and style
                        </Text>
                      </InlineStack>
                    </Box>
                    <Button>
                      <InlineStack>
                        <Icon
                          source={SettingsMajor}
                          tone="base"
                          size="medium"
                        />
                        Open Form Design
                      </InlineStack>
                    </Button>
                  </InlineStack>
                </Card>
                <Card background="bg-surface-secondary">
                  <InlineStack
                    gap="10"
                    align="space-between"
                    inlineAlign="start"
                    blockAlign="center"
                  >
                    <Box>
                      <InlineStack>
                        <Icon source={CircleTickMajor} tone="success" />

                        <Text as="h2" variant="headingMd">
                          4. Customize more settings
                        </Text>
                      </InlineStack>
                    </Box>
                    <Button>
                      <InlineStack>
                        <Icon source={ChevronDownMinor} tone="base" />
                        View Settings
                      </InlineStack>
                    </Button>
                  </InlineStack>
                </Card>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}

const Placeholder = ({ height = "auto" }) => {
  return (
    <div
      style={{
        height: height,
      }}
    />
  );
};
