import { useState, useEffect } from "react";

function Price(props) {
  const apiKey = "BE640D91-4A64-490F-BC66-1F8ABD715D39";

  const symbol = props.match.params.symbol;

  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  async function getCoin() {
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  }

  useEffect(() => {
    getCoin();
  }, []);

  const loading = () => <h1>Loading...</h1>;

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  return coin ? loaded() : loading();
}

export default Price;
