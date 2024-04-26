import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-new-registration',
  templateUrl: './new-registration.component.html',
  styleUrls: ['./new-registration.component.css'],
})
export class NewRegistrationComponent implements OnInit {
  personalDetails!: FormGroup;
  familyDetails!: FormGroup;
  addressDetails!: FormGroup;
  maritalStatus: string = '';
  childrenCount: number = 0;
  childrenArray: number[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.personalDetails = this._formBuilder.group({
      patronshipNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      occupation: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
    });

    this.familyDetails = this._formBuilder.group({
      fatherName: ['', Validators.required],
      fatherDateOfBirth: ['', Validators.required],
      motherName: ['', Validators.required],
      motherDateOfBirth: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      spouseName: ['', Validators.required],
      spouseDOB: ['', Validators.required],
      childrenCount: ['', Validators.required],
      child1_Name: ['', Validators.required],
      child2_Name: ['', Validators.required],
      child3_Name: ['', Validators.required],
      child4_Name: ['', Validators.required],
      child1_dob: ['', Validators.required],
      child2_dob: ['', Validators.required],
      child3_dob: ['', Validators.required],
      child4_dob: ['', Validators.required],
    });

    this.addressDetails = this._formBuilder.group({
      rDoorNumber: ['', Validators.required],
      rStreet: ['', Validators.required],
      rLandmark: ['', Validators.required],
      rDistrict: ['', Validators.required],
      rPincode: ['', Validators.required],
      rState: ['', Validators.required],
      wDoorNumber: ['', Validators.required],
      wStreet: ['', Validators.required],
      wLandmark: ['', Validators.required],
      wDistrict: ['', Validators.required],
      wPincode: ['', Validators.required],
      wState: ['', Validators.required],
    });
  }
  updateMaritalStatus(status: string) {
    this.maritalStatus = status;
  }
  updateChildrenCount(event: MatSelectChange): void {
    const count = event?.value;
    if (count !== undefined) {
      this.childrenCount = count;
    }
    this.childrenArray = Array.from({ length: count }, (_, index) => index + 1);
  }
  btnSubmit(): void {
    console.log(this.personalDetails.value);
  }
}
