import { Button } from "@/components/button";
import { OTPInput } from "@/components/input";

import Link from "next/link";

export const metadata = {
  title: "Código de acceso - Portfolio WebCraft",
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Código de acceso</h1>
      <p className="text-center text-sm/7 text-gray-950 dark:text-white">
        Enviamos un código de 6 dígitos a{" "}
        <span className="font-semibold">adam@example.com</span>.
      </p>
      <form action="/" className="mt-6">
        <OTPInput maxLength={6} />
        <p className="mt-6 text-center text-sm/7 text-gray-600 dark:text-gray-400">
          {"¿No recibiste el código? "}
          <button
            type="button"
            className="font-semibold text-gray-950 underline decoration-gray-950/25 underline-offset-2 hover:decoration-gray-950/50 dark:text-white dark:decoration-white/25 dark:hover:decoration-white/50"
          >
            Solicitar uno nuevo
          </button>
        </p>
        <Button type="submit" className="mt-6 w-full">
          Verificar
        </Button>
      </form>
      <p className="mt-6 text-center text-sm/7 dark:text-gray-400">
        <Link
          href="/login"
          className="font-semibold text-gray-950 dark:text-white"
        >
          Usar otro correo
        </Link>
      </p>
    </>
  );
}
