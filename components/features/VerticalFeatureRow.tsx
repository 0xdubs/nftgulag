import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();
  
  return (
    <div className={verticalFeatureClass} style={{flexWrap: "wrap",justifyContent: "space-evenly",display: "flex"}}>

      <div className="w-full sm:w-1/2 text-center sm:px-6 mb-10" style={{flexWrap: "wrap",justifyContent: "space-evenly",display: "flex"}}>
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9 mb-6">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2" style={{display:"flex",justifyContent:"center"}}>
        <img style={{maxWidth: "230px",display:"block",margin:"auto"}} src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
      </div>
  );
};

export { VerticalFeatureRow };
