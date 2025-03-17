import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./TableRow.module.css";

export type TableRowType = {
  className?: string;
};

const TableRow: FunctionComponent<TableRowType> = ({ className = "" }) => {
  return (
    <Box className={[styles.tableRow, className].join(" ")}>
      <Box className={styles.tableData}>
        <Box className={styles.deliveryInfo}>
          <Box className={styles.mainInfo}>
            <Box className={styles.deliveryName}>
              <Box className={styles.nameBackgroundParent}>
                <Box className={styles.nameBackground}>
                  <Box className={styles.nameBackgroundChild} />
                </Box>
                <Box className={styles.aa478525}>AA-4785-25</Box>
              </Box>
              <Box className={styles.eventName}>
                <Box className={styles.eventName1}>Event name</Box>
                <Box className={styles.royAnderson}>Roy Anderson</Box>
              </Box>
              <Box className={styles.streetCityStateParent}>
                <Box className={styles.streetCityState}>
                  Street, City, State
                </Box>
                <Box className={styles.streetCityState1}>
                  Street, City, State
                </Box>
              </Box>
              <Box className={styles.pm}>00:00:00 PM</Box>
            </Box>
          </Box>
          <Box className={styles.statusInfo}>
            <Box className={styles.statusIconsParent}>
              <Box className={styles.statusIcons}>
                <Box className={styles.statusIconsChild} />
              </Box>
              <Box className={styles.inTransit}>In Transit</Box>
            </Box>
            <Box className={styles.duration}>
              <Box className={styles.hours}>2 Hours</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.eventListSeparator} />
      <Box className={styles.tableData}>
        <Box className={styles.deliveryInfo}>
          <Box className={styles.mainInfo}>
            <Box className={styles.deliveryName}>
              <Box className={styles.nameBackgroundParent}>
                <Box className={styles.nameBackground}>
                  <Box className={styles.nameBackgroundChild} />
                </Box>
                <Box className={styles.aa478525}>AA-4785-25</Box>
              </Box>
              <Box className={styles.eventName}>
                <Box className={styles.eventName1}>Event name</Box>
                <Box className={styles.royAnderson}>Roy Anderson</Box>
              </Box>
              <Box className={styles.streetCityStateParent}>
                <Box className={styles.streetCityState}>
                  Street, City, State
                </Box>
                <Box className={styles.streetCityState1}>
                  Street, City, State
                </Box>
              </Box>
              <Box className={styles.pm}>00:00:00 PM</Box>
            </Box>
          </Box>
          <Box className={styles.frameDiv}>
            <Box className={styles.statusIconsParent}>
              <Box className={styles.statusIcons}>
                <Box className={styles.frameItem} />
              </Box>
              <Box className={styles.delivered}>Delivered</Box>
            </Box>
            <Box className={styles.duration}>
              <Box className={styles.hours}>-</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.eventListSeparator} />
      <Box className={styles.eventSeparator}>
        <Box className={styles.firstEventContainerParent}>
          <Box className={styles.tableData}>
            <Box className={styles.deliveryInfo}>
              <Box className={styles.mainInfo}>
                <Box className={styles.deliveryName}>
                  <Box className={styles.nameBackgroundParent}>
                    <Box className={styles.nameBackground}>
                      <Box className={styles.nameBackgroundChild} />
                    </Box>
                    <Box className={styles.aa478525}>AA-4785-25</Box>
                  </Box>
                  <Box className={styles.eventName}>
                    <Box className={styles.eventName1}>Event name</Box>
                    <Box className={styles.royAnderson}>Roy Anderson</Box>
                  </Box>
                  <Box className={styles.streetCityStateParent}>
                    <Box className={styles.streetCityState}>
                      Street, City, State
                    </Box>
                    <Box className={styles.streetCityState1}>
                      Street, City, State
                    </Box>
                  </Box>
                  <Box className={styles.pm}>00:00:00 PM</Box>
                </Box>
              </Box>
              <Box className={styles.statusInfo}>
                <Box className={styles.statusIconsParent}>
                  <Box className={styles.statusIcons}>
                    <Box className={styles.statusIconsChild} />
                  </Box>
                  <Box className={styles.inTransit}>In Transit</Box>
                </Box>
                <Box className={styles.duration}>
                  <Box className={styles.hours}>2 Hours</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.eventListSeparator} />
        </Box>
        <Box className={styles.secondEventContainerParent}>
          <Box className={styles.mainInfo}>
            <Box className={styles.deliveryName}>
              <Box className={styles.nameBackgroundParent}>
                <Box className={styles.nameBackground}>
                  <Box className={styles.nameBackgroundChild} />
                </Box>
                <Box className={styles.aa478525}>AA-4785-25</Box>
              </Box>
              <Box className={styles.eventName}>
                <Box className={styles.eventName1}>Event name</Box>
                <Box className={styles.royAnderson}>Roy Anderson</Box>
              </Box>
              <Box className={styles.streetCityStateParent}>
                <Box className={styles.streetCityState}>
                  Street, City, State
                </Box>
                <Box className={styles.streetCityState1}>
                  Street, City, State
                </Box>
              </Box>
              <Box className={styles.pm}>00:00:00 PM</Box>
            </Box>
          </Box>
          <Box className={styles.secondEventStatus}>
            <Box className={styles.statusIconsParent}>
              <Box className={styles.statusIcons}>
                <Box className={styles.secondEventStatusCircle} />
              </Box>
              <Box className={styles.delayed}>Delayed</Box>
            </Box>
            <Box className={styles.secondEventDuration}>
              <Box className={styles.hours}>1 Day</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.eventListSeparator} />
      <Box className={styles.tableData}>
        <Box className={styles.deliveryInfo}>
          <Box className={styles.mainInfo}>
            <Box className={styles.deliveryName}>
              <Box className={styles.nameBackgroundParent}>
                <Box className={styles.nameBackground}>
                  <Box className={styles.nameBackgroundChild} />
                </Box>
                <Box className={styles.aa478525}>AA-4785-25</Box>
              </Box>
              <Box className={styles.eventName}>
                <Box className={styles.eventName1}>Event name</Box>
                <Box className={styles.royAnderson}>Roy Anderson</Box>
              </Box>
              <Box className={styles.streetCityStateParent}>
                <Box className={styles.streetCityState}>
                  Street, City, State
                </Box>
                <Box className={styles.streetCityState1}>
                  Street, City, State
                </Box>
              </Box>
              <Box className={styles.pm}>00:00:00 PM</Box>
            </Box>
          </Box>
          <Box className={styles.statusInfo}>
            <Box className={styles.statusIconsParent}>
              <Box className={styles.statusIcons}>
                <Box className={styles.statusIconsChild} />
              </Box>
              <Box className={styles.inTransit}>In Transit</Box>
            </Box>
            <Box className={styles.duration}>
              <Box className={styles.hours}>2 Hours</Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.eventListSeparator} />
      <Box className={styles.tableData}>
        <Box className={styles.frameParent7}>
          <Box className={styles.rectangleFrame}>
            <Box className={styles.nameBackgroundChild} />
          </Box>
          <Box className={styles.eventNameContainer}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.eventNameContainer1}>
            <Box className={styles.eventName1}>Event name</Box>
          </Box>
          <Box className={styles.nameContainer}>
            <Box className={styles.royAnderson}>Roy Anderson</Box>
          </Box>
          <Box className={styles.nameContainer}>
            <Box className={styles.streetCityState}>Street, City, State</Box>
          </Box>
          <Box className={styles.dropoffContainer}>
            <Box className={styles.streetCityState11}>Street, City, State</Box>
          </Box>
          <Box className={styles.timeContainer}>
            <Box className={styles.pm5}>00:00:00 PM</Box>
          </Box>
          <Box className={styles.statusIcons}>
            <Box className={styles.statusIconsChild} />
          </Box>
          <Box className={styles.statusValueContainer}>
            <Box className={styles.inTransit}>In Transit</Box>
          </Box>
          <Box className={styles.secondEventDuration}>
            <Box className={styles.hours}>2 Hours</Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableData8}>
        <Box className={styles.tableDataChild} />
      </Box>
      <Box className={styles.scroll}>
        <Box className={styles.scrollChild} />
        <Box className={styles.scrollItem} />
      </Box>
    </Box>
  );
};

export default TableRow;
