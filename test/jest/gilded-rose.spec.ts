import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should for normal items quality should never be negative", () => {
    const storeItems = [new Item("+5 Dexterity Vest", 3, 0)];
    const expectedResult = [new Item("+5 Dexterity Vest", 2, 0)];
    const gildedRose = new GildedRose(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it("should degrade twice as fast when sellIn date is passed", () => {
    const storeItems = [new Item("+5 Dexterity Vest", 0, 4)];
    const expectedResult = [new Item("+5 Dexterity Vest", -1, 2)];
    const gildedRose = new GildedRose(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it("the quality of an item can never be more than 50", () => {
    const storeItems = [new Item("Aged Brie", 1, 50)];
    const expectedResult = [new Item("Aged Brie", 0, 50)];
    const gildedRose = new GildedRose(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  it("the quality of an aged brie should increase by 1", () => {
    const storeItems = [new Item("Aged Brie", 1, 0)];
    const expectedResult = [new Item("Aged Brie", 0, 1)];
    const gildedRose = new GildedRose(storeItems);
    const items = gildedRose.updateQuality();

    expect(items).toStrictEqual(expectedResult);
  });

  describe("Backstage passes", () => {
    it("increases in Quality as it's SellIn value approaches", () => {
      const storeItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 14, 0),
      ];
      const expectedResult = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 13, 1),
      ];
      const gildedRose = new GildedRose(storeItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedResult);
    });

    it("Quality increases by 2 when there are 10 days or less", () => {
      const storeItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
      ];
      const expectedResult = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 9, 2),
      ];
      const gildedRose = new GildedRose(storeItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedResult);
    });

    it("Quality increases by 3 when there are 5 days or less", () => {
      const storeItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
      ];
      const expectedResult = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 4, 3),
      ];
      const gildedRose = new GildedRose(storeItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedResult);
    });

    it("Quality drops to 0 after concert", () => {
      const storeItems = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30),
      ];
      const expectedResult = [
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      ];
      const gildedRose = new GildedRose(storeItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedResult);
    });

    it("Quality of conjured item decreases with 2 when sellIn is not passed yet", () => {
      const storeItems = [new Item("Conjured Mana Cake", 3, 6)];
      const expectedResult = [new Item("Conjured Mana Cake", 2, 4)];
      const gildedRose = new GildedRose(storeItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedResult);
    });

    it("Quality of conjured item decreases with 4 when sellIn is passed ", () => {
      const storeItems = [new Item("Conjured Mana Cake", 0, 6)];
      const expectedResult = [new Item("Conjured Mana Cake", -1, 2)];
      const gildedRose = new GildedRose(storeItems);
      const items = gildedRose.updateQuality();

      expect(items).toStrictEqual(expectedResult);
    });
  });
});
