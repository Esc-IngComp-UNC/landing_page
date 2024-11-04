import { nullable, z } from "zod";

export const formSchema = z.object({
  nombre: z
    .string()
    .min(3, {
      message: "El nombre debe tener mas de 3 caracteres",
    })
    .max(45, {
      message: "El nombre no debe tener mas de 45 caracteres",
    }),
  apellido: z
    .string()
    .min(3, {
      message: "El apellido debe tener mas de 3 caracteres",
    })
    .max(45, {
      message: "El apellido no debe tener mas de 45 caracteres",
    }),
  email: z.string().email({
    message: "Por favor ingrese un email valido",
  }),
  seleccion: z
    .string()
    .nullable()
    .refine((val) => val !== null, {
      message: "Por favor selecciona una opción.",
    }),
  telefono: z.string().max(15, {
    message: "El numero telefonico no debe contener mas de 15 caracteres",
  }),
  texto: z.string().max(500, {
    message: "El texto no debe tener mas de 500 caracteres",
  }),
});
