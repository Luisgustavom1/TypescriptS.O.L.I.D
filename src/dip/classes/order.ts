import { ShopingCard } from "./shopingCard";
import { Messaging } from "./services/messaging";
import { IOrder } from "./interfaces/order";
import { Persistency } from "./services/persisted";
import { IOrderCustomer } from "./interfaces/customer-protocol";
import { IShopingCard } from "./interfaces/shopingCard";
import { IPersistency } from "./interfaces/persisted-protocol";
import { IMessaging } from "./interfaces/messaging";

export class Order {
  private _statusOrder: IOrder = 'Open';

  constructor(
    private readonly messaging: IMessaging,
    private readonly shopigCard: IShopingCard,
    private readonly persistency: IPersistency,
    private readonly customer: IOrderCustomer
  ){}

  checkout() {
    if (this.shopigCard.isEmpty()) {
      this.messaging.message('O seu carrinho está vazio');
    }
    const total = this.shopigCard.totalWithDiscount();

    this._statusOrder = 'Close';
    this.shopigCard.clear();
    this.persistency.saveCard();
    this.messaging.message(`O seu pedido foi de ${total}`);
    this._statusOrder

    console.log(`O nome do cliente é ${this.customer.getName()} e o sua identificação é ${this.customer.getIDN()}`);

  }

  get statusOrder(): 'Close' | 'Open' {
    return this._statusOrder;
  }
}
