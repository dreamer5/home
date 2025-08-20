import { FunctionComponent, useCallback } from "react";
import CardChips1 from "./CardChips1";
import styles from "./ProgressContainer.module.css";

export type ProgressContainerType = {
  className?: string;
};

const ProgressContainer: FunctionComponent<ProgressContainerType> = ({
  className = "",
}) => {
  const onViewAllTextClick = useCallback(() => {
    // Please sync "Home desktop" to the project
  }, []);

  return (
    <div className={[styles.progressContainer, className].join(" ")}>
      <div className={styles.challengesHeader}>
        <div className={styles.challengeTitleAreaParent}>
          <div className={styles.challengeTitleArea}>
            <h2 className={styles.lastChallenges}>Last Challenges</h2>
            <div className={styles.challengeAction}>
              <h3 className={styles.viewAll} onClick={onViewAllTextClick}>
                View all
              </h3>
            </div>
          </div>
          <h3 className={styles.lastChallengesYouve}>
            Last challenges you’ve joined
          </h3>
        </div>
        <section className={styles.challengesList}>
          <div className={styles.challengeCard}>
            <div className={styles.challengeInfo}>
              <div className={styles.challengeDetails}>
                <div className={styles.challengeType}>
                  <img
                    className={styles.challengeTypeChild}
                    loading="lazy"
                    alt=""
                    src="/group-47430@2x.png"
                  />
                  <CardChips1 property1="Variant2" beginner="Intermediate" />
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameParent}>
                    <div className={styles.challengeHeaderInfoWrapper}>
                      <div className={styles.challengeHeaderInfo}>
                        <b className={styles.explosiveJump}>Explosive Jump</b>
                        <div className={styles.bySarahMartinez}>
                          by Sarah Martinez
                        </div>
                      </div>
                    </div>
                    <div className={styles.challengeStats}>
                      <div className={styles.scheduleArea}>
                        <img
                          className={styles.scheduleIcon}
                          alt=""
                          src="/schedule1.svg"
                        />
                      </div>
                      <div className={styles.hour}>{`1 hour   `}</div>
                      <div className={styles.diversityAreaParent}>
                        <div className={styles.diversityArea}>
                          <img
                            className={styles.diversity3Icon}
                            loading="lazy"
                            alt=""
                            src="/diversity-31.svg"
                          />
                        </div>
                        <div className={styles.joined}>35 joined</div>
                        <div className={styles.workspacePremiumParent}>
                          <img
                            className={styles.workspacePremiumIcon}
                            loading="lazy"
                            alt=""
                            src="/workspace-premium1.svg"
                          />
                          <div className={styles.ballet}>Ballet</div>
                        </div>
                      </div>
                      <div className={styles.calendarTodayWrapper}>
                        <img
                          className={styles.workspacePremiumIcon}
                          loading="lazy"
                          alt=""
                          src="/calendar-today1.svg"
                        />
                      </div>
                      <div className={styles.july152025}>July 15, 2025</div>
                    </div>
                  </div>
                  <div className={styles.primaryButtonMotionmentorWrapper}>
                    <button
                      className={styles.primaryButtonMotionmentor}
                      onClick={onViewAllTextClick}
                    >
                      <div className={styles.view}>View</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.challengeCardSecondary}>
                <div className={styles.challengeType}>
                  <img
                    className={styles.challengeTypeChild}
                    alt=""
                    src="/group-47430-1@2x.png"
                  />
                  <CardChips1 property1="Default" beginner="Beginner" />
                </div>
                <div className={styles.challengeSummarySecondary}>
                  <div className={styles.challengeHeaderInfoSecondarParent}>
                    <div className={styles.challengeHeaderInfoSecondar}>
                      <b className={styles.expressiveFreestyle}>
                        Expressive freestyle
                      </b>
                      <div className={styles.byMarkMaciel}>by Mark Maciel</div>
                    </div>
                    <div className={styles.challengeStatsSecondary}>
                      <div className={styles.challengeTime}>
                        <div className={styles.min}>35 min</div>
                        <div className={styles.joined1}>78 joined</div>
                        <div className={styles.hipHop}>Hip hop</div>
                        <div className={styles.july102025}>July 10, 2025</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.challengeActionTertiary}>
                    <button className={styles.primaryButtonMotionmentor}>
                      <div className={styles.view}>View</div>
                    </button>
                  </div>
                  <div className={styles.challengeDetailsFull}>
                    <div className={styles.detailBackground} />
                    <img
                      className={styles.calendarTodayIcon1}
                      alt=""
                      src="/calendar-today1.svg"
                    />
                    <img
                      className={styles.workspacePremiumIcon1}
                      alt=""
                      src="/workspace-premium1.svg"
                    />
                    <img
                      className={styles.scheduleIcon1}
                      alt=""
                      src="/schedule1.svg"
                    />
                    <img
                      className={styles.diversity3Icon1}
                      alt=""
                      src="/diversity-31.svg"
                    />
                    <img
                      className={styles.challengeDetailsFullChild}
                      loading="lazy"
                      alt=""
                      src="/group-474451@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.challengeCardTertiary}>
              <div className={styles.challengeType}>
                <img
                  className={styles.challengeTypeChild}
                  alt=""
                  src="/group-47430-21@2x.png"
                />
                <CardChips1 property1="Variant3" beginner="Advanced" />
              </div>
              <div className={styles.challengeTitleTertiary}>
                <div className={styles.challengeTitleTertiaryChild} />
                <b className={styles.rhytmPosture}>{`Rhytm & Posture`}</b>
                <div className={styles.challengeLatin}>
                  <div className={styles.challengeScheduleLatin}>
                    <div className={styles.authorDetails}>
                      <div className={styles.byAnneWineWrapper}>
                        <div className={styles.byAnneWine}>by Anne Wine</div>
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.scheduleWrapper}>
                          <img
                            className={styles.scheduleIcon2}
                            alt=""
                            src="/schedule1.svg"
                          />
                        </div>
                        <div className={styles.min1}>{`20 min   `}</div>
                        <img
                          className={styles.diversity3Icon}
                          alt=""
                          src="/diversity-31.svg"
                        />
                        <div className={styles.joined2}>48 joined</div>
                        <img
                          className={styles.diversity3Icon}
                          alt=""
                          src="/workspace-premium1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.motionMentorButton}>
                      <div className={styles.primaryButtonMotionmentor2}>
                        <div className={styles.label}>Join</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.challengeTimesLatin}>
                    <div className={styles.latin}>Latin</div>
                  </div>
                  <div className={styles.challengeTimesLatin}>
                    <img
                      className={styles.diversity3Icon}
                      alt=""
                      src="/calendar-today1.svg"
                    />
                  </div>
                  <div className={styles.challengeTimesLatin1}>
                    <div className={styles.july222025}>July 22, 2025</div>
                  </div>
                </div>
                <img
                  className={styles.challengeDetailsFullChild}
                  alt=""
                  src="/group-474451@2x.png"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgressContainer;
