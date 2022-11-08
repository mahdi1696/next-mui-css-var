import { Theme as MuiTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
      vars: Omit<
        MuiTheme,
        "typography" | "mixins" | "breakpoints" | "direction" | "transitions"
      >;
    }
  }