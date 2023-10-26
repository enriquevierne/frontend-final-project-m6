import { IComment } from "../../../Pages/Anouncement";

interface CommentsProps {
  comment: IComment;
}

export const CardComment = ({comment}: CommentsProps) => {
  console.log(comment);
  
  return (
    <li className="w-11/12 max-w-[663px] flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="p-1 rounded-full bg-green-800">CS</span>
        <span className="text-gray-900 font-semibold">Camila Silva</span>
        <span className="text-gray-500">•</span>
        <span className="text-gray-500">há 1 mês</span>
      </div>
      <div className="w-full">
        <p className="text-gray-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          sequi culpa quaerat excepturi magnam consectetur esse facere eaque cum
          deleniti, impedit dignissimos aperiam tenetur illum inventore itaque
          in, repudiandae neque.
        </p>
      </div>
    </li>
  );
};
