import React from "react";
import { HeaderComponent } from "./HeaderStyled";

export const Header = ({ time }: { time: number }) => {
  return <HeaderComponent>{time}</HeaderComponent>;
};
