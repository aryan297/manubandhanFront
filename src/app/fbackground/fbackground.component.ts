import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-fbackground',
  templateUrl: './fbackground.component.html',
  styleUrls: ['./fbackground.component.css']
})
export class FbackgroundComponent implements OnInit {
  MainFormGroup:FormGroup;
  ids=""
  fvalue:any=[];

  constructor(private _formBuilder: FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) { 
     this.ids=localStorage.getItem('ids')
     this.service.getFdata().subscribe(data=>{
       this.fvalue=data
     })

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
     ids:[''],
     id:['']
    });
  }

  ngOnInit(): void {
  }

  add(id){
    this.MainFormGroup.value.id=id;
    this.MainFormGroup.value.ids=this.ids

    this.service.updateFdata(this.MainFormGroup.value).subscribe(data=>{
      console.log(data);
    })
    this._snack.open("Added successfully", "cancel", {
      duration: 2000,
    });

    return this.route.navigate(['/profile'])



  }

}
