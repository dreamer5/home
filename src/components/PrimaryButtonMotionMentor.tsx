import { FunctionComponent } from "react";
import styles from "./PrimaryButtonMotionMentor.module.css";

export type PrimaryButtonMotionMentorType = {
  className?: string;

  /** Variant props */
  primaryButtonSmall?: string;
};

const PrimaryButtonMotionMentor: FunctionComponent<
  PrimaryButtonMotionMentorType
> = ({ className = "", primaryButtonSmall = "Default" }) => {
  return (
    <button
      className={[styles.primaryButtonMotionmentor, className].join(" ")}
      data-primaryButtonSmall={primaryButtonSmall}
    >
      <div className={styles.label}>Explore challenges</div>
    </button>
  );
};

export default PrimaryButtonMotionMentor;
