import * as React from "react";

interface ILogo {
  margin: string;
  width: string;
  height: string;
}

export const logoProps: ILogo = {
  width: "150px",
  height: "auto",
  margin: "0 3.5em",
};

export const drawerProps: React.CSSProperties = {
  height: "150px",
  backgroundImage: `url('./images/aside.jpg')`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "70px",
};
