import { FunctionComponent } from "react";
import {
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import UserContainer from "../components/UserContainer";
import EventTime from "../components/EventTime";
import EventRows from "../components/EventRows";
import styles from "./EventCalendar.module.css";

const EventCalendar: FunctionComponent = () => {
  return (
    <Box className={styles.eventCalendar}>
      <Box className={styles.leftMenu}>
        <Box className={styles.leftMenuChild} />
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo1.svg"
        />
        <Box className={styles.menuContentParent}>
          <Box className={styles.menuContent}>
            <Box className={styles.layers}>
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
                src="/layer-1-12.svg"
              />
            </Box>
            <Box className={styles.frameParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-1072.svg"
              />
              <Box className={styles.layer1}>
                <img
                  className={styles.layer1Child}
                  loading="lazy"
                  alt=""
                  src="/group-1111.svg"
                />
              </Box>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1131.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1141.svg"
              />
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
              <img
                className={styles.layer1Icon2}
                loading="lazy"
                alt=""
                src="/layer-1-2.svg"
              />
            </Box>
          </Box>
          <Box className={styles.navigation}>
            <Box className={styles.dashboardParent}>
              <Box className={styles.dashboard}>Dashboard</Box>
              <Box className={styles.eventsParent}>
                <Box className={styles.events}>Events</Box>
                <Box className={styles.eventListParent}>
                  <Box className={styles.eventList}>Event List</Box>
                  <Box className={styles.eventCalendar1}>Event Calendar</Box>
                </Box>
              </Box>
              <Box className={styles.logistics}>Logistics</Box>
              <Box className={styles.inventory}>Inventory</Box>
              <Box className={styles.deliveries}>Deliveries</Box>
              <Box className={styles.reports}>Reports</Box>
              <Box className={styles.users}>Users</Box>
              <Box className={styles.settings}>Settings</Box>
            </Box>
          </Box>
          <Box className={styles.footer}>
            <Box className={styles.footerContent}>
              <img
                className={styles.placeholderIcon}
                loading="lazy"
                alt=""
                src="/placeholder@2x.png"
              />
              <Box className={styles.frameGroup}>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </Box>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </Box>
                <Box className={styles.rectangleParent}>
                  <Box className={styles.rectangleDiv} />
                  <img
                    className={styles.arrowIcon}
                    loading="lazy"
                    alt=""
                    src="/arrow-4.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <main className={styles.content}>
        <section className={styles.main}>
          <Box className={styles.header}>
            <Box className={styles.titleBar}>
              <Box className={styles.titles}>
                <Box
                  className={styles.dashboardEvents}
                >{`Dashboard > Events >  Event Calendar `}</Box>
                <Box className={styles.eventCalendar2}>Event Calendar</Box>
              </Box>
            </Box>
            <Box className={styles.filters}>
              <Box className={styles.sort}>
                <Box className={styles.sortBy}>Sort by:</Box>
              </Box>
              <Box className={styles.userFilter}>
                <UserContainer />
                <Box className={styles.dropdownFilters}>
                  <FormControl
                    className={styles.filter1}
                    variant="standard"
                    sx={{
                      borderColor: "#9e9e9e",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "10px",
                      width: "47.368421052631575%",
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
                      <MenuItem>Event Type</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <FormControl
                    className={styles.filter1}
                    variant="standard"
                    sx={{
                      borderColor: "#9e9e9e",
                      borderStyle: "SOLID",
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      borderRadius: "10px",
                      width: "47.368421052631575%",
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
                      <MenuItem>Event Status</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.calender}>
            <Box className={styles.calenderChild} />
            <Box className={styles.calendarContainer}>
              <Box className={styles.calendarContent}>
                <Button
                  className={styles.navigationHeader}
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#9e9e9e",
                    fontSize: "16",
                    borderColor: "#9e9e9e",
                    borderRadius: "6px",
                    "&:hover": { borderColor: "#9e9e9e" },
                    width: 100,
                    height: 42,
                  }}
                >
                  Today
                </Button>
                <Box className={styles.calendarControls}>
                  <Box className={styles.monthNavigation}>
                    <input
                      className={styles.navigationButtons}
                      type="checkbox"
                    />
                    <Box className={styles.november2024}>November, 2024</Box>
                    <Box className={styles.navigationButtons1}>
                      <Box className={styles.groupDiv}>
                        <Box className={styles.frameChild5} />
                        <img
                          className={styles.frameChild6}
                          loading="lazy"
                          alt=""
                          src="/arrow-6.svg"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.tabs}>
                  <Box className={styles.tabsChild} />
                  <Box className={styles.rectangleParent1}>
                    <Box className={styles.frameChild7} />
                    <Box className={styles.day}>Day</Box>
                  </Box>
                  <Box className={styles.tabViewOptions}>
                    <Box className={styles.week}>Week</Box>
                  </Box>
                  <Box className={styles.tabViewOptions1}>
                    <Box className={styles.month}>Month</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.days}>
              <Box className={styles.daysChild} />
              <Box className={styles.weekdayNames}>
                <Box className={styles.sunday}>Sunday</Box>
              </Box>
              <Box className={styles.weekdayNames1}>
                <Box className={styles.monday}>Monday</Box>
              </Box>
              <Box className={styles.tuesday}>Tuesday</Box>
              <Box className={styles.weekdayNames2}>
                <Box className={styles.wednesday}>Wednesday</Box>
              </Box>
              <Box className={styles.weekdayNames3}>
                <Box className={styles.thursday}>Thursday</Box>
              </Box>
              <Box className={styles.weekdayNames4}>
                <Box className={styles.friday}>Friday</Box>
              </Box>
              <Box className={styles.saturday}>Saturday</Box>
            </Box>
            <Box className={styles.calendarGrid}>
              <Box className={styles.gridContent}>
                <Box className={styles.gridRows}>
                  <Box className={styles.gridCells}>
                    <Box className={styles.cellContent}>1</Box>
                  </Box>
                  <Box className={styles.eventMarkers}>
                    <img className={styles.linesIcon} alt="" src="/lines.svg" />
                    <Box className={styles.eventPositions}>
                      <img
                        className={styles.disableIcon}
                        loading="lazy"
                        alt=""
                        src="/disable@2x.png"
                      />
                      <Box className={styles.eventPlaceholders}>27</Box>
                      <Box className={styles.eventPlaceholders1}>28</Box>
                      <Box className={styles.eventPlaceholders2}>29</Box>
                      <Box className={styles.disabledContent}>
                        <Box className={styles.div}>30</Box>
                      </Box>
                      <Box className={styles.eventPlaceholders3}>31</Box>
                    </Box>
                    <Box className={styles.events1}>
                      <Box className={styles.rectangleParent2}>
                        <Box className={styles.frameChild8} />
                        <Box className={styles.eventName000000Container}>
                          <Typography
                            className={styles.eventName}
                            variant="inherit"
                            sx={{ fontWeight: "600" }}
                          >
                            Event name
                          </Typography>
                          <Typography className={styles.p} variant="inherit">
                            00:00:00
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.eventDetails}>
                        <Box className={styles.eventItems}>
                          <Box className={styles.eventActions}>
                            <Box className={styles.eventList1}>
                              <Box className={styles.eventDates}>
                                <Box className={styles.eventDate}>3</Box>
                              </Box>
                              <Box className={styles.eventDates1}>
                                <Box className={styles.div1}>10</Box>
                              </Box>
                              <Box className={styles.eventDates2}>
                                <Box className={styles.div2}>17</Box>
                              </Box>
                              <EventTime prop="24" />
                            </Box>
                          </Box>
                          <EventRows
                            timePlaceholder="4"
                            prop="11"
                            prop1="18"
                            prop2="25"
                          />
                          <Box className={styles.eventDetails1}>
                            <Box className={styles.eventInformation}>
                              <Box className={styles.eventDescription}>
                                <Box className={styles.descriptionWrapper}>
                                  <Box className={styles.description}>5</Box>
                                </Box>
                                <Box className={styles.eventHover}>
                                  <Box className={styles.hover}>
                                    <Box className={styles.hoverChild} />
                                    <Box className={styles.hoverContent}>
                                      <Box className={styles.eventNameHere}>
                                        Event name here
                                      </Box>
                                      <Box className={styles.eventStatus}>
                                        <Box className={styles.statusIcon}>
                                          <Box
                                            className={styles.statusIconChild}
                                          />
                                        </Box>
                                        <Box className={styles.upcoming}>
                                          Upcoming
                                        </Box>
                                      </Box>
                                      <Box className={styles.hoverTime}>
                                        00:00:00
                                      </Box>
                                    </Box>
                                    <Box className={styles.hoverActions}>
                                      <img
                                        className={styles.hoverActionsChild}
                                        loading="lazy"
                                        alt=""
                                        src="/group-1401.svg"
                                      />
                                      <img
                                        className={styles.hoverActionsItem}
                                        loading="lazy"
                                        alt=""
                                        src="/group-1372.svg"
                                      />
                                    </Box>
                                  </Box>
                                  <Box className={styles.eventLocation}>
                                    <Box className={styles.location}>19</Box>
                                  </Box>
                                </Box>
                              </Box>
                              <Box className={styles.eventAttendees}>
                                <Box className={styles.attendees}>26</Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box className={styles.eventItems1}>
                            <Box className={styles.itemIcon}>
                              <Box className={styles.iconContainer}>
                                <Box className={styles.iconContainerChild} />
                                <Box className={styles.itemTime}>6</Box>
                              </Box>
                              <Box className={styles.itemTitleContainer}>
                                <Box className={styles.rectangleParent3}>
                                  <Box className={styles.frameChild9} />
                                  <Box
                                    className={styles.eventName000000Container}
                                  >
                                    <Typography
                                      className={styles.eventName}
                                      variant="inherit"
                                      sx={{ fontWeight: "600" }}
                                    >
                                      Event name
                                    </Typography>
                                    <Typography
                                      className={styles.p}
                                      variant="inherit"
                                    >
                                      00:00:00
                                    </Typography>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box className={styles.eventItem}>
                              <Box className={styles.location}>13</Box>
                            </Box>
                            <EventTime
                              timeWidth="39px"
                              prop="20"
                              boxWidth="31px"
                              groupBoxBackgroundColor="#ed3006"
                              rectangleBoxBackgroundColor="#ed3006"
                            />
                            <Box className={styles.eventItem1}>
                              <Box className={styles.div3}>27</Box>
                            </Box>
                          </Box>
                          <Box className={styles.thirdItem}>
                            <Box className={styles.thirdItemDetails}>
                              <Box className={styles.thirdItemTimeContainer}>
                                <Box className={styles.thirdItemTime}>7</Box>
                              </Box>
                              <EventTime
                                timeWidth="34px"
                                prop="14"
                                boxWidth="26px"
                                groupBoxBackgroundColor="#4caf50"
                                rectangleBoxBackgroundColor="#4caf50"
                              />
                              <Box className={styles.thirdItemLocation}>
                                <Box className={styles.itemLocation}>21</Box>
                              </Box>
                              <Box className={styles.thirdItemAttendees}>
                                <Box className={styles.attendees}>28</Box>
                              </Box>
                            </Box>
                          </Box>
                          <EventRows
                            timePlaceholder="8"
                            groupBoxBackgroundColor="#4caf50"
                            rectangleBoxBackgroundColor="#4caf50"
                            frameBoxWidth="34px"
                            prop="15"
                            boxWidth="26px"
                            frameBoxWidth1="37px"
                            prop1="22"
                            prop2="29"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.calendarFooter}>
                  <Box className={styles.div4}>2</Box>
                  <Box className={styles.footerActions}>
                    <Box className={styles.div5}>9</Box>
                    <Box className={styles.actionIcons}>
                      <Box className={styles.div6}>16</Box>
                      <Box className={styles.div7}>23</Box>
                      <Box className={styles.div8}>30</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </Box>
  );
};

export default EventCalendar;
