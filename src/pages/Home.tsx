import {
  IonContent,
  IonButton,
  IonIcon,
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuToggle,
  IonItem,
  IonMenu,
  IonSplitPane,
  IonToggle,
  IonList,
  IonLabel,
  IonSearchbar
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import {
  checkboxOutline,
  homeOutline,
  logOut,
  logOutOutline,
  logOutSharp,
  newspaperOutline,
  personCircleOutline,
  settingsOutline,
  syncOutline,
  logoGithub,
  moon,
  sunnyOutline,
  moonOutline,
} from "ionicons/icons";
import { useIonRouter, useIonLoading } from "@ionic/react";
import { useState } from "react";

const Home: React.FC = () => {
  const [isLoading, isLoaded] = useIonLoading();
  const [light, setLight] = useState(true);

  const router = useIonRouter();
  const logOutPage = async () => {
    await isLoading("Logging out.");
    setTimeout(() => {
      isLoaded();
      router.push("/", "root");
    }, 3000);
  };
  const switchColors = () => {
    document.body.classList.toggle("dark");
    setLight(!light);
  };
  const paths = [
    {
      name: "Home",
      url: "/home",
      icon: homeOutline,
    },
    {
      name: "Repositories",
      url: "/home",
      icon: syncOutline,
    },
    {
      name: "Settings",
      url: "/home",
      icon: settingsOutline,
    },
  ];
  return (
    <>
      <IonSplitPane when="lg" contentId="main" className="stuff">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color="dark">
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {paths.map((path, index) => {
              return (
                <>
                  <IonMenuToggle autoHide={false}>
                    <IonItem
                      detail={true}
                      routerLink={path.url}
                      routerDirection="none"
                      key={index}
                    >
                      {<IonIcon slot="start" icon={path.icon}></IonIcon>}
                      {path.name}
                    </IonItem>
                  </IonMenuToggle>
                </>
              );
            })}
            <IonList>
              <IonItem>
                <IonIcon
                  slot="start"
                  icon={light ? moonOutline : sunnyOutline}
                />
                <IonLabel>{light ? "Dark Mode" : "Light Mode"}</IonLabel>
                <IonToggle
                  slot="end"
                  name="darkMode"
                  onIonChange={switchColors}
                  color={light ? "light" : "dark"}
                />
              </IonItem>
            </IonList>

            <IonMenuToggle autoHide={false} onClick={logOutPage}>
              <IonItem detail={true} routerDirection="none" routerLink="/home">
                {<IonIcon slot="start" icon={logOutOutline}></IonIcon>}
                Logout
              </IonItem>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonPage id="main">
          <IonHeader>
            <IonToolbar color={"dark"}>
              <IonButtons slot="start">
                <IonMenuButton color={"light"}></IonMenuButton>
              </IonButtons>
              <div className="header">
                <IonIcon
                  className="git-logo-header"
                  icon={logoGithub}
                  color={"light"}
                ></IonIcon>
                <IonTitle>GitHub</IonTitle>
              </div>
            </IonToolbar>
            <IonToolbar color={"dark"}>
              <IonSearchbar />
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            Tap the button in the toolbar to open the menu.
          </IonContent>
        </IonPage>
      </IonSplitPane>
    </>
  );
};

export default Home;
