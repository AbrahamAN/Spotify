import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

export default function NavLeft() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{ width: "100%", maxWidth: 240, bgcolor: "#051832", color: "white" }}
    >
      <MoreHorizIcon
        sx={{ marginLeft: "20px", marginTop: "20px", cursor: "pointer" }}
      />
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <SavedSearchIcon sx={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <LocalLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Your Library" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
          sx={{ marginTop: "40px" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
          sx={{ borderBottom: "1px solid gray" }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="Liked Song" />
        </ListItemButton>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="My Playlist #2" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemText primary="Mi List n-1" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export { NavLeft };
