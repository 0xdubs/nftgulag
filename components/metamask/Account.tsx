import React,{ useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { UserRejectedRequestError } from "@web3-react/injected-connector";
import JazzIcon,{ jsNumberForAddress } from "react-jazzicon";
import { injected } from "../../connectors";
import useENSName from "../../hooks/useENSName";
import useMetaMaskOnboarding from "../../hooks/useMetaMaskOnboarding";
import { shortenHex } from "../../util";

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Account = ({ triedToEagerConnect }: AccountProps) => {
  const { active, error, activate, account, setError,deactivate } =
    useWeb3React();
    

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding();

  // manage connecting state for injected connector
  const [connecting, setConnecting] = useState(false);
  useEffect(() => {
    if (active || error) {
      setConnecting(false);
      stopOnboarding();
    }
  }, [active, error, stopOnboarding]);
  
  const ENSName = useENSName(account);

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }
  const handleButtonClick = () => {
    deactivate()
    setConnecting(false)
    stopOnboarding()

  }

  if (typeof account !== "string") {
    return (
      <div className="account-button">
        {isWeb3Available ? (
          <button
            disabled={connecting}
            className="flex flex-wrap flex-shrink justify-center items-center max-w-min"
            onClick={() => {
              setConnecting(true);
              activate(injected, undefined, true).catch((error) => {
                // ignore the error if it's a user rejected request
                if (error instanceof UserRejectedRequestError) {
                  setConnecting(false);
                } else {
                  setError(error);
                }
              });
            }}
          >
            {isMetaMaskInstalled ? "Connect to MM" : "Connect to Wallet"}
          </button>
        ) : (
          // <link href="https://metamask.app.link/dapp/nextjs-gulag-dapp.vercel.app/">
          <button onClick={startOnboarding}>Install Metamask</button>
          // </link>
        )}
        <style jsx>
          {`.account-button {
          display: flex;
          justify-content: center;
          align-items: center;
          
          
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
        }`}
        </style>
      </div>
    );
  }


  return (
    <a
      className=""
    >
      <button className="account-button" onClick={handleButtonClick} style={{display:"flex",justifyContent: "space-between",font: "text-indigo-700"}}>
      {ENSName || `${shortenHex(account, 3)}`+" "}
      {account && (
          <JazzIcon seed={jsNumberForAddress(account)} />
        )
      }
      </button>
      <style jsx>
          {`.account-button {
            display: flex;
            justify-content: center;
            
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
        }`}
        </style>
    </a>
  );
};

export default Account;
