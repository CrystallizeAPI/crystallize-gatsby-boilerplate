const {
  NODE_ENV = "development",
  COUNTRY_CODE = "NO",
  CRYSTALLIZE_TENANT_ID = "orn-forlag",
  CRYSTALLIZE_API_URL = "https://api.crystallize.com",
  CRYSTALLIZE_CORE_API_URL = "https://pim.crystallize.com/graph/core",
  MY_CRYSTALLIZE_SECRET_TOKEN,
  MY_CRYSTALLIZE_SECRET_TOKEN_ID,
  SENDGRID_API_KEY,
  TERMS_URI = "https://ornforlag.no/terms",
  CHECKOUT_URI = "https://ornforlag.no/checkout",

  NGROK_URL,

  VIPPS_API_URL = "https://testapi.vipps.no",
  HOST_URL = "http://127.0.0.1",
} = process.env

const DEV = NODE_ENV !== "production"

global.__crystallizeConfig = {
  NODE_ENV,
  COUNTRY_CODE,
  TENANT_ID: CRYSTALLIZE_TENANT_ID,
  GRAPH_URL: `${CRYSTALLIZE_API_URL}/tenant/${CRYSTALLIZE_TENANT_ID}`,
  ORDER_API_URL: `${CRYSTALLIZE_API_URL}/${CRYSTALLIZE_TENANT_ID}/orders`,
  CRYSTALLIZE_CORE_API_URL,
  SENDGRID_API_KEY,
  MY_CRYSTALLIZE_SECRET_TOKEN,
  MY_CRYSTALLIZE_SECRET_TOKEN_ID,

  DEV,
  TERMS_URI,
  CHECKOUT_URI,

  NGROK_URL,
  VIPPS_API_URL,
  HOST_URL,
}

module.exports = global.__crystallizeConfig
