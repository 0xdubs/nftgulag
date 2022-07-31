import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import BetaBadge from "../../components/badges/BetaBadge";
import CreateGulag from "../../components/gulagCards/CreateGulag";
import ErrorBadge from "../../components/badges/ErrorBadge";
import NoData from "../../components/other/NoData";

function Home() {
  const { account, library,chainId } = useWeb3React();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <BetaBadge />
      <Head>
        <title>NFT Gulag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {chainId!==3 && (<ErrorBadge />)}
      <br></br>
      <main>
      <h1 style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}} className="text-4xl text-gray-900 font-bold whitespace-pre-line leading-hero">
          Create Gulag
        </h1>
        {!isConnected && (
          <NoData />
        )}
        {isConnected && (
          <section>
            <CreateGulag />
          </section>
        )}
      </main>
      <br></br>

      <style jsx>{`
        html,
        body {
          --main-color: #4b2eb3;
          --light-main-color:#b48cf9;
          --secondary-color:#b3d4fc;
          --redeem-color:#bbb812;
          padding: 0;
          margin: 0;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        
        body {
          min-height: 100vh;
          background: linear-gradient(159deg, rgba(193,97,255,1) 0%, rgba(158,243,255,1) 50%);
        }
        
        a {
          color: inherit;
          text-decoration: none;
        }
        
        * {
          box-sizing: border-box;
        }
        
        h1 {
          margin: 0;
        }
        
        header {
          /* max-width: 1000px; */
          padding: 20px;
          margin: 0 auto 60px;
        }
        
        /* header nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: Consolas, 'Courier New', Courier, monospace;
          font-weight: bold;
          color: white;
        } */
        header nav {
          box-shadow: 0 0 5px rgb(72, 72, 72);
          border-radius: 15px;
          padding: 1em 3;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          align-items: center;
          /* width: 700px; */
          overflow: hidden;
          transition: .4s;
          /* z-index: 100; */
        }
        nav:hover{
            box-shadow: 0 0 8px rgb(177, 177, 177);
        }
        nav ul {
          display: flex;
          justify-content: space-between;
          padding: 0 1em;
        }
        
        
        header .account-info {
          display: flex;
          align-items: center;
        }
        
        header .account-info p {
          margin-right: 20px;
        }
        
        header .account-info .wallet-address {
          padding: 0 4px;
          border: 2px solid;
        }
        
        .account-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          padding: 6px 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
        
        .account-button button {
          line-height: 1;
          background: transparent;
          padding: 0;
          border: none;
          cursor: pointer;
        }
        
        main {
          background: rgba(255, 255, 255, 0.904);
          padding: 40px;
          border-radius: 10px;
          justify-content:center;
          align-items:center;
          box-shadow: 0 10px 20px rgba(255,255,255,0.8);
          margin: auto;
          max-width:680px;
        }
        
        main h1 {
          margin-bottom: 20px;
          justify-content:center;
        }
        
        main h2 {
          max-width: 680px;
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(255,255,255,0.8);
          margin: auto;
        }
        
        .form-row {
          display: flex;
          flex-direction: column;
          text-align: left;
          margin: 0 0 20px;
        }
        
        .form-row > span {
          display: block;
          font-size: 18px;
          margin: 0 0 6px;
        }
        
        .form-row > span.hint-text {
          display: block;
          font-weight: 300;
          font-size: 14px;
          color: #666666;
          margin-top: 2px;
        }
        
        .form-row > input,
        .react-datetime-picker {
          box-sizing: border-box;
          padding: 10px;
          border: 2px solid var(--main-color);
          border-radius: 10px;
        }
        
        .form-row > input,
        .react-datetime-picker input {
          font-size: 18px;
          font-weight: 500;
          color: var(--main-color);
        }
        
        .react-datetime-picker__wrapper {
          border: none !important;
        }
        
        .form .submit-button {
          font-size: 24px;
          color: white;
          background: var(--main-color);
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 8px 30px;
          border: 2px solid var(--main-color);
          border-radius: 20px;
          box-shadow: 0 5px 5px rgba(200,200,200,0.4);
          margin-top: 20px;
          cursor: pointer;
        }
        .form .interact-button-vote {
          font-size: 20px;
          color: white;
          background: var(--light-main-color);
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 8px 30px;
          border: 2px solid var(--light-main-color);
          border-radius: 20px;
          box-shadow: 0 5px 5px rgba(200,200,200,0.4);
          margin-top: 20px;
          cursor: pointer;
        }
        .form .interact-button-wager {
          font-size: 20px;
          color: white;
          background: var(--secondary-color);
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 8px 30px;
          border: 2px solid var(--secondary-color);
          border-radius: 20px;
          box-shadow: 0 5px 5px rgba(200,200,200,0.4);
          margin-top: 20px;
          cursor: pointer;
        }
        .form .interact-button-redeem {
          font-size: 18px;
          color: white;
          background: var(--redeem-color);
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 8px 30px;
          border: 2px solid var(--redeem-color);
          border-radius: 20px;
          box-shadow: 0 5px 5px rgba(200,200,200,0.4);
          margin-top: 20px;
          cursor: pointer;
        }
        .form .nft-center {
          font-size: 20px;
          color: black;
          flex-direction: column;
          flex: auto;
          justify-content: center;
          /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
          padding: 8px 15px;
          border: 2px solid var(--main-color);
          border-radius: 20px;
          /* box-shadow: 0 5px 5px rgba(200,200,200,0.4); */
          /* margin-top: 20px; */
          /* cursor: pointer; */
        }
        
        .form .submit-button:hover {
          box-shadow: 0 5px 10px rgba(200,200,200,0.8);
        }
        
        .center {
          margin:auto;
          width: 63%;
          /* border: 3px grey; */
          /* padding: -8px -30px; */
          /* padding: 10px; */
        }
        
        .title {
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
}

export default Home;
