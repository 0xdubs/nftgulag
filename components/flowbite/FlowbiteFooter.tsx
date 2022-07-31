import { Footer } from "flowbite-react"
import { BsTwitter, BsGithub, BsSearch, BsDiscord, BsHouseDoor } from "react-icons/bs"


const FlowbiteFooter = () => {
return (


<Footer container={true}>
  <div className="w-full">
    
    <div style={{border:"0 15px 25px"}} className="flex-col justify-center sm:flex sm:items-center sm:justify-between">
    <div className="flex-row align-middle">
    <div className="mt-4 mb-8 flex justify-center">
        <Footer.Brand
          href="https://nftgulag.io"
          src="assets/images/battle.svg"
          alt="NFT Gulag Logo"
          name="NFT Gulag"
        />
      </div>
    </div>
      <div className="flex-row align-middle">
      <div className="mt-4 flex space-x-6 sm:mt-0 justify-center hover:red">
      <Footer.Icon
          href="/"
          icon={BsHouseDoor}
        />
        <Footer.Icon
          href="https://twitter.com/nftgulag"
          icon={BsTwitter}
        />
        <Footer.Icon
          href="https://discord.gg/RWutNEPs"
          icon={BsDiscord}
        />
        <Footer.Icon
          href="https://github.com/danielw1534/nextjs-gulag-dapp"
          icon={BsGithub}
        />
        <Footer.Icon
          href="https://ropsten.etherscan.io/address/0x56b4cbae0455f7f90430f59e8c2c3448a7be703b#code"
          icon={BsSearch}
        />
      </div>
      </div>
      <div className="mt-8 mb-4 text-center">

      <Footer.Copyright
        by="NFT Gulag"
        year={2022}
      />
      </div>
      
    </div>
  </div>
</Footer>
)
}

export default FlowbiteFooter