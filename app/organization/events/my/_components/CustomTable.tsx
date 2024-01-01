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
              className="MuiTableCell-root MuiTableCell-head bg-[#BDE0FE]/50 text-primary"
              style={{
                width: "20%",
                borderRight: "1px solid #0986CA",
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
      name: "schoolName",
      label: "Tên trường",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head bg-[#BDE0FE]/50 text-primary"
              style={{
                width: "20%",
                borderRight: "1px solid #0986CA",
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
      name: "startTime",
      label: "Thời gian bắt đầu",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head bg-[#BDE0FE]/50 text-primary"
              style={{
                width: "20%",
                borderRight: "1px solid #0986CA",
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
              className="MuiTableCell-root MuiTableCell-head bg-[#BDE0FE]/50 text-primary"
              style={{
                width: "15%",
                borderRight: "1px solid #0986CA",
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
              className="MuiTableCell-root MuiTableCell-head bg-[#BDE0FE]/50 text-primary"
              style={{
                width: "7%",
                borderRight: "1px solid #0986CA",
              }}
            >
              <div>{columnMeta.label}</div>
            </th>
          );
        },
      },
    },
    {
      name: "postTime",
      label: "Thời điểm đăng bài",
      options: {
        filter: false,
        sort: true,
        customHeadRender: (columnMeta, handleToggleColumn) => {
          return (
            <th
              key={`head-th-${columnMeta.label}`}
              className="MuiTableCell-root MuiTableCell-head bg-[#BDE0FE]/50 text-primary"
              style={{
                width: "20%",
                borderRight: "1px solid #0986CA",
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
    <MUIDataTable title={""} data={data} columns={columns} options={options} />
  );
}

export default CustomDataTable;
