import clsx from "clsx";

import styles from "./index.module.css";

/** Content spaced for inner width of page */
export const InnerContent = ({ children, className, id }) => {
  return (
    <div className={clsx(styles.InnerContent, className)} id={id}>
      {children}
    </div>
  );
};

export default InnerContent;
