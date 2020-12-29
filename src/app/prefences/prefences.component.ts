import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl, Form} from "@angular/forms"
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-prefences',
  templateUrl: './prefences.component.html',
  styleUrls: ['./prefences.component.css']
})
export class PrefencesComponent implements OnInit {
  thirdFormGroup: FormGroup;
  ids=""

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
      ids:['']
    });
  }

  ngOnInit(): void {
  }

  add(){

    this.thirdFormGroup.value.ids=this.ids;


    this.service.postPref(this.thirdFormGroup.value).subscribe(data=>{
      console.log(data);
      

    })
    this._snack.open("Added successfully", "cancel", {
      duration: 2000,
    });
    return this.route.navigate(['/profile'])


  }

}
