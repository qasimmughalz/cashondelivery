import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "../shopify.server";
import { useCallback, useState } from "react";

export const loader = async ({ request }) => {
  const { cors } = await authenticate.admin(request);

  const apiKey = process.env.SHOPIFY_API_KEY || "";
  const host = process.env.SHOPIFY_HOST || "";

  return cors(json({ apiKey, host }));
};

const Usman = () => {
  const [active, setActive] = useState(true);
  const handleChange = useCallback(() => setActive(!active), [active]);
  const { apiKey, host } = useLoaderData();
  const config = {
    apiKey: apiKey,
    host: "YWRtaW4uc2hvcGlmeS5jb20vc3RvcmUvdXNtYW4xMTIyMzM",
    forceRedirect: true,
  };
  return <h1> usman</h1>;
};

export default Usman;
