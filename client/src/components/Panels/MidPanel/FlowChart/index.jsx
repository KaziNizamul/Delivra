/* external imports */
import React, { useState, useRef, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  MiniMap,
} from 'reactflow';
/* internal components */
import SendEmailNode from '../CustomNodes/SendEmail';
import PauseNode from '../CustomNodes/Pause';
import SendSMSNode from '../CustomNodes/SendSMS';
/* styles */
import 'reactflow/dist/style.css';
import styles from './FlowChart.module.scss';

const nodeTypes = {
  sendEmail: SendEmailNode,
  pause: PauseNode,
  sendSMS: SendSMSNode,
};

const getNodeType = (label) => {
  switch (label) {
    case 'Send Email':
      return 'sendEmail';
    case 'Pause':
      return 'pause';
    case 'Send SMS':
      return 'sendSMS';
    default:
      return 'custom'; // fallback type
  }
};

const connectionLineStyle = { stroke: '#b1b7be', strokeWidth: 2 };

const FlowChart = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) =>
      setEdges((els) =>
        addEdge(
          {
            ...params,
            type: 'smoothstep',
            animated: true,
            style: connectionLineStyle,
          },
          els
        )
      ),
    []
  );

  const onElementsRemove = useCallback(
    (elementsToRemove) => {
      setNodes((nds) =>
        nds.filter((node) => !elementsToRemove.some((el) => el.id === node.id))
      );
      setEdges((eds) =>
        eds.filter((edge) => !elementsToRemove.some((el) => el.id === edge.id))
      );
    },
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'node',
      drop: (item, monitor) => {
        if (!reactFlowInstance) return;

        console.log({ item })
        const reactFlowBounds =
          reactFlowWrapper.current.getBoundingClientRect();
        const position = reactFlowInstance.project({
          x: monitor.getClientOffset().x - reactFlowBounds.left,
          y: monitor.getClientOffset().y - reactFlowBounds.top,
        });

        const nodeType = getNodeType(item.label);

        const newNode = {
          id: Date.now().toString(),
          type: nodeType,
          position,
          data: { ...item },
        };

        setNodes((nds) => nds.concat(newNode));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [reactFlowInstance]
  );

  const combinedRef = useCallback(
    (node) => {
      reactFlowWrapper.current = node;
      drop(node);
    },
    [drop]
  );

  return (
    <div
      className={styles.flowChart}
      onDragOver={onDragOver}
      ref={combinedRef}
      style={{ height: '100%' }}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          nodeTypes={nodeTypes}
          onInit={setReactFlowInstance}
          connectionLineType={ConnectionLineType.SmoothStep}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default FlowChart;
