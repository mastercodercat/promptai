export const splitTokenFromContent = (content) => {
  const colors = ["#8352ff", "#18c132", "#ff5601", "#d50040", "#00bfe5"];

  var result = [];
  var tokens = content.split("{{");
  var bFirst = true;
  var input_cnt = 0;
  for (var token of tokens) {
    var subtokens = token.split("}}");
    if (subtokens.length > 1) {
      if (!bFirst) {
        result.push({
          type: 2,
          color: colors[input_cnt % colors.length],
          content: subtokens[0].trim(),
        });
        result.push({
          type: 1,
          content: subtokens[1],
        });
        input_cnt++;
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
