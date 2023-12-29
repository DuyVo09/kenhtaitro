import { IValueLabel } from "@/common/types";
import { Box, Chip, Divider } from "@mui/material";
import { useEffect, useState } from "react";

interface CreatableAutoCompleteProps {
  disabled?: boolean;
  initialOptions: IValueLabel<string>[];
  onDeleteOption?: (option: IValueLabel<string>) => void;
}

const CreatableAutoComplete = ({
  disabled,
  initialOptions,
  onDeleteOption,
}: CreatableAutoCompleteProps) => {
  const [options, setOptions] = useState<IValueLabel<string>[]>(initialOptions);
  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);

  return (
    <Box display="flex" flexDirection="column">
      <Box p={1}>
        {options.map((e) => (
          <Chip
            key={e.value}
            label={e.label}
            sx={{ m: 0.5 }}
            onDelete={() => onDeleteOption && !disabled && onDeleteOption(e)}
          />
        ))}
      </Box>
      <Divider />
    </Box>
  );
};

export default CreatableAutoComplete;
