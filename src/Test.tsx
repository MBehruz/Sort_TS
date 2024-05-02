import React, { useMemo } from 'react';
import './App.css';
import mData from '../db.json';
import { DateTime } from 'luxon';
import TableSearch from './component/Table1Basic_T/searchT';
import { useTree } from '@table-library/react-table-library/tree';

const App = () => {
    const data = useMemo(() => mData, []);
    const columns = [
        { header: 'ID', accessorKey: 'id', footer: 'ID' },
        { header: 'First Name', accessorKey: 'first_name', footer: 'First Name' },
        { header: 'Last Name', accessorKey: 'last_name', footer: 'Last Name' },
        { header: 'E-mail', accessorKey: 'email', footer: 'E-mail' },
        { header: 'Gender', accessorKey: 'gender', footer: 'Gender' },
        {
            header: 'Date of birth',
            accessorKey: 'dob',
            footer: 'Date of birth',
            cell: (info) =>
                DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
        },
    ];


    return (
        <div>
            <TableSearch
                // tree={tree}
                data={data}
                columns={columns}
            />
        </div>
    );
};

export default App;
