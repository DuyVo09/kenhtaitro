import { Button, Box } from "@mui/material";
import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { MUIDataTableColumnDef } from "mui-datatables";
import { EventDataTable, IEventViewModel } from "../models";

const tableMockData: EventDataTable[] = [
  {
  id: 1,
  school: "School name",
  location: "Some location",
  event_name: "Event name",
  organizer: "Organization name",
  start_date: "12/12/2023",
  end_date: "12/12/2023",
  event_field: "",
  schale: 150,
  upload_time: "12/12/2023"
}
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
      name: "school",
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
      name: "event_name",
      label: "Tên sự kiện",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "organizer",
      label: "Đơn vị tổ chức sự kiện",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "start_date",
      label: "Thời gian bắt đầu",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "end_date",
      label: "Thời gian kết thúc",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "event_field",
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
      name: "upload_time",
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
