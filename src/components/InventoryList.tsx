import { FunctionComponent } from "react";
import {
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import LeftMenu5 from "./LeftMenu5";
import TopNav from "./TopNav";
import Table2 from "./Table2";
import styles from "./InventoryList.module.css";

export type InventoryListType = {
  className?: string;
};

const InventoryList: FunctionComponent<InventoryListType> = ({
  className = "",
}) => {
  return (
    <form className={[styles.inventoryList, className].join(" ")}>
      <LeftMenu5 />
      <TopNav />
      <Box className={styles.actions}>
        <Typography
          className={styles.inventoryManagement}
          component="h2"
          sx={{
            fontFamily: "var(--font-poppins)",
            fontWeight: "600",
            fontSize: "var(--font-size-11xl)",
            letterSpacing: "-0.03em",
          }}
        >
          Inventory Management
        </Typography>
        <Button
          className={styles.button}
          startIcon={
            <img width="15px" height="15px" src="/edit--add-plus1.svg" />
          }
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#1a3e59",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#1a3e59" },
            width: 200,
            height: 50,
          }}
        >
          Add New Item
        </Button>
        <Button
          className={styles.button1}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          Activate
        </Button>
        <Button
          className={styles.button2}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          Deactivate
        </Button>
        <Button
          className={styles.button3}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#9e9e9e",
            fontSize: "18",
            borderColor: "#9e9e9e",
            borderRadius: "10px",
            "&:hover": { borderColor: "#9e9e9e" },
            width: 140,
            height: 50,
          }}
        >
          Export
        </Button>
      </Box>
      <section className={styles.filter}>
        <Box className={styles.filterChild} />
        <TextField
          className={styles.enterName}
          placeholder="Search by name, SKU, or category"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <img width="18px" height="18px" src="/vector-2.svg" />
            ),
          }}
          sx={{
            "& fieldset": { borderColor: "#9e9e9e" },
            "& .MuiInputBase-root": {
              height: "50px",
              backgroundColor: "#fff",
              paddingLeft: "20px",
              borderRadius: "8px",
              fontSize: "18px",
            },
            "& .MuiInputBase-input": { paddingLeft: "10px", color: "#9e9e9e" },
            width: "385px",
          }}
        />
        <FormControl
          className={styles.category}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Category</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.supplier}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Supplier</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.location}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "14.864864864864863%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Location</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <FormControl
          className={styles.status}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            width: "10.81081081081081%",
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
              fontWeight: "Regular",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "20px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Status</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <Button
          className={styles.button4}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#ff6f3c",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#ff6f3c" },
            width: 125,
            height: 50,
          }}
        >
          Search
        </Button>
      </section>
      <Typography
        className={styles.inventoryList1}
        component="h2"
        sx={{
          fontFamily: "var(--font-poppins)",
          fontWeight: "600",
          fontSize: "var(--font-size-11xl)",
          letterSpacing: "-0.03em",
        }}
      >
        Inventory List
      </Typography>
      <Box className={styles.sortFilter}>
        <Box className={styles.sortBy}>Sort by:</Box>
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
            width: "67.41573033707866%",
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
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Default</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </Box>
      <Table2 />
      <footer className={styles.pagination}>
        <Box className={styles.result1Container}>
          <Typography
            variant="inherit"
            component="span"
            sx={{ fontFamily: "var(--font-poppins)" }}
          >{`Result: `}</Typography>
          <Typography
            variant="inherit"
            component="span"
            sx={{ fontFamily: "var(--font-poppins)", fontWeight: "600" }}
          >
            1 - 10
          </Typography>
          <Typography
            variant="inherit"
            component="span"
            sx={{ fontFamily: "var(--font-poppins)" }}
          >{` of 50 `}</Typography>
        </Box>
        <FormControl
          className={styles.pageInput}
          variant="standard"
          sx={{
            borderColor: "#9e9e9e",
            borderStyle: "SOLID",
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "10px",
            width: "80px",
            height: "45px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "45px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "45px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "45px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "45px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#3f3f3f",
              fontSize: 18,
              fontWeight: "SemiBold",
              fontFamily: "Poppins",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "14px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="12px"
                height="9px"
                src="/next-page.svg"
                style={{ marginRight: "10px" }}
              />
            )}
          >
            <MenuItem>10</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <Box className={styles.paginationButtons}>
          <Button
            className={styles.pageNumberButtons}
            disableElevation
            variant="contained"
            sx={{
              background: "#ff6f3c",
              borderRadius: "10px",
              "&:hover": { background: "#ff6f3c" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons1}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons2}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons3}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Button
            className={styles.pageNumberButtons4}
            disableElevation
            variant="contained"
            sx={{
              background: "#fff",
              borderRadius: "10px",
              "&:hover": { background: "#fff" },
              width: 45,
              height: 45,
            }}
          />
          <Box className={styles.pageNumber}>01</Box>
          <Box className={styles.pageNumberButtons5}>02</Box>
          <Box className={styles.pageNumberButtons6}>03</Box>
          <Box className={styles.pageNumberButtons7}>04</Box>
          <Box className={styles.pageNumberButtons8}>05</Box>
          <Box className={styles.pageNumberButtons9}>
            <Box className={styles.pageButton} />
            <img
              className={styles.pageNumberButtonsChild}
              loading="lazy"
              alt=""
              src="/arrow-7.svg"
            />
          </Box>
          <Box className={styles.pageNumberButtons10}>
            <Box className={styles.pageNumberButtonsItem} />
            <img
              className={styles.pageNumberButtonsInner}
              alt=""
              src="/arrow-8.svg"
            />
          </Box>
        </Box>
      </footer>
    </form>
  );
};

export default InventoryList;
