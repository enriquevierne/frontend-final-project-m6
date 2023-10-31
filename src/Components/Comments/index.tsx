
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { api } from "../../Service/api";
import { CardComment, IComment } from "./CardComment";
import { IAnouncement } from "../../Providers/anouncementContext";

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

export const Comments = () => {
  const [listComments, setListComments] = useState<IComment[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const loadComments = async () => {
      try {
        const { data } = await api.get<ICommentAnouncement>(
          `/anouncements/${id}/comments/`
        );
        setListComments(data.comments);
      } catch (error) {
        const Ierror = error as AxiosError;
        console.log(Ierror)
      }
    };
    loadComments();
  },[]);
  

  return (
    <ul className="w-full bg-grey1 max-w-[752px] flex flex-col gap-11 mt-8  px-11 py-7 rounded-sm">
  {listComments?.map((comment) => (
    <CardComment key={comment.id} comment={comment} />
  ))}
</ul>
  );
};
