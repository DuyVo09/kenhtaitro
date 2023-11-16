import { Add } from "@mui/icons-material";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { IImageUploader } from "../models";

export const ImageUploader = ({
  height,
  width,
  text,
  onUploadFile,
}: IImageUploader) => {
  const [progressBar, setProgressBar] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const convertToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onprogress = (event) => {
        const { loaded, total } = event;
        const progress = loaded / total;
        setProgressBar(progress);
      };
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setIsUploading(true);
      const base64 = await convertToBase64(file);
      onUploadFile(file, base64);
      setIsUploading(false);
    }
  };

  return (
    <Box
      height={height ?? 250}
      width={width ?? 250}
      component={Button}
      border={1}
      m={1}
      flexDirection="column"
    >
      {!isUploading ? (
        <Box component="label">
          <Add />
          <Typography>{text}</Typography>
          <input onChange={handleFileUpload} type="file" hidden />
        </Box>
      ) : (
        <Box>
          <CircularProgress variant="determinate" />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="text.secondary"
            >
              {progressBar}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
