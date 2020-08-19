export class Order{
  constructor(
    public name: string, 
    public desc: String, 
    public imagePath: string, 
    public orderItems: Object[],
     public sid: string, 
     public isVisible: boolean,
     ){
  }
}