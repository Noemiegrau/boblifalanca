import React from "react";
import { Parallax } from "react-parallax";
import ReactTyped from "react-typed";
import SocialTwo from "../SocialTwo";

const image1 = "img/about/backgroundBlue.jpeg";

const SliderParallaxTyper = () => {
  return (
    <>
      <Parallax bgImage={image1} strength={500}>
        <div className="beny_tm_hero " id="home">
          <div className="background d-none d-sm-block">
            <div
              className="image"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "img/about/backgroundBlue.jpeg"
                })`,
              }}
            ></div>
            <div className="overlay"></div>
          </div>
          {/* End bg */}
          <div className="go-to go-to-next">
            <a href="#about">
              <span></span>
            </a>
          </div>
          {/* End animated goto button */}
          <div className="container">
            <div className="content">
              <div className="content_inner">
                <h3
                  className="name"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Site Officiel 
                </h3>
                <h1
                  className="job"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="50"
                >
                  Bob Lifalanca
                </h1>
                <h2
                  className="typer"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <ReactTyped
                    loop
                    typeSpeed={100}
                    backSpeed={60}
                    strings={[
                      "Videographe",
                      "Youtubeur",
                      "TikTokeur",
                      "Photographe"
                    ]}
                    smartBackspace
                    shuffle={false}
                    backDelay={1}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                  />
                </h2>

                <p
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="150"
                >
                  
                  Photographe et vidéographe parisien, je suis spécialisé dans l'événementiel, 
                  ainsi que les publicités pour les marques. Je couvres vos événements, anniversaires, 
                  mariages et soirées pour immortaliser vos moments les plus chers. 
                  Mon travail permet aux clients d'augmenter leurs ventes et de construire une meilleure marque avec un retour sur investissement positif.
                </p>

                <div
                  className="beny_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <a className="anchor" href="#about">
                    <span className="wrapper">
                      <span className="first">Voir mon travail</span>
                      <span className="second">Voir mon travail</span>
                    </span>
                  </a>
                </div>
                {/* End beny_tm_button */}
              </div>
            </div>
          </div>
          {/* <div className="social">
            <SocialTwo />
          </div> */}
        </div>
      </Parallax>
    </>
  );
};

export default SliderParallaxTyper;
