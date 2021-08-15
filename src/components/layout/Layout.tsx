import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;
import { Footer } from "../common/footer";
import { Nav } from "../common/nav";
function Layout({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
