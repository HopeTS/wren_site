import clsx from "clsx";

import styles from "./index.module.css";

export const Header = ({ children, className }) => {
  return <h2 className={clsx(styles.Header, className)}> {children}</h2>;
};

export default Header;
