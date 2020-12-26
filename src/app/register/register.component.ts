import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  MainFormGroup:FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  selected = '';
  fileToUpload: any;
  imageUrl: any;
  data={};
  select='';
  ids=""
  Avalue=[];
  PValue=[];
  FValue=[];

  constructor(private _formBuilder: FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) { 
   this.service.getAdata().subscribe(data=>{
     data=this.Avalue
   });
  
   this.service.getFdata().subscribe(data=>{
     data=this.FValue
   })

   this.service.getPdata().subscribe(data=>{
     data=this.PValue
   })

    this.ids =localStorage.getItem('ids')
    this.firstFormGroup = this._formBuilder.group({
      managed_by:[''],
      full_name:[''],
      age:[''],
      m_status:[''],
      qual:[''],
      income:[''],
      occup:[''],
      height:[''],
      weight:[''],
      caste:[''],


    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      dob:[''],
      btime:[''],
      bplace:[''],
      rashi:[''],
      nadi:[''],
      manglik:[''],
      gotra:[''],
      devak:[''],
      gaan:[''],
      ids:['']
    });

   
    this.MainFormGroup=this._formBuilder.group({
      F_name:[''],
      F_occup:[''],
      M_name:[''],
      M_occup:[''],
      brother:[''],
     sister:[''],
     uncle:[''],
     uncle_M:[''],
     aunts:[''],
     F_income:[''],
     ids:['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      ages:[''],
      quals:[''],
      job:[''],
      A_income:[''],
      complextion:[''],
      heights:[''],
      religion:[''],
      castes:['']
    });
  }

  ngOnInit(): void {
  
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  addData(){

    this.data={
      managed_by:this.firstFormGroup.value.managed_by,
      full_name:this.firstFormGroup.value.full_name,
      age:this.firstFormGroup.value.age,
      m_status:this.firstFormGroup.value.m_status,
      qual:this.firstFormGroup.value.qual,
      income:this.firstFormGroup.value.income,
      occup:this.firstFormGroup.value.occup,
      height:this.firstFormGroup.value.height,
      weight:this.firstFormGroup.value.weight,
      caste:this.firstFormGroup.value.caste,
      selected:this.selected,
      image:this.imageUrl,
      ids:this.ids

    }

    this.secondFormGroup.value.ids=this.ids;
    this.MainFormGroup.value.ids=this.ids

    this.data

    console.log(this.data);

    console.log(this.secondFormGroup.value);
    console.log(this.MainFormGroup.value);

    this.service.postAdata(this.secondFormGroup.value).subscribe(data=>{
      console.log(data);
      
    })
    this.service.postFdata(this.MainFormGroup.value).subscribe(data=>{
      console.log(data);
      
    })

    this.service.postPdata(this.data).subscribe(data=>{
      console.log(data);
    })

    this._snack.open("Added successfully", "cancel", {
      duration: 2000,
    });

    return this.route.navigate(['/profile'])
    
  }

}
