import { useEffect, useState } from "react";
import { AuthenticatedTemplate } from "../../Components/Template/Authenticated";
import cover from "../../assets/main-banner.png";
import { IAnouncement } from "../../Providers/anouncementContext";
import { ButtonDefault } from "../../Components/Form/Buttons";
import { CardComment } from "../../Components/Comments/CardComment";
import { api } from "../../Service/api";
import { AxiosError } from "axios";
import { useLocation, useParams } from "react-router";

interface ICommentAnouncement {
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
  comments: IComment[];
}

export interface IComment {
  id: number;
  comment_text: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const AnouncementPage = () => {
  const [anouncement, setAnouncement] = useState<IAnouncement>();
  const [listComments, setListComments] = useState<IComment[]>([]);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const loadComments = async () => {
      try {
        const { data } = await api.get<ICommentAnouncement>(
          `/anouncements/${anouncement?.id}/comments/`
        );
        setListComments(data.comments);
      } catch (error) {
        const Ierror = error as AxiosError;
        console.log(Ierror);
      }
    };
    const retrieveAnouncement = async (id: string | undefined) => {
      try {
        const { data } = await api.get<IAnouncement>(`/anouncements/${id}`);
        setAnouncement(data);
      } catch (error) {
        const Ierror = error as AxiosError;
        console.log(Ierror);
      }
    };
    retrieveAnouncement(id);
    loadComments();
  }, [pathname]);
  console.log(listComments);

  return (
    <AuthenticatedTemplate>
      <div className="w-full m-auto flex flex-col justify-center bg-gradient-to-b from-brand1 from-40%  to-grey2 to-40% pt-20 pb-80">
        <div className="w-full max-w-[1238px] m-auto flex gap-8">
          <div className="">
            <div className="h-[355px] max-w-[752px]">
              <img src={cover} alt="" className="h-full" />
            </div>
            <div className="m-auto px-11 py-7 flex flex-col gap-8 bg-grey1 mt-4 text-lg font-bold">
              <p>
                {anouncement?.brand}-{anouncement?.car}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold text-sm">
                    {anouncement?.kilometers}
                    KM
                  </span>
                  <span className="p-1 rounded-md bg-brand4 text-brand1 font-semibold text-sm">
                    {anouncement?.year}
                  </span>
                </div>
                <span className="text-lg font-bold tracking-wide">
                  {anouncement?.price}
                </span>
              </div>
              <ButtonDefault
                label="Comprar"
                style="w-fit bg-brand1 h-12 py-2 px-8 rounded-md text-grey1 font-semibold tracking-wider hover:bg-brand2 duration-300 ease-in-out"
              />
            </div>
            <div className="m-auto px-11 py-7 flex flex-col gap-8 bg-grey1 mt-4 text-lg font-bold">
              <p>
                {anouncement?.brand}-{anouncement?.car}
              </p>
              <p className="font-normal text-grey8">
                {anouncement?.description}
              </p>
            </div>
          </div>
          <div className="max-w-[440px] flex flex-col gap-4">
            <div className="w-full bg-grey1 py-9 px-11 ">
              <span className="w-full font-bold text-lg text-grey8 tracking-wider">
                Fotos
              </span>
              <ul className="grid grid-cols-9 gap-2 mt-8">
                <li className="col-span-3">
                  <img src={cover} alt="" className="w-28 h-28 rounded-sm" />
                </li>
                <li className="col-span-3">
                  <img src={cover} alt="" className="w-28 h-28 rounded-sm" />
                </li>
                <li className="col-span-3">
                  <img src={cover} alt="" className="w-28 h-28 rounded-sm" />
                </li>
                <li className="col-span-3">
                  <img src={cover} alt="" className="w-28 h-28 rounded-sm" />
                </li>
                <li className="col-span-3">
                  <img src={cover} alt="" className="w-28 h-28 rounded-sm" />
                </li>
                <li className="col-span-3">
                  <img src={cover} alt="" className="w-28 h-28 rounded-sm" />
                </li>
              </ul>
            </div>
            <div>
              <div className="max-w-[1240px] flex flex-col justify-center items-center gap-6 m-auto bg-grey0 p-10">
                <span className="w-28 h-28 rounded-full bg-brand1 text-gray-100 text-[52px] font-semibold flex items-center justify-center">
                  {anouncement?.user.name[0]}
                  {anouncement?.user.name[1]}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-semibold text-lg">
                    {anouncement?.user.name}
                  </span>
                </div>
                <div className="w-full text-center">
                  <p className="text-gray-700 tracking-wide">
                    {anouncement?.user.bio}
                  </p>
                </div>
                <ButtonDefault
                  label="Ver todos os anúncios"
                  style="bg-grey9 h-12 py-2 px-8 rounded-md text-grey1 font-semibold tracking-wider hover:bg-grey8 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1238px] m-auto flex">
          <ul className="w-full bg-grey1 max-w-[752px] flex gap-8 mt-8  px-11 py-7">
            {listComments?.map((comment) => (
              <CardComment comment={comment} />
            ))}
          </ul>
        </div>
      </div>
    </AuthenticatedTemplate>
  );
};