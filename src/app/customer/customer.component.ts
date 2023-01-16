import { Component, TemplateRef,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  modalRef?: BsModalRef;
  statement: any = [
    {
      
      statementName: "Tanmay ",
      statementPost: "Jr. Developer",
      statementId: "tanmay@01",
      statementPhone: 1234567890,
      
    },
    {
      
      statementName: "Mayank",
      statementPost: "Manager",
      statementId: "mayank@01",
      statementPhone: 1234567890,
      
    },
    {
      
      statementName: "Somya",
      statementPost: "Assiatant Manager",
      statementId: "somya@01",
      statementPhone: 1234567890,
      
    },
    {
      statementName: "Ritik ",
      statementPost: "Product Manager",
      statementId: "ritik@01",
      statementPhone: 1234567890,
      
    },

    ];

    statementName = "";
    statementPost = "";
    statementId = "";
    statementPhone = "";

    selectedIndex = "";


    customersForm: FormGroup ;

    deletestatement(index: any) {
      this.statement.splice(index, 1)
    }

  
    constructor(private formBuilder: FormBuilder,private modalService: BsModalService) {
      this.customersForm = this.formBuilder.group({
        statemenName: [''],
        statemenPost: [''],
        statemenId: [''],
        statemenPhone: [''],
        
  
      })
    }

    openModal4(template: TemplateRef<any>,index:any) {
      console.log('index',index)
  
      
      if(index != null){ //statement
        
        this.customersForm.patchValue(
          {
            statementName : this.statement[index].statementName,
            statementPost : this.statement[index].statementPost,
            statementId : this.statement[index].statementId,
            statementPhone : this.statement[index].statementPhone,
          }
          )
          this.selectedIndex = index;
        }
        this.modalRef = this.modalService.show(template);
    }  
    updatestatement(){

      this.statement[this.selectedIndex].statementName = this.customersForm.value.statementName;
      this.statement[this.selectedIndex].statementPost = this.customersForm.value.statementPost;
      this.statement[this.selectedIndex].statementId = this.customersForm.value.statementId;
      this.statement[this.selectedIndex].statementPhone = this.customersForm.value.statementPhone;
      
      this.clear();
      this.modalRef?.hide();
    }

    submitstatement() {

  
      this.statement.push(this.customersForm.value);
      console.log('this',this.statement)
      this.statementName = "";
      this.statementPost = "";
      this.statementId = "";
      this.statementPhone = "";
      this.modalRef?.hide();
    }

    closestatement(){
      this.customersForm = this.formBuilder.group({
        statementName: [''],
        statementPost: [''],
        statementId: [''],
        statementPhone: [''],
        
      })
      this.modalRef?.hide();
    }

    clear(){
      this.customersForm = this.formBuilder.group({
        statementName: [''],
        statementPost: [''],
        statementId: [''],
        statementPhone: [''],
        
      })
    }

  ngOnInit(): void {
  }

  


}
