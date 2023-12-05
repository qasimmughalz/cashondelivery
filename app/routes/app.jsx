import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "../shopify.server";
import { DataProvider } from "../Context/Context";
import { Provider } from "@shopify/app-bridge-react";
export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  const apiKey = process.env.SHOPIFY_API_KEY || "";
  const host = process.env.SHOPIFY_HOST || "";
  return json({ apiKey, host });
};

export default function App() {
  const { apiKey, host } = useLoaderData();
  console.log(host, "hosts");
  const config = {
    apiKey: apiKey,
    host: "YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvdXNtYW4xMTIyMzM",
  };
  return (
    <Provider config={config}>
      {" "}
      <AppProvider isEmbeddedApp apiKey={apiKey}>
        <ui-nav-menu>
          <Link to="/app" rel="home">
            Home
          </Link>
          <Link to="/app/buybtn"> Buy button </Link>
          <Link to="/app/formbuilder"> Form Designer </Link>
        </ui-nav-menu>
        <DataProvider>
          <Outlet />
        </DataProvider>
      </AppProvider>
    </Provider>
  );
}

export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
