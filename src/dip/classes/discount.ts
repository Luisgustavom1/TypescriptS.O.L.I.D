export class Discount {
  protected discount = 0;

  calculate(price: number) {
    return price * (1 - this.discount);
  }
}

export class TenDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {
  protected readonly discount = 0;
}

export class FiftyDiscount extends Discount {
  protected readonly discount = 0.5;
}
