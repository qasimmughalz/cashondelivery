import { Box, Card, Layout, Page, Text, Frame, Modal } from "@shopify/polaris";
import FormbuilderType from "../Components/FormbuilderType";
import Formbuilders from "../Components/Formbuilders";
import { DataState } from "../Context/Context";
import MainForm from "../Components/MainForm";
import { ActiveIndex, headers, orderAPi } from "../Context/Constants";

export async function loader() {
  return null;
}
export async function action({ request }) {
  
  const orderObject = {
    order: {
      customer: {
        first_name: "John",
        last_name: "Doe",
        email: "johndoe@example.com",
      },
      shipping_address: {
        address1: "123 Main Street",
        city: "Anytown",
        province: "Ontario",
        country: "Canada",
        zip: "A1B 2C3",
      },
      line_items: [
        {
          product_id: 8836810441008,
          quantity: 2,
          price: 129.0,
          title: "bbb",
        },
      ],
    },
  };

   const res =  await fetch(orderAPi, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(orderObject),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return res ;
}
export default function AdditionalPage() {
  const { state, dispatch } = DataState();
  const { IndexValue } = state;
  return (
    <Page>
      <Layout>
        <Layout.Section variant="oneThird">
          <FormbuilderType />
          <Formbuilders />
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <Box as="div" position="stickey">
            <Box padding="400">
              <Text variant="headingMd" as="h6">
                Live preview:
              </Text>
            </Box>
            <Card>
              {IndexValue ? (
                <Frame>
                  <Modal
                    open={IndexValue}
                    onClose={() =>
                      dispatch({ type: ActiveIndex, payload: false })
                    }
                    title="CASH ON DELIVERY"
                  >
                    <Modal.Section>
                      <MainForm />
                    </Modal.Section>
                  </Modal>
                </Frame>
              ) : (
                <MainForm />
              )}
            </Card>
          </Box>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
