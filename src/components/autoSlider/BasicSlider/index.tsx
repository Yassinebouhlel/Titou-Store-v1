"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { Nav, Overlay, Slide } from "hero-slider";
import Title from "../ui/Title";
import Wrapper from "../ui/Wrapper";
import bg1 from "./backgrounds/set-rose.jpg";
import bg2 from "./backgrounds/set-jaune.jpg";
import bg3 from "./backgrounds/bn-green.jpg";
import { useState } from "react";

const arrayOfTitles = [
  { title: "T1", subTitle: "Sub-Title 1" },
  { title: "T2", subTitle: "Sub-Title 2" },
  { title: "T3", subTitle: "Sub-Title 3" },
  { title: "T4", subTitle: "Sub-Title 4" },
];

export default function BasicSlider() {
  const [cuurentTitle, setCurrentTitle] = useState(arrayOfTitles[0]);
  const [orientation, setOrientation] = useState("vertical") as any;
  return (
    <HeroSlider
      className="h-[94vh] w-full"
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
      settings={{}}
    >
      <Overlay>
        <Wrapper>
          <Title>{cuurentTitle.title}</Title>
          <h2 className="mt-6">{cuurentTitle.subTitle}</h2>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: bg1.src,
          backgroundColor: "#8A8A8A",
          backgroundAnimation: "fade",
          backgroundAnimationDelay: "0.5",
          shouldLazyLoad: true,
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bg2.src,
          backgroundColor: "#8A8A8A",
          shouldLazyLoad: true,
          backgroundAnimation: "fade",
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: bg3.src,
          backgroundColor: "#8A8A8A",
          shouldLazyLoad: true,
          backgroundAnimation: "fade",
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: bg2.src,
          backgroundColor: "#8A8A8A",
          shouldLazyLoad: true,
          backgroundAnimation: "fade",
        }}
      />

      <Nav />
    </HeroSlider>
  );
}
