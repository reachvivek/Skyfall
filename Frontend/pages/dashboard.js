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
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";

//Material Table
import MaterialTable from "material-table";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    columns: [
      { title: "Domain", field: "domain" },
      { title: "Username", field: "username" },
      { title: "Password", field: "password", type: "password" },
    ],
    data: [
      {
        domain: "gmail.com",
        username: "vivekkumarsingh.8991@gmail.com",
        password: "************",
      },
      {
        domain: "amazon.in",
        username: "6380823262",
        password: "************",
      },
      {
        domain: "facebook.com",
        username: "8084555818",
        password: "************",
      },
      {
        domain: "apple.com",
        username: "reachvivek@outlook.com",
        password: "************",
      },
      {
        domain: "myntra.in",
        username: "6380823262",
        password: "************",
      },
      {
        domain: "flipkart.com",
        username: "vivekkumarsingh.8991@gmail.com",
        password: "************",
      },
      {
        domain: "shopify.in",
        username: "6380823262",
        password: "************",
      },
      {
        domain: "netflix.com",
        username: "rogerthatvivek@gmail.com",
        password: "************",
      },
      {
        domain: "primeVideo.in",
        username: "6380823262",
        password: "************",
      },
    ],
  });

  return (
    <div className={classNames(classes.main)} style={{ height: "100vh" }}>
      <GridContainer>
        <GridItem>
          <NavPills
            color="info"
            horizontal={{
              tabsGrid: { xs: 2, sm: 2, md: 2, lg: 2 },
              contentGrid: { xs: 6, sm: 10, md: 8, lg: 9 },
            }}
            tabs={[
              {
                tabButton: "Passwords",
                tabIcon: LockOpenIcon,
                tabContent: (
                  <span>
                    <MaterialTable
                      title="Your Credentials"
                      columns={state.columns}
                      data={state.data}
                      editable={{
                        onRowAdd: (newData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              if (oldData) {
                                setState((prevState) => {
                                  const data = [...prevState.data];
                                  data[data.indexOf(oldData)] = newData;
                                  return { ...prevState, data };
                                });
                              }
                            }, 600);
                          }),
                        onRowDelete: (oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                      }}
                    />
                  </span>
                ),
              },
              {
                tabButton: "Payments",
                tabIcon: PaymentIcon,
                tabContent: (
                  <span>
                    <MaterialTable
                      title="Your Credentials"
                      columns={state.columns}
                      data={state.data}
                      editable={{
                        onRowAdd: (newData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              if (oldData) {
                                setState((prevState) => {
                                  const data = [...prevState.data];
                                  data[data.indexOf(oldData)] = newData;
                                  return { ...prevState, data };
                                });
                              }
                            }, 600);
                          }),
                        onRowDelete: (oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                      }}
                    />
                  </span>
                ),
              },
              {
                tabButton: "Secure Notes",
                tabIcon: NotesIcon,
                tabContent: (
                  <span>
                    <MaterialTable
                      title="Your Credentials"
                      columns={state.columns}
                      data={state.data}
                      editable={{
                        onRowAdd: (newData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              if (oldData) {
                                setState((prevState) => {
                                  const data = [...prevState.data];
                                  data[data.indexOf(oldData)] = newData;
                                  return { ...prevState, data };
                                });
                              }
                            }, 600);
                          }),
                        onRowDelete: (oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                      }}
                    />
                  </span>
                ),
              },
              {
                tabButton: "Personal Data",
                tabIcon: PermIdentityIcon,
                tabContent: (
                  <span>
                    <MaterialTable
                      title="Your Credentials"
                      columns={state.columns}
                      data={state.data}
                      editable={{
                        onRowAdd: (newData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.push(newData);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              if (oldData) {
                                setState((prevState) => {
                                  const data = [...prevState.data];
                                  data[data.indexOf(oldData)] = newData;
                                  return { ...prevState, data };
                                });
                              }
                            }, 600);
                          }),
                        onRowDelete: (oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              resolve();
                              setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                              });
                            }, 600);
                          }),
                      }}
                    />
                  </span>
                ),
              },
              {
                tabButton: "My Account",
                tabIcon: SettingsIcon,
                tabContent: (
                  <span>
                    <h1>Account Settings and Other Preferences</h1>
                  </span>
                ),
              },
              {
                tabButton: "Log Out",
                tabIcon: PowerSettingsNewIcon,
                tabContent: (
                  <span>
                    <Link href="../home">
                      <Button color="danger">Sign out</Button>
                    </Link>
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
