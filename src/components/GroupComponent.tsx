import { FunctionComponent, useMemo, type CSSProperties } from "react";
import CardChips from "./CardChips";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  group47430?: string;
  expressiveFreestyle?: string;
  byMarkMaciel?: string;
  min?: string;
  joined?: string;
  hipHop?: string;
  july102025?: string;
  property1?: "Default" | "Variant2" | "Variant3";
  beginner?: string;

  /** Style props */
  frameDivWidth?: CSSProperties["width"];
  minDisplay?: CSSProperties["display"];
  minMinWidth?: CSSProperties["minWidth"];
  hipHopDisplay?: CSSProperties["display"];
  hipHopMinWidth?: CSSProperties["minWidth"];
  july102025MinWidth?: CSSProperties["minWidth"];
  july102025Flex?: CSSProperties["flex"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  group47430,
  expressiveFreestyle,
  byMarkMaciel,
  frameDivWidth,
  min,
  minDisplay,
  minMinWidth,
  joined,
  hipHop,
  hipHopDisplay,
  hipHopMinWidth,
  july102025,
  july102025MinWidth,
  july102025Flex,
  property1 = "Default",
  beginner,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const minStyle: CSSProperties = useMemo(() => {
    return {
      display: minDisplay,
      minWidth: minMinWidth,
    };
  }, [minDisplay, minMinWidth]);

  const hipHopStyle: CSSProperties = useMemo(() => {
    return {
      display: hipHopDisplay,
      minWidth: hipHopMinWidth,
    };
  }, [hipHopDisplay, hipHopMinWidth]);

  const july102025Style: CSSProperties = useMemo(() => {
    return {
      minWidth: july102025MinWidth,
      flex: july102025Flex,
    };
  }, [july102025MinWidth, july102025Flex]);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src={group47430} />
        <CardChips property1={property1} beginner={beginner} />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.expressiveFreestyleParent}>
                <b className={styles.expressiveFreestyle}>
                  {expressiveFreestyle}
                </b>
                <div className={styles.byMarkMacielWrapper}>
                  <div className={styles.byMarkMaciel}>{byMarkMaciel}</div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-47445@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent1} style={frameDivStyle}>
            <div className={styles.scheduleWrapper}>
              <img className={styles.scheduleIcon} alt="" src="/schedule.svg" />
            </div>
            <div className={styles.min} style={minStyle}>
              {min}
            </div>
            <img
              className={styles.diversity3Icon}
              alt=""
              src="/diversity-3.svg"
            />
            <div className={styles.joined}>{joined}</div>
            <img
              className={styles.diversity3Icon}
              alt=""
              src="/workspace-premium.svg"
            />
            <div className={styles.hipHop} style={hipHopStyle}>
              {hipHop}
            </div>
            <img
              className={styles.diversity3Icon}
              alt=""
              src="/calendar-today.svg"
            />
            <div className={styles.july102025} style={july102025Style}>
              {july102025}
            </div>
          </div>
        </div>
        <div className={styles.primaryButtonMotionmentorWrapper}>
          <button className={styles.primaryButtonMotionmentor}>
            <div className={styles.label}>Join</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
