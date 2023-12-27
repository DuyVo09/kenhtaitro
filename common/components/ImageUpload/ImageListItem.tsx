import { Clear, Delete } from "@mui/icons-material";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Button, Chip, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ImageListItemProps {
  index: number;
  imagePath: string;
  onUpdate: (index: number) => void;
  onDelete: (index: number) => void;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ImageListItem = ({
  index,
  imagePath,
  onDelete,
  onUpdate,
}: ImageListItemProps) => {
  return (
    <ListItem>
      {/* <Chip label={name} icon={<UploadFileIcon />} variant="outlined" sx={{ maxWidth: 200 }} onDelete={onDelete} /> */}
      <Box
        position="relative"
        width={200}
        height={200}
        border={1}
        borderColor="divider"
      >
        <Box
          width="100%"
          height="100%"
          component="img"
          src={imagePath}
          sx={{ objectFit: "contain" }}
        />
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={() => {}}>
            <Clear />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
};

export default ImageListItem;
