import { FunctionComponent, useState } from "react";
import HeaderMotionMentorPlayfairP1 from "../components/HeaderMotionMentorPlayfairP1";
import ProgressContainer from "../components/ProgressContainer";
import GroupComponent1 from "../components/GroupComponent1";
import SkillsCard from "../components/SkillsCard";
import styles from "./HomeDesktop1.module.css";

const HomeDesktop1: FunctionComponent = () => {
  const [groupComponent1Items] = useState([
    {
      groupDivFlex: 1,
      groupDivPadding: "26px 21px",
      iconHoldersPadding: "0px 8px 0px 13px",
      firstChallengeComplete: "First Challenge Complete 🏆",
      firstChallengeCompleteWidth: "213px",
      statusContainersAlignSelf: "stretch",
      completedHipHopFundamentals: "Completed Hip Hop Fundamentals",
      dateIndicatorsPadding: "0px 47px 0px 46px",
    },
    {
      groupDivFlex: 0.9487,
      groupDivPadding: "26px 27px",
      iconHoldersPadding: "0px 31px 0px 29px",
      firstChallengeComplete: "Community Helper ♥",
      firstChallengeCompleteWidth: "162px",
      statusContainersAlignSelf: "unset",
      completedHipHopFundamentals: "50 reactions to your comments",
      dateIndicatorsPadding: "0px 41px 0px 40px",
    },
    {
      groupDivFlex: 0.8632,
      groupDivPadding: "26px 37px",
      iconHoldersPadding: "0px 34px 0px 38px",
      firstChallengeComplete: "Style Explorer 🌟",
      firstChallengeCompleteWidth: "130px",
      statusContainersAlignSelf: "",
      completedHipHopFundamentals: "Tried 3 different dance styles",
      dateIndicatorsPadding: "0px 31px 0px 30px",
    },
  ]);
  return (
    <div className={styles.homeDesktop}>
      <HeaderMotionMentorPlayfairP1
        property1="track progress"
        property11="light theme"
      />
      <main className={styles.dashboardContent}>
        <section className={styles.journeyHeaderWrapper}>
          <div className={styles.journeyHeader}>
            <h1 className={styles.yourDanceJourneyContainer}>
              {`Your `}Dance Journey 🚀
            </h1>
            <div className={styles.journeySubtitle}>
              <h3 className={styles.trackYourProgressContainer}>
                <p
                  className={styles.trackYourProgress}
                >{`Track your progress and celebrate your growth. You showed up, `}</p>
                <p className={styles.trackYourProgress}>
                  leveled up, and grown through every move!
                </p>
              </h3>
            </div>
          </div>
        </section>
        <section className={styles.progressContainerParent}>
          <ProgressContainer />
          <section className={styles.monthlyView}>
            <h2 className={styles.yourMonth}>Your Month</h2>
            <div className={styles.achievementDetailsWrapper}>
              <div className={styles.achievementDetails}>
                {groupComponent1Items.map((item, index) => (
                  <GroupComponent1
                    key={index}
                    groupDivFlex={item.groupDivFlex}
                    groupDivPadding={item.groupDivPadding}
                    iconHoldersPadding={item.iconHoldersPadding}
                    firstChallengeComplete={item.firstChallengeComplete}
                    firstChallengeCompleteWidth={
                      item.firstChallengeCompleteWidth
                    }
                    statusContainersAlignSelf={item.statusContainersAlignSelf}
                    completedHipHopFundamentals={
                      item.completedHipHopFundamentals
                    }
                    dateIndicatorsPadding={item.dateIndicatorsPadding}
                  />
                ))}
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.practiceStreakWrapper}>
                    <b className={styles.practiceStreak}>Practice Streak 🔥</b>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameParent}>
                      <div className={styles.verifiedWrapper}>
                        <img
                          className={styles.verifiedIcon}
                          alt=""
                          src="/verified.svg"
                        />
                      </div>
                      <div className={styles.daysInA}>7 days in a row</div>
                    </div>
                  </div>
                  <i className={styles.earnedOnMay}>Earned on May 15, 2025</i>
                </div>
              </div>
            </div>
          </section>
          <SkillsCard />
        </section>
      </main>
      <footer className={styles.footerArea}>
        <img
          className={styles.footerAreaChild}
          loading="lazy"
          alt=""
          src="/line-1.svg"
        />
        <div className={styles.copyrightArea}>
          <div className={styles.motionMentorAll}>
            © 2025 Motion Mentor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeDesktop1;
