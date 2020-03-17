export class Product {
  public name: string;
  public description: string;
  public price: number;
  public imgPath: string;
  public unit: string = "piece";
  public id: number = 0;

  constructor(id: number, name: string, description: string, price: number, imgPath?: string, unit?: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imgPath = imgPath || this.imgPath;
      this.unit = unit || this.unit;
  }
}
