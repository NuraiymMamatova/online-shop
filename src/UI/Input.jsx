import { TextField, styled } from "@mui/material";
import { forwardRef } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import {ReactComponent as UserIcon} from "../assets/userIcon.svg";

export const Input = forwardRef(
  ({ value, withIcon, label, onChange, ...rest }, ref) => {
    return (
      <StyledInput
        label={label}
        InputProps={
          withIcon
            ? {
                startAdornment: (
                  <InputAdornment /* position="start" */>
                    <PersonOutlineIcon /> {/* <UserIcon/> */}
                  </InputAdornment>
                ),
              }
            : {}
        }
        variant="outlined"
        value={value}
        onChange={onChange}
        inputRef={ref}
        {...rest}
      />
    );
  }
);

const StyledInput = styled(TextField)({
  "& .MuiInputBase-input": { padding: "12px 16px" },
});

// Input.displayName = "Input";
