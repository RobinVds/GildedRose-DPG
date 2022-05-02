import { Item } from "../gilded-rose";
import { IStrategy } from "../IStrategy";
import { StandardStrategy } from "./StandardStrategy";

export class ConjuredStrategy extends StandardStrategy implements IStrategy {
  updateQuality(item: Item): Item {
    item.sellIn -= 1;
    item.quality = this.decreaseQuality(item, 2);

    if (item.sellIn < 0) {
      item.quality = this.decreaseQuality(item, 2);
    }

    return item;
  }
}
