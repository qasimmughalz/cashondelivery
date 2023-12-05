export const ActiveIndex = "activeIndex";
export const Ordersummary = "ordersummary";
export const TotalSummary = "totalSummary";
export const Firstname = "firstname";
export const City = "city";
export const Province = "province";
export const Ordermodel = "ordermodel"


export const shopifyUrl = "https://usman112233.myshopify.com/";
export const apiVersion = "2023-10";
export const accessToken = "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";
export  const headers = {
  "X-Shopify-Access-Token": accessToken,
  "Content-Type": "application/json",
};
export const productUpdateEndpoint  = (id) => {
    return  `${shopifyUrl}/admin/api/${apiVersion}/products/${id}.json`
};
 
export const orderAPi =  `${shopifyUrl}/admin/api/${apiVersion}/orders.json`;