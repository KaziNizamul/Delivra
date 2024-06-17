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
/* styles */
import 'reactflow/dist/style.css';
import styles from './FlowChart.module.scss';

const nodeTypes = {
  action: ({ data }) => (
    <div className={styles.node}>
      {data.icon} {data.label}
    </div>
  ),
  condition: ({ data }) => (
    <div className={styles.node}>
      {data.icon} {data.label}
    </div>
  ),
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
        console.log('Dropped item:', item);

        if (!reactFlowInstance) return;

        const reactFlowBounds =
          reactFlowWrapper.current.getBoundingClientRect();
        const position = reactFlowInstance.project({
          x: monitor.getClientOffset().x - reactFlowBounds.left,
          y: monitor.getClientOffset().y - reactFlowBounds.top,
        });

        const newNode = {
          id: Date.now().toString(),
          type: item.type,
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