import { IEventFormModel } from "@/types";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "./resolver";
import { TextEditor } from "@/common/components/TextEditor";
import { useRef, useState } from "react";
import { ITitleImageItem } from "@/common/types";
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

  console.log()

  return (
    <form onSubmit={onSubmit}>
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
              name="category"
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
                          // For some reason codesandbox doesn't support `field.value.includes(...)`
                          checked={
                            field.value &&
                            field.value.some(
                              (existingValue) =>
                                existingValue.value === option.value
                            )
                          }
                          onChange={(event, checked) => {
                            if (checked) {
                              field.onChange([
                                ...field.value,
                                event.target.value,
                              ]);
                            } else {
                              field.onChange(
                                field.value.filter(
                                  (value) => value.value !== event.target.value
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
        </Box>
      </LocalizationProvider>
    </form>
  );
};
