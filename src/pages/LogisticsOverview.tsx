import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import GroupComponent1 from "../components/GroupComponent1";
import UserContainer from "../components/UserContainer";
import Table from "../components/Table";
import styles from "./LogisticsOverview.module.css";

const LogisticsOverview: FunctionComponent = () => {
  return (
    <Box className={styles.logisticsOverview}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.content}>
          <Box className={styles.frameParent}>
            <Box className={styles.layer1Parent}>
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-11.svg"
              />
              <img
                className={styles.layer1Icon}
                loading="lazy"
                alt=""
                src="/layer-1-1.svg"
              />
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1071.svg"
              />
            </Box>
            <Box className={styles.layer1Group}>
              <Box className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-111.svg"
                />
              </Box>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-113.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-114.svg"
              />
              <img
                className={styles.moneyIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </Box>
          </Box>
          <Box className={styles.main}>
            <Box className={styles.dashboard}>Dashboard</Box>
            <Box className={styles.information}>
              <Box className={styles.container}>
                <Box className={styles.wrapper}>
                  <Box className={styles.events}>Events</Box>
                  <Box className={styles.navigationContainer}>
                    <Box className={styles.logistics}>Logistics</Box>
                    <Box className={styles.overviewParent}>
                      <Box className={styles.overview}>Overview</Box>
                      <Box className={styles.taskAssignment}>
                        Task Assignment
                      </Box>
                      <Box className={styles.taskAssignment}>
                        Route Planning
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.management}>
                  <Box className={styles.frameGroup}>
                    <img
                      className={styles.frameIcon}
                      loading="lazy"
                      alt=""
                      src="/frame-2@2x.png"
                    />
                    <Box className={styles.settings}>
                      <Box className={styles.settingsChild} />
                      <img
                        className={styles.settingsItem}
                        loading="lazy"
                        alt=""
                        src="/arrow-4.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.taskAssignment}>Vehicle Management</Box>
            </Box>
            <Box className={styles.settings1}>
              <Box className={styles.settingsList}>
                <Box className={styles.inventory}>Inventory</Box>
                <Box className={styles.deliveries}>Deliveries</Box>
                <Box className={styles.reports}>Reports</Box>
                <Box className={styles.users}>Users</Box>
                <Box className={styles.settings2}>Settings</Box>
              </Box>
              <Box className={styles.settingsInner}>
                <Box className={styles.frameGroup}>
                  <Box className={styles.settings}>
                    <Box className={styles.settingsChild} />
                    <img
                      className={styles.arrowIcon}
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </Box>
                  <Box className={styles.settings}>
                    <Box className={styles.settingsChild} />
                    <img
                      className={styles.arrowIcon}
                      alt=""
                      src="/arrow-4.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <main className={styles.page}>
        <section className={styles.contentArea}>
          <Box className={styles.body}>
            <Box className={styles.dashboardContainer}>
              <Box
                className={styles.dashboardLogistics}
              >{`Dashboard > Logistics > Overview`}</Box>
              <Box className={styles.metrics}>
                <GroupComponent1
                  metricPlaceholder="03"
                  tasksDueToday="Tasks Due Today"
                />
                <Box className={styles.rectangleContainer}>
                  <Box className={styles.frameChild3} />
                  <Box className={styles.div}>05</Box>
                  <Box className={styles.overDueTasks}>Over Due Tasks</Box>
                </Box>
                <GroupComponent1
                  metricPlaceholder="44"
                  metricPlaceholderWidth="166px"
                  tasksDueToday="Open Tasks"
                  tasksDueTodayDisplay="inline-block"
                  tasksDueTodayMinWidth="113px"
                />
              </Box>
            </Box>
            <Box className={styles.userContainerParent}>
              <UserContainer />
              <Box className={styles.summary}>
                <Box className={styles.summaryChild} />
                <Box className={styles.taskStatus}>
                  <Box className={styles.tasksByStatus}>Tasks by Status</Box>
                  <Box className={styles.statusVisuals}>
                    <Box className={styles.statusElements}>
                      <Box className={styles.statusIconsWrapper}>
                        <Box className={styles.statusIcons} />
                      </Box>
                      <Box className={styles.upcoming}>
                        <Typography variant="inherit" component="b">
                          14
                        </Typography>
                        <Typography variant="inherit" component="span">
                          {" "}
                          Upcoming
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={styles.statusElements}>
                      <Box className={styles.statusIconsWrapper}>
                        <Box className={styles.payouts} />
                      </Box>
                      <Box className={styles.taskAssignment}>
                        <Typography
                          variant="inherit"
                          component="b"
                        >{`03 `}</Typography>
                        <Typography variant="inherit" component="span">
                          Ongoing
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.statusContainerParent}>
                  <Box className={styles.statusIconsWrapper}>
                    <Box className={styles.ellipseParent}>
                      <Box className={styles.ellipseDiv} />
                      <Box className={styles.remainingIcons} />
                    </Box>
                  </Box>
                  <Box className={styles.remainingLabels}>
                    <Box className={styles.taskAssignment}>
                      <Typography variant="inherit" component="b">
                        20
                      </Typography>
                      <Typography variant="inherit" component="span">
                        {" "}
                        Not Started
                      </Typography>
                    </Box>
                    <Box className={styles.taskAssignment}>
                      <Typography
                        variant="inherit"
                        component="b"
                      >{`06 `}</Typography>
                      <Typography variant="inherit" component="span">
                        Cancelled
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.taskListContainerParent}>
            <Box className={styles.taskListContainer}>
              <Typography
                className={styles.taskList}
                variant="inherit"
                component="h2"
                sx={{
                  fontWeight: "600",
                  lineHeight: "120%",
                  letterSpacing: "-0.03em",
                }}
              >
                Task List
              </Typography>
            </Box>
            <Box className={styles.filterControls}>
              <Box className={styles.filterElements}>
                <Box className={styles.sortBy}>Sort by:</Box>
              </Box>
              <FormControl
                className={styles.sort}
                variant="standard"
                sx={{
                  borderColor: "#9e9e9e",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "10px",
                  width: "32.0855614973262%",
                  height: "50px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#9e9e9e",
                    fontSize: 18,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="warning" />
                <Select
                  color="warning"
                  disableUnderline
                  displayEmpty
                  IconComponent="null"
                >
                  <MenuItem>Due Date</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <Box className={styles.filterElements}>
                <Box className={styles.filterBy}>Filter by:</Box>
              </Box>
              <FormControl
                className={styles.sort}
                variant="standard"
                sx={{
                  borderColor: "#9e9e9e",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "10px",
                  width: "32.0855614973262%",
                  height: "50px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "50px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#9e9e9e",
                    fontSize: 18,
                    fontWeight: "Medium",
                    fontFamily: "Poppins",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="warning" />
                <Select
                  color="warning"
                  disableUnderline
                  displayEmpty
                  IconComponent="null"
                >
                  <MenuItem>Assignee</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </Box>
          </Box>
          <Table />
        </section>
      </main>
    </Box>
  );
};

export default LogisticsOverview;
