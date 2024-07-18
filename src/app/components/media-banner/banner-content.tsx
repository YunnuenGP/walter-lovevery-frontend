import React from "react";
import { BannerContentProps } from "./types";

export const BannerContent: React.FC<BannerContentProps> = ({
  children,
  ...props
}) => {
  return (
    <header data-testid="banner-content" {...props}>
      {children}
    </header>
  );
};
