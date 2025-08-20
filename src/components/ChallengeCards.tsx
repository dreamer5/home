import { FunctionComponent, useCallback } from "react";
import CardChips from "./CardChips";
import GroupComponent from "./GroupComponent";
import RadioButtons from "./RadioButtons";
import styles from "./ChallengeCards.module.css";

export type ChallengeCardsType = {
  className?: string;
};

const ChallengeCards: FunctionComponent<ChallengeCardsType> = ({
  className = "",
}) => {
  const onGroupIconClick = useCallback(() => {
    // Please sync "Home desktop" to the project
  }, []);

  return (
    <div className={[styles.challengeCards, className].join(" ")}>
      <div className={styles.cardContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameParent}>
            <section className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-47430@2x.png"
                />
                <CardChips property1="Variant2" beginner="Intermediate" />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.titleContainerParent}>
                  <div className={styles.titleContainer}>
                    <div className={styles.frameDiv}>
                      <div className={styles.explosiveJumpParent}>
                        <b className={styles.explosiveJump}>Explosive Jump</b>
                        <div className={styles.bySarahMartinezWrapper}>
                          <div className={styles.bySarahMartinez}>
                            by Sarah Martinez
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <img
                          className={styles.groupIcon}
                          loading="lazy"
                          alt=""
                          src="/group-47445@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.statsContainer}>
                    <div className={styles.statsIcons}>
                      <img
                        className={styles.scheduleIcon}
                        alt=""
                        src="/schedule.svg"
                      />
                    </div>
                    <div className={styles.hour}>{`1 hour   `}</div>
                    <div className={styles.frameParent1}>
                      <div className={styles.diversity3Wrapper}>
                        <img
                          className={styles.diversity3Icon}
                          loading="lazy"
                          alt=""
                          src="/diversity-3.svg"
                        />
                      </div>
                      <div className={styles.joined}>35 joined</div>
                      <div className={styles.workspacePremiumWrapper}>
                        <img
                          className={styles.workspacePremiumIcon}
                          loading="lazy"
                          alt=""
                          src="/workspace-premium.svg"
                        />
                      </div>
                      <div className={styles.ballet}>Ballet</div>
                    </div>
                    <div className={styles.calendarTodayWrapper}>
                      <img
                        className={styles.workspacePremiumIcon}
                        loading="lazy"
                        alt=""
                        src="/calendar-today.svg"
                      />
                    </div>
                    <div className={styles.july152025}>July 15, 2025</div>
                  </div>
                </div>
                <div className={styles.actionButtons}>
                  <button className={styles.primaryButtonMotionmentor}>
                    <div className={styles.label}>Join</div>
                  </button>
                </div>
              </div>
            </section>
            <GroupComponent
              group47430="/group-47430-1@2x.png"
              expressiveFreestyle="Expressive freestyle"
              byMarkMaciel="by Mark Maciel"
              min="35 min"
              joined="78 joined"
              hipHop="Hip hop"
              july102025="July 10, 2025"
              property1="Default"
              beginner="Beginner"
            />
            <GroupComponent
              group47430="/group-47430-2@2x.png"
              expressiveFreestyle={`Rhytm & Posture`}
              byMarkMaciel="by Anne Wine"
              frameDivWidth="370px"
              min="20 min   "
              minDisplay="unset"
              minMinWidth="unset"
              joined="48 joined"
              hipHop="Latin"
              hipHopDisplay="inline-block"
              hipHopMinWidth="39px"
              july102025="July 22, 2025"
              july102025MinWidth="69px"
              july102025Flex="1"
              property1="Variant3"
              beginner="Advanced"
            />
          </div>
        </div>
        <footer className={styles.groupFooter}>
          <div className={styles.groupDiv}>
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/group-47468@2x.png"
            />
            <h3 className={styles.classesTaken}>
              <p className={styles.p}>24</p>
              <p className={styles.p}>classes</p>
              <p className={styles.p}>taken</p>
            </h3>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper1}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/group-47468-1@2x.png"
              />
            </div>
            <h3 className={styles.classesTaken}>
              <p className={styles.p}>156</p>
              <p className={styles.p}>hours</p>
              <p className={styles.p}>practiced</p>
            </h3>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent3}>
              <img
                className={styles.frameChild1}
                alt=""
                src="/group-47468-2@2x.png"
              />
              <h3 className={styles.classesTaken}>
                <p className={styles.p}>8</p>
                <p className={styles.p}>goals</p>
                <p className={styles.p}>achieved</p>
              </h3>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <img
              className={styles.frameChild1}
              alt=""
              src="/group-47468-3@2x.png"
            />
            <h3 className={styles.classesTaken}>
              <p className={styles.p}>12</p>
              <p className={styles.p}>days</p>
              <p className={styles.p}>streak</p>
            </h3>
          </div>
        </footer>
      </div>
      <section className={styles.actionsContainerParent}>
        <div className={styles.actionsContainer}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <h3 className={styles.quickActions}>Quick Actions 💫</h3>
            <div className={styles.actionArea}>
              <div className={styles.frameParent5}>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild5} />
                  <img
                    className={styles.playCircleIcon}
                    loading="lazy"
                    alt=""
                    src="/play-circle.svg"
                  />
                  <div className={styles.continueLastPractice}>
                    Continue last practice
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild5} />
                  <img
                    className={styles.playCircleIcon}
                    loading="lazy"
                    alt=""
                    src="/groups.svg"
                  />
                  <div className={styles.joinLiveSessions}>
                    Join live sessions
                  </div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild5} />
                  <img
                    className={styles.playCircleIcon}
                    loading="lazy"
                    alt=""
                    src="/tooltip.svg"
                  />
                  <div className={styles.joinLiveSessions}>
                    Chat with community
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.frameChild8} />
          <div className={styles.parent}>
            <h1 className={styles.h1}>🩰</h1>
            <div className={styles.iSeeDanceContainer}>
              <p className={styles.p}>{`“I see dance being used `}</p>
              <p className={styles.p}>
                as communication between body and soul, to express what is too
                deep to find for words.”
              </p>
            </div>
          </div>
          <i className={styles.ruthStDenis}>-Ruth St. Denis</i>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.frameChild9} />
          <div className={styles.goalsContainerWrapper}>
            <div className={styles.goalsContainer}>
              <div className={styles.goalHeaderParent}>
                <div className={styles.goalHeader}>
                  <h3 className={styles.todaysGoals}>Today’s goals 🚀</h3>
                </div>
                <img
                  className={styles.frameChild10}
                  loading="lazy"
                  alt=""
                  src="/group-47853@2x.png"
                  onClick={onGroupIconClick}
                />
              </div>
              <div className={styles.keepGoingYoureDoingGreatWrapper}>
                <div className={styles.continueLastPractice}>
                  Keep going, you’re doing great!
                </div>
              </div>
            </div>
          </div>
          <div className={styles.practiceVideo}>
            <div className={styles.complete30Min}>Complete 30 min practice</div>
          </div>
          <div className={styles.radioButtonsParent}>
            <img
              className={styles.radioButtonsIcon}
              alt=""
              src="/radio-buttons.svg"
            />
            <img
              className={styles.radioButtonsIcon1}
              alt=""
              src="/radio-buttons.svg"
            />
            <RadioButtons
              selected={false}
              state="Enabled"
              container="/container.svg"
            />
          </div>
          <div className={styles.practiceVideo}>
            <div className={styles.complete30Min}>Watch 5 technique video</div>
          </div>
          <div className={styles.communityDetailsParent}>
            <div className={styles.communityDetails}>
              <div className={styles.join2Community}>Join 2 community chat</div>
            </div>
            <div className={styles.frameParent6}>
              <div className={styles.join5ChallengesParent}>
                <div className={styles.join5Challenges}>Join 5 challenges</div>
                <RadioButtons
                  selected={false}
                  state="Enabled"
                  radioButtonsMargin="unset"
                  radioButtonsRight="unset"
                  radioButtonsBottom="unset"
                  radioButtonsTop="0px"
                  container="/container.svg"
                />
              </div>
              <div className={styles.completionData}>
                <div className={styles.completedParent}>
                  <div className={styles.completed}>2/4 completed</div>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.rectangleIcon}
                      alt=""
                      src="/rectangle-4401.svg"
                    />
                    <div className={styles.frameChild11} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChallengeCards;
