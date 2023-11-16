import { Box } from "@mui/material";
import { ImageUploader } from "./ImgUploader";

export function ImgUploadModal() {
  const handleGetImage = (file: File, base64Str: string) => {
    console.log(file);
    console.log(base64Str);
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <ImageUploader
        text="Them anh"
        onUploadFile={handleGetImage}
        height={150}
        width={150}
      />
    </Box>
  );
}
