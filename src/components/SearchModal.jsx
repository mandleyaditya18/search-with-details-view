import { useState } from "react";

import { Modal } from "antd";
import { SearchResult } from "./SearchResult";
import { DetailsPanel } from "./DetailsPanel";

import { SearchOutlined } from "@ant-design/icons";

export const SearchModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <>
      <div
        className="flex items-center border-2 border-slate-900 rounded-md px-8 py-4 w-[500px] h-fit cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <SearchOutlined className="mr-4 text-2xl" />
        <span className="text-xl">Search Goals</span>
      </div>
      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
        closable={false}
        width={650}
      >
        <div className="w-[600px] flex">
          <SearchResult
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
          <DetailsPanel
            selectedGoal={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
        </div>
      </Modal>
    </>
  );
};
