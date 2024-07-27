import { ArrowLeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

export const DetailsPanel = ({ selectedGoal, setSelectedGoal }) => {
  if (!selectedGoal) return null;

  const goalDetails = [
    { label: "Goal Type", value: selectedGoal.goalType },
    { label: "Goal Cycle", value: selectedGoal.goalCycle },
    { label: "Visibility", value: selectedGoal.goalVisibility },
    { label: "Progress", value: `${selectedGoal.currentProgressPercentage}%` },
  ];

  return (
    <div className="border-l ml-2 px-4 flex flex-col gap-4 w-[200px]">
      <span
        className="cursor-pointer bg-slate-200 px-2 py-1 rounded w-fit hover:bg-slate-300"
        onClick={() => setSelectedGoal(null)}
      >
        <ArrowLeftOutlined />
      </span>
      {goalDetails.map((info, index) => (
        <DetailInfo key={index} label={info.label} value={info.value} />
      ))}
    </div>
  );
};

const DetailInfo = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-slate-500">{label}</label>
      <span className="capitalize text-lg font-extralight">{value}</span>
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
