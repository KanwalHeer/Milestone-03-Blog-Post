import Navbar from "../components/header/header";
import Footer from "../components/footer/footer";
export default function BlogLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
       <Navbar/>
       {children}
       <Footer/>
      </div>
    );
  }