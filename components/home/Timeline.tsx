import { Button } from "../buttons/Button"
import { HeroOneButton } from "../buttons/HeroOneButton"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline() {
    const handleClick = () => {
        window.scrollTo({behavior: "smooth",top: -36})
      }
    return (
        <div>
          <h2 className="text-4xl text-gray-900 font-bold mb-12 text-center mt-36">Project Timeline</h2>
          <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243,0.7)',border:"3px solid #fff",color:"black" }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243,0.7)' }}
    date="Q3 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Release Ropsten Beta</h3>
    <h4 className="vertical-timeline-element-subtitle italic">In progress</h4>
    <p>
    Begin month-long trial period to test smart-contract & frontend on Ropsten Testnet.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: "rgb(233, 30, 99,0.7)",border:"3px solid #fff",color:"black"}}
    date="Q4 2022"
    iconStyle={{ background: 'rgb(233, 30, 99,0.7)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title text-black font-bold">Deploy on Mainnet</h3>
    <h4 className="vertical-timeline-element-subtitle text-black italic">Early stages</h4>
    <p>
    Deploy code on Etherium mainnet and let the battles begin.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: "rgb(233, 30, 99,0.7)",border:"3px solid #fff",color:"black"}}
    date="Q4 2022"
    iconStyle={{ background: 'rgb(233, 30, 99,0.7)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Release Token & Tiers</h3>
    <h4 className="vertical-timeline-element-subtitle italic">Early stages</h4>
    <p>
      Token to be rewarded to gulag winners & will encourage competitive/tiered competitions
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{background: "rgb(16, 204, 82,0.7)",border:"3px solid #fff",color:"black"}}
    date="H1 2023"
    iconStyle={{ background: 'rgb(16, 204, 82,0.7)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title font-bold">Integrate Twitter Oracle</h3>
    <h4 className="vertical-timeline-element-subtitle italic">Future development</h4>
    <p>
      Bring NFTs to popular social media platform and determine winners via twitter likes.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(215,215,0,0.7)', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
        {/* <Chrono
  items={[
  {
    title: "Q3 2022",
    cardTitle: "Release Ropsten Beta",
    url: "http://google.com",
    cardSubtitle:
      "Begin month-long trial period to test smart-contract & frontend.",
    // cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`
  },
  {
    title: "25 July 1940",
    cardTitle: "The Battle of Britain",
    cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
    cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
      The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
  },
  {
    title: "June 1941",
    cardTitle: "Operation Barbarossa",
    cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
    cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
      Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
      On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
  }]}
  mode="VERTICAL"
/> */}

    <HeroOneButton  
    button={
    //   <Link>
        <a onClick={handleClick} style={{font: "black",color:"black"}}>
          <Button xl>Back to top</Button>
        </a>
    //   </Link>
    }
  />
</div>
    )
}