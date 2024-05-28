"use client";
//import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React, { useState } from "react";
import MovieCard from "../MovieCard";

const WorkflowButton = () => {
  const { setOpen, setClose } = useModal();
  const [isEnabled, setIsEnabled] = useState(true); // Example state for enabling/disabling the button

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are powerful tools that help you automate tasks."
      >
        <MovieCard />
      </CustomModal>
    );
  };

  return (
    <Button
      size={"icon"}
      {...(isEnabled
        ? {
            onClick: handleClick,
          }
        : {
            disabled: true,
          })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
