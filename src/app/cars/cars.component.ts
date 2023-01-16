import { Component, TemplateRef,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {  FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  candidate: any = [
    {
      
      candidateName: "2022 Audi A5",
      candidatePost: "Jr. Developer",
      candidateId: "Audi",
      candidatePhone: "63,400",
      
    },
    {
      candidateName: "2024 Chevrolet",
      candidatePost: "Product Manager",
      candidateId: "Chevrolet",
      candidatePhone: "65,995",
      
    },
    {
      
      candidateName: "2023 Audi A6",
      candidatePost: "Manager",
      candidateId: "Audi",
      candidatePhone: "74,800",
      
    },
    {
      
      candidateName: "2022 Bentley Flying Spur",
      candidatePost: "Assiatant Manager",
      candidateId: "Bentley",
      candidatePhone: "224,300",
      
    },
    
  
    ];

    candidateName = "";
    candidatePost = "";
    candidateId = "";
    candidatePhone = "";

    selectedIndex = "";

    carForm:FormGroup;

    delete(index: any) {
      this.candidate.splice(index, 1)
    }
    modalRef?: BsModalRef;
    constructor(private formBuilder: FormBuilder,private modalService: BsModalService) {
      this.carForm = this.formBuilder.group({
        candidateName: [''],
        candidatePost: [''],
        candidateId: [''],
        candidatePhone: [''],
        
  
      })
    }
    openModal1(template: TemplateRef<any>,index:any) {
      console.log('index',index)
      
  
      if(index != null){ //employee
        this.carForm.patchValue(
          {
            candidateName : this.candidate[index].candidateName,
            candidatePost : this.candidate[index].candidatePost,
            candidateId : this.candidate[index].candidateId,
            candidatePhone : this.candidate[index].candidatePhone,
          }
          )
        this.selectedIndex = index;
      }
      this.modalRef = this.modalService.show(template);
  
    }

    update(){

      this.candidate[this.selectedIndex].candidateName = this.carForm.value.candidateName;
      this.candidate[this.selectedIndex].candidatePost = this.carForm.value.candidatePost;
      this.candidate[this.selectedIndex].candidateId = this.carForm.value.candidateId;
      this.candidate[this.selectedIndex].candidatePhone = this.carForm.value.candidatePhone;

      this.clear();
      this.modalRef?.hide();
    }

    submit() {

      
  
      this.candidate.push(this.carForm.value);
      console.log('this',this.candidate)
      this.candidateName = "";
      this.candidatePost = "";
      this.candidateId = "";
      this.candidatePhone = "";
      this.modalRef?.hide();
    }

    close(){
      this.carForm = this.formBuilder.group({
        candidateName: [''],
        candidatePost: [''],
        candidateId: [''],
        candidatePhone: [''],
        
  
      })
      this.modalRef?.hide();
    }



    clear(){
      this.carForm = this.formBuilder.group({
        candidateName: [''],
        candidatePost: [''],
        candidateId: [''],
        candidatePhone: [''],
        
  
      })
    }

  ngOnInit(): void {
  }

}
