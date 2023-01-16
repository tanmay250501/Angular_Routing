import { Component, TemplateRef,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  name1 = '';
  price = 0;
  img = "https://cdn.shopify.com/s/files/1/1932/3837/products/120-604.6_232a8c45-74e8-4f0a-9d91-559bd1a89c41_1024x1024.jpeg?v=1538754812";

  carList: any = [

    {
      img: 'assets/transmoto.jpg',
      name1: 'TRANS CASE MOTOR',
      price: 1999

    },
    {
      img: 'assets/absbrake.jpeg',
      name1: 'ABS BRAKE UNIT',
      price: 2500
    },
    {
      img: 'assets/airbag.jpg',
      name1: 'AIR BAG (Side/Knee)',
      price: 1000
    },
    {
      img: 'assets/axel.jpg',
      name1: 'AXLE ASSEM ',
      price: 1000
    },
    {
      img: 'assets/shaft.jpeg',
      name1: 'AXLE SHAFT FWD',
      price: 1000
    },

  ]


  cartList: any = []
  kitchen: any = []
  totalCount = 0;

  sum = 0;


  selectItem(i: any) {


    this.totalCount += this.carList[i].price;
    this.cartList.push(this.carList[i]);
    console.log(this.totalCount)



  }


  delete1(i: any) {
    this.totalCount = this.totalCount - this.cartList[i].price;
    this.cartList.splice(i, 1)
  }
  placeOrder() {

    this.kitchen = this.cartList;
    this.sum = this.totalCount
    this.cartList = [];
    this.totalCount = 0;
  }

  submit1() {
    let object = {
      img: this.img,
      name1: this.name1,
      price: this.price,
    }
    this.carList.push(object)
    this.clear1();
    
    console.log('i am here', object)
    this.modalRef?.hide();

  }
  clear1() {
    this.name1 = "";
    this.price = 0;
  }
  carImg ="";
  carName = "";
  carPrice = "";


  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>,index:any) {
    console.log('index',index)
    

    if(index != null){
      
      this.carImg = this.carList[index].img;
      this.carName = this.carList[index].name1;
      this.carPrice = this.carList[index].price;
      
  
    }
    this.modalRef = this.modalService.show(template);
  }

  clear(){
    this.modalRef?.hide();
  }

  ngOnInit(): void {
  }

}
