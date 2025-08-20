import { FunctionComponent } from "react";
import styles from "./ChartGraphic.module.css";

export type ChartGraphicType = {
  className?: string;
};

const ChartGraphic: FunctionComponent<ChartGraphicType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.chartGraphic, className].join(" ")}>
      <div className={styles.wrapperRing}>
        <img className={styles.ringIcon} alt="" src="/ring2.svg" />
      </div>
      <div className={styles.wrapperRing1}>
        <img className={styles.ringIcon1} alt="" src="/ring-1.svg" />
      </div>
      <div className={styles.wrapperRing2}>
        <img className={styles.ringIcon2} alt="" src="/ring-2.svg" />
      </div>
      <h3 className={styles.chartCompletion}>99%</h3>
    </div>
  );
};

export default ChartGraphic;
