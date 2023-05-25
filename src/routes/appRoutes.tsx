import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";

import DashboardIndexx from "../pages/dashboard2/DashboardIndexx";
import DashboardPageLayoutt from "../pages/dashboard2/DashboardPageLayoutt";
import Ask from "../pages/dashboard/Ask";
import DashboardIndexxx from "../pages/dashboard3/DashboardIndexxx";
import DashboardPageLayouttt from "../pages/dashboard3/DashboardPageLayouttt";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import ListConge from "../pages/dashboard/ListConge"; 
import AddUsers from "../pages/dashboard/AddUsers"; 
import SaasPage from "../pages/dashboard/SaasPage";
import EditUser from "../pages/dashboard/EditUser"; 

import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import Accprefcon from "../pages/dashboard2/Accprefcon";
import Affprojets from "../pages/dashboard2/Affprojets";
import Demancong from "../pages/dashboard2/Demancong";
import Projet from "../pages/dashboard2/Projet"; 

import Conscong from "../pages/dashboard3/Conscong";
import Constache from "../pages/dashboard3/Constache";
import Demcng from "../pages/dashboard3/demcng";


const appRoutes: RouteType[] = [
  //{
   // index: true,
    //element: <HomePage />,
    //state: "home"
  //},
  // {
  //   path: "/installation",
  //   element: <InstallationPage />,
  //   state: "installation",
  //   sidebarProps: {
  //     displayText: "MEDIANET",
  //     icon: <FileDownloadOutlinedIcon />
  //   }
  // },
 
 
 //--------------Dashboard_Admin------------//

  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Admin",
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
          displayText: "Liste des employées  "
        }
      },
      {
        path: "/dashboard/adduser",
        element: <AddUsers />,
        state: "dashboard.adduser",
        
      },
      // {
      //   path: "/dashboard/edit-user/:id",
      //   element: <EditUser />,
      //   state: "dashboard.edit-user",
       
      // },
      {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        sidebarProps: {
          displayText: "client"
        }
      }, 
     
    //  {
    //     path: "/dashboard/ASK",
    //     element: <Ask />,
    //     state: "dashboard.Ask",
    //     sidebarProps: {
    //       displayText: "importer liste des congées "
    //     }
    //   }

       {
        path: "/dashboard/listconge",
        element: <ListConge />,
        state: "dashboard.listconge",
        sidebarProps: {
          displayText: "List_conge"
        }
       }
    ]

    
  },

 //------------Dashboard_Manager------------//

  {
    path: "/dashboard2",
    element: <DashboardPageLayoutt />,
    state: "dashboard2",
    sidebarProps: {
      displayText: "Manager",
      icon: <DashboardOutlinedIcon />
    },
    
    child: [
      {
        index: true,
        element: <DashboardIndexx/>,
        state: "dashboard2.index"
        
      },
      {
        path: "/dashboard2/projet", 
        element: <Projet/>,
        state: "dashboard2.projet", 
        sidebarProps: {
          displayText: "Improt_Projet"
        },
        
      },
      {
       path: "/dashboard2/accprefcon",
        element: <Accprefcon />,
        state: "dashboard2.accprefcon",
        sidebarProps: {
          displayText: "ACC /REF"
        },
      },
      {
        path: "/dashboard2/affprojets",
        element: <Affprojets />,
        state: "dashboard2.affprojets",
        sidebarProps: {
          displayText: "Envoyer T   "
        }
      },
      {
        path: "/dashboard2/demancong",
        element: <Demancong />,
        state: "dashboard2.demancong",
        sidebarProps: {
          displayText: "Demander du congée"
        }
      }
    ]
  },
  
  
  //-------------Dashboard_Designeur------------//
  
  {
    path: "/dashboard3",
    element: <DashboardPageLayouttt/>,
    state: "dashboard3",
    sidebarProps: {
      displayText: "désigneur",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      {
        index: true,
        element: <DashboardIndexxx/>,
        state: "dashboard3.index"
      },
      {
       path: "/dashboard3/conscong",
        element: <Conscong />,
        state: "dashboard3.conscong",
        sidebarProps: {
          displayText: "Liste Congées "
        },
      },
      {
        path: "/dashboard3/constache",
        element: <Constache />,
        state: "dashboard3.Constache",
        sidebarProps: {
          displayText: "Liste Taches "
        }
      },
      {
        path: "/dashboard3/demcng",
        element: <Demcng />,
        state: "dashboard3.demcng",
        sidebarProps: {
          displayText: "Demander congées"
        }
      }
    ]},
  // {
  //   path: "/documentation",
  //   element: <DocumentationPage />,
  //   state: "documentation",
  //   sidebarProps: {
  //     displayText: "ASK",
  //     icon: <ArticleOutlinedIcon />
  //   }
  // },
  //{
  //  path: "/changelog",
  //  element: <ChangelogPage />,
   // state: "changelog",
    //sidebarProps: {
    //  displayText: "Changelog",
    //  icon: <FormatListBulletedOutlinedIcon />
   // }
  //}
];

export default appRoutes;