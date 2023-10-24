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
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      await api.post<IUserRegisterResponse>("/users", formData);
      toast.success("Usuário cadastrado");
      navigate("/");
    } catch (error) {
      const Ierror = error as AxiosError;
      toast.error(Ierror.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN_KenzieBurguer");
    localStorage.removeItem("@USERID_KenzieBurguer");
    toast.warning("Logout bem sucedido!");
    navigate("/");
  };
  return (
    <UserContext.Provider value={{ userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
};
