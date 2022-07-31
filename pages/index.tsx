import { Base } from "../components/home/Base";
import { Background } from "../components/background/Background";
import BetaBadge from "../components/badges/BetaBadge";

function Home() {
  return (
    <div className="w-screen" >
    <Background>
      <BetaBadge />
      <Base />
    </Background>
    </div>

  );
}

export default Home;
