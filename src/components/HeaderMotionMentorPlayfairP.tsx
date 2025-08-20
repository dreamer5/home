import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderMotionMentorPlayfairP.module.css";

export type HeaderMotionMentorPlayfairPType = {
  className?: string;
};

const HeaderMotionMentorPlayfairP: FunctionComponent<
  HeaderMotionMentorPlayfairPType
> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "Home desktop" to the project
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/home-desktop");
  }, [navigate]);

  return (
    <header
      className={[styles.headerMotionmentorPlayfairp, className].join(" ")}
    >
      <div className={styles.headerMotionmentorPlayfairpChild} />
      <div className={styles.header}>
        <div className={styles.navigation}>
          <img
            className={styles.navigationChild}
            loading="lazy"
            alt=""
            src="/group-47466@2x.png"
          />
          <div className={styles.motionMentorLink}>
            <h3 className={styles.motionmentor}>
              <span>Motion</span>
              <span>Mentor</span>
            </h3>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItems}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.cottageIcon}
                loading="lazy"
                alt=""
                src="/cottage.svg"
              />
              <div className={styles.homeLink}>
                <div className={styles.home}>Home</div>
              </div>
            </div>
            <div className={styles.menuItemPair}>
              <div
                className={styles.targetParent}
                onClick={onGroupContainerClick}
              >
                <img
                  className={styles.targetIcon}
                  loading="lazy"
                  alt=""
                  src="/target.svg"
                />
                <div className={styles.challengeSport}>
                  <div className={styles.challenges}>Challenges</div>
                </div>
              </div>
            </div>
            <div className={styles.menuItemPair}>
              <div
                className={styles.targetParent}
                onClick={onGroupContainerClick1}
              >
                <img
                  className={styles.targetIcon}
                  loading="lazy"
                  alt=""
                  src="/trending-up.svg"
                />
                <div className={styles.homeLink}>
                  <div className={styles.challenges}>Track Progress</div>
                </div>
              </div>
            </div>
            <div className={styles.menuItemPair1}>
              <div
                className={styles.boltParent}
                onClick={onGroupContainerClick}
              >
                <img
                  className={styles.targetIcon}
                  loading="lazy"
                  alt=""
                  src="/bolt.svg"
                />
                <div className={styles.challengeSport}>
                  <div className={styles.challenges}>Sport Circles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lightDarkModeWrapper}>
        <img
          className={styles.lightDarkMode}
          loading="lazy"
          alt=""
          src="/light-dark-mode.svg"
          onClick={onGroupContainerClick}
        />
      </div>
    </header>
  );
};

export default HeaderMotionMentorPlayfairP;
