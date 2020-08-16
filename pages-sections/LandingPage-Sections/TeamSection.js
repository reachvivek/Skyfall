import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import vivek from "assets/img/faces/vivek.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>About Me</h2>
      <div>
        <GridContainer>
          <GridItem>
            <Card plain>
              <GridItem md={2} className={classes.itemGrid}>
                <img src={vivek} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Vivek Kumar Singh
                <br />
                <small className={classes.smallTitle}>Full Stack Developer | Android | iOS | Web</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                I'm a Full Stack Developer, Seeking Learning and Pursuing Engineering at SRM IST Chennai, India. I like to learn about new technology stacks and carry out new innovations in my lone time. 
                You can find my work on GitHub. 
                I also do love working out and cinematograpy, so you'll find me posting on Instagram occasionally.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="http://www.github.com/reachvivek/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  href="http://www.instagram.com/rogerthatvivek/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  href="http://www.facebook.com/viveksingh8991/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
