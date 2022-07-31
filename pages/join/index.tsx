import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import JoinGulags from "../../components/gulagCards/JoinGulags";
import ErrorBadge from "../../components/badges/ErrorBadge";
import NoData from "../../components/other/NoData";
import { useEffect, useState } from "react";
import BetaBadge from "../../components/badges/BetaBadge";

function Home() {
  const { account, library,chainId } = useWeb3React();
  const [isConnected,setIsConnected] = useState(false)

  useEffect(()=> {
    const isConnectedEffect = typeof account === "string" && !!library && chainId===3;
    setIsConnected(isConnectedEffect)
  },[isConnected,account,library,chainId])

  return (
    <div>
    <div style={{justifyContent: "center",
        flexWrap: "wrap",}}>
          <BetaBadge />
      {chainId!==3 && (<ErrorBadge />)}
      </div>
       
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
          Join Gulags
        </h1>
        {isConnected &&  (
          <section className="row">
            <JoinGulags/>
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
