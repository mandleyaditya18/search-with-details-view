import { AnimatePresence, motion } from "framer-motion";

import { ArrowLeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const MOTION_VARIANTS = {
  hidden: { opacity: 0, x: 200 },
  open: { opacity: 1, x: 0 },
};

export const DetailsPanel = ({ selectedGoal, setSelectedGoal }) => {
  const goalDetails = selectedGoal
    ? [
        { label: "Goal Type", value: selectedGoal.goalType },
        { label: "Goal Cycle", value: selectedGoal.goalCycle },
        { label: "Visibility", value: selectedGoal.goalVisibility },
        {
          label: "Progress",
          value: `${selectedGoal.currentProgressPercentage}%`,
        },
      ]
    : [];

  return (
    <AnimatePresence>
      {selectedGoal && (
        <motion.div
          initial="hidden"
          animate="open"
          exit="hidden"
          variants={MOTION_VARIANTS}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="border-l ml-2 px-4 flex flex-col gap-4 w-[200px]"
        >
          <span
            className="cursor-pointer bg-zinc-300 px-2 py-1 rounded w-fit hover:bg-zinc-400"
            onClick={() => setSelectedGoal(null)}
          >
            <ArrowLeftOutlined />
          </span>
          {goalDetails.map((info, index) => (
            <DetailInfo key={index} label={info.label} value={info.value} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DetailInfo = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-zinc-400">{label}</label>
      <span className="capitalize text-lg font-extralight text-white">
        {value}
      </span>
    </div>
  );
};

DetailInfo.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

DetailsPanel.propTypes = {
  selectedGoal: PropTypes.object,
  setSelectedGoal: PropTypes.func,
};
