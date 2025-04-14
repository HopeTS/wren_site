import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

import styles from "./index.module.css";
import * as C from "@components";
import { IMG } from "@assets";

const carouselImages = [
  IMG.WREN_BTS_FUNDING_LETTER,
  IMG.WREN_IMPROVE_BUSSES_LETTER,
  IMG.WREN_MY_VISION_LETTER,
];

export const Home = () => {
  const [showLearnMore, setShowLearnMore] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowLearnMore = window.scrollY < window.innerHeight * 0.3;
      setShowLearnMore(shouldShowLearnMore);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <C.Page className={styles.Home}>
      {/* Landing Page */}
      <C.OuterContent className={styles.Home_landing_page}>
        <C.NetBackground />

        <div className={styles.Home_landing_page_content_wrapper}>
          <div className={styles.Home_landing_page_content}>
            <img
              className={styles.Home_landing_page_image}
              src={IMG.WREN_PICTURE}
              alt="A picture of Wren Carol Shockey smiling at the camera"
            />

            <div className={styles.Home_landing_page_top_text_wrapper}>
              <h1 className={styles.Home_title}>
                <span>VOTE</span> Wren Carol Shockey
              </h1>
              <p className={styles.Home_position}>
                Transit Service Director 2025
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.Home_learn_more}
          data-showLearnMore={showLearnMore}
        >
          <HashLink to="#top">
            Learn more <br /> ˅
          </HashLink>
        </div>
      </C.OuterContent>
      <C.OuterContent id="top">
        <div className={styles.Home_top_transition} />
        <C.InnerContent className={styles.Home_top}>
          <C.Header className={styles.Home_top_header}>
            Why Vote For Me
          </C.Header>

          <p>
            In a media landscape where every news show is funded by the same
            handful of companies, I think its important to have a dissenting
            narrative. There aren't enough people earnestly advocating for
            freedom of speech or the right to life for all people, and I think
            that's sad. I am very opinionated, but I advocate for what I believe
            is right. Hopefully I can be a small part of the solution.
          </p>

          <C.Header className={styles.Home_top_header}>
            Proposals and Vision
          </C.Header>

          <C.Carousel images={carouselImages} />

          <C.Header className={styles.Home_top_header}>
            A Little About Me
          </C.Header>

          <p>
            Just about every Thursday I host a show called <b>Basin Currents</b>
            . I discuss national and local politics with an emphasis on labor,
            disability and the environment. Sometimes I play fiddle, sometimes I
            play original songs on guitar. Often I'm raising my voice about
            Social Security or the rich and powerful or our Civil Liberties.
          </p>
        </C.InnerContent>
      </C.OuterContent>
      <C.Footer />
    </C.Page>
  );
};

export default Home;
