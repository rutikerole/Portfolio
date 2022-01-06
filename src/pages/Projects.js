import React from 'react';
import { Fade } from 'react-reveal';

// component that we require
import styled from 'styled-components'; // styling
import projects from '../assets/data/projects.js';
import FooterSection from '../components/FooterSection';

const ProjectStyle = styled.div`
  padding: 10rem 0;

  // heading and text and button
  .headings {
    text-align: center;
    margin-top: 5rem;
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
    display: grid; // all projects are see by grid type
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 10rem;
    .projectImg {
      width: 350px;
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
      width: 350px;
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
      .projectImg {
        width: 320px;
        height: 390px;
      }
      .projectInfo {
        width: 320px;
      }
    }
  }
`;

export default function Projects() {
  return (
    <>
      <Fade bottom>
        <ProjectStyle>
          <div className="container">
            {/* Heading */}

            <div className="headings">
              <p>some of my recent works</p>
              <h2>Projects</h2>
            </div>

            {/* Projects */}

            <div className="allItem">
              {projects.map((project, index) => {
                const { name, desc, img, link } = project;
                if (index >= 8) return;
                return (
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
                );
              })}
            </div>
          </div>
        </ProjectStyle>
        <FooterSection />
      </Fade>
    </>
  );
}
