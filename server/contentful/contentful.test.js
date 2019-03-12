import { expect } from 'chai';
import { points, tracks } from './contentful.mock-data';
import { mapFields, sumPoints, filterOutNonEmptyItems, resetPoints } from './contentful';

describe('Parses contentful tauhka correctly', () => {
  describe('Parses points responses correctly', () => {
    const mapped = mapFields(points);

    it('Maps points response into an array', () => {
      expect(mapped).to.be.an('array').that.is.not.empty;
    });

    it('Sums mapped points response into a number', () => {
      const sum = sumPoints(mapped);
      expect(sum).to.be.a('number');
    });

    it('Sums points correctly', () => {
      const sum = sumPoints(mapped);
      expect(sum).to.equal(6)
    });
  });

  describe('Parses tracks response correctly', () => {
    it('Strips empty objects from response', () => {
      const filtered = filterOutNonEmptyItems(tracks.items);
      filtered.forEach(item => {
        const { fields } = item;
        expect(fields).to.be.an('object').that.is.not.empty;
      });
    });

    it('Maps tracks response into an array that contains fields', () => {
      const mapped = mapFields(tracks);
      expect(mapped).to.be.an('array').that.is.not.empty;

      mapped.forEach(item => {
        expect(item).to.be.an('object');
        const fieldKeys = Object.keys(item);
        expect(fieldKeys).to.be.an('array').that.includes('id');
        expect(fieldKeys).to.be.an('array').that.includes('title');
        expect(fieldKeys).to.be.an('array').that.includes('done');
        expect(fieldKeys).to.be.an('array').that.includes('hidden');
      });
    });
  });
});
