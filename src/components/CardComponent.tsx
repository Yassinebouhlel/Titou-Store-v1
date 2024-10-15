import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  bgColor: string;
  iconUrl?: string; // Optional, since we can pass an icon component
  icon?: ReactNode; // For using react-icons or other components
  textColor: string;
}
function CardComponent({
  bgColor,
  description,
  iconUrl,
  icon,
  textColor,
  title
}: Props) {
  return (
    <div
      className={`rounded-3xl shadow-lg ${bgColor} flex h-full w-full  ${textColor} max-h-[280px]`}
    >
      <div className="mr-4 flex max-h-80 w-2/5 flex-col-reverse items-center justify-center">
      {icon ? (
          <div className="text-6xl mb-2">{icon}</div> // Render icon if passed
        ) : (
          iconUrl && (
            <Image
              alt={title}
              className="mb-2 rounded-bl-3xl"
              height={110}
              src={iconUrl}
              style={{ maxWidth: 'none' }}
              width={110}
            />
          )
        )}
      </div>
      <div className="text-pretty w-3/5 max-w-3/5 px-1 py-6 ">
        <h1 className="text-[24px] font-[700] leading-[130%]  ">{title}</h1>
        <h4 className="mr-2 mt-0 font-sans text-[16px] font-[400] leading-[130%] tracking-[0.00938rem] ">
          {description}
        </h4>
      </div>
    </div>
  );
}

export default CardComponent;
