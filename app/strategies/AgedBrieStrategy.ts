import { Item } from "../gilded-rose";
import { IStrategy } from "../IStrategy";
import { StandardStrategy } from "./StandardStrategy";

export class AgedBrieStrategy extends StandardStrategy implements IStrategy {
  updateQuality(item: Item): Item {
    item.sellIn = item.sellIn - 1;
    item.quality = this.increaseQuality(item, 1);

    if (item.sellIn < 0) {
      item.quality = this.increaseQuality(item, 1);
    }

    return item;
  }
}
