import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { PropsTemplate } from "../Authenticated";

export const GuestTemplate = ({
  children,
}: PropsTemplate) => {
  return (
    <main className="scroll-smooth">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </main>
  );
};
