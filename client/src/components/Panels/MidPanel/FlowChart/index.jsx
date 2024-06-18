/* external imports */
import React, { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import EvaluateEmailNode from '../CustomNodes/EvaluateEmail';
import SplitNode from '../CustomNodes/Split';
/* store */
import { setNodes, addNode, removeNode } from '../../../../store/slices/workFlow.slice';
/* styles */
import 'reactflow/dist/style.css';
import styles from './FlowChart.module.scss';

const nodeTypes = {
  sendEmail: SendEmailNode,
  pause: PauseNode,
  sendSMS: SendSMSNode,
  evaluateEmailContact: EvaluateEmailNode,
  split: SplitNode,
};

const getNodeType = (label) => {
  switch (label) {
    case 'Send Email':
      return 'sendEmail';
    case 'Pause':
      return 'pause';
    case 'Send SMS':
      return 'sendSMS';
    case 'Evaluate Email Contact':
      return 'evaluateEmailContact';
    case 'Split Paths':
      return 'split';
    default:
      return 'custom';
  }
};

const connectionLineStyle = { stroke: '#b1b7be', strokeWidth: 2 };

const FlowChart = () => {
  const reactFlowWrapper = useRef(null);
  const dispatch = useDispatch();
  // const nodesData = useSelector((state) => state.workFlow);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => {
      const sourceNode = nodes.find((node) => node.id === params.source);
      const isSplitNode = sourceNode && sourceNode.type === 'split';
      const newEdge = {
        ...params,
        type: 'smoothstep',
        animated: true,
        style: connectionLineStyle,
        label: isSplitNode ? (params.sourceHandle === 'yes' ? 'YES' : 'NO') : '',
      };
      setEdges((els) => addEdge(newEdge, els));
    },
    [nodes]
  );

  const onElementsRemove = useCallback(
    (elementsToRemove) => {
      // setNodes((nds) =>
      //   nds.filter((node) => !elementsToRemove.some((el) => el.id === node.id))
      // );
      setNodes((nds) => {
        const filteredNodes = nds.filter((node) => !elementsToRemove.some((el) => el.id === node.id));
        nds.forEach((node) => {
          if (elementsToRemove.some((el) => el.id === node.id)) {
            dispatch(removeNode(node.id));
          }
        });
        return filteredNodes;
      });
      setEdges((eds) =>
        eds.filter((edge) => !elementsToRemove.some((el) => el.id === edge.id))
      );
    },
    [dispatch]
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

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
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
        dispatch(addNode(newNode));
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
