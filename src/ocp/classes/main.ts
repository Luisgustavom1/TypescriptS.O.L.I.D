import { Order } from "./order";
import { Persistency } from "./services/persisted";
import { Messaging } from "./services/messaging";
import { ShopingCard } from "./shopingCard";
import { TenDiscount, NoDiscount, FiftyDiscount } from "./discount";

// const tenDiscount = new TenDiscount();
// const noDiscount = new NoDiscount();
const fiftyDiscount = new FiftyDiscount();
const shopingCard = new ShopingCard(fiftyDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(messaging, shopingCard, persistency);

shopingCard.addItem({ name: 'celular', price: 2000 });
shopingCard.addItem({ name: 'fone', price: 100 });
shopingCard.addItem({ name: 'notebook', price: 5000 });
shopingCard.addItem({ name: 'monitor', price: 1700 });

console.log(shopingCard.item);
console.log(shopingCard.total());
order.checkout();
console.log(order.statusOrder);
