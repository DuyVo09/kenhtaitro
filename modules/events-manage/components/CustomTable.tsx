"use client";

import {
  configIDRowTable,
  configTableOptions,
} from "@/common/components/ConfigIdRowTable";
import { IEventDataModel } from "@/types";
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from "mui-datatables";

const data: IEventDataModel[] = [
  {
    id: "1",
    name: "Event name",
    schoolName: "University of Technology",
    location: "Ho Chi Minh, District 10",
    timeStart: "7:00",
    category: "Technology",
    size: 500,
  },
];

function CustomDataTable() {
  const columns: MUIDataTableColumnDef[] = [
    configIDRowTable("eventId", "", { page: 1 }, null),
    {
      name: "name",
      label: "Tên sự kiện",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head"
              style={{
                width: "15%",
                // border: "1px solid black",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
        customBodyRender: (value) => {
          return value ? (
            <span>
              <div
                className={value}
                style={{ textAlign: "center" }}
              >
                {value}
              </div>
            </span>
          ) : null;
        },
      },
    },
    {
      name: "schoolName",
      label: "Tên trường",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head"
              style={{
                width: "20%",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
        customBodyRender: (value) => {
          return value ? (
            <span>
              <div className={value} style={{ textAlign: "center" }}>
                {value}
              </div>
            </span>
          ) : null;
        },
      },
    },
    {
      name: "location",
      label: "Địa điểm tổ chức",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head"
              style={{
                width: "20%",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
      },
    },
    {
      name: "timeStart",
      label: "Thời gian bắt đầu",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head"
              style={{
                width: "15%",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
      },
    },
    {
      name: "category",
      label: "Lĩnh vực sự kiện",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head"
              style={{
                width: "20%",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
      },
    },
    {
      name: "size",
      label: "Quy mô",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head"
              style={{
                width: "10%",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
      },
    },
  ];

  const options: MUIDataTableOptions = configTableOptions(
    20,
    1,
    {
      page: 1,
    }
    // totalItems,
    // currentPage,
    // filter
  );

  return (
    <MUIDataTable
      title={""}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default CustomDataTable;
