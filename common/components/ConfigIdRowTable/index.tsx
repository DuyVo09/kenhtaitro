import React, { ReactNode } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";

import {
  MUIDataTableColumnDef,
  MUISortOptions,
  MUIDataTableCustomHeadRenderer,
  MUIDataTableOptions,
} from "mui-datatables";
export const configTableOptions = (
  count: number,
  page: number,
  query: any,
): MUIDataTableOptions => {
  return {
    tableBodyHeight: "100%",
    fixedHeader: true,
    selectableRows: "none",
    selectableRowsOnClick: true,
    filterType: "dropdown",
    responsive: "vertical",
    count: count,
    page: 0,
    rowsPerPage: query.itemsPerPage,
    rowsPerPageOptions: [25, 50, 75, 100],
    download: false,
    print: false,
    viewColumns: false,
    search: false,
    filter: false,
    pagination: false,
    textLabels: {
      body: {
        noMatch: "Không tìm thấy dữ liệu.",
        toolTip: "Sắp xếp",
      },
      pagination: {
        next: "Trang tiếp theo",
        previous: "Trang trước đó",
        rowsPerPage: "Số dòng trên trang:",
        displayRows: "của",
        jumpToPage: "Đi tới trang",
      },
    }
  };
};

export const configIDRowTable = (
  fied: any,
  url: any,
  query: any,
  customSTT?: any
): MUIDataTableColumnDef => {
  return {
    name: fied,
    label: "STT",
    options: {
      filter: false,
      sort: false,
      customHeadRender: (
        columnMeta: MUIDataTableCustomHeadRenderer,
        handleToggleColumn: (columnIndex: number) => void,
        sortOrder: MUISortOptions
      ): string | React.ReactNode => {
        return (
          <th
            align="center"
            key={`head-th-${columnMeta.label}`}
            className="MuiTableCell-root MuiTableCell-head"
            style={{ width: "20px" }}
          >
            <div className="text-center">{columnMeta.label}</div>
          </th>
        );
      },
      customBodyRender: (value, tableMeta, updateValue) => {
        let stt =
          query.page > 1
            ? (query.page - 1) * query.itemsPerPage + (tableMeta.rowIndex + 1)
            : tableMeta.rowIndex + 1;
        stt = customSTT ? tableMeta.rowData[customSTT] : stt;
        return (
          <div
            style={{
              textAlign: "center",
              width: "40px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {url ? (
              <Link href={`${url}${value}`}>{stt}</Link>
            ) : (
              <Typography>{stt}</Typography>
            )}
          </div>
        );
      },
    },
  };
};
