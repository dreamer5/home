import { FunctionComponent } from "react";
import ChipsMotionMentorUrbanist from "./ChipsMotionMentorUrbanist";
import PrimaryButtonMotionMentor from "./PrimaryButtonMotionMentor";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.chipsMotionmentorUrbanistParent}>
        <ChipsMotionMentorUrbanist
          property1="Default"
          label="🔥12 days streak!"
        />
        <ChipsMotionMentorUrbanist
          property1="Variant2"
          label="⚡challenge master"
        />
      </div>
      <div className={styles.readyToMoveYourDreamsForwParent}>
        <h1 className={styles.readyToMoveContainer}>
          {`Ready to move your `}dreams{` `}forward? ✨
        </h1>
        <div className={styles.frameWrapper}>
          <div className={styles.everyGreatDancerStartedWitParent}>
            <h3
              className={styles.everyGreatDancer}
            >{`Every great dancer started with a single step. Today is your day to grow, shine and connect with your passion. Let’s make some magic happen! `}</h3>
            <div className={styles.primaryButtonMotionmentorWrapper}>
              <PrimaryButtonMotionMentor primaryButtonSmall="Default" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
