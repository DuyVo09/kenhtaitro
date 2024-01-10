"use client";

import { getAllDraftEvents, getAllInProgressEvents, getAllPublishedEventsByOrganizer, getDraftSearchEvent, searchInProgressEvent, searchPublishedEvent } from "@/apis/events";
import {
  configIDRowTable,
  configTableOptions,
} from "@/common/components/ConfigIdRowTable";
import { IEventPublished } from "@/types";
import MUIDataTable, {
  MUIDataTableColumnDef,
  MUIDataTableOptions,
} from "mui-datatables";
import { useEffect, useState } from "react";

function CustomDataTable(
  { tabValue, keySearch } : 
  { tabValue: number, keySearch: string }
) {
  const [data, setData] = useState<IEventPublished[]>([]);
  useEffect(() => {
    if (tabValue === 0) {
      getAllPublishedEventsByOrganizer()
      .then((res) => {
        if(res.status_code === 200)
          setData(res.data);
      })
    }
    else if (tabValue === 1) {
      getAllInProgressEvents()
      .then((res) => {
        if(res.status_code === 200)
          setData(res.data);
      })
    }
    else if (tabValue === 2) {
      getAllDraftEvents()
      .then((res) => {
        if(res.status_code === 200)
          setData(res.data);
      })
    }
    else if (tabValue === 3) {
      searchPublishedEvent(keySearch)
      .then((res) => {
        setData(res.data);
      });
    }
    else if (tabValue === 4) {
      searchInProgressEvent(keySearch)
      .then((res) => {
        setData(res.data);
      });
    }
    else if (tabValue === 5) {
      getDraftSearchEvent(keySearch)
      .then((res) => {
        setData(res.data);
      })
    }
  }, [tabValue]);
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
      name: [0, 2, 3, 5].includes(tabValue) ? "total_reach" : "updated_at",
      label: [0, 2, 3, 5].includes(tabValue) ? "Quy mô": "Thời điểm",
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
      name: [0, 2, 3, 5].includes(tabValue) ? "updated_at" : "event_type",
      label: tabValue === 0 || tabValue === 3 ? "Thời điểm đăng bài" : (
        tabValue === 1 || tabValue === 4 ? "Trạng thái" : "Thời điểm viết bài"),
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
