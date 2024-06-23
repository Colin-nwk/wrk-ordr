import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import createSchema, { Field } from "../schemas/dynamicSchema";

const useDynamicForm = (
  fields: Field[],
  defaultValues?: Record<string, any>
): UseFormReturn<any> => {
  const schema = createSchema(fields);
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return methods;
};

export default useDynamicForm;
