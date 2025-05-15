interface IProductOperations {
    createProduct(id: number, name: string, price: number, quantity: number): void;
  getInventory(): IProduct[];
    restockProduct(id: number, quantity: number): void;
    sellStock(id: number,quantity: number): void;
}

interface IProduct{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

class Product implements IProductOperations {
   private product: IProduct[] = [];

    constructor() {
        this.product = [];
    }

    
    createProduct( id: number, name: string, price: number, quantity: number): void {
        if (this.isProductExisting(id)) {
            console.log(`Product with ID ${id} already exists.`);
            return;
        }
        this.product.push({id, name, price, quantity});
        console.log(`Product with ID ${id} added successfully.`);
    
    }
    isProductExisting(id: number): boolean {
        return this.product.find((p: IProduct) => p.id === id) ? true : false;
    }

getInventory(): IProduct[]{
    if (this.product.length === 0) {
        console.log('No products in inventory.');
        return[];
    }
    console.log('\nProduct Inventory:');

    for(let i= 0; i<this.product.length; i++){
        const prod= this.product[i];
        console.log(` ${i+1}. Name : ${prod.name}, ID: ${prod.id}, Price: ${prod.price}, Quantity: ${prod.quantity}`);
    }
    return this.product;


}

 restockProduct(id: number, quantity: number): number {
    const index = this.product.findIndex((p: IProduct) => p.id === id);
    if (index === -1) {
      console.log('Product not found.');
      return -1;
    }
    this.product[index].quantity += quantity;
    console.log(
      `Product restocked successfully. New quantity: ${this.product[index].quantity}`
    );
    return this.product[index].quantity;
  }
   
sellStock(id: number, quantity: number): void {
    const index = this.product.findIndex((p: IProduct) => p.id === id);
    if (index === -1) {
        console.log('Product not found.');
        return;
    }
    if (quantity > this.product[index].quantity) {
        console.log('Insufficient stock to sell.');
        return;
    }
    this.product[index].quantity -= quantity;
    console.log(`Stock sold successfully. Remaining quantity: ${this.product[index].quantity}`);
   
}


  private findIndex(id: number): number {
    return this.product.findIndex(p => p.id === id);
  }

    }

    



const inv = new Product();
inv.createProduct(1, "Apple", 0.5, 100);
inv.createProduct(2, "Banana", 0.3, 50);

inv.getInventory();
inv.restockProduct(1, 25);
inv.sellStock(1, 30);
inv.sellStock(2, 70);  // shows insufficient stock
inv.getInventory();



 

