import { ImageListType } from "react-images-uploading";
import { ITitleImageItem } from "../types";

export const convertToImageListType = (
  imageList: ITitleImageItem[]
): ImageListType => {
  return imageList.map(({ url, file }) => ({
    dataURL: url,
    file: file === null ? undefined : file,
  }));
};

export const convertToReduceImageList = (
  imageList: ImageListType
): ITitleImageItem[] => {
  const reducedList: ITitleImageItem[] = imageList.map((item, index) => ({
    url: item.dataURL || "",
    file: item.file || null,
  }));
  return reducedList;
};

export const findMissingUrls = (
  arr1: ITitleImageItem[],
  arr2: ITitleImageItem[]
): string[] => {
  // Extract URLs from each array
  const urls1 = arr1.map((item) => item.url);
  const urls2 = arr2.map((item) => item.url);

  // Find URLs present in arr1 but missing in arr2
  const missingUrls = urls1.filter((url) => !urls2.includes(url));

  return missingUrls;
};
