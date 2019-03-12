import { getPointCount } from './index';
import { points } from './mock';

it('sums numbers correctly', () => {
  const count = getPointCount(points);
  expect(count).toBeNumber();
  expect(count).toEqual(1);
});
