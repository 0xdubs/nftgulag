import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-center items-center mr-5">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav>
      <ul style={{rowGap:"4px"}} className="navbar flex flex-wrap items-center justify-center font-medium text-xl text-gray-800 ml-6">
        {props.children}
        {/* <Account triedToEagerConnect={true} /> */}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
          @apply ml-4
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
