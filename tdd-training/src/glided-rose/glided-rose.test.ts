import { Item, GildedRose } from './glided-rose';
import { expect, describe, it } from 'vitest';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
  describe('Normal Item', () => {
    it('should descrease by 1 per day', () => {
      const gildedRose = new GildedRose([new Item('foo', 1,1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(0);
    });
    it('should decrease by 2 per day after sellin', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
    it('quality can never be negative', () => {
      const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
  });
});
