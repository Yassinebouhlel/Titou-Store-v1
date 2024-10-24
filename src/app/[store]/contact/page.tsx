import Image from 'next/image';
import {useTranslations} from 'next-intl';



export default function ProductPage() {
  const t = useTranslations('ContactUs');

  return (
    <div>
      <section className="bg-primary px-2 pt-20">
        {/* Title Section */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col justify-center items-start">
          <h1 className="text-black text-[30px] md:text-[40px] font-bold uppercase tracking-wide">
            {t('Title')}
          </h1>
          <div className="w-[60px] h-[3px] bg-black mt-2 mb-4"></div>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {t('Description1')}
          </p>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {t('Description2')}
          </p>
          <p className="text-[14px] md:text-[16px] leading-[1.8] tracking-[0.005rem] text-gray-700">
            {t('Description3')}
          </p>
        </div>

        {/* Location Blocks */}
        {/* Tunisia */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div className="relative w-[250px] md:w-[350px] h-[150px] md:h-[250px]">
              <Image
                src="/images/countries/Flag_of_Tunisia.png"
                alt="Tunisia flag"
                fill
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 space-y-4">
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 1 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              Sousse mall
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 1 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              Tunisia mall
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 1 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              Yasmine hammamet
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 1 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
              </svg>
              Bd de l'Environnement sidi abdlahmid, Sousse
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/>
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>
              </svg>
              info@titouluggage.com
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd"/>
              </svg>
              514.444.8350
            </h1>
          </div>
        </div>

        {/* Saudi Arabia */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div className="relative w-[250px] md:w-[350px] h-[150px] md:h-[250px]">
              <Image
                src="/images/countries/saudi-arabia-flag.png"
                alt="Saudi Arabia flag"
                fill
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 space-y-4">
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              souq 7, Jeddah 22345, Saudi Arabia
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              info@titouluggage.com
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              514.444.8350
            </h1>
          </div>
        </div>

        {/* Canada */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div className="relative w-[250px] md:w-[350px] h-[150px] md:h-[250px]">
              <Image
                src="/images/countries/Flag_of_Canada.png"
                alt="Canada flag"
                fill
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 space-y-4">
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              Montreal, TBD
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              info@titouluggage.com
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>              514.444.8350
            </h1>
          </div>
        </div>

        {/* USA */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div className="relative w-[250px] md:w-[350px] h-[150px] md:h-[250px]">
              <Image
                src="/images/countries/usa.jpg"
                alt="USA flag"
                fill
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 space-y-4">
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              New York TBD
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 h-6 mr-4 size-10">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clipRule="evenodd" />
              </svg>
              Amazon.com/TitouStore
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              info@titouluggage.com
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              514.444.8350
            </h1>
          </div>
        </div>

        {/* France */}
        <div className="bg-[#f0e7d5] p-4 rounded-[30px] w-full md:w-3/4 mx-auto my-[50px] flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div className="relative w-[250px] md:w-[350px] h-[150px] md:h-[250px]">
              <Image
                src="/images/countries/Flag_of_France.png"
                alt="France flag"
                fill
                objectFit="cover"
                className="rounded-[30px]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 space-y-4">
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              TBD
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              info@titouluggage.com
            </h1>
            <h1 className="text-start text-[16px] md:text-[20px] text-black flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 w-6 h-6 mr-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              514.444.8350
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}
