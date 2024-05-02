// import React, { useState, useEffect } from 'react';
// import { TreeTable } from 'primereact/treetable';
// import { Column } from 'primereact/column';
// import { NodeService } from './services/tst';
// import './App.css';
// import { Edit } from '@mui/icons-material';

// export default () => {
//   const [nodes, setNodes] = useState([]);
//   console.log(nodes.children);
//   useEffect(() => {
//     NodeService.getTreeTableNodes().then((data) => setNodes(data));
//   }, []);

//   const renderCell = (rowData, field) => {
//     const status = rowData.data[field];
//     const isRed = status === 'Original Loan' || status === 'Deferred';
//     return (
//       <span
//         style={{
//           color: isRed ? 'blue' : 'inherit',
//           fontWeight: 'bold',
//           display: 'flex',
//           justifyContent: 'space-between',
//         }}
//       >
//         {status}
//         <Edit />
//       </span>
//     );
//   };

//   return (
//     <div className='card'>
//       <TreeTable
//         value={nodes}
//         tableStyle={{
//           textAlign: 'start',
//           border: nodes.value ? '1px solid red' : 'none ',
//         }}
//       >
//         <Column
//           field='name'
//           header='Name'
//           sortable
//           expander
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//         ></Column>
//         <Column
//           field='customerID'
//           header='Customer ID'
//           sortable
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//         ></Column>

//         <Column
//           field='ternLength'
//           header='Tern Length'
//           sortable
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//         ></Column>
//         <Column
//           field='requestAmount'
//           header='Reques Amount'
//           sortable
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//         ></Column>
//         <Column
//           field='appID'
//           header='App ID'
//           sortable
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//         ></Column>
//         <Column
//           field='appStatus'
//           header='App Status'
//           body={(rowData) => renderCell(rowData, 'appStatus')}
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//           sortable
//         ></Column>
//         <Column
//           field='lastUpdate'
//           header='Last Update'
//           sortable
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//           style={{ paddingLeft: '20px' }}
//         ></Column>
//         <Column
//           field='view'
//           header='View As Customer'
//           style={{ textAlign: 'center' }}
//           headerStyle={{
//             textAlign: 'center',
//             backgroundColor: '#f0f0f0',
//             width: '150px',
//           }}
//         ></Column>
//       </TreeTable>
//     </div>
//   );
// };

import React from 'react';
import AppT from './Table/App';

const App = () => {
  return (
    <div>
      <AppT />
    </div>
  );
};

export default App;
