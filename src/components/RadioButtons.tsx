import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RadioButtons.module.css";

export type RadioButtonsType = {
  className?: string;
  container?: string;

  /** Variant props */
  selected?: boolean;
  state?: string;

  /** Style props */
  radioButtonsMargin?: CSSProperties["margin"];
  radioButtonsRight?: CSSProperties["right"];
  radioButtonsBottom?: CSSProperties["bottom"];
  radioButtonsTop?: CSSProperties["top"];
};

const RadioButtons: FunctionComponent<RadioButtonsType> = ({
  className = "",
  selected = true,
  state = "Enabled",
  radioButtonsMargin,
  radioButtonsRight,
  radioButtonsBottom,
  radioButtonsTop,
  container,
}) => {
  const radioButtonsStyle: CSSProperties = useMemo(() => {
    return {
      margin: radioButtonsMargin,
      right: radioButtonsRight,
      bottom: radioButtonsBottom,
      top: radioButtonsTop,
    };
  }, [
    radioButtonsMargin,
    radioButtonsRight,
    radioButtonsBottom,
    radioButtonsTop,
  ]);

  return (
    <div
      className={[styles.radioButtons, className].join(" ")}
      data-selected={selected}
      data-state={state}
      style={radioButtonsStyle}
    >
      <img
        className={styles.containerIcon}
        loading="lazy"
        alt=""
        src={container}
      />
    </div>
  );
};

export default RadioButtons;
