import { Configuration, OpenAIApi } from "openai";

export default defineEventHandler(async (event) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const body = await readBody(event);
  const chatCompletion = await openai.createChatCompletion({
    model: body.model,
    messages: [{ role: "user", content: body.content }],
    max_tokens: 1000,
    temperature: 0,
  });
  return chatCompletion.data.choices[0]
    ? chatCompletion.data.choices[0].message?.content
    : "";
});
