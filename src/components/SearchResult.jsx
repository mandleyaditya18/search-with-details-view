import { Avatar } from "antd";
import { GOALs } from "../data";
import PropTypes from "prop-types";
import classNames from "classnames";

export const SearchResult = ({ selectedGoal, setSelectedGoal }) => {
  return (
    <div className="flex flex-col flex-1 gap-4 overflow-auto max-h-[400px] px-6">
      {GOALs.map((goal) => (
        <div
          key={goal.id}
          className={classNames(
            "flex justify-between cursor-pointer hover:bg-zinc-500 text-white px-4 py-2 rounded-md",
            { "bg-zinc-500": selectedGoal && selectedGoal.id === goal.id },
          )}
          onClick={() => setSelectedGoal(goal)}
        >
          <div>
            <p>{goal.goalTitle}</p>
            <ul className="flex gap-6 list-disc pl-3">
              <li className="capitalize">{goal.goalType}</li>
              <li className="capitalize">{goal.goalCycle}</li>
            </ul>
          </div>
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
