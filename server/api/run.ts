import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async (event) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const body = await readBody(event);
  const chatCompletion = await openai.createCompletion({
    model: body.model,
    prompt: body.content,
    max_tokens: 5,
    temperature: 0,
  });
  return chatCompletion.data.choices[0].text;
});
