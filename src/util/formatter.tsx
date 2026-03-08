 export const formatNumber = (val: number) => {
  return Intl.NumberFormat('en-US').format(val);
};
