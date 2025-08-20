import { FunctionComponent } from "react";
import HeaderMotionMentorPlayfairP from "../components/HeaderMotionMentorPlayfairP";
import FrameComponent from "../components/FrameComponent";
import ChallengeCards from "../components/ChallengeCards";
import styles from "./HomeDesktop.module.css";

const HomeDesktop: FunctionComponent = () => {
  return (
    <div className={styles.homeDesktop}>
      <HeaderMotionMentorPlayfairP />
      <main className={styles.homeDesktopInner}>
        <section className={styles.frameParent}>
          <FrameComponent />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.featuredChallengesParent}>
                <h2 className={styles.featuredChallenges}>
                  Featured Challenges
                </h2>
                <div className={styles.viewAllWrapper}>
                  <h3 className={styles.viewAll}>View all</h3>
                </div>
              </div>
              <h3 className={styles.handPickedChallenges}>
                Hand picked challenges to elevate your skills
              </h3>
            </div>
          </div>
          <ChallengeCards />
        </section>
      </main>
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/line-1.svg"
        />
        <div className={styles.motionMentorAllRightsReseWrapper}>
          <div className={styles.motionMentorAll}>
            © 2025 Motion Mentor. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktop;
