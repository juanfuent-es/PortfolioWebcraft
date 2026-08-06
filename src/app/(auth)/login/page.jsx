import { Button } from "@/components/button";
import { TextInput } from "@/components/input";

export const metadata = {
  title: "Acceso - Portfolio WebCraft",
};

export default function Page() {
  return (
    <>
      <h1 className="sr-only">Acceso</h1>
      <form action="/otp">
        <div>
          <label
            htmlFor="email"
            className="block w-full text-sm/7 font-medium text-gray-950 dark:text-white"
          >
            Correo electrónico
          </label>
          <TextInput type="email" id="email" required className="mt-2" />
        </div>
        <Button type="submit" className="mt-6 w-full">
          Enviar código de acceso
        </Button>
      </form>
    </>
  );
}
