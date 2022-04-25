import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Stack,
} from "@mui/material";
import prop1 from "../images/prop1.jpg";
import prop2 from "../images/prop2.jpg";
import prop3 from "../images/prop3.jpg";
import prop4 from "../images/prop4.jpg";

export default function Propertie(props) {
  const { data } = props;

  const imgArr = [prop1, prop2, prop3, prop4];
  const randImageIndex = Math.round(Math.random() * (imgArr.length - 1));

  return (
    <Card sx={{ minWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgArr[randImageIndex]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.address}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`${data.price} ₪`}
          </Typography>
          <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={0}>
            <Chip label={`מ"ר: ${data.sqm}`} />
            <Chip label={`חדרים: ${data.num_rooms}`} variant="outlined" />
            <Chip label={`קומה: ${data.floor}`} />
          </Stack>
          <Stack direction="row" spacing={0}>
            <Chip label={`מס' קומות: ${data.num_floors}`} variant="outlined" />
            <Chip label={`מעלית: ${data.elevator}`} />
            <Chip label={`חנייה: ${data.parking}`} variant="outlined"  />
          </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          לפרטים נוספים
        </Button>
      </CardActions>
    </Card>
  );
}
