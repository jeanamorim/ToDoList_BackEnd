import Joi from "joi";

export const createTodoValidation = async (todo) => {
  const schema = Joi.object({
    name: Joi.string().required("titulo e obrigatorio"),
    email: Joi.string().required("email e obrigatorio"),
    description: Joi.string().required("descricao e obrigatoria"),
    status: Joi.string().required("status e obrigatorio"),
    back: Joi.number(),
    created_at: Joi.date(),
    updated_at: Joi.date(),
  });

  const verifySchema = await Joi.validate(todo, schema);

  return verifySchema;
};
