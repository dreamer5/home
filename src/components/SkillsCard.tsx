import { FunctionComponent, useCallback } from "react";
import ChartGraphic from "./ChartGraphic";
import RadioButtons from "./RadioButtons";
import styles from "./SkillsCard.module.css";

export type SkillsCardType = {
  className?: string;
};

const SkillsCard: FunctionComponent<SkillsCardType> = ({ className = "" }) => {
  const onGroupIconClick = useCallback(() => {
    // Please sync "Home desktop" to the project
  }, []);

  return (
    <div className={[styles.skillsCard, className].join(" ")}>
      <div className={styles.cardContainer}>
        <section className={styles.cardDisplay}>
          <div className={styles.cardHeaderArea}>
            <div className={styles.cardHeader}>
              <div className={styles.skillsUnlokedThisMonthParent}>
                <h3 className={styles.skillsUnlokedThis}>
                  Skills Unloked This Month 🌱
                </h3>
                <div className={styles.seemsLikeYou}>
                  Seems like you really challenged your limits this month!
                </div>
              </div>
            </div>
            <div className={styles.chartArea}>
              <div className={styles.chartContent}>
                <div className={styles.chartBackground} />
                <div className={styles.cardBody}>
                  <ChartGraphic />
                </div>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.chartLeyend}>
                  <div className={styles.controlArea}>
                    <img
                      className={styles.controlAreaChild}
                      loading="lazy"
                      alt=""
                      src="/rectangle-34.svg"
                    />
                    <div className={styles.control}>Control</div>
                  </div>
                  <div className={styles.controlArea}>
                    <div className={styles.legendMarkers} />
                    <div className={styles.control}>Balance</div>
                  </div>
                  <div className={styles.controlArea}>
                    <div className={styles.legendEntriesChild} />
                    <div className={styles.control}>Flexibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.goalSetting}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.radioButtonsParent}>
              <img
                className={styles.radioButtonsIcon}
                alt=""
                src="/radio-buttons1.svg"
              />
              <img
                className={styles.radioButtonsIcon1}
                alt=""
                src="/radio-buttons1.svg"
              />
            </div>
            <div className={styles.frameParent}>
              <div className={styles.weeklyGoalsParent}>
                <h3 className={styles.weeklyGoals}>Weekly Goals 🚀</h3>
                <div className={styles.titleDecoration}>
                  <img
                    className={styles.titleDecorationChild}
                    loading="lazy"
                    alt=""
                    src="/group-47853@2x.png"
                    onClick={onGroupIconClick}
                  />
                </div>
              </div>
              <div className={styles.keepGoingYoureDoingGreatWrapper}>
                <div className={styles.keepGoingYoure}>
                  Keep going, you’re doing great!
                </div>
              </div>
            </div>
            <div className={styles.taskList}>
              <div className={styles.taskEntry}>
                <div className={styles.actionTaskWrapper}>
                  <div className={styles.actionTask}>
                    <div className={styles.complete30Min}>
                      Complete 30 min practice
                    </div>
                    <div className={styles.chatButton}>
                      <div className={styles.join2Community}>
                        Join 2 community chat
                      </div>
                      <RadioButtons
                        selected={false}
                        state="Enabled"
                        radioButtonsMargin="0 !important"
                        radioButtonsRight="unset"
                        radioButtonsBottom="-14px"
                        radioButtonsTop="unset"
                        container="/container1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.taskEntryTwo}>
                  <div className={styles.actionTask}>
                    <div className={styles.techniqueTask}>
                      <div className={styles.watch5Technique}>
                        Watch 5 technique video
                      </div>
                    </div>
                    <div className={styles.challengeButton}>
                      <div className={styles.join5Challenges}>
                        Join 5 challenges
                      </div>
                      <RadioButtons
                        selected={false}
                        state="Enabled"
                        radioButtonsMargin="unset"
                        radioButtonsRight="unset"
                        radioButtonsBottom="unset"
                        radioButtonsTop="0px"
                        container="/container1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.completedWrapper}>
                    <div className={styles.join2Community}>2/4 completed</div>
                  </div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/rectangle-44011.svg"
                    />
                    <div className={styles.frameInner} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.rectangleDiv} />
            <h3 className={styles.quickActions}>Quick Actions 💫</h3>
            <div className={styles.actionItems}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild1} />
                <img
                  className={styles.groupsIcon}
                  loading="lazy"
                  alt=""
                  src="/groups1.svg"
                />
                <div className={styles.joinAChallenge}>Join a challenge</div>
              </div>
            </div>
            <div className={styles.actionItems}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild1} />
                <img
                  className={styles.groupsIcon}
                  loading="lazy"
                  alt=""
                  src="/tooltip.svg"
                />
                <div className={styles.joinAChallenge}>Chat with community</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsCard;
