import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../getLibrary";
import {MoralisProvider} from "react-moralis"
import "../styles/global.css";
import ToastProvider from "../components/toast/ToastProvider";
import FlowbiteNavbar from "../components/flowbite/FlowbiteNavbar";
import FlowbiteFooter from "../components/flowbite/FlowbiteFooter";

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <ToastProvider variant='top_middle'>
    <MoralisProvider appId={process.env.NEXT_PUBLIC_REACT_APP_MORALIS_APP_ID as string} serverUrl={process?.env?.NEXT_PUBLIC_REACT_APP_MORALIS_SERVER_URL as string} >
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
      <div>
      <FlowbiteNavbar />
      </div>
        <div style={{background: "linear-gradient(159deg, rgba(193,97,255,1) 0%, rgba(158,243,255,1) 50%)"}} className="flex-grow">
      <Component {...pageProps}/>
        </div>
        <div className="flex-col justify-center">
     <FlowbiteFooter />
        </div>
      </div>
    </Web3ReactProvider>
     </MoralisProvider >
        </ToastProvider>
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
          margin-right: 20px;
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
          box-shadow: 0 10px 20px rgba(255,255,255,0.8);
          margin: auto;
        }
        
        main h1 {
          margin-bottom: 20px;
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
        
        .landing-page-container {
          display: inline-flex;
        }
        .landing-page-landing-page {
          width: 1500px;
          height: 6956px;
          overflow: clip;
          position: relative;
          background-color: white;
        }
        .landing-page-footer {
          top: 6612px;
          left: 0;
          width: 1502.16px;
          height: 351px;
          position: absolute;
        }
        .landing-page-b-g {
          top: 0%;
          left: 0%;
          right: 0%;
          bottom: 0%;
          position: absolute;
          background-color: rgba(21, 21, 21, 1);
        }
        .landing-page-dummy {
          top: 39.32%;
          left: 5.33%;
          color: rgba(162, 162, 162, 1);
          right: 70.11%;
          bottom: 37.89%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-designed-by-cr8tiv_y {
          top: calc(50% - 12px + 154.5px);
          left: 5.33%;
          color: rgba(152, 152, 152, 1);
          right: 80.49%;
          display: inline;
          opacity: 0.4;
          position: absolute;
          font-size: 12px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-comapny-links {
          top: 69px;
          left: 618.97px;
          width: 170px;
          height: 235px;
          position: absolute;
        }
        .landing-page-company-links-about {
          top: 0;
          left: 0;
          width: 170px;
          height: 235px;
          position: relative;
        }
        .landing-page-coin-base-links {
          color: white;
          display: inline;
          font-size: 18px;
          font-family: Poppins;
          line-height: 30px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component {
          color: rgba(162, 162, 162, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          line-height: 30px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-home-about-us-blog-s {
          color: rgba(162, 162, 162, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          line-height: 30px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-contact-us {
          top: 69px;
          left: 851.97px;
          width: 226px;
          height: 158px;
          position: absolute;
        }
        .landing-page-contact-us55254 {
          top: 0;
          left: 0;
          width: 226px;
          height: 158px;
          position: relative;
        }
        .landing-page-contact-us1 {
          color: white;
          display: inline;
          font-size: 18px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component01 {
          color: rgba(162, 162, 162, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-co {
          color: rgba(162, 162, 162, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-coin-base-instagram {
          top: calc(50% - 12px + -94.5px);
          left: 75.96%;
          color: white;
          right: 11.8%;
          display: inline;
          position: absolute;
          font-size: 18px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-download-app {
          top: calc(50% - 12px + 86.5px);
          left: 56.72%;
          color: rgba(162, 162, 162, 1);
          right: 35.76%;
          display: inline;
          position: absolute;
          font-size: 12px;
          font-family: Poppins;
          line-height: 24px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component03 {
          top: 124px;
          left: 1220.97px;
          width: 70px;
          height: 70px;
          position: absolute;
        }
        .landing-page-testimonials {
          top: 3818px;
          left: -82px;
          width: 1663.64px;
          height: 1542.15px;
          position: absolute;
        }
        .landing-page-group211 {
          top: 0;
          left: 0;
          width: 1663.64px;
          height: 1542.15px;
          position: absolute;
        }
        .landing-page-we-love-developers {
          top: calc(50% - 13px + -54.08px);
          left: 33.72%;
          color: white;
          right: 33.7%;
          height: 26px;
          display: inline;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-family: Poppins;
          line-height: 40px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-line {
          top: 659px;
          left: 807px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-satisfied-cli {
          top: 547px;
          left: 669px;
          width: 327px;
          height: 84px;
          position: relative;
          text-align: center;
        }
        .landing-page-s {
          color: white;
          display: inline;
          font-size: 28px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-atisfied-clients-aro {
          color: white;
          display: inline;
          font-size: 28px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-testimonial {
          top: 1049px;
          left: 832.31px;
          width: 468.52px;
          height: 117px;
          position: absolute;
        }
        .landing-page-femi-from-nigeria {
          top: 17.7px;
          left: 49.02px;
          color: rgba(51, 51, 51, 1);
          width: 154px;
          height: 21.36px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-wonderful-service-go {
          top: 63.17px;
          left: 49.02px;
          width: 419.5px;
          height: 36.09px;
          position: relative;
        }
        .landing-page-wonderful-service {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          font-weight: 700;
          line-height: 20px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-good-deal-and-very {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          line-height: 20px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rates {
          top: 1122px;
          left: -82px;
          width: 1663.62px;
          height: 1128.41px;
          position: absolute;
        }
        .landing-page-b-g2 {
          top: 0;
          left: 0;
          width: 1663.62px;
          height: 1128.41px;
          position: absolute;
        }
        .landing-page-image1 {
          top: 43.73px;
          left: 81.81px;
          width: 1500px;
          height: 955.57px;
          position: absolute;
        }
        .landing-page-mask {
          top: 0%;
          left: 0%;
          right: 0%;
          bottom: 0%;
          position: absolute;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-info {
          top: 463px;
          left: 253px;
          width: 1159px;
          height: 367px;
          position: absolute;
        }
        .landing-page-rectangle287 {
          top: 0;
          left: 0;
          width: 1158px;
          filter: drop-shadow(0px 50px 100px rgba(0, 0, 0, 0.25));
          height: 367px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 30px;
          background-color: white;
        }
        .landing-page-line01 {
          top: 69.21%;
          left: 74.7%;
          right: 6.3%;
          bottom: 30.79%;
          position: absolute;
          outline-color: rgba(187, 187, 187, 1);
          outline-style: solid;
          outline-width: 1px;
        }
        .landing-page-we-love-developers01 {
          top: 33.79%;
          left: 74.7%;
          color: rgba(51, 51, 51, 1);
          right: 1.68%;
          bottom: 51.94%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: 25px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers02 {
          top: 210px;
          left: 865px;
          width: 58px;
          height: 15px;
          position: relative;
        }
        .landing-page-component10 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-b-t-c {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers03 {
          top: 208px;
          left: 955px;
          width: 154.51px;
          height: 16.73px;
          position: relative;
        }
        .landing-page-component11 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-n-g-n {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 12px;
          font-family: Poppins;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rectangle61 {
          top: 24.25%;
          left: 82.3%;
          right: 10.3%;
          bottom: 69.15%;
          position: absolute;
          box-sizing: border-box;
          border-radius: 5px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-we-love-developers04 {
          top: 25.97%;
          left: 83.07%;
          color: white;
          right: 11.04%;
          bottom: 69.38%;
          display: inline;
          position: absolute;
          font-size: 8px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: 25px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers05 {
          top: 74.11%;
          left: 74.7%;
          color: rgba(51, 51, 51, 1);
          right: 1.68%;
          bottom: 11.61%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: 25px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers06 {
          top: 127px;
          left: 170px;
          width: 184.28px;
          height: 29.96px;
          position: relative;
        }
        .landing-page-we-buy {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component12 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers07 {
          top: calc(50% - 14.98px + -46.52px);
          left: 39.98%;
          color: rgba(51, 51, 51, 1);
          right: 44.1%;
          height: 29.96px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers08 {
          top: calc(50% - 14.98px + 51.48px);
          left: 39.98%;
          color: rgba(51, 51, 51, 1);
          right: 44.1%;
          height: 29.96px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers09 {
          top: calc(50% - 14.98px + 117.48px);
          left: 39.98%;
          color: rgba(51, 51, 51, 1);
          right: 44.1%;
          height: 29.96px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers10 {
          top: 286px;
          left: 620px;
          width: 184.28px;
          height: 29.96px;
          position: relative;
        }
        .landing-page-component13 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-eth {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers11 {
          top: calc(50% - 14.98px + -46.52px);
          left: 59.15%;
          color: rgba(51, 51, 51, 1);
          right: 24.93%;
          height: 29.96px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers12 {
          top: calc(50% - 15px + -6.5px);
          left: 46.11%;
          color: rgba(51, 51, 51, 1);
          right: 37.56%;
          height: 30px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers13 {
          top: 219px;
          left: 630px;
          width: 184.28px;
          height: 29.96px;
          position: relative;
        }
        .landing-page-component14 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-b-t-c1 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers14 {
          top: 231px;
          left: 170px;
          width: 184.28px;
          height: 29.96px;
          position: relative;
        }
        .landing-page-we-buy1 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Open Sans;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component15 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Open Sans;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers15 {
          top: calc(50% - 14.98px + -40.52px);
          left: 9.24%;
          color: rgba(51, 51, 51, 1);
          right: 86.38%;
          height: 29.96px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers16 {
          top: 167.08px;
          left: 170.1px;
          width: 157px;
          height: 30px;
          position: relative;
        }
        .landing-page-we-sell {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component16 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 300;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component17 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers17 {
          top: calc(50% - 14.98px + 63.48px);
          left: 9.24%;
          color: rgba(51, 51, 51, 1);
          right: 86.38%;
          height: 29.96px;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Open Sans;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers18 {
          top: 271.23px;
          left: 170px;
          width: 147.66px;
          height: 29.96px;
          position: relative;
        }
        .landing-page-we-sell1 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Open Sans;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component18 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Open Sans;
          font-weight: 300;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component19 {
          color: rgba(51, 51, 51, 1);
          display: inline;
          font-size: 14px;
          font-family: Open Sans;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-container1 {
          display: inline-flex;
        }
        .landing-page-bitcoin1 {
          top: 126px;
          left: 64px;
          width: 27px;
          height: 28px;
          overflow: clip;
          position: absolute;
        }
        .landing-page-container2 {
          display: inline-flex;
        }
        .landing-page-bitcoin2 {
          top: 218px;
          left: 424px;
          width: 27px;
          height: 28px;
          overflow: clip;
          position: absolute;
        }
        .landing-page-container3 {
          display: inline-flex;
        }
        .landing-page-bank-building {
          top: 121px;
          left: 424px;
          width: 27px;
          height: 27px;
          overflow: clip;
          position: absolute;
        }
        .landing-page-scroll {
          top: 98px;
          left: 1128px;
          width: 6px;
          height: 233.79px;
          position: absolute;
        }
        .landing-page-line02 {
          top: -3499px;
          left: -6396px;
          width: 233.79px;
          height: 0;
          position: absolute;
          outline-color: rgba(229, 229, 229, 1);
          outline-style: solid;
          outline-width: 3px;
        }
        .landing-page-line03 {
          top: -3425.39px;
          left: -6396px;
          width: 86.57px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 3px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-line25 {
          top: 71px;
          left: 0;
          width: 1158px;
          height: 0;
          position: absolute;
          outline-color: rgba(187, 187, 187, 1);
          outline-style: solid;
          outline-width: 1px;
        }
        .landing-page-we-love-developers19 {
          top: calc(50% - 20px + -140.5px);
          left: 5.53%;
          right: 84.97%;
          height: 40px;
          display: inline;
          position: absolute;
          font-size: 18px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-love-developers20 {
          top: calc(50% - 20px + -140.5px);
          left: 43.7%;
          right: 43.7%;
          height: 40px;
          display: inline;
          position: absolute;
          font-size: 18px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-love-developers21 {
          top: calc(50% - 20px + -140.5px);
          left: 78.76%;
          right: 4.06%;
          height: 40px;
          display: inline;
          position: absolute;
          font-size: 18px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-hero {
          top: 134px;
          left: -33px;
          width: 1567px;
          height: 816.31px;
          position: absolute;
        }
        .landing-page-b-g3 {
          top: 0;
          left: 0;
          width: 1567px;
          height: 816.31px;
          position: absolute;
        }
        .landing-page-rectangle284 {
          top: 0;
          left: 33px;
          width: 1500px;
          height: 750px;
          position: absolute;
          background-image: linear-gradient(174deg, rgba(253, 116, 155, 1) 2%, rgba(40, 26, 200, 1) 66%);
        }
        .landing-page-button {
          top: 427px;
          left: 215px;
          width: 157px;
          height: 54px;
          position: absolute;
        }
        .landing-page-rectangle286 {
          top: 0;
          left: 0;
          width: 157px;
          height: 54px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-color: white;
        }
        .landing-page-field {
          top: calc(50% - 10px + 0px);
          left: 20.38%;
          right: 20.38%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-love-developers22 {
          top: 142px;
          left: 215px;
          width: 529px;
          height: 180px;
          position: relative;
        }
        .landing-page-we-provide-easy-solu {
          color: white;
          display: inline;
          font-size: 40px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component20 {
          color: white;
          display: inline;
          font-size: 40px;
          font-family: Poppins;
          font-weight: 300;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-bitcoin-giftcard-f {
          color: white;
          display: inline;
          font-size: 40px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-component21 {
          color: white;
          display: inline;
          font-size: 40px;
          font-family: Poppins;
          font-weight: 300;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-money {
          color: white;
          display: inline;
          font-size: 40px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-coin-base-is-a-platfo {
          top: 343px;
          left: 215px;
          color: white;
          display: inline;
          position: absolute;
          font-size: 18px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-i-m-g {
          top: 60px;
          left: 817px;
          width: 628px;
          height: 519px;
          position: absolute;
          background-size: cover;
          background-image: url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/6106/6ee1a9e8d435c321d2f1ba1069d0a90ad0b22bf2.webp);
        }
        .landing-page-form {
          top: 6467px;
          left: 473px;
          width: 554px;
          height: 54px;
          position: absolute;
        }
        .landing-page-button1 {
          top: 0;
          left: 397px;
          width: 157px;
          height: 54px;
          position: absolute;
        }
        .landing-page-rectangle2861 {
          top: 0;
          left: 0;
          width: 157px;
          height: 54px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-field1 {
          top: calc(50% - 10px + 0px);
          left: 21.02%;
          color: white;
          right: 21.02%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-form1 {
          top: 0;
          left: 0;
          width: 388px;
          height: 54px;
          position: absolute;
        }
        .landing-page-rectangle289 {
          top: 0;
          left: 0;
          width: 388px;
          height: 54px;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 1px;
          border-radius: 100px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-email {
          top: calc(50% - 10px + 0px);
          left: 0%;
          color: rgba(51, 51, 51, 1);
          right: 76.55%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          text-align: center;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-welcome {
          top: 921px;
          left: 136px;
          width: 1207px;
          height: 458px;
          position: absolute;
        }
        .landing-page-button2 {
          top: 404px;
          left: 665px;
          width: 157px;
          height: 54px;
          position: absolute;
        }
        .landing-page-rectangle2862 {
          top: 0;
          left: 0;
          width: 157px;
          height: 54px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-field2 {
          top: calc(50% - 10px + 0px);
          left: 21.02%;
          color: white;
          right: 21.02%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers23 {
          top: calc(50% - 32.5px + -196.5px);
          left: 55.1%;
          right: 18.81%;
          display: inline;
          position: absolute;
          font-size: 28px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-love-developers24 {
          top: calc(50% - 134px + 6px);
          left: 55.1%;
          color: rgba(51, 51, 51, 1);
          right: 0%;
          height: 268px;
          display: inline;
          position: absolute;
          font-size: 16px;
          font-family: Poppins;
          line-height: 40px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-line04 {
          top: 56.92px;
          left: 669px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-layer2 {
          top: 14px;
          left: 0;
          width: 629px;
          height: 393px;
          position: absolute;
          background-image: url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/6106/d292ee17cb3c07d70fee48e7c987b2cd7b008685.webp);
        }
        .landing-page-trade-from-anywhere {
          top: 2733px;
          left: -82px;
          width: 1663.62px;
          height: 625px;
          position: absolute;
        }
        .landing-page-b-g4 {
          top: 0;
          left: 0;
          width: 1663.62px;
          height: 519.75px;
          position: absolute;
        }
        .landing-page-rectangle {
          top: 0;
          left: 75.83px;
          width: 1512px;
          height: 488.94px;
          position: absolute;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-rectangle288 {
          top: 121px;
          left: 342px;
          width: 980px;
          filter: drop-shadow(0px 50px 100px rgba(0, 0, 0, 0.1));
          height: 504px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 30px;
          background-color: white;
        }
        .landing-page-we-love-developers25 {
          top: calc(50% - 21px + -96.5px);
          left: 40.45%;
          right: 40.43%;
          height: 42px;
          display: inline;
          position: absolute;
          font-size: 28px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: right;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-container1 {
          top: 314px;
          left: 538.03px;
          width: 262px;
          height: 226px;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 1px;
          border-radius: 15px;
          background-color: white;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-container2 {
          top: 314px;
          left: 863.03px;
          width: 262px;
          height: 226px;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 1px;
          border-radius: 15px;
          background-color: white;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-container4 {
          display: inline-flex;
        }
        .landing-page-bitcoin3 {
          top: 355.36px;
          left: 640.03px;
          width: 58px;
          height: 58px;
          overflow: clip;
          position: absolute;
        }
        .landing-page-bitcoin4 {
          top: 464px;
          left: 523px;
          color: rgba(51, 51, 51, 1);
          width: 294.07px;
          height: 51px;
          display: inline;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-gift-cards {
          top: 466px;
          left: 848px;
          color: rgba(51, 51, 51, 1);
          width: 294.07px;
          height: 51px;
          display: inline;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-gift-cards1 {
          top: 373px;
          left: 959.26px;
          width: 69.55px;
          height: 39.01px;
          position: absolute;
        }
        .landing-page-rectangle4 {
          top: 0;
          left: 0;
          width: 69.55px;
          height: 39.01px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 5px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-rectangle5 {
          top: 23.89px;
          left: 23.78px;
          width: 22px;
          height: 3.5px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 5px;
          background-color: white;
        }
        .landing-page-rectangle51 {
          top: 14.94px;
          left: 17.78px;
          width: 33.99px;
          height: 5.41px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 5px;
          background-color: white;
        }
        .landing-page-line05 {
          top: 254px;
          left: 807px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-great-experience {
          top: 2204px;
          left: 218px;
          width: 1111px;
          height: 413px;
          position: absolute;
        }
        .landing-page-button3 {
          top: 348px;
          left: 0;
          width: 157px;
          height: 54px;
          position: absolute;
        }
        .landing-page-rectangle2863 {
          top: 0;
          left: 0;
          width: 157px;
          height: 54px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-field3 {
          top: calc(50% - 10px + 0px);
          left: 21.02%;
          color: white;
          right: 21.02%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers26 {
          top: calc(50% - 42px + -150.5px);
          left: 0%;
          right: 77.14%;
          display: inline;
          position: absolute;
          font-size: 28px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-love-developers27 {
          top: calc(50% - 76.5px + 36px);
          left: 0%;
          color: rgba(51, 51, 51, 1);
          right: 51.22%;
          height: 153px;
          display: inline;
          position: absolute;
          font-size: 16px;
          font-family: Poppins;
          line-height: 40px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-line06 {
          top: 116px;
          left: 4px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-component22 {
          top: 0;
          left: 597px;
          width: 514px;
          height: 413px;
          position: absolute;
          background-image: url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/6106/4142df92a471ab80c21f40e2f9cc2e9102904613.webp);
        }
        .landing-page-blog {
          top: 3500px;
          left: 207px;
          width: 1087px;
          height: 543px;
          position: absolute;
        }
        .landing-page-we-love-developers28 {
          top: calc(50% - 13px + -149.5px);
          left: 25.02%;
          color: rgba(51, 51, 51, 1);
          right: 25.11%;
          height: 26px;
          display: inline;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-family: Poppins;
          line-height: 40px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers29 {
          top: calc(50% - 21px + -250.5px);
          left: 35.33%;
          right: 35.42%;
          height: 42px;
          display: inline;
          position: absolute;
          font-size: 28px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-line07 {
          top: 59px;
          left: 518px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-blog-blocks {
          top: 185px;
          left: 0;
          width: 1087px;
          height: 358px;
          position: absolute;
        }
        .landing-page-rectangle2891 {
          top: 36px;
          left: 0;
          width: 370px;
          height: 286px;
          position: absolute;
          box-sizing: border-box;
          border-color: rgba(136, 136, 136, 1);
          border-style: solid;
          border-width: 1px;
          border-radius: 15px;
          background-color: white;
        }
        .landing-page-dream-job-is-hard-to {
          top: calc(50% - 30px + -31px);
          left: 5.06%;
          color: rgba(136, 136, 136, 1);
          right: 70.19%;
          display: inline;
          position: absolute;
          font-size: 20px;
          font-family: Poppins;
          font-weight: 700;
          line-height: 30px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rectangle291 {
          top: 36px;
          left: 717px;
          width: 370px;
          height: 286px;
          position: absolute;
          box-sizing: border-box;
          border-color: rgba(136, 136, 136, 1);
          border-style: solid;
          border-width: 1px;
          border-radius: 15px;
          background-color: white;
        }
        .landing-page-dream-job-is-hard-to1 {
          top: calc(50% - 30px + -37px);
          left: 69.83%;
          color: rgba(136, 136, 136, 1);
          right: 5.7%;
          display: inline;
          position: absolute;
          font-size: 20px;
          font-family: Poppins;
          font-weight: 700;
          line-height: 30px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-button3 {
          top: 252px;
          left: 759px;
          width: 105px;
          height: 36.11px;
          position: absolute;
        }
        .landing-page-rectangle2864 {
          top: 0;
          left: 0;
          width: 105px;
          height: 36.11px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-color: rgba(136, 136, 136, 1);
        }
        .landing-page-field4 {
          top: calc(50% - 6.69px + 0px);
          left: 21.02%;
          color: white;
          right: 21.02%;
          height: 13.38px;
          display: inline;
          position: absolute;
          font-size: 9px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-group375 {
          top: 77px;
          left: 759px;
          width: 123px;
          height: 20px;
          position: absolute;
        }
        .landing-page-augs2018by-j {
          top: calc(50% - 10px + 0px);
          left: 0%;
          color: rgba(136, 136, 136, 1);
          right: 47.97%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 20px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-technology {
          top: calc(50% - 8.5px + -1.5px);
          left: 64.23%;
          color: rgba(136, 136, 136, 1);
          right: 0%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 17px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rectangle1 {
          top: 0%;
          left: 55.28%;
          right: 43.9%;
          bottom: 25%;
          position: absolute;
          box-sizing: border-box;
          border-color: rgba(136, 136, 136, 1);
          border-style: solid;
          border-width: 1px;
          border-radius: 5px;
        }
        .landing-page-lorem-ipsum-dolor-si {
          top: 51.4%;
          left: 69.83%;
          color: rgba(136, 136, 136, 1);
          right: 5.43%;
          bottom: 27.65%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 18.5px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rectangle290 {
          top: 0;
          left: 311px;
          width: 465px;
          filter: drop-shadow(0px 50px 100px rgba(0, 0, 0, 0.1));
          height: 358px;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 1px;
          border-radius: 15px;
          background-color: white;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-button1 {
          top: 274px;
          left: 370px;
          width: 127px;
          height: 43.68px;
          position: absolute;
        }
        .landing-page-rectangle2865 {
          top: 0;
          left: 0;
          width: 127px;
          height: 43.68px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-field5 {
          top: calc(50% - 8.09px + 0px);
          left: 21.02%;
          color: white;
          right: 21.02%;
          height: 16.18px;
          display: inline;
          position: absolute;
          font-size: 11px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-button2 {
          top: 258px;
          left: 55px;
          width: 105px;
          height: 36.11px;
          position: absolute;
        }
        .landing-page-rectangle2866 {
          top: 0;
          left: 0;
          width: 105px;
          height: 36.11px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-color: rgba(136, 136, 136, 1);
        }
        .landing-page-field6 {
          top: calc(50% - 6.69px + 0px);
          left: 21.02%;
          color: white;
          right: 21.02%;
          height: 13.38px;
          display: inline;
          position: absolute;
          font-size: 9px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-dream-job-is-hard-to2 {
          top: calc(50% - 39px + -57px);
          left: 34.04%;
          right: 37.63%;
          display: inline;
          position: absolute;
          font-size: 24px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          font-family: Poppins;
          font-weight: 700;
          line-height: 39px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-group371 {
          top: 44px;
          left: 375px;
          width: 130px;
          height: 20px;
          position: absolute;
        }
        .landing-page-augs2018by-j1 {
          top: calc(50% - 10px + 0px);
          left: 0%;
          color: rgba(51, 51, 51, 1);
          right: 51.54%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 20px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-technology1 {
          top: calc(50% - 8.5px + -1.5px);
          left: 64.62%;
          color: rgba(51, 51, 51, 1);
          right: 0%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 17px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rectangle2 {
          top: 0%;
          left: 56.15%;
          right: 43.08%;
          bottom: 25%;
          position: absolute;
          box-sizing: border-box;
          border-color: rgba(51, 51, 51, 1);
          border-style: solid;
          border-width: 1px;
          border-radius: 5px;
        }
        .landing-page-group372 {
          top: 83px;
          left: 55px;
          width: 145px;
          height: 20px;
          position: absolute;
        }
        .landing-page-augs2018by-j2 {
          top: calc(50% - 10px + 0px);
          left: 0%;
          color: rgba(136, 136, 136, 1);
          right: 62.07%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 20px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-technology2 {
          top: calc(50% - 8.5px + -1.5px);
          left: 54.48%;
          color: rgba(136, 136, 136, 1);
          right: 0%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 17px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-rectangle3 {
          top: 0%;
          left: 46.9%;
          right: 52.41%;
          bottom: 25%;
          position: absolute;
          box-sizing: border-box;
          border-color: rgba(136, 136, 136, 1);
          border-style: solid;
          border-width: 1px;
          border-radius: 5px;
        }
        .landing-page-lorem-ipsum-dolor-si1 {
          top: 49.16%;
          left: 34.04%;
          color: rgba(51, 51, 51, 1);
          right: 33.39%;
          bottom: 29.89%;
          display: inline;
          position: absolute;
          font-size: 12px;
          font-family: Poppins;
          line-height: 28px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-lorem-ipsum-dolor-si2 {
          top: 53.07%;
          left: 5.06%;
          color: rgba(136, 136, 136, 1);
          right: 62.37%;
          bottom: 25.98%;
          display: inline;
          position: absolute;
          font-size: 10px;
          font-family: Poppins;
          line-height: 18.5px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-love-developers30 {
          top: calc(50% - 32.5px + 2783.5px);
          left: 37.93%;
          right: 38.13%;
          display: inline;
          position: absolute;
          font-size: 28px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: right;
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-nullam-varius-portti {
          top: 91.01%;
          left: 37.27%;
          color: rgba(51, 51, 51, 1);
          right: 37.51%;
          bottom: 7.36%;
          display: inline;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-family: Poppins;
          line-height: 40px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-line08 {
          top: 6280.72px;
          left: 723px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-download-app1 {
          top: 5224px;
          left: -82px;
          width: 1663.62px;
          height: 903px;
          position: absolute;
        }
        .landing-page-b-g5 {
          top: 55px;
          left: 0;
          width: 1663.62px;
          height: 657.22px;
          position: absolute;
        }
        .landing-page-rectangle3 {
          top: 42px;
          left: 81.82px;
          width: 1500.01px;
          height: 615.22px;
          position: absolute;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-devices-iphone-x1 {
          top: calc(50% - 283px + 168.5px);
          left: calc(50% - 141.5px + -152.31px);
          width: 283px;
          height: 566px;
          position: absolute;
        }
        .landing-page-base {
          top: 0;
          left: 2.17px;
          width: 278.66px;
          height: 566px;
          position: absolute;
        }
        .landing-page-rectangle10 {
          top: 9.61%;
          left: 98.29%;
          right: 0%;
          bottom: 89.62%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-rectangle101 {
          top: 9.61%;
          left: 0%;
          right: 98.29%;
          bottom: 89.62%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-rectangle102 {
          top: 89.58%;
          left: 98.29%;
          right: 0%;
          bottom: 9.65%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-rectangle103 {
          top: 89.58%;
          left: 0%;
          right: 98.29%;
          bottom: 9.65%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-devices-iphone-x2 {
          top: calc(50% - 283px + 168.5px);
          left: calc(50% - 141.5px + 149.69px);
          width: 283px;
          height: 566px;
          position: absolute;
        }
        .landing-page-base1 {
          top: 0;
          left: 2.17px;
          width: 278.66px;
          height: 566px;
          position: absolute;
        }
        .landing-page-rectangle104 {
          top: 9.61%;
          left: 98.29%;
          right: 0%;
          bottom: 89.62%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-rectangle105 {
          top: 9.61%;
          left: 0%;
          right: 98.29%;
          bottom: 89.62%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-rectangle106 {
          top: 89.58%;
          left: 98.29%;
          right: 0%;
          bottom: 9.65%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-rectangle107 {
          top: 89.58%;
          left: 0%;
          right: 98.29%;
          bottom: 9.65%;
          position: absolute;
          background-color: rgba(20, 20, 20, 1);
        }
        .landing-page-discover-place-near {
          top: 59.72%;
          left: 16.61%;
          right: 13.85%;
          bottom: 28.74%;
          display: inline;
          position: absolute;
          font-size: 18px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-make-it-simple-to {
          top: 71.55%;
          left: 19.43%;
          color: rgba(51, 51, 51, 1);
          right: 16.96%;
          bottom: 18.73%;
          display: inline;
          position: absolute;
          font-size: 11px;
          text-align: center;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-we-make-it-simple-to1 {
          top: 13.34%;
          left: 66.11%;
          right: 12.6%;
          bottom: 83.39%;
          display: inline;
          position: absolute;
          font-size: 12px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: center;
          font-family: Open Sans;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-we-love-developers31 {
          top: calc(50% - 32.5px + -419px);
          left: 42.02%;
          right: 42.17%;
          display: inline;
          position: absolute;
          font-size: 28px;
          background: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
          text-align: right;
          font-family: Poppins;
          font-weight: 700;
          line-height: 65px;
          margin-block-end: 0px;
          margin-block-start: 0px;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .landing-page-nullam-varius-portti1 {
          top: 11.3%;
          left: 38.53%;
          color: rgba(51, 51, 51, 1);
          right: 38.72%;
          bottom: 76.19%;
          display: inline;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-family: Poppins;
          line-height: 40px;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-line09 {
          top: 51.72px;
          left: 805px;
          width: 50px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 7px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-store {
          top: 197px;
          left: 729px;
          width: 193px;
          height: 36px;
          position: absolute;
        }
        .landing-page-app-store-logo1 {
          top: 0;
          left: 0;
          width: 85px;
          height: 36px;
          position: absolute;
          background-image: url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/6106/8382f8477313edb09723841b7289a9ebc660fea8.webp);
        }
        .landing-page-get-it-on-google-play-badge-png-google-play-badge-png5051 {
          top: 4px;
          left: 95px;
          width: 98px;
          height: 28px;
          position: absolute;
          background-image: url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/6106/5f0fca904298a2455a0c1625370f84595fa82e27.webp);
        }
        .landing-page-navigation {
          top: 37px;
          left: 105px;
          width: 1207px;
          height: 47px;
          position: absolute;
        }
        .landing-page-dropdown {
          top: 54px;
          left: 1088px;
          width: 142px;
          height: 73px;
          position: absolute;
        }
        .landing-page-selection1 {
          top: calc(50% - 8.14px + -8.79px);
          left: 8.67%;
          color: rgba(51, 51, 51, 1);
          right: 26.16%;
          height: 16.28px;
          display: inline;
          position: absolute;
          font-size: 12px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-selection1copy {
          top: calc(50% - 9.14px + 21.17px);
          left: 8.67%;
          color: white;
          right: 14.99%;
          height: 18.29px;
          display: inline;
          position: absolute;
          font-size: 12px;
          font-family: Poppins;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-nav {
          top: 20px;
          left: 412px;
          width: 426px;
          height: 26px;
          position: absolute;
        }
        .landing-page-contact {
          top: calc(50% - 10.5px + -2.5px);
          left: 57.98%;
          color: rgba(51, 51, 51, 1);
          right: 34.51%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-contact1 {
          top: calc(50% - 10.5px + -2.5px);
          left: 81.22%;
          color: rgba(51, 51, 51, 1);
          right: 0%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-plans {
          top: calc(50% - 10.5px + -2.5px);
          left: 26.06%;
          color: rgba(51, 51, 51, 1);
          right: 58.69%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-about {
          top: calc(50% - 10.5px + -2.5px);
          left: 0%;
          color: rgba(51, 51, 51, 1);
          right: 89.91%;
          display: inline;
          position: absolute;
          font-size: 14px;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-indicator1 {
          top: 26px;
          left: 10px;
          width: 22px;
          height: 0;
          position: absolute;
          box-sizing: border-box;
          border-style: solid;
          border-width: 3px;
          border-radius: 9999px;
          border-image-slice: 1;
          border-image-source: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-field7 {
          top: calc(50% - 10px + -32.5px);
          left: 72.84%;
          color: rgba(51, 51, 51, 1);
          right: 15.91%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        .landing-page-button4 {
          top: 0;
          left: 1150px;
          width: 157px;
          height: 54px;
          position: absolute;
        }
        .landing-page-rectangle285 {
          top: 0;
          left: 0;
          width: 157px;
          height: 54px;
          position: absolute;
          box-sizing: border-box;
          border-radius: 100px;
          background-image: linear-gradient(178deg, rgba(253, 116, 155, 1), rgba(40, 26, 200, 1));
        }
        .landing-page-field8 {
          top: calc(50% - 10px + 0px);
          left: 35.67%;
          color: white;
          right: 35.67%;
          height: 20px;
          display: inline;
          position: absolute;
          font-size: 14px;
          text-align: center;
          font-family: Poppins;
          font-weight: 700;
          line-height: normal;
          margin-block-end: 0px;
          margin-block-start: 0px;
        }
        
      `}</style>
    </div>
    </>
  );
}

export default NextWeb3App;
