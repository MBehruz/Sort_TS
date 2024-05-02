
import React, { useState, useMemo } from 'react';
import {
  ExpandedState,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  getSortedRowModel,
} from "@tanstack/react-table";
import { DateTime } from 'luxon';
import mdata from './makeData.json';

function AppT() {
  type Person = {
    first_name: string;
    last_name: string;
    dob: number;
    email: string;
    gender: string;
  };

  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'first_name',
        header: () => <p>First Name</p>,
        cell: ({ row, getValue }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            <div>
              {row.getCanExpand() ? (
                <button
                  {...{
                    onClick: row.getToggleExpandedHandler(),
                    style: { cursor: 'pointer' },
                  }}
                >
                  {row.getIsExpanded() ? '👇' : '👉'}
                </button>
              ) : (
                ''
              )}
              {getValue<boolean>()}
            </div>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'last_name',
        header: () => <p>Last Name</p>,
        cell: ({ row, getValue }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            <div>
              {row.getCanExpand()}
              {getValue<boolean>()}
            </div>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'email',
        header: () => <p>E-mail</p>,
        cell: ({ row, getValue }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            <div>
              {row.getCanExpand()}
              {getValue<boolean>()}
            </div>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'gender',
        header: () => <p>Gender</p>,
        cell: ({ row, getValue }) => (
          <div
            style={{
              paddingLeft: `${row.depth * 2}rem`,
            }}
          >
            <div>
              {row.getCanExpand()}
              {getValue<boolean>()}
            </div>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'dob',
        header: () => <p>Date</p>,
        cell: (info) => DateTime.fromMillis(info.getValue()).toFormat('yyyy-MM-dd'),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  const data = useMemo(() => mdata, []);

  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [sorting, setSorting] = useState<Sorting[]>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: sorting,
      expanded,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });


  return (
    <div className="p-2" style={{ padding: '100px' }}>
      <div className="h-2" />
      <table className='w3-table-all '>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{ border: '1px solid teal' }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder ? null : (
                    <div style={{ display: 'flex' }}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      <div style={{ paddingTop: '17px' }}>
                        {header.column.getIsSorted() === 'asc' ? '👆' : header.column.getIsSorted() === 'desc' ? '👇' : ''}
                      </div>
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{ border: cell.getValue() ? '1px solid teal' : 'none' }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}

                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppT;
