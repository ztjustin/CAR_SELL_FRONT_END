import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(50),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Page = (props) => {
  const { card } = props;

  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12} sm={12} md={4} >
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={"https://source.unsplash.com/random"}
            title={card.model}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              weight={"bold"}
              variant={"h6"}
              className={classes.titleName}
              gutterBottom
            >
              {card.model}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <AddShoppingCartIcon color="primary" />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon color="secondary"/>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default Page;
