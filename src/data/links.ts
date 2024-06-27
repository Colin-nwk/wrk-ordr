import { MageDashboardFill } from "../components/icons/MageDashboardFill";
import { Document } from "../components/icons/Document";
import { Briefcase } from "../components/icons/Briefcase";
import { Envelop } from "../components/icons/Envelop";
import { ActivityIcon } from "../components/icons/ActivityIcon";
import { Calender } from "../components/icons/Calender";
import { SettingsIcon } from "../components/icons/SettingsIcon";

// export const generalLinks = [
//   { path: "/", label: "Dashboard", icon: MageDashboardFill },
//   { path: "/contracts", label: "Contracts", icon: Document },
//   { path: "/jobs", label: "Jobs", icon: Briefcase },
//   { path: "/projects", label: "Projects", icon: Briefcase },
//   { path: "/messages", label: "Messages", icon: Envelop },
//   {
//     path: "/reports",
//     label: "Reports",
//     icon: ActivityIcon,
//     sub: [
//       { path: "/", label: "label" },
//       { path: "/", label: "label" },
//       { path: "/", label: "label" },
//     ],
//   },
// ];

// export const planningLinks = [
//   { path: "/schedules", label: "My Schedules", icon: Briefcase },
//   {
//     path: "/planning",
//     label: "Planning",
//     icon: Calender,
//   },
//   { path: "/events", label: "Events", icon: Calender },
// ];

// export const logLinks = [{ path: "/log", label: "Log", icon: Briefcase }];
// export const settingLinks = [
//   {
//     path: "/settings",
//     label: "Settings",
//     icon: SettingsIcon,
//     sub: [
//       { path: "/", label: "companies settings" },
//       { path: "/", label: "connect company" },
//       { path: "/", label: "manage access" },
//       { path: "/", label: "subscription" },
//       { path: "/", label: "user management" },
//     ],
//   },
// ];

import { useTranslation } from "react-i18next";

export const useNavigationLinks = () => {
  const { t } = useTranslation(["sidebar"]);

  const generalLinks = [
    { path: "/", label: t("Dashboard"), icon: MageDashboardFill },
    { path: "/contracts", label: t("Contracts"), icon: Document },
    { path: "/jobs", label: t("Jobs"), icon: Briefcase },
    { path: "/projects", label: t("Projects"), icon: Briefcase },
    { path: "/messages", label: t("Messages"), icon: Envelop },
    {
      path: "/reports",
      label: t("Reports"),
      icon: ActivityIcon,
      sub: [
        { path: "/", label: t("label") },
        { path: "/", label: t("label") },
        { path: "/", label: t("label") },
      ],
    },
  ];

  const planningLinks = [
    { path: "/schedules", label: t("My Schedules"), icon: Briefcase },
    {
      path: "/planning",
      label: t("Planning"),
      icon: Calender,
    },
    { path: "/events", label: t("Events"), icon: Calender },
  ];

  const logLinks = [{ path: "/log", label: t("Log"), icon: Briefcase }];

  const settingLinks = [
    {
      path: "/settings",
      label: t("Settings"),
      icon: SettingsIcon,
      sub: [
        { path: "/", label: t("companies settings") },
        { path: "/", label: t("connect company") },
        { path: "/", label: t("manage access") },
        { path: "/", label: t("subscription") },
        { path: "/", label: t("user management") },
      ],
    },
  ];

  return { generalLinks, planningLinks, logLinks, settingLinks };
};
