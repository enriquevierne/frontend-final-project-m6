import { useEffect } from "react";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { useNavigate } from "react-router-dom";

export interface PropsTemplate {
  children: React.ReactNode;
}

export const AuthenticatedTemplate = ({ children }: PropsTemplate) => {
  const token = localStorage.getItem("@TOKEN") || false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};
