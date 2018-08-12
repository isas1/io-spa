import React from 'react';
import { withStyles } from '../../../node_modules/@material-ui/core';

const styles = {
  img: {
    width: 100,
    height: 100
  }
}

const Img = props => {
  const { classes } = props;

  return (

    <img className={classes.img} src={props.url} alt="" />
  )
  /*
  <li className="img-wrap">
    <img src={props.url} alt=""/>
  </li>
  */

};

export default withStyles(styles)(Img);
