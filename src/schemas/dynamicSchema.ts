import * as z from "zod";

type Field = {
  name: string;
  type:
    | "string"
    | "email"
    | "number"
    | "select"
    | "checkbox"
    | "radio"
    | "textarea";
  minLength?: number;
  min?: number;
  options?: string[];
  placeholder?: string;
  errorMessage?: string;
  isRequired: boolean;
};

const createSchema = (fields: Field[]) => {
  const shape: { [key: string]: z.ZodTypeAny } = {};

  fields.forEach((field) => {
    let schemaField;

    switch (field.type) {
      case "string":
        schemaField = z
          .string({ message: "required" })
          .min(field.minLength || 1, field.errorMessage || "Invalid input");
        break;
      case "email":
        schemaField = z
          .string({ message: "required" })
          .email(field.errorMessage || "Invalid email address");
        break;
      case "number":
        schemaField = z
          .number({ message: "required" })
          .min(field.min || 0, field.errorMessage || "Invalid number");
        break;
      case "select":
        schemaField = z.string().refine((val) => field.options?.includes(val), {
          message: field.errorMessage || "Invalid selection",
        });
        break;
      case "checkbox":
        schemaField = z.boolean({ message: "required" });
        break;
      case "radio":
        schemaField = z.string().refine((val) => field.options?.includes(val), {
          message: field.errorMessage || "Invalid selection",
        });
        break;
      case "textarea":
        schemaField = z
          .string({ message: "required" })
          .min(field.minLength || 1, field.errorMessage || "Invalid input");
        break;
      default:
        schemaField = z.any();
    }

    shape[field.name] = field.isRequired ? schemaField : schemaField.optional();
  });

  return z.object(shape);
};

export default createSchema;
export type { Field };
