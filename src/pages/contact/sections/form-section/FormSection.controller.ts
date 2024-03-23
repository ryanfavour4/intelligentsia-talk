import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import {
    EMAILJS_SERVICES_ID_KEY,
    EMAILJS_TEMPLATE_KEY,
    EMAILJS_ACCOUNT_PUBLIC_KEY,
} from "../../../../keys/emailJs.key";

export default function useFormSection() {
    const formRef = useRef<any>(null);

    const handleSubmitContactForm = () => {
        emailjs
            .sendForm(
                EMAILJS_SERVICES_ID_KEY(),
                EMAILJS_TEMPLATE_KEY(),
                formRef.current,
                EMAILJS_ACCOUNT_PUBLIC_KEY()
            )
            .then(
                (result: any) => {
                    formRef.current.reset();
                    toast.success("Message sent successfully ✅");
                },
                (error: any) => {
                    toast.error("Something went wrong please try again ❌");
                }
            );
    };

    return { formRef, handleSubmitContactForm };
}
