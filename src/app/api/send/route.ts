import { Resend } from "resend";
import { EmailTemplate } from "~/components/emailTemplate";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["amrbassem218@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });

    if (error) {
      console.log("error1");
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log("error2");
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
