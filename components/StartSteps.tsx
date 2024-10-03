import styles from '../styles';

/**
 * A single step component for the start steps section.
 *
 * @param {{ number: number, text: string }} props
 * @returns {JSX.Element}
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StartSteps = ({ number, text }: { number: any, text: string }): JSX.Element => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);


export default StartSteps;
