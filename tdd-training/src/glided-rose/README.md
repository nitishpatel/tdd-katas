This is a classic kata for learning how to work with legacy code.

## Kata Link

https://www.codurance.com/katas/gilded-rose

---

Your Mission:
 
Add tests to understand what the code does (characterization tests)
Refactor the code to make it maintainable
Add the new "Conjured" items feature using TDD
 
Item Rules
1. Normal Items
 
Quality decreases by 1 each day
After sell-by date (sellIn < 0), quality decreases by 2 per day
Quality is never negative
 
Example:
Day 0: { name: "Normal Item", sellIn: 5, quality: 10 }
Day 1: { name: "Normal Item", sellIn: 4, quality: 9 }
Day 6: { name: "Normal Item", sellIn: -1, quality: 3 }  (now -2 per day)
Day 7: { name: "Normal Item", sellIn: -2, quality: 1 }

2. Aged Brie
 
Quality INCREASES by 1 each day (gets better with age!)
After sell-by date, quality increases by 2 per day
Quality never exceeds 50
 
Example:
Day 0: { name: "Aged Brie", sellIn: 5, quality: 10 }
Day 1: { name: "Aged Brie", sellIn: 4, quality: 11 }
Day 6: { name: "Aged Brie", sellIn: -1, quality: 17 }  (now +2 per day)
3. Sulfuras, Hand of Ragnaros
 
Legendary item - never changes
Quality is always 80
Never has to be sold (sellIn doesn't decrease)
 
Example:
Day 0: { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
Day 1: { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80 }
(Never changes!)
4. Backstage Passes to a TAFKAL80ETC concert
 
Quality increases as concert approaches:
 
More than 10 days: +1 per day
10 days or less: +2 per day
5 days or less: +3 per day
After concert (sellIn < 0): quality drops to 0
 
 
Quality never exceeds 50
 
Example:
Day 0:  { sellIn: 15, quality: 20 }
Day 1:  { sellIn: 14, quality: 21 }  (+1)
Day 6:  { sellIn: 9, quality: 27 }   (+2, now ≤10 days)
Day 11: { sellIn: 4, quality: 39 }   (+3, now ≤5 days)
Day 16: { sellIn: -1, quality: 0 }   (concert passed!)
 
characterization tests :
 
Characterization Tests : something which will document the behaviour of the system
 
 
Characterization Tests = Tests that describe EXISTING behavior
 
NOT: 'What should it do?'
BUT: 'What DOES it do?'
 
Process:
1. Create an item
2. Run updateQuality()
3. Check what happened
4. Write that as a test