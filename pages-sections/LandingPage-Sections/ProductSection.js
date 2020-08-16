import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {CloudCircle, CloudOffTwoTone, StorageTwoTone, SecurityTwoTone} from "@material-ui/icons";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>WHY SKYFALL?</h2>
          <h5 className={classes.description}>
            <b>"You have true ownership and command of your data." 
            We never come into the picture.</b> 
            <p></p>
            Skyfall is built on a serverless architecture which ensures that 
            your credentials and other sensitive data are securely stored without the 
            intervention of any third-party app or any organization. It also prevents any 
            possible future contingency like data leaks from occurring in the first place and shields 
            you all in all by giving you your own database. 
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Serverless Architecture"
              description="AWS Lambda never remains “cold” since there is no “idle server time”. Every data and all of its underlying function, which is stored, are completely hidden from the developer. "
              icon={CloudOffTwoTone}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Unlimited Storage | Almost No Cost"
              description="If you need a solid place to store your information, this is far better than your regular competing hard drives. FYI, about 560,000 hard drives fail every month in the US alone.
                            That’s alarming. If all your business data and information are stored on your hard drive, you’ll end up getting crippled by a single malware or virus."
              icon={StorageTwoTone}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Reliable Encryption and Security"
              description="AWS provides a more reliable security measure that’s guaranteed to keep your data safe and secure. With 12 data centers scattered across the globe, and another 5 slated to open this year, this is as safe as it gets for your private data and information.  "
              icon={SecurityTwoTone}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
