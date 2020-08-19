import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// sections for this page
import NavPills from "components/NavPills/NavPills.js";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import PaymentIcon from "@material-ui/icons/Payment";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import NotesIcon from "@material-ui/icons/Notes";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  return (
    <div className={classNames(classes.main)}>
      <GridContainer>
        <GridItem>
          <NavPills
            color="info"
            horizontal={{
              tabsGrid: { xs: 2, sm: 2, md: 2, lg: 2 },
              contentGrid: { xs: 6, sm: 10, md: 8, lg: 10 },
            }}
            tabs={[
              {
                tabButton: "Passwords",
                tabIcon: LockOpenIcon,
                tabContent: (
                  <span>
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                    </p>
                    <br />
                    <p>
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI. Collaboratively administrate
                      empowered markets via plug-and-play networks. Dynamically
                      procrastinate B2C users after installed base benefits.
                    </p>
                    <br />
                    <p>
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI. Collaboratively administrate
                      empowered markets via plug-and-play networks. Dynamically
                      procrastinate B2C users after installed base benefits.
                    </p>
                  </span>
                ),
              },
              {
                tabButton: "Payments",
                tabIcon: PaymentIcon,
                tabContent: (
                  <span>
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                    </p>
                    <br />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Dramatically visualize customer
                      directed convergence without revolutionary ROI.
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                    </p>
                  </span>
                ),
              },
              {
                tabButton: "Secure Notes",
                tabIcon: NotesIcon,
                tabContent: (
                  <span>
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                    </p>
                    <br />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Dramatically visualize customer
                      directed convergence without revolutionary ROI.
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                    </p>
                  </span>
                ),
              },
              {
                tabButton: "Personal Data",
                tabIcon: PermIdentityIcon,
                tabContent: (
                  <span>
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                    </p>
                    <br />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Dramatically visualize customer
                      directed convergence without revolutionary ROI.
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                    </p>
                  </span>
                ),
              },
              {
                tabButton: "My Account",
                tabIcon: SettingsIcon,
                tabContent: (
                  <span>
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                    </p>
                    <br />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Dramatically visualize customer
                      directed convergence without revolutionary ROI.
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                    </p>
                  </span>
                ),
              },
              {
                tabButton: "Log Out",
                tabIcon: PowerSettingsNewIcon,
                tabContent: (
                  <span>
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                    </p>
                    <br />
                    <p>
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions. Dramatically visualize customer
                      directed convergence without revolutionary ROI.
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                    </p>
                  </span>
                ),
              },
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
