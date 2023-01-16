import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  modalRef?: BsModalRef;
  staff: any = [
    {
      staffName: 'Tanmay ',
      staffPost: 'Jr. Developer',
      staffId: 'tanmay@01',
      staffPhone: 1234567890,
    },
    {
      staffName: 'Mayank',
      staffPost: 'Manager',
      staffId: 'mayank@01',
      staffPhone: 1234567890,
    },
    {
      staffName: 'Somya',
      staffPost: 'Assiatant Manager',
      staffId: 'somya@01',
      staffPhone: 1234567890,
    },
    {
      staffName: 'Ritik ',
      staffPost: 'Product Manager',
      staffId: 'ritik@01',
      staffPhone: 1234567890,
    },
  ];

  staffName = "";
  staffPost = "";
  staffId = "";
  staffPhone = "";

  selectedIndex = "";

  staffForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {
    this.staffForm = this.formBuilder.group({
      staffName: [''],
      staffPost: [''],
      staffId: [''],
      staffPhone: [''],
    });
  }

  openModal2(template: TemplateRef<any>, index: any) {
    console.log('index', index);

    if (index != null) {

      this.staffForm.patchValue(
      {
        staffName: this.staff[index].staffName,
        staffPost: this.staff[index].staffPost,
        staffId: this.staff[index].staffId,
        staffPhone: this.staff[index].staffPhone,
      }
      )
      this.selectedIndex = index;
    }
    this.modalRef = this.modalService.show(template);
  }

  deletestaff(index: any) {
    this.staff.splice(index, 1);
  }

  submitstaff() {
    this.staff.push(this.staffForm.value);
    console.log('this', this.staff);
    this.staffName = "";
    this.staffPost = '';
    this.staffId = "";
    this.staffPhone = "";
    this.modalRef?.hide();
  }
  updatestaff() {
      this.staff[this.selectedIndex].staffName = this.staffForm.value.staffName;
      this.staff[this.selectedIndex].staffPost = this.staffForm.value.staffPost;
      this.staff[this.selectedIndex].staffId = this.staffForm.value.staffId;
      this.staff[this.selectedIndex].staffPhone = this.staffForm.value.staffPhone;

    this.clear();
    this.modalRef?.hide();
  }

  closestaff() {
    this.staffForm = this.formBuilder.group({
      staffName: [''],
      staffPost: [''],
      staffId: [''],
      staffPhone: [''],
      
    })
    this.modalRef?.hide();
  }
  clear() {
    this.staffForm = this.formBuilder.group({
      staffName: [''],
      staffPost: [''],
      staffId: [''],
      staffPhone: [''],
      
    })

  
  }

  ngOnInit(): void {}
}
