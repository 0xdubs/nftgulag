import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import LiveGulags from "../../components/gulagCards/LiveGulags";
import ErrorBadge from "../../components/badges/ErrorBadge";
import NoData from "../../components/other/NoData";
import { useEffect, useState } from "react";
import BetaBadge from "../../components/badges/BetaBadge";

function Home() {
  const [isConnected,setIsConnected] = useState(false)
  
  const { account, library,chainId } = useWeb3React();
  useEffect(()=> {
    const isConnectedEffect = typeof account === "string" && !!library && chainId===3;
    setIsConnected(isConnectedEffect)
  },[isConnected,account,library,chainId])

  return (
    <div className="flex-grow" style={{alignItems: "center",justifyContent: "center",flex: "true"}}>
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
        marginTop: "20px"}} className="text-3xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          Live Gulags
        </h1>
        {isConnected &&  (
          <section className="row">
            <LiveGulags />
          </section>
        )}
        {!isConnected && (
          <NoData />
        )}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    
    </div>
  );
}

export default Home;
