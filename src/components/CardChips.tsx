import { FunctionComponent } from "react";
import styles from "./CardChips.module.css";

export type CardChipsType = {
  className?: string;
  beginner?: string;

  /** Variant props */
  property1?: "Default" | "Variant2" | "Variant3";
};

const CardChips: FunctionComponent<CardChipsType> = ({
  className = "",
  property1 = "Default",
  beginner,
}) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.beginner}>{beginner}</div>
    </div>
  );
};

export default CardChips;
