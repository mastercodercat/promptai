export default defineEventHandler((_) => {
  return [
    // { id: 1, name: "text-davinci-003", groupId: 1 },
    // { id: 2, name: "text-curie-001", groupId: 1 },
    // { id: 3, name: "text-babbage-001", groupId: 1 },
    // { id: 4, name: "text-ada-001", groupId: 1 },
    // { id: 5, name: "code-davinci-002", groupId: 3 },
    // { id: 6, name: "code-cushman-001", groupId: 3 },
    { id: 1, name: "gpt-3.5-turbo-16k-0613", groupId: 1 },
    { id: 2, name: "gpt-3.5-turbo-0301", groupId: 1 },
    { id: 3, name: "gpt-3.5-turbo", groupId: 1 },
    { id: 4, name: "gpt-3.5-turbo-0613", groupId: 1 },
    { id: 5, name: "gpt-3.5-turbo-16k", groupId: 1 },
    { id: 6, name: "gpt-4", groupId: 2 },
    { id: 7, name: "gpt-4-8k", groupId: 2 },
    { id: 8, name: "gpt-4-32k", groupId: 2 },
  ];
});
