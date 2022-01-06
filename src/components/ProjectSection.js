import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // we use swiper for our swipe function
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'; // this gives swiper bar and the style.css

// component that we require
import styled from 'styled-components'; // styling
import { Fade } from 'react-reveal';
import projects from '../assets/data/projects.js';

SwiperCore.use([Navigation]); // it is use for slide navigation

const ProjectStyle = styled.div`
  padding: 10rem 0;

  // heading and text and button
  .headings {
    text-align: center;
    margin-top: 12rem;
    p {
      font-family: 'RobotoMono Regular';
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-family: 'Montserrat Bold';
      font-size: 6rem;
      margin-top: 0.5rem;
      text-transform: uppercase;
    }
  }

  // pproject img title and desc
  .allItem {
    display: flex; // all r in one line
    gap: 3rem;
    margin-top: 5rem;
    .projectImg {
      width: 100%;
      height: 400px;
      overflow: hidden;
      border-radius: 12px;
      display: inline-block;
      border: 3px solid var(--gray-2);
      img {
        height: 100%;
      }
    }
    .projectInfo {
      margin-top: 1rem;
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 12px;
    }
    .projectTitle {
      font-size: 2.2rem;
    }
    .desc {
      font-size: 1.6rem;
      font-family: 'RobotoMono Regular';
      margin-top: 1rem;
    }
  }

  // swiper
  // this containers are in built in swiper
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    border-radius: 8px;
    z-index: 10; // arrow on the top of right corner
    right: 60px; // arrow on right side
    left: auto;
    top: 0;
    transform: translateY(50%);
  }
  .swiper-button-next {
    right: 0; // both are overlap therefore its move toward some left
  }
  .swiper-button-prev::after,         // arrow shuld be small
  .swiper-button-next::after {
    font-size: 2rem;
  }

  // for mobiles
  @media only screen and (max-width: 768px) {
    .headings {
      p {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 3.6rem;
      }
    }
    .allItem {
      flex-direction: column;
      max-width: 400px;
      margin: 0%, auto;
      gap: 5rem;
      margin-top: 7rem;
    }
  }
`;

export default function ProjectSection() {
  return (
    <ProjectStyle>
      <Fade bottom>
        <div className="container">
          {/* Heading */}

          <div className="headings">
            <p>some of my recent works</p>
            <h2>Projects</h2>
          </div>

          {/* Projects */}

          <div className="allItem">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 }, // for mobile
                768: { slidesPerView: 2 }, // for tab
                1200: { slidesPerView: 3 }, // for desktop
              }}
            >
              {projects.map((project, index) => {
                const { id, name, desc, img, link } = project;
                return (
                  <SwiperSlide key={id}>
                    {/* this is in built in swiper */}
                    <div>
                      <div className="projectImg">
                        <a href={link}>
                          <img src={img} alt="img" />
                        </a>
                      </div>

                      <div className="projectInfo">
                        <h3 className="projectTitle">{name}</h3>
                        <p className="desc">{desc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </Fade>
    </ProjectStyle>
  );
}
