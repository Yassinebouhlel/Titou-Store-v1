"use client";
import "@/lib/env";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExpandArrowsAlt, FaFeatherAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { GiCarWheel, GiResize } from "react-icons/gi";
import { IoShieldCheckmark } from "react-icons/io5";
import CardComponent from "@/components/CardComponent";
import ScrollEffectWrapper from "@/components/ScrollEffectWrapper";
import Carousel from '@/components/Carousel';
import { useTranslations } from "next-intl";
import SliderComponent from "@/components/SliderComponent";

export default function HomePage() {
  const t = useTranslations("benefits");
  const w = useTranslations("why");
  const s = useTranslations("newsletter");

  const images = [
    {
      src: {
        small: "/images/HomePage/Titou_Saudia_Web_Banner_360x240.png", 
        medium: "/images/HomePage/Titou_Saudia_Web_Banner_800x600.png", 
        large: "/images/HomePage/Titou_Saudia_Web_Banner_1200x800.png", 
      },
      alt: "Saudi store",
    },
    {
      src: {
        small: "/images/HomePage/Titou_Canada_Web_Banner_360x240.png", 
        medium: "/images/HomePage/Titou_Canada_Web_Banner_800x600.png", 
        large: "/images/HomePage/Titou_Canada_Web_Banner_1200x800.png", 
      },
      alt: "Canada store",
    },
    {
      src: {
        small: "/images/HomePage/Titou_America_Web_Banner_360x240.png", 
        medium: "/images/HomePage/Titou_America_Web_Banner_800x600.png", 
        large: "/images/HomePage/Titou_America_Web_Banner_1200x800.png", 
      },
      alt: "USA store",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length); // Moves to the next slide every 5 seconds
    }, 5000); // 5000ms = 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth || 0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImageSrc = (image: any) => {
    if (windowWidth <= 640) {
      return image.src.small;
    } else if (windowWidth <= 1024) {
      return image.src.medium;
    } else {
      return image.src.large;
    }
  };

  return (
    <main>
      <section className="bg-primary e px-2 pt-10">
       {/* <SliderComponent /> */}

       <ScrollEffectWrapper>
        <iframe style={{width:'98vw',overflow:'hidden',height:'100vh'}} srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  <style>
    @import url('https://fonts.cdnfonts.com/css/bebas-neue');
@import url('https://fonts.cdnfonts.com/css/poppins');
/* 1200 x 780 */
body{
    margin: 0;
    font-size: 15px;
    background-color: darkslategray;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
}
svg{
    color: #fff;
}
:root{
    --width-default: min(1200px, 90vw);
    --diameter: 1432px;
}
.logo img{
    width: 50px;
}
header{
    width: var( --width-default);
    height: 70px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}
.slider{
    /* background-color: red; */
    color: #eee;
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    margin-top: -70px;
}
.slider .list .item{
    position: absolute;
    inset: 0 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
}
.slider .list .item .content{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(2, 400px);
    text-align: left;
    gap: 80px;
    font-size: 1.2em;
    text-transform: uppercase;
    font-family: Poppins;
    text-shadow: 0 0 80px #000;
}
.slider .list .item .content h2{
    font-size: 10em;
    font-family: 'Bebas Neue', sans-serif;
    line-height: 0.9em;
    transform: translateY(-100%);
    transition: transform 1s;
    grid-row-start: 1;
    grid-row-end: 3;
}
.slider .list .item .content p{
}
.slider .list .item .content p:last-child{
    display: flex;
    justify-content: start;
    align-items: end;
    padding-bottom: 25px;
}
/* item default */
.slider .list .item .image{
    flex-shrink: 0;
    width: var(--diameter);
    height: var(--diameter);
    background-image: var(--url);
    background-size: var(--diameter) var(--diameter);
    background-position: center;
    border-radius: 50%;
    transform: rotate(-60deg);
    position: relative;
    transition: 1s;
}
.slider .list .item .image::before, 
.slider .list .item .image::after{
    position: absolute;
    width: 70%;
    height: 70%;
    content: '';
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)  rotate(-120deg);
    background-image: 
    linear-gradient(to right, #0004, #0004),
    var(--url);
    background-size: var(--diameter) var(--diameter);
    background-position: center;
    transition: 1s;
}
.slider .list .item .image::after{
    width: 30%;
    height: 30%;
    background-image: var(--url);
    border: 3px solid #fff2;
    transform: translate(-50%, -50%) rotate(-170deg);
}

/* default  */
.slider .list .item .image{
    filter: blur(30px);
}

.slider .list .item{
    pointer-events: none;
    opacity: 0;
}
/* item active */
.slider .list .item.active{
    pointer-events: auto;
    opacity: 1;
}
.slider .item.active .image{
    filter: blur(0px);
    transform: rotate(0deg);
}
.slider .item.active .image::before,
.slider .item.active .image::after
{
    transform: translate(-50%, -50%) rotate(0deg) ;
}
.slider .list .item.active .content h2{
    transform: translateY(0);
}

/* item phía sau */
.slider .list .item.active ~ .item{
    opacity: 0;
}
.slider .item.active ~ .item .image{
    transform: rotate(60deg);
}
.slider .item.active ~ .item .image::before
{
    transform: translate(-50%, -50%) rotate(120deg) ;
}
.slider .item.active ~ .item .image::after
{
    transform: translate(-50%, -50%) rotate(170deg) ;
}
.slider .list .item.active ~ .item .content h2{
    transform: translateY(100%);
}
/* arrows */
.arrows{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    width: var(--width-default);
    display: flex;
    justify-content: space-between;
}
.arrows button{
    all: unset;
    cursor: pointer;
}
.slider .list::after{
    position: absolute;
    content: '';
    bottom: 0;
    width: min(1000px, 100vw);
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(/images/slider/model.png);
    background-size: cover;
    background-position: top;
    pointer-events: none;
    animation: showModel 1s ease-in-out 1 forwards;
}
@keyframes showModel{
    from{
        transform: translateX(-50%) scale(1.3) translateY(88px);
    }
}

.arrows button.d-none{
    opacity: 0;
    pointer-events: none;
}
@media all and (max-width: 1024px) {
    .slider .list .item .content{
        grid-template-columns: repeat(2, 300px);
    }
    .slider .list .item .content h2{
        font-size: 8em;
    }
}
@media all and (max-width: 767px) {
    .slider .list .item .content{
        grid-template-columns: 80%;
        justify-content: center;
        gap: 20px;
        top: 70px;
    }
    .slider .list .item .content h2{
        font-size: 4em;
    }
    .slider .list .item .content p{
        font-size: small;
    }
}
  </style>
</head>
<body>
    
    <main>
        <header>
           
            <nav>
               
            </nav>
        </header>
        <section class="slider">
            <div class="list">
                <div class="item active">
                    <div class="image" style="--url: url('/images/slider/1.jpg')"></div>
                    <div class="content">
                        <h2>SLIDER IMAGE BASI</h2>
                        <p>
                            Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.
                        </p>
                        <p>
                            Ex irure minim eiusmod tempor cillum consectetur ullamco.
                        </p>
                    </div>
                </div>
                <div class="item ">
                    <div class="image" style="--url: url('/images/slider/2.jpg')"></div>
                    <div class="content">
                        <h2>SLIDER IMAGE MAGIC</h2>
                        <p>
                            Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.
                        </p>
                        <p>
                            Ex irure minim eiusmod tempor cillum consectetur ullamco.
                        </p>
                    </div>
                </div>
                <div class="item">
                    <div class="image" style="--url: url('/images/slider/3.jpg')"></div>
                    <div class="content">
                        <h2>SLIDER IMAGE ANIS</h2>
                        <p>
                            Nulla magna irure incididunt irure nisi laboris adipisicing adipisicing ad aliquip exercitation sit duis.
                        </p>
                        <p>
                           gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
                        </p>
                    </div>
                </div>
            </div>
            <div class="arrows">
                <button id="prev">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                    </svg>
                </button>
                <button id="next">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
                    </svg>
                </button>
            </div>
        </section>
    </main>



    <script src="app.js"></script>
</body>
<script>
    let items = document.querySelectorAll('.slider .list .item');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let firstPosition = 0;
let active = 0;
let autoSlideInterval;

// Manual navigation buttons
nextBtn.onclick = () => {
    active = active + 1;
    setSlider();
}

prevBtn.onclick = () => {
    active = active - 1;
    setSlider();
}

// Slider state management
const setSlider = () => {
    let oldActive = document.querySelector('.slider .list .item.active');
    if(oldActive) oldActive.classList.remove('active');
    
    // Ensure active stays within bounds
    if (active > lastPosition) active = 0;
    if (active < 0) active = lastPosition;
    
    items[active].classList.add('active');
    
    // Manage navigation button visibility
    nextBtn.classList.remove('d-none');
    prevBtn.classList.remove('d-none');
    if(active == lastPosition) nextBtn.classList.add('d-none');
    if(active == firstPosition) prevBtn.classList.add('d-none');
}

// Auto-sliding function
const startAutoSlide = () => {
    // Clear any existing interval to prevent multiple timers
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    
    autoSlideInterval = setInterval(() => {
        active++;
        setSlider();
    }, 3500); // 1000 milliseconds = 1 second
}

// Stop auto-sliding when user interacts with navigation
const stopAutoSlide = () => {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
}

// Add event listeners to pause auto-sliding on user interaction
prevBtn.addEventListener('mouseenter', stopAutoSlide);
nextBtn.addEventListener('mouseenter', stopAutoSlide);
prevBtn.addEventListener('mouseleave', startAutoSlide);
nextBtn.addEventListener('mouseleave', startAutoSlide);

// Set diameter (unchanged from previous code)
const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter+'px');
}

// Initialize slider
setSlider();
setDiameter();

// Start auto-sliding
startAutoSlide();

// Resize event listener (unchanged)
window.addEventListener('resize', () => {
    setDiameter();
});
</script>
</html>`}></iframe>
       </ScrollEffectWrapper>

        {/* <VideoScroll /> */}
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