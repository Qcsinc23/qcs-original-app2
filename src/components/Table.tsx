import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table.module.css";

export type TableType = {
  className?: string;
};

const Table: FunctionComponent<TableType> = ({ className = "" }) => {
  return (
    <Box className={[styles.table, className].join(" ")}>
      <Box className={styles.tableChild} />
      <Box className={styles.header}>
        <Box className={styles.headerChild} />
        <Box className={styles.taskNameContainer}>
          <input className={styles.colorIndicator} type="checkbox" />
          <Box className={styles.taskName}> Task Name</Box>
        </Box>
        <Box className={styles.headerItems}>
          <Box className={styles.assignee}>Assignee</Box>
        </Box>
        <Box className={styles.headerItems1}>
          <Box className={styles.relatedEvent}>Related Event</Box>
        </Box>
        <Box className={styles.priorityLevel}>Priority Level</Box>
        <Box className={styles.headerItems2}>
          <Box className={styles.dueDate}>Due Date</Box>
        </Box>
        <Box className={styles.headerItems3}>
          <Box className={styles.status}>Status</Box>
        </Box>
        <Box className={styles.actions}>Actions</Box>
      </Box>
      <Box className={styles.tableStructure}>
        <Box className={styles.rowSeparator}>
          <Box className={styles.rowContainer}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.assigneeRow}>
            <Box className={styles.frankShawParent}>
              <Box className={styles.frankShaw}>Frank Shaw</Box>
              <Box className={styles.taskNameHere}>Event name here</Box>
            </Box>
          </Box>
          <Box className={styles.priorityRow}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.priorityIcons} />
            </Box>
            <Box className={styles.high}>High</Box>
          </Box>
          <Box className={styles.dueDateRow}>
            <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
          </Box>
          <Box className={styles.frameParent}>
            <Box className={styles.statusIconParent}>
              <Box className={styles.priorityIconsWrapper}>
                <Box className={styles.statusIconChild} />
              </Box>
              <Box className={styles.high}>Ongoing</Box>
            </Box>
            <Box className={styles.frameWrapper}>
              <Box className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-140.svg"
                />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-1371.svg"
                />
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/group-1381.svg"
                />
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-1391.svg"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableStructure1}>
        <Box className={styles.tableStructureChild} />
      </Box>
      <Box className={styles.tableStructure2}>
        <Box className={styles.frameContainer}>
          <Box className={styles.rowContainer}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.frankShawWrapper}>
            <Box className={styles.frankShaw}>Frank Shaw</Box>
          </Box>
          <Box className={styles.frankShawWrapper}>
            <Box className={styles.taskNameHere}>Event name here</Box>
          </Box>
          <Box className={styles.frameParent2}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.dueDateIcons} />
            </Box>
            <Box className={styles.high}>Medium</Box>
          </Box>
          <Box className={styles.dueDateRow}>
            <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
          </Box>
          <Box className={styles.frameParent3}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.statusIconChild} />
            </Box>
            <Box className={styles.high}>Ongoing</Box>
          </Box>
          <Box className={styles.frameWrapper1}>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-140.svg"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1371.svg"
              />
              <img className={styles.frameInner} alt="" src="/group-1381.svg" />
              <img className={styles.groupIcon} alt="" src="/group-1391.svg" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableStructure1}>
        <Box className={styles.tableStructureChild} />
      </Box>
      <Box className={styles.tableStructure2}>
        <Box className={styles.frameParent5}>
          <Box className={styles.frameWrapper2}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.frankShawContainer}>
            <Box className={styles.frankShaw}>Frank Shaw</Box>
          </Box>
          <Box className={styles.eventNameHereContainer}>
            <Box className={styles.taskNameHere}>Event name here</Box>
          </Box>
          <Box className={styles.frameParent7}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.dueDateIcons} />
            </Box>
            <Box className={styles.high}>Medium</Box>
          </Box>
          <Box className={styles.ddMmYyyyContainer}>
            <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
          </Box>
          <Box className={styles.frameParent8}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.statusIcons} />
            </Box>
            <Box className={styles.high}>Upcoming</Box>
          </Box>
          <Box className={styles.frameWrapper3}>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameChild7}
                loading="lazy"
                alt=""
                src="/group-140-2.svg"
              />
              <img
                className={styles.frameChild8}
                loading="lazy"
                alt=""
                src="/group-137-2.svg"
              />
            </Box>
          </Box>
          <Box className={styles.frameWrapper4}>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-138-2.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-139-2.svg" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableStructure1}>
        <Box className={styles.tableStructureChild} />
      </Box>
      <Box className={styles.tableStructure2}>
        <Box className={styles.frameParent5}>
          <Box className={styles.frameWrapper2}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.frankShawContainer}>
            <Box className={styles.frankShaw}>Frank Shaw</Box>
          </Box>
          <Box className={styles.eventNameHereContainer}>
            <Box className={styles.taskNameHere}>Event name here</Box>
          </Box>
          <Box className={styles.frameParent7}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.dueDateIcons} />
            </Box>
            <Box className={styles.high}>Medium</Box>
          </Box>
          <Box className={styles.ddMmYyyyContainer}>
            <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
          </Box>
          <Box className={styles.frameParent8}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.statusIcons} />
            </Box>
            <Box className={styles.high}>Upcoming</Box>
          </Box>
          <Box className={styles.frameWrapper3}>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameChild7}
                loading="lazy"
                alt=""
                src="/group-140-2.svg"
              />
              <img
                className={styles.frameChild8}
                loading="lazy"
                alt=""
                src="/group-137-2.svg"
              />
            </Box>
          </Box>
          <Box className={styles.frameWrapper4}>
            <Box className={styles.frameGroup}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-138-2.svg"
              />
              <img className={styles.groupIcon} alt="" src="/group-139-2.svg" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableStructure1}>
        <Box className={styles.tableStructureChild} />
      </Box>
      <Box className={styles.tableStructure}>
        <Box className={styles.frameParent17}>
          <Box className={styles.frameWrapper8}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.frameWrapper9}>
            <Box className={styles.frankShawParent}>
              <Box className={styles.frankShaw}>Frank Shaw</Box>
              <Box className={styles.taskNameHere}>Event name here</Box>
            </Box>
          </Box>
          <Box className={styles.frameParent19}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.frameChild17} />
            </Box>
            <Box className={styles.high}>Low</Box>
          </Box>
          <Box className={styles.frameParent20}>
            <Box className={styles.dueDateRow}>
              <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
            </Box>
            <Box className={styles.statusRowParent}>
              <Box className={styles.statusIconParent}>
                <Box className={styles.priorityIconsWrapper}>
                  <Box className={styles.statusIcons} />
                </Box>
                <Box className={styles.high}>Upcoming</Box>
              </Box>
              <Box className={styles.progressRow}>
                <Box className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-140-2.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-137-2.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-138-2.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    loading="lazy"
                    alt=""
                    src="/group-139-2.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableStructure1}>
        <Box className={styles.tableStructureChild} />
      </Box>
      <Box className={styles.tableStructure}>
        <Box className={styles.frameParent17}>
          <Box className={styles.frameWrapper8}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.frameWrapper9}>
            <Box className={styles.frankShawParent}>
              <Box className={styles.frankShaw}>Frank Shaw</Box>
              <Box className={styles.taskNameHere}>Event name here</Box>
            </Box>
          </Box>
          <Box className={styles.frameParent19}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.frameChild17} />
            </Box>
            <Box className={styles.high}>Low</Box>
          </Box>
          <Box className={styles.frameParent20}>
            <Box className={styles.dueDateRow}>
              <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
            </Box>
            <Box className={styles.frameParent26}>
              <Box className={styles.statusIconParent}>
                <Box className={styles.priorityIconsWrapper}>
                  <Box className={styles.frameChild23} />
                </Box>
                <Box className={styles.high}>Not Started</Box>
              </Box>
              <Box className={styles.progressRow}>
                <Box className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-140.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1371.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1381.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-1391.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableStructure1}>
        <Box className={styles.tableStructureChild} />
      </Box>
      <Box className={styles.tableStructure}>
        <Box className={styles.frameParent17}>
          <Box className={styles.frameWrapper8}>
            <Box className={styles.columnContainer}>
              <input className={styles.cellContainer} type="checkbox" />
              <Box className={styles.taskNameHere}>Task name here</Box>
            </Box>
          </Box>
          <Box className={styles.frameWrapper9}>
            <Box className={styles.frankShawParent}>
              <Box className={styles.frankShaw}>Frank Shaw</Box>
              <Box className={styles.taskNameHere}>Event name here</Box>
            </Box>
          </Box>
          <Box className={styles.frameParent19}>
            <Box className={styles.priorityIconsWrapper}>
              <Box className={styles.frameChild17} />
            </Box>
            <Box className={styles.high}>Low</Box>
          </Box>
          <Box className={styles.frameParent20}>
            <Box className={styles.dueDateRow}>
              <Box className={styles.ddMmYyyy}>dd-mm-yyyy</Box>
            </Box>
            <Box className={styles.statusRowParent}>
              <Box className={styles.statusIconParent}>
                <Box className={styles.priorityIconsWrapper}>
                  <Box className={styles.frameChild23} />
                </Box>
                <Box className={styles.high}>Upcoming</Box>
              </Box>
              <Box className={styles.progressRow}>
                <Box className={styles.frameGroup}>
                  <img
                    className={styles.frameChild}
                    loading="lazy"
                    alt=""
                    src="/group-140.svg"
                  />
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/group-1371.svg"
                  />
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-1381.svg"
                  />
                  <img
                    className={styles.groupIcon}
                    alt=""
                    src="/group-1391.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableItem} />
    </Box>
  );
};

export default Table;
