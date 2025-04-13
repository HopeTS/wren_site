import styles from "./index.module.css";
import * as C from "@components";

export const Home = () => {
  return (
    <C.Page className={styles.Home}>
      <C.OuterContent>
        <C.InnerContent className={styles.Home_top}>
          <p>
            Just about every Thursday I host a show called <b>Basin Currents</b>
            . I discuss national and local politics with an emphasis on labor,
            disability and the environment. Sometimes I play fiddle, sometimes I
            play original songs on guitar. Often I'm raising my voice about
            Social Security or the rich and powerful or our Civil Liberties.
          </p>

          <p>
            In a media landscape where every news show is funded by the same
            handful of companies, I think its important to have a dissenting
            narrative. There aren't enough people earnestly advocating for
            freedom of speech or the right to life for all people, and I think
            that's sad. I am very opinionated, but I advocate for what I believe
            is right. Hopefully I can be a small part of the solution.
          </p>
        </C.InnerContent>
      </C.OuterContent>
    </C.Page>
  );
};

export default Home;
