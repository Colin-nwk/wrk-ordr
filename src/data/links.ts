import { MageDashboardFill } from "../components/icons/MageDashboardFill";
import { Document } from "../components/icons/Document";
import { Briefcase } from "../components/icons/Briefcase";
import { Envelop } from "../components/icons/Envelop";
import { ActivityIcon } from "../components/icons/ActivityIcon";
import { Calender } from "../components/icons/Calender";
import { SettingsIcon } from "../components/icons/SettingsIcon";

export const generalLinks = [
  { path: "/", label: "Dashboard", icon: MageDashboardFill },
  { path: "/contracts", label: "Contracts", icon: Document },
  { path: "/jobs", label: "Jobs", icon: Briefcase },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/messages", label: "Messages", icon: Envelop },
  {
    path: "/reports",
    label: "Reports",
    icon: ActivityIcon,
    sub: [
      { path: "/", label: "label" },
      { path: "/", label: "label" },
      { path: "/", label: "label" },
    ],
  },
];

export const planningLinks = [
  { path: "/schedules", label: "My Schedules", icon: Briefcase },
  {
    path: "/planning",
    label: "Planning",
    icon: Calender,
  },
  { path: "/events", label: "Events", icon: Calender },
];

export const logLinks = [{ path: "/log", label: "Log", icon: Briefcase }];
export const settingLinks = [
  {
    path: "/settings",
    label: "Settings",
    icon: SettingsIcon,
    sub: [
      { path: "/", label: "companies settings" },
      { path: "/", label: "connect company" },
      { path: "/", label: "manage access" },
      { path: "/", label: "subscription" },
      { path: "/", label: "user management" },
    ],
  },
];
