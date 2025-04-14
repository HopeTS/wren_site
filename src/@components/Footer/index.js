import styles from "./index.module.css";
import * as C from "@components";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <C.InnerContent className={styles.Footer_content}>
        <div className={styles.Footer_copyright}>© Wren Carol Shockey 2025</div>
      </C.InnerContent>
    </div>
  );
};

export default Footer;
