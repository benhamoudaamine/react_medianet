import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import SaasPage from "../pages/dashboard/SaasPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
//import DocumentationPage from "../pages/documentation/DocumentationPage";
import AddUsers from "../pages/dashboard/AddUsers";

const appRoutes: RouteType[] = [
  //{
   // index: true,
    //element: <HomePage />,
    //state: "home"
  //},
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "ADMIN",
      icon: <FileDownloadOutlinedIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
   
    child: [
      {
        index: true,
        element: <DashboardIndex />,
        state: "dashboard.index"
      },
     // {
       // path: "/dashboard/default",
       // element: <DefaultPage />,
       // state: "dashboard.default",
       // sidebarProps: {
       //   displayText: "TACHE"
        //},
      //},
      {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        sidebarProps: {
          displayText: "USERS "
        }
      },
      {
        path: "/dashboard/AddUsers",
        element: <AddUsers/>,
        state: "dashboard.addusers",
        sidebarProps: {
          displayText: "AddUser"
        }
      },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "CLIENTS"
        }
      }
      
      
    ]
  },
 // {
  ////  path: "/component",
    //element: <ComponentPageLayout />,
    //state: "component",
   // sidebarProps: {
    //  displayText: "Components",
      //: <AppsOutlinedIcon />
   // },
   //  child: [
    //  {
   //     path: "/component/alert",
      //  element: <AlertPage />,
      //  state: "component.alert",
      ////  sidebarProps: {
      //    displayText: "Alert"
       // },
      //},
      //{
       // path: "/component/button",
       /// element: <ButtonPage />,
        ///state: "component.button",
        ///sidebarProps: {
        //  displayText: "Button"
      //  }
      //}
  //  ]
 // },
  /*{
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "ASK",
      icon: <ArticleOutlinedIcon />
    }
  },*/
  //{
  //  path: "/changelog",
  //  element: <ChangelogPage />,
   // state: "changelog",
    //sidebarProps: {
    //  displayText: "Changelog",
    //  icon: <FormatListBulletedOutlinedIcon />
   // }
 // }
];

export default appRoutes;