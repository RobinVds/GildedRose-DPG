import { IStrategy } from "@/IStrategy";
import { Item } from "../gilded-rose";

export class StandardStrategy implements IStrategy {
  MAXIMUM_QUALITY = 50;
  MINIMUM_QUALITY = 0;

  updateQuality(item: Item): Item {
    item.sellIn = item.sellIn - 1;
    item.quality = this.decreaseQuality(item, 1);

    if (item.sellIn < 0) {
      item.quality = this.decreaseQuality(item, 1);
    }
    return item;
  }

  checkQualityToLow(item: Item, amount: number) {
    return item.quality - amount < this.MINIMUM_QUALITY;
  }

  checkQualityToHigh(item: Item, amount: number) {
    return item.quality + amount > this.MAXIMUM_QUALITY;
  }

  increaseQuality(item: Item, amount: number) {
    if (this.checkQualityToHigh(item, amount)) return item.quality;
    return item.quality + amount;
  }

  decreaseQuality(item: Item, amount: number) {
    if (this.checkQualityToLow(item, amount)) return item.quality;

    return item.quality - amount;
  }
}
