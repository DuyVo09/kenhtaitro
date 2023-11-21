import { Button, Box } from "@mui/material";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { MUIDataTableColumnDef } from "mui-datatables";
import { IEventViewModel } from "../models";

const tableMockData: IEventViewModel[] = [
  // {
//   id: 1,
//   schoolName: "School name",
//   location: "Some location",
//   eventName: "Event name",
//   eventOrganization: "Organization name",
//   startTime: "12/12/2023",
//   endTime: "20/12/2023",
//   eventCategory: [],
//   schale: 150,
//   uploadTime: "11/2/2023"
// }
];

function CustomDataTable() {
  const columns: MUIDataTableColumnDef[] = [
    {
      name: "index",
      label: "STT",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "id",
      label: "SK ID",
      options: {
        filter: false,
        sort: false,
      },
    },
    {
      name: "schoolName",
      label: "Tên trường",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "location",
      label: "Địa điểm tổ chức",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "eventName",
      label: "Tên sự kiện",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "eventOrganization",
      label: "Đơn vị tổ chức sự kiện",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "startTime",
      label: "Thời gian bắt đầu",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "endTime",
      label: "Thời gian kết thúc",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "eventCategory",
      label: "Lĩnh vực sự kiện",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "schale",
      label: "Quy mô",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "uploadTime",
      label: "Thời điểm úp bài",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "Thao tác",
      options: {
        filter: false,
        sort: false,
        empty: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Button variant="contained" sx={{ m: 1 }}>
                Xem chi tiết
              </Button>
              <Button variant="contained" sx={{ m: 1 }}>
                Chỉnh sửa
              </Button>
            </>
          );
        },
      },
    },
  ];

  const options: MUIDataTableOptions = {
  };

  return (
    <Box sx={{my: 2}}><MUIDataTable
      data={tableMockData}
      columns={columns}
      options={options}
      title=""
    /></Box>
  );
}

export default CustomDataTable;
