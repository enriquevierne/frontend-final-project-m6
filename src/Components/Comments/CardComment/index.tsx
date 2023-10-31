import dayjs from "dayjs";
import { IUser } from "../../../Providers/userContext";

export interface IComment {
  id: number;
  comment_text: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  user: IUser;
}

interface CommentsProps {
  comment: IComment;
}

export const CardComment = ({ comment }: CommentsProps) => {
  

  return (
    
    <li className="w-11/12 max-w-[663px] flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="p-1 rounded-full bg-green-800">
          {comment.user.name[0]}
          {comment.user.name[1]}
        </span>
        <span className="text-gray-900 font-semibold">{comment.user.name}</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">
          {dayjs(comment.createdAt).format("D/MM/YYYY")}
        </span>
      </div>
      <div className="w-full">
        <p className="text-gray-800">
          {comment.comment_text}
        </p>
      </div>
    </li>
  );
};
