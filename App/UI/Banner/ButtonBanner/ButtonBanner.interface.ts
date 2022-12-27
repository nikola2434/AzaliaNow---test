import { IBannerProps } from "./../Banner";
import { ButtonHTMLAttributes } from "react";

interface IButtonBannerProps {
  typeButton: "light" | "dark";
}

type IButtonHTML = ButtonHTMLAttributes<HTMLButtonElement> & IButtonBannerProps;

export interface IButtonBanner extends IButtonHTML {}
