"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { Nav, Overlay, Slide } from "hero-slider";
import Title from "../ui/Title";
import Wrapper from "../ui/Wrapper";
import bg1 from "./backgrounds/set-rose.jpg";
import bg2 from "./backgrounds/set-jaune.jpg";
import bg3 from "./backgrounds/bn-green.jpg";
import { useState } from "react";
import { useTranslations } from "next-intl";

const arrayOfTitles = [
  { title: "T1", subTitle: "subTitle1" },
  { title: "T2", subTitle: "subTitle2" },
  { title: "T3", subTitle: "subTitle3" },
  { title: "T4", subTitle: "subTitle4" },
];

export default function BasicSlider() {
  const [cuurentTitle, setCurrentTitle] = useState(arrayOfTitles[0]);
  const [orientation, setOrientation] = useState("vertical") as any;
  const t = useTranslations("Slider");
  return (
    <HeroSlider

      className="h-[94vh] w-full "
      accessibility={{
        shouldDisplayButtons: false,
        orientation: orientation,
      }}
      autoplay
      controller={{
        initialSlide: 1,

        onSliding: (nextSlide: number) => {
          setCurrentTitle(arrayOfTitles[nextSlide ? nextSlide - 1 : 0]);
          setOrientation((prev: string) =>
            prev === "vertical" ? "horizontal" : "vertical"
          );
        },
      }}
      settings={{

      }}
    >
      <Overlay>
        <Wrapper>
          <Title ><span className="text-[2.5rem] md:text-[5rem] md:text-5xl">{t(cuurentTitle.title)}</span></Title>
          {/* <h2 className="mt-6">{cuurentTitle.subTitle}</h2> */}
        </Wrapper>
      </Overlay>

      <Slide
        
        label="Giau Pass - Italy"
        background={{
          onLoad() {
            console.log("hey loadx-x")
          },
          backgroundImageSrc: bg1.src,
          backgroundColor: "transparent",
          backgroundAnimation: "fade",
          backgroundAnimationDelay: "0.5",
          shouldLazyLoad: false,
        }}
      />

      <Slide
        
        label="Bogliasco - Italy"
        background={{
          onLoad(event) {
            console.log("hey load",event.target)
          },
          backgroundImageSrc: bg2.src,
          backgroundColor: "#8A8A8A",
          shouldLazyLoad: true,
          backgroundAnimation: "fade",
        }}
      />

      <Slide
        
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: bg3.src,
          backgroundColor: "#8A8A8A",
          shouldLazyLoad: true,
          backgroundAnimation: "fade",
          onLoad() {
            console.log("hey loadx-x")
          },
        }}
      />

      <Slide
        
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: bg2.src,
          backgroundColor: "#8A8A8A",
          shouldLazyLoad: true,
          backgroundAnimation: "fade",
          onLoad() {
            console.log("hey loadx-x")
          },
        }}
      />

      <Nav />
    </HeroSlider>
  );
}
