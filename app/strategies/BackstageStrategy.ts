import { Item } from "../gilded-rose";
import { IStrategy } from "../IStrategy";
import { StandardStrategy } from "./StandardStrategy";

export class BackstageStrategy extends StandardStrategy implements IStrategy {
  updateQuality(item: Item): Item {
    item.sellIn -= 1;
    item.quality = this.increaseQuality(item, 1);

    if (item.sellIn <= 0 /* days */) {
      item.quality = 0;
      return item;
    }

    if (item.sellIn < 6 /* days */) {
      item.quality = this.increaseQuality(item, 1);
    }
    if (item.sellIn < 11 /* days */) {
      item.quality = this.increaseQuality(item, 1);
    }

    return item;
  }
}
