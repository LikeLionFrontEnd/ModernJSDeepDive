const average = [1, 2, 3, 4].reduce(
  (acc, cur, index, { length }) =>
    index === length - 1 ? (acc + cur) / length : acc + cur,
  0
);
console.log(average);

const max = [1, 2, 3, 4].reduce((acc, cur) => (acc < cur ? cur : acc), 0);
console.log(max);

const 중복횟수 = ['바나나', '사과', '바나나', '오렌지'].reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(중복횟수);
