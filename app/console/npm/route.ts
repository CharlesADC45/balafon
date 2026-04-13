import { redirect } from "next/navigation";

export function GET() {
  redirect("https://hco.demo.solarwinds.com/Orion/Login.aspx?autologin=no&SuccessfulLogout=yes");
}
