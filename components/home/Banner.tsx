import Link from 'next/link';

import { Button } from '../buttons/Button';
import { CTABanner } from '../banners/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <div className='mt-5' style={{justifyContent: "space-evenly",display: "flex",flexWrap: "wrap"}}>

    <CTABanner
      title="Want to learn more? Check out this medium article."
      // subtitle="NFT Gulag"
      button={
        <Link href="https://daniel-warren.medium.com/the-nft-gulag-dapp-cdfd5f9da17d">
          <a>
            <Button>View Article</Button>
          </a>
        </Link>
      }
    />
    </div>
  </Section>
);

export { Banner };
