import { Meta } from '../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';
import { Banner } from './Banner';
import { HeroNew } from './HeroNew';
import { VerticalFeatures } from './VerticalFeatures';
import Timeline from './Timeline';

const Base = () => (
  <div className="antialiased text-gray-700" >
    <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className='h-screen flex-grow'>
    <HeroNew />
      </div>
    <div style={{background: "linear-gradient(159deg, rgba(193,97,255,1) 0%, rgba(158,243,255,1) 50%)"}}>
    <div className='flex-col'>

    <VerticalFeatures />
    </div>
    <div className="flex-col mt-20 py-5 pb-5 m-8 rounded justify-items-center align-middle">
    <div className="flex-grow rounded flex-row justify-center align-middle border-4 border-gray-200 bg-gray-200 opacity-50"></div>
    </div>
<div className='flex-col m-4'>
    <Timeline />
</div>
<div className='flex-col mb-5'>

    <Banner />
</div>
    </div>
  </div>
);

export { Base };
