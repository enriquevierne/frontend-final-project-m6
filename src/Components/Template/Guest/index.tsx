import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { PropsTemplate } from "../Authenticated";

export const GuestTemplate = ({
  children,
}: PropsTemplate) => {
  return (
    <main className="bg-grey2">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </main>
  );
};
