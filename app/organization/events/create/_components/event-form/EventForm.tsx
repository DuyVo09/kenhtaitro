import { IEventFormModel } from "@/types";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "./resolver";
import { TextEditor } from "@/common/components/TextEditor";
import { useRef, useState } from "react";
import { ITitleImageItem, IValueLabel } from "@/common/types";
import { ImageUpload } from "@/common/components/ImageUpload";
import { ImageListType } from "react-images-uploading";
import {
  findMissingUrls,
  convertToReduceImageList,
  convertToImageListType,
} from "@/common/helpers/imageUpload";
import dayjs, { Dayjs } from "dayjs";
import {
  DatePicker,
  LocalizationProvider,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Schedule } from "@mui/icons-material";
import { mockEventCategory } from "@/common/mockData/mockEventList";
import CreatableAutoComplete from "@/common/components/CreatableAutoComplete";
import ReactiveButton from "reactive-button";

interface IEventFormProps {
  initialValues: IEventFormModel;
  redirect?: string;
  onSubmitForm?: (formData: IEventFormModel) => void;
  onSuccess?: () => void;
  onUpdateImage?: (fileList: File[]) => void;
  onDeleteImage?: (urlList: string[]) => void;
  uploadImageUrl?: string;
  noEdit: boolean;
}

export const EventForm = ({
  redirect,
  initialValues,
  onSubmitForm,
  onSuccess,
  onUpdateImage,
  onDeleteImage,
  uploadImageUrl,
  noEdit,
}: IEventFormProps) => {
  const uploadImageUrl_ =
    typeof uploadImageUrl === "undefined" || uploadImageUrl === "" ? "" : "";
  // (API_URL_ROOT && API_URL_ROOT) + uploadImageUrl;
  const editorRef = useRef<any>();
  const todayDate = new Date();

  const [description, setDescription] = useState<string>("");
  const [formImageList, setFormImageList] = useState<ITitleImageItem[]>([]);

  const [startTime, setStartTime] = useState<Dayjs | null>(null);
  const [endTime, setEndTime] = useState<Dayjs | null>(null);
  const [deadline, setDeadline] = useState<Dayjs | null>(null);
  const [tags, setTags] = useState<IValueLabel<string>[]>([
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IEventFormModel>({ resolver, defaultValues: initialValues });

  const onSubmit = handleSubmit((formValues: IEventFormModel) => {
    try {
      onSubmitForm?.(formValues);
    } catch (error: any) {}

    if (redirect) {
      // return navigate.replace(redirect);
    }

    if (onSuccess) {
      return onSuccess();
    }
  });

  const handleTextClick = (): void => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const onTextEditorChange = (data: string) => {
    setDescription(data);
  };

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setFormImageList((prev) => convertToReduceImageList(imageList));
    // if (typeof addUpdateIndex === "undefined") {
    //   let deleteUrlList: string[] = findMissingUrls(
    //     formImageList,
    //     convertToReduceImageList(imageList)
    //   );
    //   onDeleteImage(deleteUrlList);
    // } else {
    //   if (imageList.length > initialValues.event_image.length) {
    //     let addImgList: ImageListType = getItemsAtIndices(
    //       imageList,
    //       addUpdateIndex
    //     );
    //     let filesArray: File[] = addImgList
    //       .filter((item) => item.file !== null)
    //       .map((item) => item.file as File);
    //     onAddImage(filesArray);
    //   } else {
    //     let updateImgList: TITLE_IMAGE_ITEM[] = convertToReduceImageList(
    //       getItemsAtIndices(imageList, addUpdateIndex)
    //     );
    //     let originImgList: TITLE_IMAGE_ITEM[] = getItemsAtIndices(
    //       initialValues.images,
    //       addUpdateIndex
    //     );
    //     console.log(originImgList[0]);
    //     let replaceUrls: TITLE_IMAGE_ITEM[] = updateImgList.map(
    //       (item, index) => {
    //         return {
    //           ...item,
    //           url: originImgList[index].url,
    //         };
    //       }
    //     );
    //     onUpdateImage(replaceUrls);
    //   }
    // }
  };

  const handleDeleteTag = (option: IValueLabel<string>) => {
    setTags((prev) => prev.filter((e) => e.value !== option.value));
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmitTag = () => {
    console.log("Submitted value:", inputValue);
    setTags((prev) => [
      ...prev,
      {
        value: inputValue,
        label: inputValue,
      },
    ]);
    setInputValue("");
    setOpen(false);
  };

  return (
    <form id="event-form" onSubmit={onSubmit}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
        <Box display="flex" flexDirection="column">
          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-1 gap-9"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize">
              Thông tin liên hệ*
            </Typography>

            <Controller
              control={control}
              name="full_name"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Họ và tên
                  </Typography>
                  <Input
                    id="full_name"
                    {...field}
                    fullWidth
                    error={errors.full_name ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.full_name?.message}
                  </Typography>
                </Box>
              )}
            />
            <Box className="grid grid-cols-2 gap-9">
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <Box>
                    <Typography className="font-medium leading-tight">
                      Số điện thoại
                    </Typography>
                    <Input
                      id="phone"
                      {...field}
                      fullWidth
                      error={errors.phone ? true : false}
                    />
                    <Typography variant="inherit" color={"error"}>
                      {errors.phone?.message}
                    </Typography>
                  </Box>
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Box>
                    <Typography className="font-medium leading-tight">
                      Email
                    </Typography>
                    <Input
                      id="email"
                      {...field}
                      fullWidth
                      error={errors.email ? true : false}
                    />
                    <Typography variant="inherit" color={"error"}>
                      {errors.email?.message}
                    </Typography>
                  </Box>
                )}
              />
            </Box>
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-1 gap-9 mt-10"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize">
              Thông tin sự kiện*
            </Typography>

            <Controller
              control={control}
              name="event_name"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Tên sự kiện (tối đa 90 kí tự)
                  </Typography>
                  <Input
                    id="event_name"
                    {...field}
                    fullWidth
                    error={errors.event_name ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.event_name?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="school"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Tên trường
                  </Typography>
                  <Input
                    id="school"
                    {...field}
                    fullWidth
                    error={errors.school ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.school?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="location"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Địa điểm tổ chức
                  </Typography>
                  <Input
                    id="location"
                    {...field}
                    fullWidth
                    error={errors.location ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.location?.message}
                  </Typography>
                </Box>
              )}
            />

            <Box className="grid grid-cols-2 gap-9">
              <Controller
                control={control}
                name="area"
                render={({ field }) => (
                  <Box>
                    <Typography className="font-medium leading-tight">
                      Tỉnh/Thành phố
                    </Typography>
                    <Input
                      id="area"
                      {...field}
                      fullWidth
                      error={errors.area ? true : false}
                    />
                    <Typography variant="inherit" color={"error"}>
                      {errors.area?.message}
                    </Typography>
                  </Box>
                )}
              />
              <Controller
                control={control}
                name="district"
                render={({ field }) => (
                  <Box>
                    <Typography className="font-medium leading-tight">
                      Quận/Huyện
                    </Typography>
                    <Input
                      id="district"
                      {...field}
                      fullWidth
                      error={errors.district ? true : false}
                    />
                    <Typography variant="inherit" color={"error"}>
                      {errors.district?.message}
                    </Typography>
                  </Box>
                )}
              />
            </Box>
            <Controller
              control={control}
              name="organizer"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Đơn vị tổ chức sự kiện
                  </Typography>
                  <Input
                    id="organizer"
                    {...field}
                    fullWidth
                    error={errors.organizer ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.organizer?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="event_description"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight my-4">
                    Mô tả sự kiện
                  </Typography>
                  <Box border={1} height="300px" onClick={handleTextClick}>
                    <TextEditor
                      propRef={editorRef}
                      noEdit={noEdit}
                      initialData={initialValues.event_description}
                      onChange={onTextEditorChange}
                      uploadImageRequestHeader={{
                        // [hAuthName]: hAuthValue,
                        "Content-Type": "application/x-www-form-urlencoded",
                      }}
                      uploadImageRequestUrl={""}
                    />
                  </Box>
                  <Typography variant="inherit" color={"error"}>
                    {errors.event_description?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="event_image"
              render={({ field }) => (
                <Box>
                  <Typography className="font-bold text-[22px] text-primary leading-tight my-4">
                    Ảnh tiêu đề*
                  </Typography>
                  <Box className="bg-white" height="300px">
                    <ImageUpload
                      noEdit={false}
                      onChange={onChangeImage}
                      isMultiple={true}
                      imageList={convertToImageListType(formImageList)}
                    />
                  </Box>
                  <Typography variant="inherit" color={"error"}>
                    {errors.event_description?.message}
                  </Typography>
                </Box>
              )}
            />
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-1 gap-9 mt-10"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize">
              Thời gian tổ chức*
            </Typography>
            <Box className="grid grid-cols-2 gap-9">
              <Box>
                <Typography className="font-medium leading-tight my-4">
                  Thời gian bắt đầu
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <MobileTimePicker
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    ampm={false}
                    slotProps={{
                      textField: {
                        size: "small",
                        InputProps: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <Schedule color="primary" />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                  <DatePicker
                    className="col-span-2"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    slotProps={{
                      textField: { size: "small" },
                      openPickerButton: {
                        color: "primary",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography className="font-medium leading-tight my-4">
                  Thời gian kết thúc
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <MobileTimePicker
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                    ampm={false}
                    slotProps={{
                      textField: {
                        size: "small",
                        InputProps: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <Schedule color="primary" />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                  <DatePicker
                    className="col-span-2"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    slotProps={{
                      textField: { size: "small" },
                      openPickerButton: {
                        color: "primary",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography className="font-medium leading-tight my-4">
                  Thời hạn cuối nhận tài trợ
                </Typography>
                <Box className="grid grid-cols-3 gap-4">
                  <MobileTimePicker
                    value={deadline}
                    onChange={(newValue) => setDeadline(newValue)}
                    ampm={false}
                    slotProps={{
                      textField: {
                        size: "small",
                        InputProps: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <Schedule color="primary" />
                            </InputAdornment>
                          ),
                        },
                      },
                    }}
                  />
                  <DatePicker
                    className="col-span-2"
                    value={deadline}
                    onChange={(newValue) => setDeadline(newValue)}
                    slotProps={{
                      textField: { size: "small" },
                      openPickerButton: {
                        color: "primary",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-2 gap-9 mt-10"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize col-span-2">
              Lĩnh vực sự kiện
            </Typography>
            <Controller
              name="event_field"
              control={control}
              render={({ field }) => (
                <>
                  {mockEventCategory.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      label={option.label}
                      control={
                        <Checkbox
                          value={option.value}
                          checked={
                            field.value &&
                            field.value.some(
                              (value) => value.value === option.value
                            )
                          }
                          onChange={(event, checked) => {
                            if (checked) {
                              field.onChange([
                                ...field.value,
                                { value: option.value, label: option.label },
                              ]);
                            } else {
                              field.onChange(
                                field.value.filter(
                                  (value) => value.value !== option.value
                                )
                              );
                            }
                          }}
                        />
                      }
                    />
                  ))}
                </>
              )}
            />
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-2 gap-9 mt-10"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize">
              Tên tag*
            </Typography>
            <Box display="flex" justifyContent="end">
              <ReactiveButton
                className="bg-primary"
                onClick={handleDialogOpen}
                idleText={
                  <Typography className="font-medium">Thêm tag</Typography>
                }
              />
              <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>Add Tag</DialogTitle>
                <DialogContent>
                  <TextField
                    value={inputValue}
                    onChange={handleInputChange}
                    label="Tag"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClose}>Cancel</Button>
                  <Button onClick={handleSubmitTag}>Add</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Box className="col-span-2">
              <CreatableAutoComplete
                disabled={noEdit}
                initialOptions={tags}
                onDeleteOption={handleDeleteTag}
              />
            </Box>
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-2 gap-9 mt-10"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize col-span-2">
              Lượt tiếp cận*
            </Typography>
            <Controller
              control={control}
              name="total_reach"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Tổng lượt tiếp cận (online + offline)
                  </Typography>
                  <Input
                    id="total_reach"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.total_reach ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.total_reach?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="total_reach_in_house"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Lượt tiếp cận trực tiếp tại sự kiện
                  </Typography>
                  <Input
                    id="total_reach_in_house"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.total_reach_in_house ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.total_reach_in_house?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="total_reach_in_house"
              render={({ field }) => (
                <Box className="col-span-2">
                  <Typography className="font-medium leading-tight">
                    Tỷ lệ sinh viên năm nhất tại sự kiện (Nếu là sự kiện học
                    sinh, điền “Học sinh”)
                  </Typography>
                  <Input
                    id="total_reach_in_house"
                    {...field}
                    fullWidth
                    error={errors.total_reach_in_house ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.total_reach_in_house?.message}
                  </Typography>
                </Box>
              )}
            />
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-2 gap-9 mt-10"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize col-span-2">
              Giá trị các gói tài trợ (VNĐ)
            </Typography>

            <Controller
              control={control}
              name="exclusive_sponsorship"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ độc quyền*
                  </Typography>
                  <Input
                    id="exclusive_sponsorship"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.exclusive_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.exclusive_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="diamond_sponsorship"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ kim cương*
                  </Typography>
                  <Input
                    id="diamond_sponsorship"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.diamond_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.diamond_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="gold_sponsorship"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ vàng*
                  </Typography>
                  <Input
                    id="gold_sponsorship"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.gold_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.gold_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="silver_sponsorship"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ bạc*
                  </Typography>
                  <Input
                    id="silver_sponsorship"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.silver_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.silver_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="bronze_sponsorship"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ đồng*
                  </Typography>
                  <Input
                    id="bronze_sponsorship"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.bronze_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.bronze_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="companion_sponsorship"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ bạn đồng hành*
                  </Typography>
                  <Input
                    id="companion_sponsorship"
                    {...field}
                    fullWidth
                    placeholder="Nhập số lượng"
                    error={errors.companion_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.companion_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />

            <Controller
              control={control}
              name="other_sponsorship"
              render={({ field }) => (
                <Box className="col-span-2">
                  <Typography className="font-medium leading-tight">
                    Gói tài trợ khác
                  </Typography>
                  <Input
                    id="other_sponsorship"
                    {...field}
                    fullWidth
                    error={errors.other_sponsorship ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.other_sponsorship?.message}
                  </Typography>
                </Box>
              )}
            />
          </Box>

          <Box
            className="bg-blue-200 bg-opacity-30 grid grid-cols-1 gap-9 mt-10 rounded-xl"
            p={5}
            display="flex"
            flexDirection="column"
          >
            <Typography className="text-[22px] text-primary font-bold capitalize col-span-2">
              Link proposal*
            </Typography>
            <Controller
              control={control}
              name="proposal"
              render={({ field }) => (
                <Box>
                  <OutlinedInput
                    id="proposal"
                    placeholder="Điền link sự kiện"
                    {...field}
                    fullWidth
                    error={errors.proposal ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.proposal?.message}
                  </Typography>
                </Box>
              )}
            />
          </Box>
        </Box>
      </LocalizationProvider>
    </form>
  );
};
