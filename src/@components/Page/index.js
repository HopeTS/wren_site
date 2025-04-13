import clsx from "clsx";

import styles from "./index.module.css";

export const Page = ({ children, className, id }) => {
  return (
    <div className={clsx(styles.Page, className)} id={id}>
      {children}
    </div>
  );
};

export default Page;
