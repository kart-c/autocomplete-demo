export const difference = <T>(arr: T[], values: T[], key: keyof T) => {
  return arr.filter((listItem) => {
    const valueNotInArr = values.every((chip) => chip[key] !== listItem[key]);
    if (valueNotInArr) {
      return listItem;
    }
  });
};
