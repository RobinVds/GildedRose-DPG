import { Item } from "../gilded-rose";
import { IStrategy } from "../IStrategy";
import { StandardStrategy } from "./StandardStrategy";

export class SulfurasStrategy extends StandardStrategy implements IStrategy {
  updateQuality(item: Item): Item {
    return item;
  }
}
