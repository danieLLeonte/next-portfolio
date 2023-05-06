import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillMail } from "react-icons/ai";

export const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const SERVICE_ID = "contact_service";
  const TEMPLATE_ID = "contact_form";

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentForm = form.current;
    if (!currentForm) return;

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        currentForm,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-between gap-6 my-auto px-10 pb-8">
      <h1 className="text-2xl font-bold text-center text-textPrimary">
        Contact Me
      </h1>
      <form
        className="flex flex-col justify-between text-xs gap-4 font-medium"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            className="rounded-2xl p-2 px-3 border shadow-sm -ml-1"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="rounded-2xl p-2 px-3 border shadow-sm -ml-1"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Message</label>
          <textarea
            className="h-32 p-2 px-3 rounded-2xl shadow-sm border resize-none -ml-1"
            name="message"
            required
          />
        </div>
        <input
          className="bg-primary text-white font-bold text-sm py-3 px-8 rounded-full shadow-primary/50 shadow-md mt-5"
          type="submit"
          value="Send"
        />
      </form>
      <p className="text-center text-sm flex items-center justify-center gap-2 -mb-5"><AiFillMail className="icon" size={18} />lgsoftware99@gmail.com</p>
    </div>
  );
};
