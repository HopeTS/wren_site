import clsx from "clsx";

import styles from "./index.module.css";

/** Content spaced for full width of page */
export const OuterContent = ({ children, className, id }) => {
  return (
    <div className={clsx(styles.OuterContent, className)} id={id}>
      {children}
    </div>
  );
};

export default OuterContent;
