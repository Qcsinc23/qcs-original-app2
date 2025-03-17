import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./Table3.module.css";

export type Table3Type = {
  className?: string;
};

const Table3: FunctionComponent<Table3Type> = ({ className = "" }) => {
  return (
    <Box className={[styles.table, className].join(" ")}>
      <Box className={styles.tableChild} />
      <Box className={styles.header}>
        <Box className={styles.headerChild} />
        <Box className={styles.headerCells}>
          <Box className={styles.deliveryId}>Delivery ID</Box>
        </Box>
        <Box className={styles.headerCells1}>
          <Box className={styles.recipientName}>Recipient Name</Box>
        </Box>
        <Box className={styles.headerCells2}>
          <Box className={styles.recipientName}>Date of Delivery</Box>
        </Box>
        <Box className={styles.status}>Status</Box>
        <Box className={styles.actions}>Actions</Box>
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.dateCells}>
            <Box className={styles.dateContent}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.total} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableRows1}>
        <Box className={styles.tableRowsChild} />
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.dateCells}>
            <Box className={styles.dateContent}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.total} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableRows1}>
        <Box className={styles.tableRowsChild} />
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.frameParent1}>
            <Box className={styles.mmDdYyyyContainer}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.frameInner} />
              </Box>
              <Box className={styles.approved}>Pending</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableRows1}>
        <Box className={styles.tableRowsChild} />
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.dateCells}>
            <Box className={styles.dateContent}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.total} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141-1@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableRows1}>
        <Box className={styles.tableRowsChild} />
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.frameParent7}>
            <Box className={styles.mmDdYyyyWrapper1}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.frameChild2} />
              </Box>
              <Box className={styles.approved}>Rejected</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableRows1}>
        <Box className={styles.tableRowsChild} />
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.frameParent7}>
            <Box className={styles.mmDdYyyyWrapper1}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.frameChild2} />
              </Box>
              <Box className={styles.approved}>Rejected</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableRows1}>
        <Box className={styles.tableRowsChild} />
      </Box>
      <Box className={styles.tableRows}>
        <Box className={styles.tableCells}>
          <Box className={styles.iDCells}>
            <Box className={styles.aa478525}>AA-4785-25</Box>
          </Box>
          <Box className={styles.nameCells}>
            <Box className={styles.martinGomez}>Martin Gomez</Box>
          </Box>
          <Box className={styles.dateCells}>
            <Box className={styles.dateContent}>
              <Box className={styles.mmDdYyyy}>mm-dd-yyyy</Box>
            </Box>
            <Box className={styles.statusCells}>
              <Box className={styles.statusIcons}>
                <Box className={styles.total} />
              </Box>
              <Box className={styles.approved}>Approved</Box>
            </Box>
            <Box className={styles.nameCells}>
              <img
                className={styles.actionCellsChild}
                loading="lazy"
                alt=""
                src="/group-141@2x.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.tableItem} />
    </Box>
  );
};

export default Table3;
