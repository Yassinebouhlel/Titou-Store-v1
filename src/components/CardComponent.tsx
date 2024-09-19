import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  bgColor: string;
  iconUrl: string;
  textColor: string;
}
function CardComponent({
  bgColor,
  description,
  iconUrl,
  textColor,
  title
}: Props) {
  return (
    <div
      className={`rounded-3xl shadow-lg ${bgColor} flex h-full w-full  ${textColor} max-h-[280px]`}
    >
      <div className="mr-4 flex max-h-80 w-2/5 flex-col-reverse">
        <Image
          alt={title}
          className="mb-2 rounded-bl-3xl"
          height={110}
          src={iconUrl}
          style={{maxWidth: 'none'}}
          width={110}
        />
      </div>
      <div className="text-pretty px-1 py-6 ">
        <h1 className="text-[24px] font-[700] leading-[130%]  ">{title}</h1>
        <h4 className="mr-2 mt-0 font-sans text-[16px] font-[400] leading-[130%] tracking-[0.00938rem] ">
          {description}
        </h4>
      </div>
    </div>
  );
}

export default CardComponent;
