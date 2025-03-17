import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";
import LeftMenu from "../components/LeftMenu";
import BreadcrumbBar from "../components/BreadcrumbBar";
import UserContainer from "../components/UserContainer";
import ActivityList from "../components/ActivityList";
import styles from "./EventsDetails.module.css";

const EventsDetails: FunctionComponent = () => {
  return (
    <Box className={styles.eventsDetails}>
      <LeftMenu />
      <main className={styles.eventsDetailsInner}>
        <section className={styles.breadcrumbBarParent}>
          <BreadcrumbBar />
          <Box className={styles.sidebar}>
            <Box className={styles.sidebarTop}>
              <UserContainer />
              <Box className={styles.summary}>
                <Box className={styles.summaryChild} />
                <Typography
                  className={styles.eventSummary}
                  variant="inherit"
                  component="h2"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "120%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Event Summary
                </Typography>
                <Box className={styles.link} />
                <Box className={styles.summaryContent}>
                  <Box className={styles.summaryLeft}>
                    <Box className={styles.pageIconParent}>
                      <img
                        className={styles.pageIcon}
                        alt=""
                        src="/vector-2.svg"
                      />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page1.svg"
                      />
                      <img
                        className={styles.frameChild}
                        loading="lazy"
                        alt=""
                        src="/group-152.svg"
                      />
                    </Box>
                  </Box>
                  <Box className={styles.summaryRight}>
                    <Box className={styles.frameParent}>
                      <Box className={styles.frameGroup}>
                        <Box className={styles.ddMmYyyyWrapper}>
                          <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
                        </Box>
                        <Box className={styles.frameWrapper}>
                          <Box className={styles.frameContainer}>
                            <Box className={styles.freeIconsWrapper}>
                              <img
                                className={styles.pageIcon}
                                alt=""
                                src="/freeicons.svg"
                              />
                            </Box>
                            <Box className={styles.pm}>00:00 PM</Box>
                          </Box>
                        </Box>
                        <Box className={styles.contactInfoWrapper}>
                          <Box className={styles.frameContainer}>
                            <img
                              className={styles.groupIcon}
                              loading="lazy"
                              alt=""
                              src="/group.svg"
                            />
                            <Box className={styles.ddMmYyyy}>
                              Contact Person
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.frameContainer}>
                          <img
                            className={styles.frameItem}
                            loading="lazy"
                            alt=""
                            src="/group-149.svg"
                          />
                          <img
                            className={styles.frameItem}
                            loading="lazy"
                            alt=""
                            src="/group-150.svg"
                          />
                        </Box>
                      </Box>
                      <Box className={styles.addressParent}>
                        <Box className={styles.address}>
                          <Box className={styles.mercerStreetNew}>
                            181 Mercer Street, New York, NY 10012, United States
                          </Box>
                        </Box>
                        <Button
                          className={styles.groupButton}
                          disableElevation
                          variant="contained"
                          sx={{
                            textTransform: "none",
                            color: "#fff",
                            fontSize: "16",
                            background: "#1a3e59",
                            borderRadius: "50px",
                            "&:hover": { background: "#1a3e59" },
                            width: 220,
                            height: 35,
                          }}
                        >
                          View Location on Map
                        </Button>
                      </Box>
                    </Box>
                    <Box className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.activityFeed}>
              <Box className={styles.activityFeedChild} />
              <Box className={styles.feedHeader}>
                <Typography
                  className={styles.eventSummary}
                  variant="inherit"
                  component="h2"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "120%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Activity Feed
                </Typography>
                <Box className={styles.link} />
              </Box>
              <ActivityList
                assignedATask="Assigned a Task"
                robertSteve="Robert Steve"
                justNow="Just now"
                assignedATask1="Assigned a Task"
                robertSteve1="Robert Steve"
              />
              <ActivityList
                assignedATask="Added a Document"
                robertSteve="Event name"
                frameDivHeight="unset"
                justNow="05:23 PM"
                assignedATask1="Added a Document"
                robertSteve1="Event name"
              />
              <Box className={styles.feedItemCompleted}>
                <Typography
                  className={styles.robertSteveCompletedContainer}
                  component="h3"
                  sx={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "200%",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span>
                    <Typography variant="inherit" component="span">
                      Robert Steve
                    </Typography>
                    <Typography
                      className={styles.completedTaskName}
                      variant="inherit"
                      component="span"
                    >
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: "500",
                        }}
                      >{` `}</Typography>
                      <Typography
                        variant="inherit"
                        component="span"
                        sx={{ fontWeight: "600" }}
                      >
                        Completed Task Name
                      </Typography>
                    </Typography>
                  </span>
                </Typography>
                <Box className={styles.itemDescription}>
                  <Box className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Box>
                  <Box className={styles.timestampCompleted}>
                    <Box className={styles.timeCompleted}>
                      <Box className={styles.pm1}>02:15 PM</Box>
                      <Box className={styles.contactInfoWrapper}>
                        <Box className={styles.volkswagenbabpng} />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.accolitecpng} />
            </Box>
          </Box>
        </section>
      </main>
    </Box>
  );
};

export default EventsDetails;
