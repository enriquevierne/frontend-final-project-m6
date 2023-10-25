import { createContext } from "react";
import { toast } from "react-toastify";
import { TRegisterFormValues } from "../Components/Form/RegisterForm/registerFormSchema";
import { TLoginFormValues } from "../Components/Form/LoginForm/loginFormSchema";
import { useNavigate } from "react-router-dom";
import { api } from "../Service/api";

export interface AxiosError {
  message: string;
  response?: {
    data: string;
  };
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userRegister: (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogin: (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userLogout: () => void;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  document: string;
  mobile: string;
  type: boolean;
  birthdate: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  address: {
    zip: string;
    street: string;
    city: string;
    state: string;
    number: string;
    complement: string | null;
  };
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

interface IUserLoginResponse {
  token: string;
  user: string;
  type: string;
  id: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const userLogin = async (
    formData: TLoginFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USER", data.user);
      localStorage.setItem("@TYPE", data.type);
      localStorage.setItem("@ID", data.id);
      navigate("/dashboard");
    } catch (error) {
      const Ierror = error as AxiosError;
      toast.error(Ierror.message);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: TRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      setModal(true)
      window.scroll({top: 0, left: 0})
    } catch (error) {
      const Ierror = error as AxiosError;
      toast.error(Ierror.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    localStorage.removeItem("@TYPE");
    localStorage.removeItem("@ID");
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
