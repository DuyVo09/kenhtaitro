// import React, { useEffect, useState } from "react";
// import { Grid, Button, FormControlLabel, Switch, Dialog } from "@mui/material";
// import MUIDataTable, {
//   MUIDataTableColumnDef,
//   MUIDataTableOptions,
// } from "mui-datatables";
// import AddIcon from "@mui/icons-material/Add";
// import swal from "sweetalert";
// import { toast } from "react-toastify";
// import { SubmitHandler } from "react-hook-form";

// import {
//   configIDRowTable,
//   configTableOptions,
//   SubCard,
//   Loader,
//   CustomPagination,
// } from "components/Common";
// import LinhVucFilters from "../components/LinhVucFilters";
// import LinhVucForm from "../components/LinhVucForm";

// import { useAppDispatch, useAppSelector, _shallowEqual } from "redux/hooks";
// import { linhvucActions } from "../saga/linhvucSlice";
// import {
//   DM_LINHVUC_UPDATEISACTIVEMODEL,
//   DM_LINHVUC_DATAMODEL,
//   DM_LINHVUC_UPDATEDUNGCHUNGMODEL,
// } from "../models";

// import { linhvucApi } from "../linhvucApi";

// export const ListPage = () => {
//   const dispatch = useAppDispatch();
//   const loading = useAppSelector((state) => state.linhvuc.isLoading);
//   const filter = useAppSelector((state) => state.linhvuc.filter);
//   const items = useAppSelector((state) => state.linhvuc.listLinhVuc.items);
//   const totalItems = useAppSelector(
//     (state) => state.linhvuc.listLinhVuc.totalItems
//   );
//   const currentPage = useAppSelector((state) => state.linhvuc.filter.page);
//   const itemsPerPage = useAppSelector(
//     (state) => state.linhvuc.filter.itemsPerPage
//   );

//   useEffect(() => {
//     dispatch(linhvucActions.getListLinhVuc(filter));
//     dispatch(linhvucActions.getCapSuDungOpts());
//     dispatch(linhvucActions.getDonViChuQuanOpts());
//   }, [dispatch]);

//   const handleActionAddClick = () => {
//     getDataForm();
//   };

//   const handleActionItemClick = (
//     type: string,
//     id: number,
//     rowIndex: number
//   ) => {
//     if (type.match(/detail|edit/i)) {
//       getDataForm(id, type);
//     } else {
//       swal({
//         title: "Cảnh báo?",
//         text: "Bạn có chắc chắn muốn xóa dữ liệu?",
//         icon: "warning",
//         buttons: {
//           cancel: {
//             text: "Hủy",
//             value: null,
//             visible: true,
//             className: "",
//             closeModal: true,
//           },
//           confirm: {
//             text: "Đồng ý",
//             value: true,
//             visible: true,
//             className: "",
//             closeModal: true,
//           },
//         },
//       }).then((result) => {
//         if (result) {
//           handleDelete(result, id, rowIndex);
//           return false;
//         }
//       });
//     }
//   };

//   const handleDelete = (confirm: boolean, id: number, rowIndex: number) => {
//     if (confirm) {
//       linhvucApi
//         .remove(id.toString())
//         .then((res) => {
//           if (res.status !== 400) {
//             const cloneData = [...items];
//             cloneData.splice(rowIndex, 1);
//             dispatch(linhvucActions.setLinhVucList(cloneData));
//             toast.success(res.message);
//           } else {
//             toast.error(res.message);
//           }
//         })
//         .catch(() => {
//           toast.error(`Xóa không thành công.`);
//         });
//     }
//   };

//   const handleChangeStatus = async (
//     status: boolean,
//     id: number,
//     rowIndex: number
//   ) => {
//     swal({
//       title: "Cảnh báo?",
//       text: "Bạn có chắc chắn muốn cập nhật thông tin ?",
//       icon: "warning",
//       buttons: {
//         cancel: {
//           text: "Hủy",
//           value: null,
//           visible: true,
//           className: "",
//           closeModal: true,
//         },
//         confirm: {
//           text: "Đồng ý",
//           value: true,
//           visible: true,
//           className: "",
//           closeModal: true,
//         },
//       },
//     }).then((result) => {
//       if (result) {
//         onChangeStatus(result, status, id, rowIndex);
//         return false;
//       }
//     });
//   };

//   const onChangeStatus = (
//     confirm: boolean,
//     status: boolean,
//     id: number,
//     idx: number
//   ) => {
//     if (confirm) {
//       let postData: DM_LINHVUC_UPDATEISACTIVEMODEL = {
//         linhVucID: id,
//         active: status,
//       };
//       linhvucApi
//         .changeStatus(postData)
//         .then((res) => {
//           if (res.status !== 400) {
//             const cloneData = [...items];
//             const itemCloneData = { ...cloneData[idx], active: status };
//             cloneData[idx] = itemCloneData;
//             dispatch(linhvucActions.setLinhVucList(cloneData));
//             toast.success(res.message);
//           } else {
//             toast.error(res.message);
//           }
//         })
//         .catch(() => {
//           toast.error(`Cập nhật trạng thái không thành công.`);
//         });
//     }
//   };

//   const handleChangeStatusDungChung = async (
//     status: boolean,
//     id: number,
//     rowIndex: number
//   ) => {
//     swal({
//       title: "Cảnh báo?",
//       text: "Bạn có chắc chắn muốn thay đổi trạng thái dữ liệu ?",
//       icon: "warning",
//       buttons: {
//         cancel: {
//           text: "Hủy",
//           value: null,
//           visible: true,
//           className: "",
//           closeModal: true,
//         },
//         confirm: {
//           text: "Đồng ý",
//           value: true,
//           visible: true,
//           className: "",
//           closeModal: true,
//         },
//       },
//     }).then((result) => {
//       if (result) {
//         onChangeStatusDungChung(result, status, id, rowIndex);
//         return false;
//       }
//     });
//   };

//   const onChangeStatusDungChung = (
//     confirm: boolean,
//     status: boolean,
//     id: number,
//     idx: number
//   ) => {
//     if (confirm) {
//       let postData: DM_LINHVUC_UPDATEDUNGCHUNGMODEL = {
//         linhVucID: id,
//         dungChung: status,
//       };
//       linhvucApi
//         .changeStatusDungChung(postData)
//         .then((res) => {
//           if (res.status !== 400) {
//             const cloneData = [...items];
//             const itemCloneData = { ...cloneData[idx], dungChung: status };
//             cloneData[idx] = itemCloneData;
//             dispatch(linhvucActions.setLinhVucList(cloneData));
//             toast.success(res.message);
//           } else {
//             toast.error(res.message);
//           }
//         })
//         .catch(() => {
//           toast.error(`Cập nhật trạng thái không thành công.`);
//         });
//     }
//   };

//   const onChangeRowsPerPage = (event: any) => {
//     let query = { ...filter };
//     query.itemsPerPage = event.target.value;
//     query.page = 1;
//     dispatch(linhvucActions.setFilter(query));
//     dispatch(linhvucActions.getListLinhVuc(query));
//   };

//   const onChangePage = (event: any, newPage: number) => {
//     let query = { ...filter };
//     query.page = newPage + 1;
//     dispatch(linhvucActions.setFilter(query));
//     dispatch(linhvucActions.getListLinhVuc(query));
//   };

//   const columns: MUIDataTableColumnDef[] = [
//     configIDRowTable("linhVucID", "", filter, null),
//     {
//       name: "maLinhVuc",
//       label: "Mã lĩnh vực",
//       options: {
//         filter: false,
//         sort: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "10%",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//         customBodyRender: (value) => {
//           return value ? (
//             <span>
//               <div className={value} style={{ textAlign: "center" }}>
//                 {value}
//               </div>
//             </span>
//           ) : null;
//         },
//       },
//     },
//     {
//       name: "maQuocGia",
//       label: "Mã quốc gia",
//       options: {
//         filter: false,
//         sort: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "10%",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//         customBodyRender: (value) => {
//           return value ? (
//             <span>
//               <div className={value} style={{ textAlign: "center" }}>
//                 {value}
//               </div>
//             </span>
//           ) : null;
//         },
//       },
//     },
//     {
//       name: "tenLinhVuc",
//       label: "Tên lĩnh vực",
//       options: {
//         filter: false,
//         sort: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//         customBodyRender: (value) => {
//           return value ? (
//             <span>
//               <div className={value} style={{ textAlign: "left" }}>
//                 {value}
//               </div>
//             </span>
//           ) : null;
//         },
//       },
//     },
//     {
//       name: "donViChuQuan",
//       label: "Đơn vị chủ quản",
//       options: {
//         filter: false,
//         sort: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "13%",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//       },
//     },
//     {
//       name: "capSuDung",
//       label: "Cấp sử dụng",
//       options: {
//         filter: false,
//         sort: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "10%",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//       },
//     },
//     {
//       name: "active",
//       label: "Kích hoạt",
//       options: {
//         filter: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "70px",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//         customBodyRender: (value, tableMeta, updateValue) => {
//           return (
//             <div style={{ textAlign: "center" }}>
//               <FormControlLabel
//                 label={""}
//                 value={""}
//                 sx={{ marginLeft: "unset", marginRight: "unset" }}
//                 control={
//                   <Switch color="primary" checked={value} value={value} />
//                 }
//                 onChange={(event: any) => {
//                   let checked = event.target.value === "true" ? false : true;
//                   handleChangeStatus(
//                     checked,
//                     items[tableMeta["rowIndex"]].linhVucID,
//                     tableMeta["rowIndex"]
//                   );
//                 }}
//               />
//             </div>
//           );
//         },
//       },
//     },
//     {
//       name: "dungChung",
//       label: "Dùng chung",
//       options: {
//         filter: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "100px",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//         customBodyRender: (value, tableMeta, updateValue) => {
//           return (
//             <div style={{ textAlign: "center" }}>
//               <FormControlLabel
//                 label={""}
//                 value={""}
//                 sx={{ marginLeft: "unset", marginRight: "unset" }}
//                 control={
//                   <Switch color="primary" checked={value} value={value} />
//                 }
//                 onChange={(event: any) => {
//                   let checked = event.target.value === "true" ? false : true;
//                   handleChangeStatusDungChung(
//                     checked,
//                     items[tableMeta["rowIndex"]].linhVucID,
//                     tableMeta["rowIndex"]
//                   );
//                 }}
//               />
//             </div>
//           );
//         },
//       },
//     },
//     {
//       name: "Thao tác",
//       options: {
//         filter: false,
//         sort: false,
//         empty: true,
//         customHeadRender: (columnMeta, handleToggleColumn) => {
//           return (
//             <th
//               key={`head-th-${columnMeta.label}`}
//               className="MuiTableCell-root MuiTableCell-head"
//               style={{
//                 width: "140px",
//               }}
//             >
//               <div>{columnMeta.label}</div>
//             </th>
//           );
//         },
//         customBodyRender: (value, tableMeta, updateValue) => {
//           return (
//             <div style={{ textAlign: "right" }}>
//               <Button
//                 variant="contained"
//                 color="inherit"
//                 title="Chi tiết"
//                 sx={{ m: "0.25rem" }}
//                 onClick={(evt) =>
//                   handleActionItemClick(
//                     "detail",
//                     items[tableMeta["rowIndex"]].linhVucID,
//                     tableMeta["rowIndex"]
//                   )
//                 }
//               >
//                 <FontAwesomeIcon icon={faInfo} />
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 title="Chỉnh sửa"
//                 sx={{ m: "0.25rem" }}
//                 onClick={(evt) =>
//                   handleActionItemClick(
//                     "edit",
//                     items[tableMeta["rowIndex"]].linhVucID,
//                     tableMeta["rowIndex"]
//                   )
//                 }
//               >
//                 <FontAwesomeIcon icon={faEdit} />
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 title="Xóa"
//                 sx={{ m: "0.25rem" }}
//                 onClick={(evt) =>
//                   handleActionItemClick(
//                     "delete",
//                     items[tableMeta["rowIndex"]].linhVucID,
//                     tableMeta["rowIndex"]
//                   )
//                 }
//               >
//                 <FontAwesomeIcon icon={faTrash} />
//               </Button>
//             </div>
//           );
//         },
//       },
//     },
//   ];

//   const options: MUIDataTableOptions = configTableOptions(
//     totalItems,
//     currentPage,
//     filter
//   );

//   const [detail, setDetail] = useState<DM_LINHVUC_DATAMODEL>();
//   const [submitting, setSubmitting] = useState<boolean>(false);
//   const [open, setOpen] = useState<boolean>(false);
//   const [noEdit, setNoEdit] = useState<boolean>(false);

//   const getDataForm = (id?: number, type?: string) => {
//     if (type == "detail") setNoEdit(true);
//     if (!id) {
//       setDetail({
//         linhVucID: 0,
//         maQuocGia: "",
//         maLinhVuc: "",
//         tenLinhVuc: "",
//         tenVietTat: "",
//         capSuDung: "",
//         donViChuQuanID: 0,
//         dichVuCong: false,
//         dungChung: false,
//         active: false,
//       } as DM_LINHVUC_DATAMODEL);
//       setOpen(true);
//     } else {
//       setSubmitting(true);
//       linhvucApi
//         .getById(id.toString())
//         .then((response) => {
//           if (response.status !== 400) {
//             setDetail(response.data);
//             setOpen(true);
//           } else {
//             setDetail({
//               linhVucID: 0,
//               maQuocGia: "",
//               maLinhVuc: "",
//               tenLinhVuc: "",
//               tenVietTat: "",
//               capSuDung: "",
//               donViChuQuanID: 0,
//               dichVuCong: false,
//               dungChung: false,
//               active: false,
//             } as DM_LINHVUC_DATAMODEL);
//             setOpen(true);
//           }
//           setSubmitting(false);
//         })
//         .catch((error) => {
//           console.log(`Failed to fetch menu details`, error);
//           setDetail({
//             linhVucID: 0,
//             maQuocGia: "",
//             maLinhVuc: "",
//             tenLinhVuc: "",
//             tenVietTat: "",
//             capSuDung: "",
//             donViChuQuanID: 0,
//             dichVuCong: false,
//             dungChung: false,
//             active: false,
//           } as DM_LINHVUC_DATAMODEL);
//           setOpen(true);
//         });
//     }
//   };
//   const handleFormSubmit: SubmitHandler<DM_LINHVUC_DATAMODEL> = (
//     formValues
//   ) => {
//     setSubmitting(true);
//     let apiCall =
//       formValues.linhVucID > 0
//         ? linhvucApi.update(formValues)
//         : linhvucApi.add(formValues);

//     apiCall
//       .then((res) => {
//         setSubmitting(false);
//         if (res.status !== 400) {
//           toast.success(res.message, {
//             onClose: () => {
//               setOpen(false);
//               setNoEdit(false);
//               setSubmitting(false);
//               dispatch(linhvucActions.getListLinhVuc(filter));
//             },
//             autoClose: 1000,
//           });
//         } else {
//           toast.error(res.message);
//           setSubmitting(false);
//           setNoEdit(false);
//           setOpen(false);
//         }
//         return res.data;
//       })
//       .catch((apiData) => {
//         setSubmitting(false);
//         setNoEdit(false);
//         setOpen(false);
//       });
//   };
//   return (
//     <div>
//       <Loader open={loading || submitting} />
//       <SubCard>
//         <Grid container item xs={12} spacing={1}>
//           <LinhVucFilters />
//         </Grid>
//       </SubCard>
//       <SubCard mt={10}>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="success"
//             onClick={handleActionAddClick}
//             startIcon={<AddIcon />}
//           >
//             Thêm mới
//           </Button>
//         </Grid>
//         <Grid item mt={1} className="MuiPaper-root__custom">
//           <MUIDataTable
//             data={items}
//             columns={columns}
//             options={options}
//             title=""
//           />
//           {totalItems > 0 && currentPage > 0 && itemsPerPage && (
//             <CustomPagination
//               rowsPerPageOptions={[25, 50, 75, 100]}
//               count={totalItems}
//               rowsPerPage={itemsPerPage}
//               page={currentPage}
//               onChangePage={onChangePage}
//               onChangeRowsPerPage={onChangeRowsPerPage}
//             />
//           )}
//         </Grid>
//       </SubCard>
//       <Dialog
//         open={open}
//         onClose={() => {
//           setOpen(!open);
//           setNoEdit(false);
//         }}
//         scroll="paper"
//         maxWidth="sm"
//         disableEscapeKeyDown={true}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >
//         {detail && (
//           <LinhVucForm
//             initialValues={detail}
//             onOpen={() => {
//               setOpen(!open);
//               setNoEdit(false);
//             }}
//             onSubmit={handleFormSubmit}
//             noEdit={noEdit}
//             allowEdit={() => setNoEdit(false)}
//           />
//         )}
//       </Dialog>
//     </div>
//   );
// };
export {}