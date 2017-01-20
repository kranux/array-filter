var assert = require('assert');
import { filter } from '../filter';

describe('filter()', () => {

  describe('filtering array of strings', () => {

    it('should search for strings in array', () => {
      assert.deepEqual(filter(['abc'], 'abc'), ['abc']);
    });

    it('should return only matched strings', () => {
      assert.deepEqual(filter(['abc', 'cde'], 'abc'), ['abc']);
    });

    it('should be case insensitive search', () => {
      assert.deepEqual(filter(['ABC', 'cde'], 'abc'), ['ABC']);
    });
  });

  describe('array of objects', () => {

    it('should find a value in array of objects', () => {
      assert.deepEqual(filter([{a: 'abc'}], 'abc'), [{a:'abc'}]);
    });

    it('should accept searchable fields config', () => {
      assert.deepEqual(filter([{a: 'abc'}], 'abc', ['b']), []);
    })
  });
});