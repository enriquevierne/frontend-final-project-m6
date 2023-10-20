import { Footer } from "../../Footer";
import { Header } from "../../Header";


export const AuthenticatedTemplate = ({ children }) => {
  return
  <main>
    <Header />
    <div>{children}</div>
    <Footer />
  </main>;
};
