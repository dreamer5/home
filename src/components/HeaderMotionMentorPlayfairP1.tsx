import { FunctionComponent } from "react";
import LightDarkMode from "./LightDarkMode";
import styles from "./HeaderMotionMentorPlayfairP1.module.css";

export type HeaderMotionMentorPlayfairP1Type = {
  className?: string;
  property11?: string;

  /** Variant props */
  property1?: string;
};

const HeaderMotionMentorPlayfairP1: FunctionComponent<
  HeaderMotionMentorPlayfairP1Type
> = ({ className = "", property1 = "Default", property11 }) => {
  return (
    <header
      className={[styles.headerMotionmentorPlayfairp, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.background} />
      <div className={styles.header}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-47466@2x.png"
          />
          <div className={styles.title}>
            <h3 className={styles.motionmentor}>
              <span>Motion</span>
              <span>Mentor</span>
            </h3>
          </div>
        </div>
        <div className={styles.profileMenuWrapper}>
          <div className={styles.profileMenu}>
            <button className={styles.profileBackground} />
            <div className={styles.profileMenuInner}>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.cottageParent}>
                    <img
                      className={styles.cottageIcon}
                      loading="lazy"
                      alt=""
                      src="/cottage1.svg"
                    />
                    <div className={styles.actionLabels}>
                      <div className={styles.home}>Home</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.targetParent}>
                    <img
                      className={styles.targetIcon}
                      loading="lazy"
                      alt=""
                      src="/target1.svg"
                    />
                    <div className={styles.challengesWrapper}>
                      <div className={styles.challenges}>Challenges</div>
                    </div>
                  </div>
                </div>
                <div className={styles.groupDiv}>
                  <div className={styles.trendingUpParent}>
                    <img
                      className={styles.trendingUpIcon}
                      loading="lazy"
                      alt=""
                      src="/trending-up1.svg"
                    />
                    <div className={styles.trackProgressWrapper}>
                      <div className={styles.trackProgress}>Track Progress</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.boltParent}>
                    <img
                      className={styles.boltIcon}
                      loading="lazy"
                      alt=""
                      src="/bolt1.svg"
                    />
                    <div className={styles.sportCirclesWrapper}>
                      <div className={styles.sportCircles}>Sport Circles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.themeToggle}>
        <LightDarkMode property1={property11} />
      </div>
    </header>
  );
};

export default HeaderMotionMentorPlayfairP1;
