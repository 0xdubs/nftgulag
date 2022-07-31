import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import ErrorBadge from "../../components/badges/ErrorBadge";
import NoData from "../../components/other/NoData";
import CompletedGulags from "../../components/gulagCards/CompletedGulags";import { useEffect, useState } from "react";
import BetaBadge from "../../components/badges/BetaBadge";
;

function Home() {
  const { account, library,chainId } = useWeb3React();
  const [isConnected,setIsConnected] = useState(false)

  useEffect(()=> {
    const isConnectedEffect = typeof account === "string" && !!library && chainId===3;
    setIsConnected(isConnectedEffect)
  },[isConnected,account,library,chainId])


  return (
    <div style={{alignItems: "center",justifyContent: "center",flex: "true"}}>
      <BetaBadge />
      {chainId!==3 && (<ErrorBadge />)}  
        <Head>
        <title>NFT Gulag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}} className="text-4xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          Completed Gulags
        </h1>
        {isConnected &&  (
          <section className="row">
            <CompletedGulags />
          </section>
        )}
         {!isConnected && (
          <NoData />
        )}
      </main>

      <style jsx>
        {`main h1 {margin: 0}`}
      </style>
    
    </div>
  );
}

export default Home;
