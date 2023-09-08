import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
  console.log("running on server");
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("message"));
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "almahdiahmed22@gmail.com",
    subject: "message from contact form",
    text: "hello world",
  });
};
