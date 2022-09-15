import { FC, ReactElement } from "react";
import Navbar from "./components/Navbar";
import { Layout } from "components/common/Layout/Layout";

interface Props {
  children: ReactElement;
}

const Navigation: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Layout>{children}</Layout>
    </>
  );
};

export default Navigation;
