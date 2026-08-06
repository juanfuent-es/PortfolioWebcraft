import { redirect } from "next/navigation";

export default function RedirectedLegacyDetailPage() {
  redirect("/resources");
}
