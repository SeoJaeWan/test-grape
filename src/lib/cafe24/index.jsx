const Cafe = () => {
  const state = process.env.REACT_APP_STATE;
  const clientId = process.env.REACT_APP_CLIENTID;
  const redirect = process.env.REACT_APP_REDIRECT;

  const login = () => {
    window.open(
      `https://bono2268.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&state=${state}&redirect_uri=${redirect}&scope=mall.read_product,mall.read_supply,mall.read_salesreport`
    );
  };

  return (
    <div>
      <button onClick={login}>발급</button>
    </div>
  );
};

export default Cafe;
