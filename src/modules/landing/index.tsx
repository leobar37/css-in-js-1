import * as React from "react";
import Hero from "./Hero";
import { Layout } from "@app/components/layout";
function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
