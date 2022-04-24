import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import prop1 from "../images/prop1.jpg";
import prop2 from "../images/prop2.jpg";
import prop3 from "../images/prop3.jpg";
import prop4 from "../images/prop4.jpg";

export default function Propertie(props) {
  const { parking } = props.data;
  const imgArr = [prop1, prop2, prop3, prop4];
  const randImageIndex = Math.round(Math.random() * (imgArr.length - 1));

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgArr[randImageIndex]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {parking}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
