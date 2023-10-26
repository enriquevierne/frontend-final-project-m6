import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../Service/api";
import { IUser } from "./userContext";

export interface AxiosError {
  message: string;
  response?: {
    data: string;
  };
}

interface IAnouncementProviderProps {
  children: React.ReactNode;
}

interface IAnouncementImage {
  id: number;
  image_url: string;
  is_cover: boolean;
}

export interface IAnouncement {
  id: number;
  brand: string;
  car: string;
  year: number;
  fuel: string;
  kilometers: number;
  color: string;
  fipe: string;
  price: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  images: IAnouncementImage[];
  user: IUser;
}

export interface IAllAnouncement {
  id: number;
  brand: string;
  car: string;
  year: number;
  fuel: string;
  kilometers: number;
  color: string;
  fipe: string;
  price: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  user: IUser;
  images: IAnouncementImage[];
}

export interface IUserAnoucement {
  id: number;
  name: string;
  email: string;
  password: string;
  document: string;
  mobile: string;
  birthdate: string;
  bio: string;
  type: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  anouncements: IAnouncement[];
}

export interface IAnouncementContext {
  anouncementList: IAllAnouncement[] | undefined;
}

export const AnouncementContext = createContext({} as IAnouncementContext);

export const AnoucementProvider = ({ children }: IAnouncementProviderProps) => {
  const [anouncementList, setAnouncementList] = useState<IAllAnouncement[]>();
  useEffect(() => {
    const loadAnouncementList = async () => {
      try {
        const { data } = await api.get<IAllAnouncement[]>(`/anouncements`);
        setAnouncementList(data);
      } catch (error) {
        const Ierror = error as AxiosError;
        toast.error(Ierror.message);
      }
    };
    loadAnouncementList();
  }, []);

  return (
    <AnouncementContext.Provider value={{ anouncementList }}>
      {children}
    </AnouncementContext.Provider>
  );
};
