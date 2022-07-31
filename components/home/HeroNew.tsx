import React,{useRef} from 'react';

import { Background } from '../background/Background';
import { Button } from '../buttons/Button';
import { HeroOneButton } from '../buttons/HeroOneButton';
import { Section } from '../layout/Section';

export default function HeroNew() {
    const ref = useRef(null);
  const handleClick = () => {
    //@ts-ignore
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
    return (
      <>
      <div className='h-screen' >

      
      <div className='w-screen flex-grow'>
        <Background>
<div className='grid moving h-screen place-items-center mr-4 ml-4 -mt-20' >
    <Section>
  <div>
  <div style={{width: "60%"}} className="absolute flex justify-center">
    <div className="absolute top-20 right-10 w-72 h-80 bg-purple-300 rounded-full  mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
    <div className="absolute top-16 left-1/4 w-72 h-72 mr-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div className="absolute top-4 -left-1/4 -bottom-8 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
      <HeroOneButton
        title={
          <>
          <div>
            {'Where NFTs come to\n'}
          </div>
            <div className='z-1'>
            <span style={{color:'white'}}>Earn their stripes</span>
            
            </div>
          </>
        }
        description='Win rewards and garner respect by selecting the best NFT'  
      />
      <a onClick={handleClick} style={{justifyContent: "center", alignContent: "center",display: "flex",position: "relative",zIndex: 1}}>
      <Button xl>See how it works</Button>
      </a>
    </div>
    </Section>
    
  <style jsx>{`
        moving-bg {
            position: relative;
            left: 0;
            width: 500em;
            height: 70%;
            opacity: 0.1;
            visibility: inherit;
            background: transparent url(../../public/core-img/crypto.png) repeat-x scroll 0 100%;
        }
        .h1 {
          color: white;
          z-index:1;
          font-weight: bold;
        }
      `}</style>
</div>
  </Background>
</div>
</div>
<div ref={ref}></div>
      </>
        
    )
}

export {HeroNew}