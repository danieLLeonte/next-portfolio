import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="flex flex-col justify-between h-4/5">
      <h1 className="text-xl font-bold text-center lg:mt-4 mt-2">Contact Me</h1>
      <form
        className="pb-6 pt-4 px-10 flex flex-col h-full justify-between text-xs gap-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            className="rounded-md p-2 px-3 border"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="rounded-md p-2 px-3 border"
            type="email"
            name="user_email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Message</label>
          <textarea
            className="h-20 p-2 px-3 rounded-md border resize-none"
            name="message"
            required
          />
        </div>
        <input
          className="h-10 mt-2 bg-white border rounded-md border-primary"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};
