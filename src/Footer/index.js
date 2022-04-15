import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ReplayIcon from "@mui/icons-material/Replay";
import MicNoneIcon from "@mui/icons-material/MicNone";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import TrafficIcon from "@mui/icons-material/Traffic";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
function Other() {
  return (
    <Box
      sx={{
        height: 70,
        bgcolor: "#051326 ",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        padding: "2px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <CardMedia
            component="img"
            sx={{
              padding: "5px",
              width: "60px",
              height: "60px",
              overflow: "auto",
            }}
            image="https://picsum.photos/200/300"
            alt="Live from space album cover"
          />
        </Box>
        <Box sx={{ marginLeft: "5px" }}>
          <Typography variant="h6" gutterBottom component="div">
            Why Cany't You Be nicer To Me?
          </Typography>
          <Typography variant="body2" gutterBottom>
            The White Stripers
          </Typography>
        </Box>
        <Box
          sx={{
            marginLeft: "5px",
            display: "flex",
            justifyContet: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FavoriteBorderIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box>
            <AllInclusiveIcon
              sx={{ marginRight: "10px", fontSize: "30px", cursor: "pointer" }}
            />
            <ArrowCircleLeftIcon
              sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
            />
            <PlayCircleOutlineIcon
              sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
            />
            <ArrowCircleRightIcon
              sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
            />
            <ReplayIcon
              sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: "Gray",
              width: "200px",
              height: "10px",
              border: "radius",
            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <MicNoneIcon
          sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
        />
        <CalendarViewDayIcon
          sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
        />
        <TrafficIcon
          sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
        />
        <VolumeMuteIcon
          sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
        />
        <Box
          sx={{
            backgroundColor: "Gray",
            width: "100px",
            height: "5px",
            border: "radius",
            marginTop: "13px",
          }}
        />
        <CompareArrowsIcon
          sx={{ marginLeft: "10px", fontSize: "30px", cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
}

export { Other };
