import * as React from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Autocomplete,
  createFilterOptions,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const filter = createFilterOptions<any>();

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

export interface CreatableAutoCompleteProps {
  disable: boolean;
  pickItem: any[];
  optionsList: any[];
  onAddItem: any;
  onPickItemChange: any;
  label?: string;
}

export default function CreatableAutoComplete({
  disable,
  pickItem,
  optionsList,
  onAddItem,
  onPickItemChange,
  label,
}: CreatableAutoCompleteProps) {
  const [open, toggleOpen] = React.useState(false);
  const [dialogValue, setDialogValue] = React.useState({
    title: "",
  });
  const label_ = typeof label !== "undefined" ? label : "Add & Choose Option";

  const handleClose = () => {
    setDialogValue({
      title: "",
    });
    toggleOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddItem({
      title: dialogValue.title,
    });
    handleClose();
  };

  return (
    <>
      <Autocomplete
        disabled={disable}
        multiple
        value={pickItem}
        onChange={(event, newValue) => {
          let lastValue = newValue[newValue.length - 1];
          if (typeof lastValue === "string") {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: lastValue,
              });
            });
          } else if (lastValue && lastValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: lastValue.inputValue,
            });
          } else {
            onPickItemChange(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={optionsList}
        getOptionLabel={(option) => {
          // e.g. value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) =>
          option.inputValue ? (
            <li {...props}>
              <Typography variant="h6" sx={{ color: "red" }}>
                {option.title}
              </Typography>
            </li>
          ) : (
            <li {...props}>{option.title}</li>
          )
        }
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label={label_} />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new tag</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your new tag name</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  title: event.target.value,
                })
              }
              label="title"
              type="text"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
