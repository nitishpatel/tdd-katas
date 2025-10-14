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
  describe('Aged Brie', () => {
    it('should increase by 1 per day', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 1,1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(2);
    });
    it('should increase by 2 per day after sellin', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(4);
    });
    it('quality never exceeds 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie',1, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(50);
    });
  });
  describe('Sulfuras, Hand of Ragnaros', () => {
    it('should never change', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1,80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(80);
    });

    // TODO: Bug , ideally should not allow to create an item with quantity other than 80
    // it('quality is always 80', () => {
    //   const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 1)]);
    //   const items = gildedRose.updateQuality();
    //   expect(items[0].sellIn).toBe(0);
    //   expect(items[0].quality).toBe(80);
    // });
  });
  describe('Backstage Passes to a TAFKAL80ETC concert', () => {
    const itemName = "Backstage passes to a TAFKAL80ETC concert";
    it('should increase by 1 per day if sellin is 10+', () => {
      const gildedRose = new GildedRose([new Item(itemName, 15,20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    });
    it('should increase by 2 per day if sellin is less than 10', () => {
      const gildedRose = new GildedRose([new Item(itemName, 9,20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(8);
      expect(items[0].quality).toBe(22);
    });
    it('should increase by 3 per day if sellin is less than 5', () => {
      const gildedRose = new GildedRose([new Item(itemName, 5,20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(23);
    });
    it('quality should drop to 0 post sellin < 0', () => {
      const gildedRose = new GildedRose([new Item(itemName, 0,100)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });


  });
});
