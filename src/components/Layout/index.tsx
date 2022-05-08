import Header from "@/components/Header";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
