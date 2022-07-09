import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";
const PATHP2P =
  "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search";
const asset = "USDT";
const fiat = "MAD";
const tradeType = "BUY";

let POST_DATA = {
  asset,
  fiat,
  tradeType,
  merchantCheck: true,
  page: 1,
  payTypes: [],
  publisherType: null,
  rows: 20,
  transAmount: "5000",
};

const argArray = [];
let num = 0;
setInterval(() =>{num++;console.log(num)},250)

    serve((req: Request) => new Response(num.toString()));

/*
axiod
  .post(PATHP2P, POST_DATA)
  .then(function ({ data = [] }) {
    const key = new Date().getTime().toString();
    const { price, advNo } = data?.data[0]?.adv || [];

    argArray.push({ num, price, advNo, key });
  
    const ress = JSON.stringify({ argArray })
    console.log(ress)
    serve((req: Request) => new Response(ress));

  })
  .catch(console.error);
  //*/


