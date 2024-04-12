


// import React from 'react';
// import { Table, Dropdown, Button, Input, Checkbox } from 'antd';

// const columns = [
//   {
//     title: 'Device No',
//     dataIndex: 'deviceNo',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.deviceNo.indexOf(value) === 0,
//   },
//   {
//     title: 'Operator ID',
//     dataIndex: 'operatorID',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.operatorID.indexOf(value) === 0,
//   },
//   {
//     title: 'Mode Details',
//     dataIndex: 'modeDetails',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.modeDetails.indexOf(value) === 0,
//   },
//   {
//     title: 'Created At',
//     dataIndex: 'createdAt',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
//   },

//   {
//     title: 'Created At',
//     dataIndex: 'createdAt',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
//   },

//   {
//     title: 'Created At',
//     dataIndex: 'createdAt',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
//   },

//   {
//     title: 'Created At',
//     dataIndex: 'createdAt',
//     filters: [
//       { text: 'Sort Smallest to Largest', value: 'asc' },
//       { text: 'Sort Largest to Smallest', value: 'desc' },
//       { text: 'Sort by Color', value: 'color' },
//       { text: 'Custom Sort', value: 'custom' }
//     ],
//     onFilter: (value, record) => record.createdAt.indexOf(value) === 0,
//   },
  
// ];

// const data = [
//   {
//     key: '1',
//     deviceNo: 'ABC123',
//     operatorID: 'OP001',
//     modeDetails: 'Mode 1',
//     createdAt: '2024-04-11',
//     // Add more data fields as needed
//   },
//   // Add more data rows as needed
// ];

// const onChange = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };

// const App = () => (
//   <div>
//     <div className="filters">
//       <Dropdown overlay={<div>Sort options here</div>} placement="bottomLeft">
//         <Button>Sort</Button>
//       </Dropdown>
//       <Dropdown overlay={<div>Filter by color options here</div>} placement="bottomLeft">
//         <Button>Filter by Color</Button>
//       </Dropdown>
//       <Dropdown overlay={<div>Number filter options here</div>} placement="bottomLeft">
//         <Button>Number Filter</Button>
//       </Dropdown>
//       <Input placeholder="Search" />
//       <Checkbox> Select All</Checkbox>
//     </div>
//     <Table
//       columns={columns}
//       dataSource={data}
//       onChange={onChange}
//     />
//   </div>
// );

// export default App;




import React, { useState, useEffect } from 'react';
import { Table, Dropdown, Button, Input, Checkbox } from 'antd';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/machinedata/");
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'MACHINEID',
      dataIndex: 'MACHINEID',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search Machine ID"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>

          <Input
            placeholder="Number Filters"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.MACHINEID.indexOf(value) === 0,
      sorter: (a, b) => a.MACHINEID - b.MACHINEID,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'DATE',
      dataIndex: 'DATE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search DATE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.DATE.indexOf(value) === 0,
      sorter: (a, b) => a.DATE - b.DATE,
      sortDirections: ['ascend', 'descend'],
    },


    {
      title: 'OPERATORID',
      dataIndex: 'OPERATORID',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search OPERATORID"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.OPERATORID.indexOf(value) === 0,
      sorter: (a, b) => a.OPERATORID - b.OPERATORID,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'STARTTIME',
      dataIndex: 'STARTTIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search STARTTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.STARTTIME.indexOf(value) === 0,
      sorter: (a, b) => a.STARTTIME - b.STARTTIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'ENDTIME',
      dataIndex: 'ENDTIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search ENDTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.ENDTIME.indexOf(value) === 0,
      sorter: (a, b) => a.ENDTIME - b.ENDTIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'MODE',
      dataIndex: 'MODE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search MODE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.MODE.indexOf(value) === 0,
      sorter: (a, b) => a.MODE - b.MODE,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'RAWSTITCHCOUNT',
      dataIndex: 'RAWSTITCHCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search RAWSTITCHCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.RAWSTITCHCOUNT.indexOf(value) === 0,
      sorter: (a, b) => a.RAWSTITCHCOUNT - b.RAWSTITCHCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'INLSTITCHCOUNT',
      dataIndex: 'INLSTITCHCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLSTITCHCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.INLSTITCHCOUNT.indexOf(value) === 0,
      sorter: (a, b) => a.INLSTITCHCOUNT - b.INLSTITCHCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    
    {
      title: 'INLRUNTIME',
      dataIndex: 'INLRUNTIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLRUNTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.INLRUNTIME.indexOf(value) === 0,
      sorter: (a, b) => a.INLRUNTIME - b.INLRUNTIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'INLSTOPTIME',
      dataIndex: 'INLSTOPTIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLSTOPTIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.INLSTOPTIME.indexOf(value) === 0,
      sorter: (a, b) => a.INLSTOPTIME - b.INLSTOPTIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'PICKDISPOSETIME',
      dataIndex: 'PICKDISPOSETIME',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search PICKDISPOSETIME"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.PICKDISPOSETIME.indexOf(value) === 0,
      sorter: (a, b) => a.PICKDISPOSETIME- b.PICKDISPOSETIME,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'MANUALSTITCHESPERPIECE',
      dataIndex: 'MANUALSTITCHESPERPIECE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search MANUALSTITCHESPERPIECE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.MANUALSTITCHESPERPIECE.indexOf(value) === 0,
      sorter: (a, b) => a.MANUALSTITCHESPERPIECE- b.MANUALSTITCHESPERPIECE,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'MANUALPIECECOUNT',
      dataIndex: 'MANUALPIECECOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search MANUALPIECECOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.MANUALPIECECOUNT.indexOf(value) === 0,
      sorter: (a, b) => a.MANUALPIECECOUNT - b.MANUALPIECECOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'AUTOSTITCHESPERPIECE',
      dataIndex: 'AUTOSTITCHESPERPIECE',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search AUTOSTITCHESPERPIECE"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.AUTOSTITCHESPERPIECE.indexOf(value) === 0,
      sorter: (a, b) => a.AUTOSTITCHESPERPIECE - b.AUTOSTITCHESPERPIECE,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'INLSTITCHCOUNT',
      dataIndex: 'INLSTITCHCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search INLSTITCHCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.INLSTITCHCOUNT.indexOf(value) === 0,
      sorter: (a, b) => a.INLSTITCHCOUNT - b.INLSTITCHCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'AUTOPIECECOUNT',
      dataIndex: 'AUTOPIECECOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search AUTOPIECECOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.AUTOPIECECOUNT.indexOf(value) === 0,
      sorter: (a, b) => a.AUTOPIECECOUNT - b.AUTOPIECECOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'CUTTERCOUNT',
      dataIndex: 'CUTTERCOUNT',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search CUTTERCOUNT"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.CUTTERCOUNT.indexOf(value) === 0,
      sorter: (a, b) => a.CUTTERCOUNT - b.CUTTERCOUNT,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'DUMMYDATA1',
      dataIndex: 'DUMMYDATA1',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search DUMMYDATA1"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.DUMMYDATA1.indexOf(value) === 0,
      sorter: (a, b) => a.DUMMYDATA1 - b.DUMMYDATA1,
      sortDirections: ['ascend', 'descend'],
    },

    {
      title: 'DUMMYDATA2',
      dataIndex: 'DUMMYDATA2',
      filters: [
        { text: 'Sort Smallest to Largest', value: 'asc' },
        { text: 'Sort Largest to Smallest', value: 'desc' },
        { text: 'Sort by Color', value: 'color' },
        { text: 'Custom Sort', value: 'custom' }
      ],
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search DUMMYDATA2"
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            OK
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.DUMMYDATA2.indexOf(value) === 0,
      sorter: (a, b) => a.DUMMYDATA2 - b.DUMMYDATA2,
      sortDirections: ['ascend', 'descend'],
    },







  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <div className="filters">
        <Dropdown overlay={<div>Sort options here</div>} placement="bottomLeft">
          <Button>Sort</Button>
        </Dropdown>
        <Dropdown overlay={<div>Filter by color options here</div>} placement="bottomLeft">
          <Button>Filter by Color</Button>
        </Dropdown>
        <Dropdown overlay={<div>Number filter options here</div>} placement="bottomLeft">
          <Button>Number Filter</Button>
        </Dropdown>
        <Input placeholder="Search" />
        <Checkbox> Select All</Checkbox>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
};

export default App;

