// react
import { CloudUploadOutlined, HighlightOffOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ImageListItem from "./ImageListItem";

export interface UploadImageProps {
  onChange: (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => void;
  noEdit: boolean;
  isMultiple?: boolean;
  imageList: ImageListType;
  maxImage?: number;
  dataURLKey?: string;
}

// add the check duplicate image later

export function ImageUpload({
  onChange,
  noEdit,
  isMultiple,
  imageList,
  maxImage,
  dataURLKey,
}: UploadImageProps) {
  const [images, setImages] = React.useState<ImageListType>([]);

  const defaulMaxImage = 69;
  const defaultDataURLKey = "dataURL";

  let dataURLKey_ =
    typeof dataURLKey !== "undefined" ? dataURLKey : defaultDataURLKey;
  let maxImage_ = typeof maxImage !== "undefined" ? maxImage : defaulMaxImage;

  return (
    <div className="App">
      <ImageUploading
        multiple={isMultiple}
        value={imageList}
        onChange={onChange}
        maxNumber={maxImage_}
        dataURLKey={dataURLKey_}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Box display="flex" p={1}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUploadOutlined />}
                disabled={noEdit}
                sx={{
                  textTransform: "none",
                  mx: 2,
                }}
                onClick={onImageUpload}
              >
                <Typography className="font-bold">Upload file</Typography>
              </Button>

              <Button
                variant="contained"
                color="error"
                startIcon={<HighlightOffOutlined />}
                disabled={noEdit}
                sx={{
                  textTransform: "none",
                }}
                onClick={onImageRemoveAll}
              >
                <Typography className="font-bold">Clear image</Typography>
              </Button>
            </Box>
            <Box display="flex" gap="10px" overflow="auto">
              {imageList.map((image, index) => (
                <ImageListItem
                  index={index}
                  imagePath={image[dataURLKey_]}
                  onDelete={onImageRemove}
                  onUpdate={onImageUpdate}
                />
              ))}
            </Box>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
