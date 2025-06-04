
export const getOptionFromValue = (options: any[], dataValue: string) => {

  const foundItems = options.filter((item) => item.value === dataValue);

  return foundItems[0];
}