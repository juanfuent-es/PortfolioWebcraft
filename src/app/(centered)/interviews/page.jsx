import { redirect } from "next/navigation";

export default function RedirectedLegacyPage() {
  redirect("/resources");
}
