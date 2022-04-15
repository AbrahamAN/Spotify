import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import ButtonGroup from "@mui/material/ButtonGroup";

const messages = [
  {
    id: 1,
    primary: "Bruke LEE",
    secondary: "Yo that music is Great , AMAZING",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Jeff Besos",
    secondary: `Lest Go`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "Willy Wonka",
    secondary: "I will try to put that music too",
    person: "/static/images/avatar/2.jpg",
  },
];
function NavRigth() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: "#051832",
        color: "white",
        padding: "15px",
      }}
    >
      <Box
        sx={{
          padding: "10px",
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom component="div">
          Friend Activity
        </Typography>
        <Button sx={{ color: "white" }}>
          <AddReactionIcon />
        </Button>
      </Box>
      <Box>
        <Typography variant="subtitle2" gutterBottom component="div">
          Let Friends and followers on Spotify see what you're listening to.
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader
                  sx={{ bgcolor: "background.paper" }}
                ></ListSubheader>
              )}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText
                  primary={primary}
                  secondary={secondary}
                  className="listText"
                />
              </ListItem>
            </React.Fragment>
          ))}
          <Typography variant="subtitle2" gutterBottom component="div">
            Go To Setttings.. Social and enable 'sgare my listening activity' on
            Spotify. You can turn tihs off any time.
          </Typography>
        </List>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ButtonGroup>
            <Box sx={{ color: "white" }}>
              <Button>Setttings</Button>
            </Box>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}

export { NavRigth };
