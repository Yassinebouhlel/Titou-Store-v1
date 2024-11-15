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

import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("benefits");
  const w = useTranslations("why");
  const s = useTranslations("newsletter");


 

  // Auto-slide effect







  return (
    <main>
      <section className="bg-primary e px-2 pt-10">
        <div className="relative flex flex-col items-center justify-center px-6 text-center">
     
        <ScrollEffectWrapper>
     <iframe style={{width:'98vw',overflow:'hidden',height:'100vh'}} srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body{
    font-family: Poppins;
    margin: 0;
    font-size: 16px;
    background-color: #638b4f;
}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}
:root{
    --border-color: #fff5;
    --w-image: 500px;
    --calculate: calc(3 / 2);
}
header{
    display: grid;
    grid-template-columns: 80px 1fr calc(var(--w-image) * var(--calculate));
    grid-template-rows: 80px;
    position: relative;
    z-index: 10;
    border-bottom: 1px solid var(--border-color);
}
header .logo img{
    width: 80%;
}
header .logo{
    display: flex;
    justify-content: center;
    align-items: center;
}
header nav a{
    color: #000;
    font-weight: 400;
}
header nav ul{
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
    padding-right: 30px;
}
header nav{
    border-left: 1px solid var(--border-color);
}
.carousel{
    margin-top: 0px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}
.carousel .list{
    height: 100%;
    position: relative;
}
.carousel .list::before{
    position: absolute;
    width: var(--w-image);
    height: 100%;
    content: '';
    top: 0;
    left: calc(100% - calc(var(--w-image) * var(--calculate)));
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    z-index: 10;
    pointer-events: none;
}
.carousel .list::after{
    position: absolute;
    top: 50px;
    left: 50px;
    content: '';
    background-color: red;
    width: 400px;
    height: 300px;
    z-index: 10;
    pointer-events: none;
    border-radius: 20px  50px 110px  230px;
    filter: blur(150px);
    opacity: .6;
}
.carousel .list .item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.carousel .list .item .image{
    width: var(--w-image);
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% - calc(var(--w-image) * var(--calculate)));
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    font-weight: 500;
}
.carousel .list .item .image img{
    width: 90%;
    margin-bottom: 20px;
    filter: drop-shadow(0 150px 50px #9e0c0c55);
}
.carousel .list .item .image figcaption{
    font-family: 'Aboreto';
    font-weight: bold;
    font-size: 1.3em;
    text-align: right;
    margin-bottom: 30px;
    width: 70%;
}
.carousel .list .item .main-content{
    height: 100%;
    display: grid;
    grid-template-columns: calc(100% - calc(var(--w-image) * var(--calculate)));
}
.carousel .list .item .main-content .content{
    padding: 150px 20px  20px 80px;
}
.carousel .list .item .main-content .content h2{
    font-size: 5em;
    font-family: 'Aboreto';
}
.carousel .list .item .main-content .content .price{
    font-family: 'Aboreto';
    font-size: 3em;
    margin: 20px 0;
}
.carousel .list .item .main-content .content .addToCard{
    background-color: #869f4b;
    color: #fff;
    padding: 10px  30px;
    font-family: Poppins;
    font-size: large;
    font-weight: 500;
    border-radius: 30px;
    border: none;
    margin-top: 20px;
}
.arrows{
    position: absolute;
    bottom: 20px;
    width: calc(100% - calc(var(--w-image) * var(--calculate)));
    display: grid;
    grid-template-columns: repeat(2, 50px);
    grid-template-rows: 50px;
    justify-content: end;
    gap: 10px;
}
.arrows button{
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: #fff;
    font-family: monospace;
    font-size: large;
    font-weight: bold;
    line-height: 0;
    box-shadow: 0 10px 40px #5555;
    cursor: pointer;
    transition: 0.5s;
}
.arrows button:hover{
    background-color: #eee5;
}
.carousel .list .item{
    display: none;
}
.carousel .list .item.active,
.carousel .list .item.other_1,
.carousel .list .item.other_2{
    display: block;
}
.carousel .list .item.active{
    z-index: 2;
}
.carousel .list .item.other_1,
.carousel .list .item.other_2{
    pointer-events: none;
}
.carousel .list .item.active .main-content{
    animation: showContent 1s ease-in-out 1 forwards;
}
@keyframes showContent{
    from{
        clip-path: circle(0% at 70% 50%);
    }to{
        clip-path: circle(100% at 70% 50%);
    }
}
.next .item.other_1{
    z-index: 1;
}
.next .item .image img,
.next .item .image figcaption{
    animation: effectNext .5s ease-in-out 1 forwards;
}
@keyframes effectNext{
    from{
        transform: translateX(calc(var(--transform-from)));
    }to{
        transform: translateX(calc(var(--transform-from) - var(--w-image)));
    }
}
.next .item.active .image{
    --transform-from: var(--w-image);
}
.next .item.other_1 .image{
    z-index: 3;
    --transform-from: 0px;
    overflow: hidden;
}
.next .item.other_2 .image{
    z-index: 3;
    --transform-from: calc(var(--w-image) * 2);
}
.arrows{
    z-index: 10;
}
/* prev */
.prev .list .item .image img,
.prev .list .item .image figcaption{
    animation: effectPrev 0.5s ease-in-out 1 forwards;
}
@keyframes effectPrev{
    from{
        transform: translateX(calc(var(--transform-from)));
    }to{
        transform: translateX(calc(var(--transform-from) + var(--w-image)));
    }
}
.prev .list .item.active .image{
    --transform-from: calc(var(--w-image) * -1);
    overflow: hidden;
}
.prev .list .item.other_1 .image{
    --transform-from: 0px;
    z-index: 3;
}
.prev .list .item.other_2 .image{
    z-index: 3;
    --transform-from: var(--w-image);
}
.prev .list .item.other_2 .main-content{
    opacity: 0;
}
@media screen and (max-width: 1023px){
    :root{
        --calculate: 1;
        --w-image: 400px; 
    }
    .carousel .list .item .main-content .content h2{
        font-size: 3em;
    }
}
@media screen and (max-width: 767px){
    .carousel .list .item .image{
        width: 100%;
        left: 0;
        justify-content: center;
    }
    .carousel .list .item .image figcaption{
        color: #fff;
        width: 100%;
        text-align: center;
    }
    .carousel .list .item .main-content .content{
        display: none;
    }
    .arrows{
        left: 50%;
        justify-content: center;
    }
}
    </style>
</head>
<body>
    
   
    <main>
        <section class="carousel next">
            <div class="list">
                <article class="item other_1">
                    <div class="main-content" 
                    style="background-color: #bef008;">
                        <div class="content">
                            <h2>Falija</h2>
                            <p class="price">$ 20</p>
                            <p class="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.
                            </p>
                            <button class="addToCard">
                                Add To Card
                            </button>
                        </div>
                    </div>
                    <figure class="image">
                        <img src="https://titou-store-v1-deploy-test.vercel.app/_next/image?url=%2Fimages%2FTransparent%2F2-removebg-preview.png&w=640&q=75" alt="">
                        <figcaption>Falija</figcaption>
                    </figure>
                </article>
                <article class="item active">
                    <div class="main-content" 
                    style="background-color: #f5bfaf;">
                        <div class="content">
                            <h2>Strawberry Dollern, a new product</h2>
                            <p class="price">$ 20</p>
                            <p class="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.
                            </p>
                            <button class="addToCard">
                                Add To Card
                            </button>
                        </div>
                    </div>
                    <figure class="image">
                        <img src="https://titou-store-v1-deploy-test.vercel.app/_next/image?url=%2Fimages%2FTransparent%2F82-removebg-preview.png&w=640&q=75" alt="">
                        <figcaption>Falija Dollern, a new product</figcaption>
                    </figure>
                </article>
                <article class="item other_2">
                    <div class="main-content" 
                    style="background-color: #dedfe1;">
                        <div class="content">
                            <h2>Doppio Falija, a new product</h2>
                            <p class="price">$ 20</p>
                            <p class="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.
                            </p>
                            <button class="addToCard">
                                Add To Card
                            </button>
                        </div>
                    </div>
                    <figure class="image">
                        <img src="https://titou-store-v1-deploy-test.vercel.app/_next/image?url=%2Fimages%2FTransparent%2F96-removebg-preview.png&w=640&q=75" alt="">
                        <figcaption>Falija espresso, a new product</figcaption>
                    </figure>
                </article>
                <article class="item">
                    <div class="main-content" 
                    style="background-color: #f877ad;">
                        <div class="content">
                            <h2>TITOU, a new product</h2>
                            <p class="price">$ 20</p>
                            <p class="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore animi voluptatibus sequi illo, earum molestias explicabo officiis iste neque? Quis quod eligendi fugit, dolore nam itaque modi exercitationem voluptatem corrupti aut aspernatur. Quos non in sed ratione tenetur harum.
                            </p>
                            <button class="addToCard">
                                Add To Card
                            </button>
                        </div>
                    </div>
                    <figure class="image">
                        <img src="https://titou-store-v1-deploy-test.vercel.app/_next/image?url=%2Fimages%2FTransparent%2Ftitou-photos-132-removebg-preview.png&w=640&q=75" alt="">
                        <figcaption>Falija Valise TITOU, a new product</figcaption>
                    </figure>
                </article>
            </div>
            <div class="arrows">
                <button id="prev"><</button>
                <button id="next">></button>
            </div>
        </section>
    </main>

    <script src="app.js"></script>
</body>
<script>
    let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 1500);
}
let autoPlay = setInterval(() => {
    next.click();
}, 1500);
</script>
</html>`} />
        </ScrollEffectWrapper>
          
      

       
        </div>



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