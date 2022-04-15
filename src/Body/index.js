import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./body.css";

function Body() {
  const [navbar, setNavBar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Box
      sx={{
        backgroundColor: "#09203f",
        flex: 1,
        padding: 3,
        color: "white",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <ButtonGroup
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
        // className={navbar ? "navbar active" : "navbar"}
      >
        <Box sx={{ color: "white" }}>
          <Button>
            <ArrowLeftIcon />
          </Button>
          <Button>
            <ArrowRightIcon />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography
            sx={{ marginLeft: 2 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Abraham Navarro
          </Typography>
        </Box>
      </ButtonGroup>
      <Typography
        sx={{ marginTop: 3, marginBottom: 3 }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Good Afthernoon
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: 100,
          height: 200,
          margin: "10px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0)",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          container
          spacing={2}
          columns={16}
        >
          <Card
            sx={{
              background: "#051832",
              width: "32%",
              display: "flex",
              height: "80px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: "auto", overflow: "auto" }}
                image="https://picsum.photos/200/300"
                alt="Live from space album cover"
              />
              <CardContent sx={{ marginTop: "10px", fontSize: "15px" }}>
                <Typography component="div" variant="subtitle1">
                  Live From Space
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              background: "#051832",
              width: "32%",
              display: "flex",
              height: "80px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: "auto", overflow: "auto" }}
                image="https://picsum.photos/200/300"
                alt="Live from space album cover"
              />
              <CardContent sx={{ marginTop: "10px" }}>
                <Typography component="div" variant="subtitle1">
                  Live From Space
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              background: "#051832",
              width: "32%",
              display: "flex",
              height: "80px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: "auto", overflow: "auto" }}
                image="https://picsum.photos/200/300"
                alt="Live from space album cover"
              />
              <CardContent sx={{ marginTop: "10px" }}>
                <Typography component="div" variant="subtitle1">
                  Live From Space
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              background: "#051832",
              width: "32%",
              display: "flex",
              height: "80px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: "auto", overflow: "auto" }}
                image="https://picsum.photos/200/300"
                alt="Live from space album cover"
              />
              <CardContent sx={{ marginTop: "10px" }}>
                <Typography component="div" variant="subtitle1">
                  Live From Space
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              background: "#051832",
              width: "32%",
              display: "flex",
              height: "80px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: "auto", overflow: "auto" }}
                image="https://picsum.photos/200/300"
                alt="Live from space album cover"
              />
              <CardContent sx={{ marginTop: "10px" }}>
                <Typography component="div" variant="subtitle1">
                  Live From Space
                </Typography>
              </CardContent>
            </Box>
          </Card>
          <Card
            sx={{
              background: "#051832",
              width: "32%",
              display: "flex",
              height: "80px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "white" }}>
              <CardMedia
                component="img"
                sx={{ width: 151, height: "auto", overflow: "auto" }}
                image="https://picsum.photos/200/300"
                alt="Live from space album cover"
              />
              <CardContent sx={{ marginTop: "10px" }}>
                <Typography component="div" variant="subtitle1">
                  Live From Space
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Box>
      <Typography
        sx={{ marginTop: 3, marginBottom: 3 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Jump Back in
      </Typography>
      <Grid
        sx={{
          display: "flex",
          margin: "10px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={2}
        columns={16}
      >
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
          className="cardMusic"
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent sx={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Box className="playMusic">
              <PlayCircleIcon className="icon" />
            </Box>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Typography
        sx={{ marginTop: 3, marginBottom: 3 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Recently Played
      </Typography>
      <Grid
        sx={{
          display: "flex",
          margin: "10px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={2}
        columns={16}
      >
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent sx={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Typography
        sx={{ marginTop: 3, marginBottom: 3 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Episodes for you
      </Typography>
      <Grid
        sx={{
          display: "flex",
          margin: "10px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={2}
        columns={16}
      >
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent sx={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Typography
        sx={{ marginTop: 3, marginBottom: 3 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Just the hits
      </Typography>
      <Grid
        sx={{
          display: "flex",
          margin: "10px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={2}
        columns={16}
      >
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent sx={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Typography
        sx={{ marginTop: 3, marginBottom: 3 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Viral stars
      </Typography>
      <Grid
        sx={{
          display: "flex",
          margin: "10px",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        container
        spacing={2}
        columns={16}
      >
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent sx={{ color: "white" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            background: "#051832",
            display: "flex",
            width: "23%",
            margin: "10px",
            color: "white",
          }}
        >
          <CardActionArea sx={{}}>
            <CardMedia
              component="img"
              height="140"
              image="https://picsum.photos/200/300"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Lizard
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Box>
  );
}

export { Body };
