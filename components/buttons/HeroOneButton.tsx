import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title?: ReactNode;
  description?: string;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center h-1/2 content-center mt-4 m-auto">
    <h1 className="text-4xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16">{props?.description}</div>

    {props?.button}
  </header>
);

export { HeroOneButton };
