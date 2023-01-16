import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = "";
  password = "";


  logIn: any = [
    {
      name: "",
      password: "",

    }
  ]

  customer: any = [
    {

      name: "Tanmay ",
      post: "Jr. Developer",
      email: "tanmay@01",
      phone: 1234567890,

    },
    {

      name: "Mayank",
      post: "Manager",
      email: "mayank@01",
      phone: 1234567890,

    },
    {

      name: "Somya",
      post: "Assiatant Manager",
      email: "somya@01",
      phone: 1234567890,

    },
    {
      name: "Ritik ",
      post: "Product Manager",
      email: "ritik@01",
      phone: 1234567890,

    },

  ];



  deletecustomer(index: any) {
    this.customer.splice(index, 1)
  }


  login(index: any) {
    console.log('index', this.logIn)
  }
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }



  openModal(template: TemplateRef<any>, index: any) {
    console.log('index', index)

    this.modalRef = this.modalService.show(template);
  }

  clear() {

    this.modalRef?.hide();
  }


}


