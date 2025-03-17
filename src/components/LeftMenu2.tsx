import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styles from "./LeftMenu2.module.css";

export type LeftMenu2Type = {
  className?: string;
};

const LeftMenu2: FunctionComponent<LeftMenu2Type> = ({ className = "" }) => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // Helper function to determine if a path is active or in active path
  const isActive = (path: string) => location.pathname === path;
  const isInActivePath = (path: string) => location.pathname.includes(path);

  // Toggle submenu visibility
  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <Box className={[styles.leftMenu, className].join(" ")}>
      <Box className={styles.leftMenuChild} />
      <Link to="/dashboard">
        <img className={styles.logoIcon} loading="lazy" alt="Logo" src="/logo1.svg" />
      </Link>
      <Box className={styles.navigation}>
        <Box className={styles.primaryNavigation}>
          <Box className={styles.subNavigation}>
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1.svg"
            />
            <img
              className={styles.layer1Icon}
              loading="lazy"
              alt=""
              src="/layer-1-1.svg"
            />
            <img
              className={styles.subNavigationChild}
              loading="lazy"
              alt=""
              src="/group-107.svg"
            />
            <Box className={styles.layer1}>
              <img
                className={styles.layer1Child}
                loading="lazy"
                alt=""
                src="/group-111.svg"
              />
            </Box>
            <img
              className={styles.subNavigationItem}
              loading="lazy"
              alt=""
              src="/group-113.svg"
            />
            <img
              className={styles.subNavigationItem}
              loading="lazy"
              alt=""
              src="/group-114.svg"
            />
            <img
              className={styles.vectorIcon}
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
          <Box className={styles.dashboardLinks}>
            <Link 
              to="/dashboard" 
              className={`${styles.dashboard} ${isActive('/dashboard') ? styles.activeLink : ''}`}
            >
              Dashboard
            </Link>
            
            {/* Events with submenu */}
            <Box className={styles.menuWithSubmenu}>
              <Box 
                className={`${styles.events} ${isInActivePath('/events') || isInActivePath('/event-') ? styles.activeLink : ''}`}
                onClick={() => toggleSubmenu('events')}
              >
                Events
              </Box>
              
              {(expandedMenu === 'events' || isInActivePath('/events') || isInActivePath('/event-')) && (
                <Box className={styles.submenuContainer}>
                  <Link 
                    to="/events-list" 
                    className={`${styles.submenuItem} ${isActive('/events-list') ? styles.activeSubmenuItem : ''}`}
                  >
                    Event List
                  </Link>
                  <Link 
                    to="/event-calendar" 
                    className={`${styles.submenuItem} ${isActive('/event-calendar') ? styles.activeSubmenuItem : ''}`}
                  >
                    Event Calendar
                  </Link>
                </Box>
              )}
            </Box>
            
            <Link 
              to="/logistics-overview" 
              className={`${styles.logistics} ${isActive('/logistics-overview') ? styles.activeLink : ''}`}
            >
              Logistics
            </Link>
            
            {/* Inventory with submenu */}
            <Box className={styles.menuWithSubmenu}>
              <Box 
                className={`${styles.inventory} ${isInActivePath('/inventory') ? styles.activeLink : ''}`}
                onClick={() => toggleSubmenu('inventory')}
              >
                Inventory
              </Box>
              
              {(expandedMenu === 'inventory' || isInActivePath('/inventory')) && (
                <Box className={styles.submenuContainer}>
                  <Link 
                    to="/inventory-details" 
                    className={`${styles.submenuItem} ${isActive('/inventory-details') ? styles.activeSubmenuItem : ''}`}
                  >
                    Inventory Details
                  </Link>
                  <Link 
                    to="/inventory-alerts-notifications" 
                    className={`${styles.submenuItem} ${isActive('/inventory-alerts-notifications') ? styles.activeSubmenuItem : ''}`}
                  >
                    Alerts & Notifications
                  </Link>
                  <Link 
                    to="/add-inventory" 
                    className={`${styles.submenuItem} ${isActive('/add-inventory') ? styles.activeSubmenuItem : ''}`}
                  >
                    Add Inventory
                  </Link>
                </Box>
              )}
            </Box>
            
            {/* Deliveries with submenu */}
            <Box className={styles.menuWithSubmenu}>
              <Box 
                className={`${styles.deliveries} ${isInActivePath('/proof-of-delivery') || isInActivePath('/delivery-') ? styles.activeLink : ''}`}
                onClick={() => toggleSubmenu('deliveries')}
              >
                Deliveries
              </Box>
              
              {(expandedMenu === 'deliveries' || isInActivePath('/proof-of-delivery') || isInActivePath('/delivery-')) && (
                <Box className={styles.submenuContainer}>
                  <Link 
                    to="/proof-of-delivery" 
                    className={`${styles.submenuItem} ${isActive('/proof-of-delivery') ? styles.activeSubmenuItem : ''}`}
                  >
                    Proof of Delivery
                  </Link>
                  <Link 
                    to="/add-proof-of-delivery" 
                    className={`${styles.submenuItem} ${isActive('/add-proof-of-delivery') ? styles.activeSubmenuItem : ''}`}
                  >
                    Add POD
                  </Link>
                  <Link 
                    to="/status-updates" 
                    className={`${styles.submenuItem} ${isActive('/status-updates') ? styles.activeSubmenuItem : ''}`}
                  >
                    Status Updates
                  </Link>
                </Box>
              )}
            </Box>
            
            <Link 
              to="/reports" 
              className={`${styles.reports} ${isActive('/reports') ? styles.activeLink : ''}`}
            >
              Reports
            </Link>
            
            <Link 
              to="/users" 
              className={`${styles.users} ${isActive('/users') ? styles.activeLink : ''}`}
            >
              Users
            </Link>
            
            <Link 
              to="/settings" 
              className={`${styles.settings} ${isActive('/settings') ? styles.activeLink : ''}`}
            >
              Settings
            </Link>
          </Box>
        </Box>
        <Box className={styles.content}>
          <Box className={styles.frameParent}>
            <Box className={styles.rectangleParent}>
              <Box className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
            <Box className={styles.rectangleParent}>
              <Box className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
            <Box className={styles.rectangleParent}>
              <Box className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
            <Box className={styles.rectangleParent}>
              <Box className={styles.frameChild} />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/arrow-4.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftMenu2;
