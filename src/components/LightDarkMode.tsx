import { FunctionComponent, useCallback } from "react";
import styles from "./LightDarkMode.module.css";

export type LightDarkModeType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const LightDarkMode: FunctionComponent<LightDarkModeType> = ({
  className = "",
  property1 = "light theme",
}) => {
  const onLightDarkModeClick = useCallback(() => {
    // Please sync "Home desktop" to the project
  }, []);

  return (
    <div
      className={[styles.lightDarkMode, className].join(" ")}
      onClick={onLightDarkModeClick}
      data-property1={property1}
    >
      <img
        className={styles.bedtimeIcon}
        loading="lazy"
        alt=""
        src="/bedtime.svg"
      />
    </div>
  );
};

export default LightDarkMode;
