import {Navbar} from "flowbite-react"
import useEagerConnect from "../../hooks/useEagerConnect";
import Account from "../metamask/Account"

const FlowbiteNavbar = () => {
  const triedToEagerConnect = useEagerConnect();
return (
    <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://nftgulag.io">
    <img
      src="/favicon.ico"
      className="mr-3 h-6 sm:h-9"
      alt="NFT Gulag Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      NFT Gulag
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    
    <div className="flex flex-flow columns-2">

  <Account triedToEagerConnect={triedToEagerConnect} />
    <Navbar.Toggle />
    
    </div>
    {/* <div> */}

    {/* </div> */}
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
    //   active={true}
      style={{fontSize: "18px"}}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/live" style={{fontSize: "18px"}}>
      Live
    </Navbar.Link>
    <Navbar.Link href="/create" style={{fontSize: "18px"}}>
      Create
    </Navbar.Link>
    <Navbar.Link href="/join" style={{fontSize: "18px"}}>
      Join
    </Navbar.Link>
    <Navbar.Link href="/completed" style={{fontSize: "18px"}}>
      Completed
    </Navbar.Link>
    <Navbar.Link href="/mygulags" style={{fontSize: "18px"}}>
      My Gulags
    </Navbar.Link>
  </Navbar.Collapse>
    {/* <Account triedToEagerConnect={triedToEagerConnect} /> */}
  
</Navbar>
)
}

export default FlowbiteNavbar