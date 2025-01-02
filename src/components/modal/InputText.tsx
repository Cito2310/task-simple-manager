import { UseFormRegisterReturn } from "react-hook-form";

interface props {
    type: "input" | "textarea";
    placeholder: string;
    register: UseFormRegisterReturn<any>

}

export const InputText = ({ type, placeholder, register }: props) => {
    if ( type === "input" ) return <input {...register} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm focus-visible:ring-ring" placeholder={ placeholder }></input>

    if ( type === "textarea" ) return <textarea {...register} className="flex min-h-[80px] h-10 w-full rounded-md border border-input bg-background px-3 py-2 placeholder:text-muted-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm focus-visible:ring-ring" placeholder={ placeholder }></textarea>
}