import { useEffect, useState } from "react";
import 'react-calendar/dist/Calendar.css'; import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import Gulag_ABI from "../../contracts/NewGulag.json";
import type { NewGulag } from "../../contracts/types";
import { parseEther } from "@ethersproject/units";
import useContract from "../../hooks/useContract";
import Select from "react-select"
import { Chain } from "web3uikit";
import { NFT } from "../NFTStylized";
import { useWeb3React } from "@web3-react/core";
import NoData from "../other/NoData";

const options = [
  {value: 'eth',label: "eth"}, {value: 'ropsten',label: "ropsten"},{value: "polygon",label: "polygon"}
];

const useGulagContract = () => {
  return useContract<NewGulag>(process.env.NEXT_PUBLIC_REGISTRY_CONTRACT_ADDRESS as string, Gulag_ABI);
}

const CreateGulag = () => {
  const [ethAmount, setEthAmount] = useState("");
  const [error,setError] = useState(false);
  const [callDataNftAddress, setCallDataNftAddress] = useState("");
  const [callDataNftTokenId, setCallDataNftTokenId] = useState("");
  const [callDataNftChain, setCallDataNftChain] = useState("eth" as Chain);
  const contract = useGulagContract();
  const {chainId} = useWeb3React()

  useEffect(()=> {
    if (chainId!==3) {
      setError(true)
    }
  },[chainId, error])

  const createGulag = async (ethForCall:any) => {
    // The additional 0.01 ETH in `payableValue` is for the bot to execute the transaction
    const payableValue = parseEther((parseFloat(ethForCall)+0.001).toString());

    if (contract) {
      await contract
      .createGulag(
       callDataNftAddress, callDataNftChain,callDataNftTokenId,
      {gasLimit:4000000,value:payableValue})
        .catch(error => {
          console.error(error);
        });
    }
  }

  return (
    <div className="form m-auto" style={{justifyContent: "center"}}>
      {error ?? (
        <NoData />
      )}
      <div className="form-row" style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}}>
        <span>Amount of ETH to send</span>
        <input placeholder="Ex. 0.2" type="number" onChange={(event) => setEthAmount(event.target.value)}></input>
      </div>
      <div className="form-row" style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}}>
        <span>Nft Address</span>
        <input placeholder="Ex. 0x1234567890987654321" type="string" onChange={(event) => setCallDataNftAddress(event.target.value)}></input>
      </div>
      <div className="form-row">
        <span>Nft Chain</span>
        <Select  className="nft-center" options={options} onChange={(event:any) => setCallDataNftChain(event.value as Chain)} placeholder="Select an option" name="callDataNftChain"/>
      </div>
      <div className="form-row" style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}}>
        <span>Nft Token Id</span>
        <input placeholder="Ex. 1032" type="string" onChange={(event) => setCallDataNftTokenId(event.target.value)}></input>
        {/* <span className="hint-text">*An additional Ξ0.01 is required for the bot to execute the future transaction. The remainder will be sent back to you if there is any.</span> */}
      </div>
      {callDataNftAddress && callDataNftChain && chainId===3 && callDataNftTokenId ? 
      <div className="center">
        <div className="title" style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}}>
        Preview
          </div>
        <div style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}}>
      <NFT
      tokenId={callDataNftTokenId} 
      chain={callDataNftChain} 
      fetchMetadata 
      address={callDataNftAddress}
      />
      </div>
      </div>:[]}
      <div style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}}>
          <div>
          {chainId===3 && (
      <button className="submit-button" style={{display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginBottom: "20px",
        marginTop: "20px"}} onClick={() => createGulag( ethAmount)}>Create Gulag</button>
          )}
          </div>
      </div>
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
          max-width: 680px;
          background: rgba(255, 255, 255, 0.904);
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(255,255,255,0.8);
          margin: auto;
          margin-right:60px;
        }
        
        main h1 {
          margin-bottom: 20px;
          margin-right:60px;
        }
        
        main h2 {
          max-width: 680px;
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 20px rgba(255,255,255,0.8);
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
          border-radius: 10px;
        }
        
        .form-row > input,
        .react-datetime-picker input {
          font-size: 18px;
          font-weight: 500;
        }
        
        .react-datetime-picker__wrapper {
          border: none !important;
        }
        
        .form .submit-button {
          font-size: 24px;
          color: white;
          background: #4b2eb3;
          justify-content: "space-evenly";
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 8px 30px;
          border: 2px solid #4b2eb3;
          border-radius: 20px;
          box-shadow: 0 5px 5px rgba(200,200,200,0.4);
          margin-top: 20px;
          cursor: pointer;
        }
        .form .interact-button-vote {
          font-size: 20px;
          color: white;
          background: #b48cf9;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          padding: 8px 30px;
          border: 2px solid #b48cf9;
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
          border: 2px solid #4b2eb3;
          flex-direction: column;
          flex: auto;
          justify-content: center;
          /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
          padding: 8px 15px;
          border: 2px solid #4b2eb3;
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
};

export default CreateGulag;
