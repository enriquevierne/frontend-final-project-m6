import { useForm, SubmitHandler } from "react-hook-form";
import { IUser } from "../../../Providers/userContext";
import { ButtonDefault } from "../../Form/Buttons";
import { InputError } from "../../Form/Errors";
import { InputLabel } from "../../Form/Labels";
import { api } from "../../../Service/api";
import { toast } from "react-toastify";
import { Axios, AxiosError } from "axios";
import { IComment } from "../CardComment";
import { TCommentFormValues } from "./commentFormSchema";
import { useNavigate } from "react-router-dom";

interface CreateCommentProps {
  user: IUser | undefined;
  id: number | undefined;
}

interface BodyComment {
  comment_text: string;
}

export const CreateComment = ({ user, id }: CreateCommentProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createComment = async (body: BodyComment, id: number | undefined) => {
    try {
      const { data } = await api.post<IComment[]>(
        `/anouncements/${id}/comments`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      const Ierror = error as AxiosError;
      console.log(Ierror);
    } finally {
      window.location.reload()
    }
  };
  const submit: SubmitHandler<TCommentFormValues> = (formData) => {
    createComment(formData, id);
  };
  return (
    <>
      <div className="w-11/12 max-w-[752px] py-12 px-11 bg-grey0 flex flex-col self-start gap-8 rounded">
        <div className="flex gap-2 items-center text-lg font-bold">
          <span className="p-2 w-10 text-center rounded-full bg-brand1 text-gray-100 font-semibold">
            {user?.name?.[0]}
            {user?.name?.[1]}
          </span>
          <span>{user?.name}</span>
        </div>
        <form onSubmit={handleSubmit(submit)} className="">
          <div className="flex flex-col ">
            <textarea
              className="p-2 h-32 rounded-md bg-transparent outline-none border-2 border-grey4 text-gray-900  focus:border-brand1"
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              {...register("comment_text")}
            />
            {errors && <InputError error={errors.comment_text} />}
          </div>

          <div className="col-span-12 flex flex-col gap-6 pt-4 text-center">
            <ButtonDefault
              label="Comentar"
              style="bg-brand1 w-fit h-12 p-2 rounded-md text-grey1 font-semibold tracking-wider hover:bg-brand2 duration-300 ease-in-out"
            />
          </div>
        </form>
      </div>
    </>
  );
};
