import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
