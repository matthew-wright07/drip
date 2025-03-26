import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req,res){
    const data = await req.json()
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: data.email,
        subject: `Hey ${data.name}, You Have Been Invited To Join Drip`,
        html: `<p>${data.message} Here is your link to join <a href="https://drip-one.vercel.app/questions/${data.email}">Drip</a>!</p>`
    });
    return new Response(JSON.stringify("Email sent"))
}