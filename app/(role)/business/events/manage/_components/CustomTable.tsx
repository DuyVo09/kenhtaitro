"use client";

import { getSponsorShipEvents } from "@/apis/events";
import {
  configIDRowTable,
  configTableOptions,
} from "@/common/components/ConfigIdRowTable";
import { EventDetail } from "@/types";

import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from "mui-datatables";
import { useEffect, useState } from "react";

function CustomDataTable({type} : {type: number}) {
  const [data, setData] = useState<EventDetail[]>([]);
  useEffect(() => {
    getSponsorShipEvents(type === 0 ? 'Sponsored' : 'Interested' )
    .then((res) => {
      setData(res.data);
    })
  }, [type]);
  const columns: MUIDataTableColumnDef[] = [
    configIDRowTable("eventId", "", { page: 1 }, null),
    {
      name: "event_name",
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
      name: "school",
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
      name: "start_date",
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
      name: "categories",
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
      name: "total_reach",
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
      name: "created_at",
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
    <MUIDataTable title={""} data={data!} columns={columns} options={options} />
  );
}

export default CustomDataTable;
