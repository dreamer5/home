import { FunctionComponent } from "react";
import styles from "./ChipsMotionMentorUrbanist.module.css";

export type ChipsMotionMentorUrbanistType = {
  className?: string;
  label?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const ChipsMotionMentorUrbanist: FunctionComponent<
  ChipsMotionMentorUrbanistType
> = ({ className = "", property1 = "Default", label }) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default ChipsMotionMentorUrbanist;
