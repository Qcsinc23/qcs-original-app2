import { FunctionComponent } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import LeftMenu3 from "../components/LeftMenu3";
import UserContainer from "../components/UserContainer";
import styles from "./AddInventory.module.css";

const AddInventory: FunctionComponent = () => {
  return (
    <Box className={styles.addInventory}>
      <LeftMenu3
        logo="/logo1.svg"
        frameBoxFlex="1"
        navigationAlignSelf="stretch"
        tabsAlignSelf="stretch"
        inventoryTabFlex="1"
      />
      <main className={styles.sidebar}>
        <section className={styles.sidebarContent}>
          <header className={styles.breadcrumbParent}>
            <Box className={styles.breadcrumb}>
              <Box
                className={styles.dashboardInventory}
              >{`Dashboard > Inventory > Add Inventory`}</Box>
            </Box>
            <UserContainer />
          </header>
          <Typography
            className={styles.addNewInventory}
            variant="inherit"
            component="h2"
            sx={{
              fontWeight: "600",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
            }}
          >
            Add New Inventory Item
          </Typography>
          <Box className={styles.form}>
            <Box className={styles.formChild} />
            <Box className={styles.frameParent}>
              <Box className={styles.basicInformationParent}>
                <Typography
                  className={styles.basicInformation}
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "120%",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Basic Information
                </Typography>
                <Box className={styles.frameParent}>
                  <Box className={styles.basicInfoFieldsChild} />
                  <Box className={styles.inputFields}>
                    <TextField
                      className={styles.itemName}
                      placeholder="* Item Name"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                    <TextField
                      className={styles.itemName}
                      placeholder="* SKU/Item Code"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
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
                        borderRadius: "10px",
                        width: "31.91304347826088%",
                        height: "60px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "60px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "60px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "60px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "60px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          fontSize: 18,
                          fontWeight: "Regular",
                          fontFamily: "Poppins",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "30.40000000000009px",
                        },
                      }}
                    >
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent="null"
                      >
                        <MenuItem>* Category</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <TextField
                className={styles.description}
                placeholder="* Description "
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#9e9e9e" },
                  "& .MuiInputBase-root": {
                    height: "120px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    fontSize: "18px",
                  },
                }}
              />
            </Box>
            <Box className={styles.additionalInfo}>
              <Box className={styles.stockInformationParent}>
                <Typography
                  className={styles.stockInformation}
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "34px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Stock Information
                </Typography>
                <Box className={styles.frameParent}>
                  <Box className={styles.basicInfoFieldsChild} />
                  <Box className={styles.inputFields}>
                    <TextField
                      className={styles.quantityAvailable}
                      placeholder="* Quantity Available"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                    <TextField
                      className={styles.quantityAvailable}
                      placeholder="* Reserved Quantity"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                    <TextField
                      className={styles.quantityAvailable}
                      placeholder="* Minimum Required Quantity"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.stockInformationParent}>
                <Typography
                  className={styles.stockInformation}
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "34px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Location Details
                </Typography>
                <Box className={styles.frameParent}>
                  <Box className={styles.basicInfoFieldsChild} />
                  <Box className={styles.primaryLocationParent}>
                    <FormControl
                      className={styles.primaryLocation}
                      variant="standard"
                      sx={{
                        borderColor: "#9e9e9e",
                        borderStyle: "SOLID",
                        borderTopWidth: "1px",
                        borderRightWidth: "1px",
                        borderBottomWidth: "1px",
                        borderLeftWidth: "1px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        width: "48.91304347826087%",
                        height: "60px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "60px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "60px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "60px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "60px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          fontSize: 18,
                          fontWeight: "Regular",
                          fontFamily: "Poppins",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "30px",
                        },
                      }}
                    >
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent="null"
                      >
                        <MenuItem>* Primary Location</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <TextField
                      className={styles.secondaryLocation}
                      placeholder="* Secondary Location (Optional)"
                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                        width: "675px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.stockInformationParent}>
                <Typography
                  className={styles.stockInformation}
                  variant="inherit"
                  component="h3"
                  sx={{
                    fontWeight: "600",
                    lineHeight: "34px",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Supplier Information
                </Typography>
                <Box className={styles.lineWrapper}>
                  <Box className={styles.frameItem} />
                </Box>
                <Box className={styles.supplierInfo}>
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
                      borderRadius: "10px",
                      width: "31.91304347826088%",
                      height: "60px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "60px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "60px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "60px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "60px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        fontSize: 18,
                        fontWeight: "Regular",
                        fontFamily: "Poppins",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "30px",
                      },
                    }}
                  >
                    <InputLabel color="secondary" />
                    <Select
                      color="secondary"
                      disableUnderline
                      displayEmpty
                      IconComponent="null"
                    >
                      <MenuItem>* Supplier Name</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <TextField
                    className={styles.phoneNumber}
                    placeholder="* Phone number"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#9e9e9e" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        fontSize: "18px",
                      },
                      width: "439.4px",
                    }}
                  />
                  <TextField
                    className={styles.emailAddress}
                    placeholder="* Email address"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#9e9e9e" },
                      "& .MuiInputBase-root": {
                        height: "60px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        fontSize: "18px",
                      },
                      width: "440.4px",
                    }}
                  />
                </Box>
              </Box>
              <Box className={styles.additionalInfo}>
                <Box className={styles.pricingHeader}>
                  <Typography
                    className={styles.stockInformation}
                    variant="inherit"
                    component="h3"
                    sx={{
                      fontWeight: "600",
                      lineHeight: "34px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Pricing Information
                  </Typography>
                  <Box className={styles.basicInfoFieldsChild} />
                </Box>
                <Box className={styles.pricingFields}>
                  <Box className={styles.priceInputs}>
                    <TextField
                      className={styles.itemName}
                      placeholder="* Unit Price"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img width="23px" height="23px" src="/vector-2.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          paddingRight: "25.4px",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
                      }}
                    />
                    <TextField
                      className={styles.itemName}
                      placeholder="* Cost Price"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <img width="23px" height="23px" src="/vector-3.svg" />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#9e9e9e" },
                        "& .MuiInputBase-root": {
                          height: "60px",
                          backgroundColor: "#fff",
                          paddingRight: "25.4px",
                          borderRadius: "10px",
                          fontSize: "18px",
                        },
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
                        borderRadius: "10px",
                        width: "31.91304347826088%",
                        height: "60px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "60px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "60px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "60px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "60px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          fontSize: 18,
                          fontWeight: "Regular",
                          fontFamily: "Poppins",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "30.40000000000009px",
                        },
                      }}
                    >
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent="null"
                      >
                        <MenuItem>* Currency</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                  </Box>
                  <Typography
                    className={styles.images}
                    variant="inherit"
                    component="h3"
                    sx={{
                      fontWeight: "600",
                      lineHeight: "120%",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Images
                  </Typography>
                  <Box className={styles.imagesDivider} />
                </Box>
              </Box>
              <Box className={styles.imageUpload}>
                <Box className={styles.imageContainer}>
                  <Box className={styles.frameGroup}>
                    <Box className={styles.rectangleParent}>
                      <Box className={styles.frameInner} />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page11.svg"
                      />
                    </Box>
                    <Box className={styles.rectangleParent}>
                      <Box className={styles.frameInner} />
                      <img
                        className={styles.page1Icon}
                        loading="lazy"
                        alt=""
                        src="/page1-1.svg"
                      />
                    </Box>
                    <Box className={styles.pageControl}>
                      <Box className={styles.rectangleParent}>
                        <Box className={styles.frameInner} />
                        <img
                          className={styles.page1Icon}
                          loading="lazy"
                          alt=""
                          src="/page1-1.svg"
                        />
                      </Box>
                      <img
                        className={styles.pageControlChild}
                        loading="lazy"
                        alt=""
                        src="/group-183.svg"
                      />
                    </Box>
                    <Box className={styles.addMoreWrapper}>
                      <Box className={styles.addMore}>Add More</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.actions}>
                  <Button
                    className={styles.button}
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#9e9e9e",
                      fontSize: "18",
                      borderColor: "#9e9e9e",
                      borderRadius: "10px",
                      "&:hover": { borderColor: "#9e9e9e" },
                      height: 50,
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={styles.button1}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "18",
                      background: "#ff6f3c",
                      borderRadius: "10px",
                      "&:hover": { background: "#ff6f3c" },
                      height: 50,
                    }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </section>
      </main>
    </Box>
  );
};

export default AddInventory;
