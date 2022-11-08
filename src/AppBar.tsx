import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import ThemToggleButton from "./ThemeToggleButton";
import Link from "../src/Link";

//=======
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

export default function ButtonAppBar() {
  const items = new Map([
    ["index", "/"],
    ["about", "/about"],
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {Array.from(items).map(([key, path], index) => (
          <Link key={index} noLinkStyle href={path}>
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false);
              }}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>{key}</ListItemText>
            </ListItemButton>
          </Link>
        ))}
        <ListItem>
          <ThemToggleButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          {list()}
        </Drawer>
      </AppBar>
    </Box>
  );
}
