export const splitTokenFromContent = (content: string) => {
  const colors = ["#8352ff", "#18c132", "#ff5601", "#d50040", "#00bfe5"];

  const result = [];
  const tokens = content.split("{{");
  let bFirst = true;
  let cnt = 0;
  for (const token of tokens) {
    const subtokens = token.split("}}");
    if (subtokens.length > 1) {
      if (!bFirst) {
        result.push({
          type: 2,
          color: colors[cnt % colors.length],
          content: subtokens[0].trim(),
        });
        result.push({
          type: 1,
          content: subtokens[1],
        });
        cnt++;
        continue;
      }
    }
    bFirst = false;

    result.push({
      type: 1,
      content: token,
    });
  }
  return result;
};
