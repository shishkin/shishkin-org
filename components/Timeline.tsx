import { FunctionComponent, ReactFragment } from "react";
import styles from "./Timeline.module.css";

type Props = {
  children: ReactFragment;
};

const Timeline: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.timeline}>{children}</div>
);

export default Timeline;
