import c from "classnames";
import {
  IconAlert,
  IconContract,
  IconFlagWind,
  IconNetwork,
  IconWallet,
} from "../../../public/assets/images/icons";
import styles from "./constant.module.scss";

export const navigationRoutes = [
  {
    href: "/network",
    icon: (isSelected: boolean) => (
      <IconNetwork
        className={c(styles.icon, isSelected && styles.isSelected)}
      />
    ),
    text: "Networks",
  },
  {
    href: "/wallets",
    icon: (isSelected: boolean) => (
      <IconWallet className={c(styles.icon, isSelected && styles.isSelected)} />
    ),
    text: "Wallets",
  },
  {
    href: "/contracts",
    icon: (isSelected: boolean) => (
      <IconContract
        className={c(styles.icon, isSelected && styles.isSelected)}
      />
    ),
    text: "Contracts",
  },
  {
    href: "/events",
    icon: (isSelected: boolean) => (
      <IconFlagWind
        className={c(styles.icon, isSelected && styles.isSelected)}
      />
    ),
    text: "Events",
  },
  {
    href: "/alerts",
    icon: (isSelected: boolean) => (
      <IconAlert className={c(styles.icon, isSelected && styles.isSelected)} />
    ),
    text: "Alerts",
  },
];
