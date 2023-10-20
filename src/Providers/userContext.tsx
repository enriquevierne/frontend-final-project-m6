import { createContext } from "react";
/* import { TRegisterFormValues } from "../Components/Form/RegisterForm/registerFormSchema";
import { TLoginFormValues } from "../Components/Form/LoginForm/loginFormSchema"; */
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  /* userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>; */
  userLogout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
