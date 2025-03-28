import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imphdm1kZHRtc3FmeXRzbXNqYWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNDEyNTUsImV4cCI6MjA1ODYxNzI1NX0.vU2_1o3zYd9YCr06RgSWRkmIcjepcTauUD5B-pT085s"
const supabaseUrl = "https://javmddtmsqfytsmsjabm.supabase.co"

export async function POST(req,res){
    const data = await req.json()
    resend.emails.send({
        from: 'onboarding@dripsoftly.com',
        to: data.email,
        subject: 'Drip Invite',
        html: `<p>Hey ${data.firstName}, here is your link to join <a href="https://www.dripsoftly.com/questions/${data.email}">Drip</a>!</p>`,
    });
    const response = await fetch(`${supabaseUrl}/rest/v1/Users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
          'apikey': supabaseAnonKey,
        },
        body: JSON.stringify({
          email: data.email,
          name: data.firstName,
        }),
      });

    return new Response(JSON.stringify("Email sent"))
}