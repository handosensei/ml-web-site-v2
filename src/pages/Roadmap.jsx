import React, { useRef, useEffect } from 'react';

import fadeInOnScroll from "../components/FadeAnimation"
import roadmapImg from "../assets/images/Roadmap.png"

export default function Roadmap() {
  const elements = useRef([]);

  useEffect(() => {
    fadeInOnScroll(elements.current);
  }, []);

  return (
    <section className="bgLegendZone fade-in-scroll" ref={el => elements.current.push(el)}>
      <div className="legendsZoneContainer" id="sectionRoadmap">
        <h2 className="title-with-gradient legendsZoneTitle">Roadmap </h2>
        <img src={roadmapImg} alt="Roadmap" />
      </div>
    </section>
  );
}
