import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Autocomplete,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ColorSchemePicker from "../src/ThemeToggleButton";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            py: 2,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box sx={{ pb: 4 }}>
            <ColorSchemePicker />
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="primary" variant="contained">
              primary
            </Button>
            <Button variant="outlined">primary</Button>
            <Button>primary</Button>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
            <Button color="secondary" variant="contained">
              secondary
            </Button>
            <Button color="secondary" variant="outlined">
              secondary
            </Button>
            <Button color="secondary">secondary</Button>
          </Box>
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                label="Age"
                size="small"
                //onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <Chip label="badge" />
          </div>
          <Autocomplete
            size="small"
            disablePortal
            options={["one", "two", "three"]}
            onChange={(event, value) => {
              console.log(value);
            }}
            sx={{
              width: 200,
              minWidth: 200,
            }}
            renderInput={(params) => <TextField {...params} label="input" />}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="Disabled"
            />
          </FormGroup>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
