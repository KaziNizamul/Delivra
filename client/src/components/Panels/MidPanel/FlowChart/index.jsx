/* external imports */
import ReactFlow, { MiniMap, Controls, Background } from 'reactflow';
/* styles */
import 'reactflow/dist/style.css';
import styles from './FlowChart.module.scss';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Send Email' },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Pause' },
    position: { x: 250, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Evaluate Email Contact' },
    position: { x: 250, y: 200 },
  },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const FlowChart = () => {
  return (
    <div className={styles.flowChart}>
      <ReactFlow elements={initialElements}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
