import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  firstChallengeComplete?: string;
  completedHipHopFundamentals?: string;

  /** Style props */
  groupDivFlex?: CSSProperties["flex"];
  groupDivPadding?: CSSProperties["padding"];
  iconHoldersPadding?: CSSProperties["padding"];
  firstChallengeCompleteWidth?: CSSProperties["width"];
  statusContainersAlignSelf?: CSSProperties["alignSelf"];
  dateIndicatorsPadding?: CSSProperties["padding"];
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  groupDivFlex,
  groupDivPadding,
  iconHoldersPadding,
  firstChallengeComplete,
  firstChallengeCompleteWidth,
  statusContainersAlignSelf,
  completedHipHopFundamentals,
  dateIndicatorsPadding,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: groupDivFlex,
      padding: groupDivPadding,
    };
  }, [groupDivFlex, groupDivPadding]);

  const iconHoldersStyle: CSSProperties = useMemo(() => {
    return {
      padding: iconHoldersPadding,
    };
  }, [iconHoldersPadding]);

  const firstChallengeCompleteStyle: CSSProperties = useMemo(() => {
    return {
      width: firstChallengeCompleteWidth,
    };
  }, [firstChallengeCompleteWidth]);

  const statusContainersStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: statusContainersAlignSelf,
    };
  }, [statusContainersAlignSelf]);

  const dateIndicatorsStyle: CSSProperties = useMemo(() => {
    return {
      padding: dateIndicatorsPadding,
    };
  }, [dateIndicatorsPadding]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.iconHolders} style={iconHoldersStyle}>
        <b
          className={styles.firstChallengeComplete}
          style={firstChallengeCompleteStyle}
        >
          {firstChallengeComplete}
        </b>
      </div>
      <div className={styles.statusContainers} style={statusContainersStyle}>
        <div className={styles.statusIndicator}>
          <img className={styles.verifiedIcon} alt="" src="/verified.svg" />
        </div>
        <div className={styles.completedHipHop}>
          {completedHipHopFundamentals}
        </div>
      </div>
      <div className={styles.dateIndicators} style={dateIndicatorsStyle}>
        <i className={styles.completedHipHop}>Earned on May 15, 2025</i>
      </div>
    </div>
  );
};

export default GroupComponent1;
