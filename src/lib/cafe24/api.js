import axios from "axios";
const access_token = "";
const version = "2023-03-01";
const mallid = "sjaw7324";

export const getToken = () => {
  const redirect_uri = "https://sjaw7324.cafe24.com";
  const code = "Fr6IeaXfCkLqOiX76LAukF";
  const client_id = "UKmRachiPRsoGpxFKeRihB";
  const client_secret = "em82tn7rNiESb3ecfajIBW";

  const data = axios.post(
    `https://${mallid}.cafe24api.com/api/v2/oauth/token`,
    {
      body: {
        grant_type: "authorization_code",
        code,
        redirect_uri,
      },
      headers: {
        Authorization: `Basic {base64_encode(${client_id}:${client_secret})}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  console.log(data);
};

export const salesReport = () => {
  const access_token = "ubsEzl1yP9shSMXWLf7nDD";

  const data = axios.get(
    `https://${mallid}.cafe24api.com/api/v2/admin/reports/salesvolume?variants_code=P0000BKE000A&product_no=16&start_date=2018-10-27 14:10:00&end_date=2018-10-28 14:10:59`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
        "X-Cafe24-Api-Version": `${version}`,
      },
    }
  );

  console.log(data);
};
