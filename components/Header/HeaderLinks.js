/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {
  Apps,
  MobileFriendlyTwoTone,
  ExitToAppTwoTone,
  CloudUploadOutlined,
  CloudDone,
} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]}
        />
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <Tooltip
          id="howitworks-skyfall"
          title="How does it work?"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="./howitworks"
            color="transparent"
            className={classes.navLink}
          >
            <Icon className={classes.icons}>helpoutline</Icon> HOW IT WORKS
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="download-skyfall"
          title="Download it on your Phone"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="./downloadskyfall"
            color="transparent"
            className={classes.navLink}
          >
            <MobileFriendlyTwoTone className={classes.icons} />
            DOWNLOAD SKYFALL
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="login-skyfall"
          title="Login to Skyfall"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="./signin"
            color="transparent"
            className={classes.navLink}
          >
            <ExitToAppTwoTone className={classes.icons} />
            SIGN IN
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="signup-skyfall"
          title="Register on Amazon AWS"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="./signup"
            color="transparent"
            className={classes.navLink}
          >
            <CloudDone className={classes.icons} />
            SIGN UP
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="deploy-skyfall"
          title="Register on Amazon AWS"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="http://www.github.com/reachvivek/Skyfall"
            color="transparent"
            className={classes.navLink}
          >
            <CloudUploadOutlined className={classes.icons} />
            DEPLOY SKYFALL
          </Button>
        </Tooltip>
      </ListItem>

      {/* <ListItem className={classes.listItem}> */}
      {/*<Tooltip title="Delete">
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>*/}
      {/* </ListItem> */}

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
