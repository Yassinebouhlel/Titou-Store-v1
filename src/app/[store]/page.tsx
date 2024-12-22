"use client";
import "@/lib/env";
import { FaExpandArrowsAlt, FaFeatherAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { GiCarWheel, GiResize } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import CardComponent from "@/components/CardComponent";
import ScrollEffectWrapper from "@/components/ScrollEffectWrapper";
import Carousel from "@/components/Carousel";
import { useTranslations } from "next-intl";
import BasicSlider from "@/components/autoSlider/BasicSlider";

export default function HomePage() {
  const t = useTranslations("benefits");
  const w = useTranslations("why");
  const s = useTranslations("newsletter");

  return (
    <main>
      <section className="bg-primary e px-2 pt-10">
        <ScrollEffectWrapper>
          <div>
            {" "}
            <BasicSlider />
          </div>
        </ScrollEffectWrapper>

        <ScrollEffectWrapper>
          <div className="m-4 flex min-h-[500px] py-4 gap-2 rounded-[60px] bg-white itmes-center justify-center  ">
            <div className="   flex flex-col  items-center md:flex-row justify-between gap-x-6 gap-y-6  ">
              <div className="flex  flex-col items-center   ">
                <div className="flex h-[150px] w-[150px]  items-center justify-center rounded-full bg-[#76c7e7] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/camion-100x100.png" />
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t("FreeDelivery")}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t("FreeDeliveryDescription")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#f0e7ff] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/paiement-securise-100x100.png" />
                </div>
                <div className="flex flex-col items-center  ">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t("SecurePayment")}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t("SecurePaymentDescription")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#fcaa9f] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/service-clients-100x100.png" />
                </div>
                <div className="flex flex-col items-center  ">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t("FullSupport")}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t("FullSupportDescription")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center  ">
                <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#a6cbac] ">
                  <img src="https://titou.ma/wp-content/uploads/2024/01/remise-en-argent-100x100.png" />
                </div>
                <div className="flex flex-col items-center  ">
                  <h1 className="mt-2 px-6 text-center font-bold text-[25px] leading-[130%] ">
                    {t("ReturnPolicy")}
                  </h1>
                  <p className="mt-1 px-6 text-center font-sans text-[16px] leading-[150%] tracking-[0.00938rem] ">
                    {t("ReturnPolicyDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollEffectWrapper>
        <ScrollEffectWrapper>
          <video
            loop
            muted
            playsInline
            className="w-full h-full rounded-[60px] px-4"
            controls={false}
            autoPlay
          >
            <source src="/videos/videoValise.mp4" type="video/mp4" />
          </video>
        </ScrollEffectWrapper>

        <ScrollEffectWrapper>
          <h1 className="px-20 py-10 text-center text-3xl">{w("WhyPP")}</h1>
          <span className="" />

          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3">
            <CardComponent
              bgColor="bg-[#DFB7FF]"
              description={w("LightweightDescription")}
              icon={<FaFeatherAlt />}
              textColor="text-[#4B007E]"
              title={w("Lightweight")}
            />
            <CardComponent
              bgColor="bg-[#FFB4AB]"
              description={w("SecureDescription")}
              icon={<IoShieldCheckmark />}
              textColor="text-[#690005]"
              title={w("Secure")}
            />
            <CardComponent
              bgColor="bg-[#AAD0B1]"
              description={w("RemovalbleWheelsDescription")}
              icon={<GiCarWheel />}
              textColor="text-[#163721]"
              title={w("RemovalbleWheels")}
            />
            <CardComponent
              bgColor="bg-[#76C6E7]"
              description={w("MultipleSizesDescription")}
              icon={<GiResize />}
              textColor="text-[#00363E]"
              title={w("MultipleSizes")}
            />
            <CardComponent
              bgColor="bg-[#D1BFA5]"
              description={w("StretchableDescription")}
              icon={<FaExpandArrowsAlt />}
              textColor="text-[#574F43]"
              title={w("Stretchable")}
            />
            <CardComponent
              bgColor="bg-[#9FD67C]"
              description={w("QualityDescription")}
              icon={<FaRecycle />}
              textColor="text-[#143800]"
              title={w("Quality")}
            />
          </div>
        </ScrollEffectWrapper>
        <div className="min-h-[160px]" />
      </section>

      <div>
        <Carousel />

        <div className="relative flex justify-center items-center bg-[#724740] py-10 px-5">
          {/* Background Image */}
          {/* <div className="absolute inset-0 bg-cover bg-center opacity-70">
        <Image
          src="/images/infolettre.png"
          alt="Background Suitcase"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
          {/* Foreground Content */}
          <div className="relative flex flex-col md:flex-row items-center max-w-6xl w-full space-y-5 md:space-y-0 md:space-x-5">
            {/* Left Section: Text */}
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl font-medium">{s("subscribe")}</h2>
            </div>
            {/* Right Section: Input and Button */}
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Email address"
                className="px-5 py-3 rounded-full focus:outline-none text-black"
              />
              <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-6 py-3 rounded-full font-medium">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
