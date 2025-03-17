import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table4.module.css";

export type Table4Type = {
  className?: string;
};

const Table4: FunctionComponent<Table4Type> = ({ className = "" }) => {
  return (
    <section className={[styles.table, className].join(" ")}>
      <Box className={styles.tableChild} />
      <Box className={styles.header}>
        <Box className={styles.headerChild} />
        <Box className={styles.headerItems}>
          <Box className={styles.deliveryId}>Delivery ID</Box>
        </Box>
        <Box className={styles.headerItems1}>
          <Box className={styles.recipientName}>Recipient Name</Box>
        </Box>
        <Box className={styles.headerItems2}>
          <Box className={styles.recipientName}>Date of Delivery</Box>
        </Box>
        <Box className={styles.status}>Status</Box>
        <Box className={styles.actions}>Actions</Box>
      </Box>
      <Box className={styles.tableContent}>
        <Box className={styles.firstRow}>
          <Box className={styles.firstRowData}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.deliveryActions}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.dateStatusActions}>
            <Box className={styles.deliveryDate}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.statusIconChild} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.deliveryActions}>
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.rowSeparator}>
        <Box className={styles.rowSeparatorChild} />
      </Box>
      <Box className={styles.tableRow}>
        <Box className={styles.tableData}>
          <Box className={styles.nameDateRow}>
            <Box className={styles.nameDate}>
              <Box className={styles.lineParent}>
                <Box className={styles.frameChild} />
                <Box className={styles.frameItem} />
                <Box className={styles.frameInner} />
                <Box className={styles.lineDiv} />
                <Box className={styles.frameChild1} />
                <Box className={styles.aA}>
                  <Box className={styles.aa478525}>AA-4785-25</Box>
                  <Box className={styles.aa478525}>AA-4785-25</Box>
                  <Box className={styles.aa478525}>AA-4785-25</Box>
                  <Box className={styles.aa478525}>AA-4785-25</Box>
                  <Box className={styles.aa478525}>AA-4785-25</Box>
                  <Box className={styles.aa478525}>AA-4785-25</Box>
                </Box>
              </Box>
              <Box className={styles.nameDateItems}>
                <Box className={styles.martinGomez}>Martin Gomez</Box>
                <Box className={styles.martinGomez}>Martin Gomez</Box>
                <Box className={styles.martinGomez}>Martin Gomez</Box>
                <Box className={styles.martinGomez}>Martin Gomez</Box>
                <Box className={styles.martinGomez}>Martin Gomez</Box>
                <Box className={styles.martinGomez}>Martin Gomez</Box>
              </Box>
              <Box className={styles.nameDateItems}>
                <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
                <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
                <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
                <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
                <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
                <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.statusIconsRow}>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.statusIconChild} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.frameChild2} />
              </Box>
              <Box className={styles.pending}>Pending</Box>
            </Box>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.statusIconChild} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.frameChild4} />
              </Box>
              <Box className={styles.rejected}>Rejected</Box>
            </Box>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.frameChild4} />
              </Box>
              <Box className={styles.rejected}>Rejected</Box>
            </Box>
            <Box className={styles.deliveryStatus}>
              <Box className={styles.statusIcon}>
                <Box className={styles.statusIconChild} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
          </Box>
          <Box className={styles.actionsRow}>
            <Box className={styles.frameParent}>
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
              <img
                className={styles.deliveryActionsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableItem} />
    </section>
  );
};

export default Table4;
