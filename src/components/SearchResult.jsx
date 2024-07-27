import { Avatar } from "antd";
import { GOALs } from "../data";
import PropTypes from "prop-types";
import classNames from "classnames";

export const SearchResult = ({ selectedGoal, setSelectedGoal }) => {
  return (
    <div className="flex flex-col flex-1 gap-4 overflow-auto max-h-[400px]">
      {GOALs.map((goal) => (
        <div
          key={goal.id}
          className={classNames(
            "flex justify-between cursor-pointer hover:bg-slate-200 px-4 py-2 rounded-md",
            { "bg-slate-200": selectedGoal && selectedGoal.id === goal.id },
          )}
          onClick={() => setSelectedGoal(goal)}
        >
          <p>{goal.goalTitle}</p>
          <Avatar size="small">{goal.owners[0][0]}</Avatar>
        </div>
      ))}
    </div>
  );
};

SearchResult.propTypes = {
  selectedGoal: PropTypes.object,
  setSelectedGoal: PropTypes.func,
};
