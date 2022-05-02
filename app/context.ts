import { AgedBrieStrategy } from "./strategies/AgedBrieStrategy";
import { BackstageStrategy } from "./strategies/BackstageStrategy";
import { ConjuredStrategy } from "./strategies/ConjuredStrategy";
import { Item } from "./gilded-rose";
import { IStrategy } from "./IStrategy";
import { StandardStrategy } from "./strategies/StandardStrategy";
import { SulfurasStrategy } from "./strategies/SulfurasStrategy";

export class Context {
  private strategy: IStrategy;

  constructor(name: string) {
    switch (name) {
      case "Aged Brie": {
        this.strategy = new AgedBrieStrategy();
        break;
      }
      case "Sulfuras, Hand of Ragnaros": {
        this.strategy = new SulfurasStrategy();
        break;
      }
      case "Backstage passes to a TAFKAL80ETC concert": {
        this.strategy = new BackstageStrategy();
        break;
      }
      case "Conjured Mana Cake": {
        this.strategy = new ConjuredStrategy();
        break;
      }
      default: {
        this.strategy = new StandardStrategy();
        break;
      }
    }
  }

  public updateQuality(item: Item) {
    return this.strategy.updateQuality(item);
  }
}
