import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl, Form} from "@angular/forms"
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  thirdFormGroup: FormGroup;
  ids=""
  pref:any=[];
  id='';

  constructor(private fb:FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) { 
    this.ids=localStorage.getItem('ids')
  
    this.thirdFormGroup = this.fb.group({
      ages:[''],
      quals:[''],
      job:[''],
      A_income:[''],
      complextion:[''],
      heights:[''],
      religion:[''],
      castes:[''],
      ids:[''],
      id:['']
    });

    this.service.getPref().subscribe(data=>{
      this.pref=data
    })

  }

  ngOnInit(): void {
  }

  add(id){
   

    this.thirdFormGroup.value.id=id;
    this.thirdFormGroup.value.ids=this.ids

if(this.thirdFormGroup.value.id==null){

  this.service.postPref(this.thirdFormGroup.value).subscribe(data=>{
    console.log(data);
    
  })
}
else{

    this.service.updatePref(this.thirdFormGroup.value).subscribe(data=>{
      console.log(data);
      

    })
  }
    this._snack.open("updated successfully", "cancel", {
      duration: 2000,
    });
    return this.route.navigate(['/profile'])


  }

}
