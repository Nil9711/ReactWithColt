import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "../MiniPalette/MiniPalette";
import styles from "../styles/PaletteListStyles";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link className={classes.newPaletteLink} to="/palette/new">
              New Palette
            </Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
