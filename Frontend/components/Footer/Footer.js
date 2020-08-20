/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Terms
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Privacy
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Cookie Preferences
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={classes.block}
                target="_blank"
              >
                Do not sell my Personal Information
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} Skyfall, made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="http://www.github.com/reachvivek"
            className={aClasses}
            target="_blank"
          >
            Vivek Kumar Singh
          </a>{" "}
          for the netizens.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
