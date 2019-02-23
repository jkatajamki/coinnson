export const getPointCount = points => {
  return points.reduce((acc, curr) => {
    const newAcc = acc + curr.points;
    return newAcc;
  }, 0);
};
