import React, { useState, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FlowChart from "./FlowChart";
import MidPanel from "./MidPanel";
import RightPanel from "./RightPanel";

const WorkflowCanvas = () => {
  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData("application/reactflow/type");
    const data = JSON.parse(
      event.dataTransfer.getData("application/reactflow")
    );

    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const newNode = {
      id: Date.now().toString(),
      type,
      position,
      data: { ...data },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <MidPanel onDrop={onDrop} />
        <RightPanel />
      </div>
    </DndProvider>
  );
};

export default WorkflowCanvas;
