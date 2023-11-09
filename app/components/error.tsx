import { BiError } from "react-icons/bi";

type ErrorMessageProps = {
    errorMessage: string;
}

export default function ErrorMessage(props: ErrorMessageProps){
    const {errorMessage} = props
    return (
        <section className="flex justify-start text-sm text-red font-medium bg-lightred rounded px-2 py-1.5 ml-2 w-fit cursor-default">
            <BiError className="text-xl mr-1" />{errorMessage}
        </section>
    )
}