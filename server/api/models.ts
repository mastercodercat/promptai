export default defineEventHandler((_) => {
  return [
    { id: 1, name: "text-davinci-003", groupId: 1 },
    { id: 2, name: "text-curie-001", groupId: 1 },
    { id: 3, name: "text-babbage-001", groupId: 1 },
    { id: 4, name: "text-ada-001", groupId: 1 },
    { id: 5, name: "code-davinci-002", groupId: 3 },
    { id: 6, name: "code-cushman-001", groupId: 3 },
  ];
});
