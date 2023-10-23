import { Footer } from "../../Footer";
import { Header } from "../../Header";

export interface PropsTemplate {
  children: React.ReactNode;
}

export const AuthenticatedTemplate = ({
  children,
}: PropsTemplate) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};
