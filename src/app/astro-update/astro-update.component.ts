import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-astro-update',
  templateUrl: './astro-update.component.html',
  styleUrls: ['./astro-update.component.css']
})
export class AstroUpdateComponent implements OnInit {
  secondFormGroup: FormGroup;
  ids=""
  Avalue:any=[]

  constructor(private _formBuilder: FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) { 
    this.ids =localStorage.getItem('ids')
    this.service.getAdata().subscribe(data=>{
      this.Avalue=data
    })
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
      ids:[''],
      id:['']
    });
  }

  ngOnInit(): void {
  }
  add(id){
    this.secondFormGroup.value.id=id;
    this.secondFormGroup.value.ids=this.ids;
    
    this.service.updateAdata(this.secondFormGroup.value).subscribe(data=>{
      console.log(data);
      
    });
    this._snack.open("Added successfully", "cancel", {
      duration: 2000,
    });

    return this.route.navigate(['/profile'])


  }

}
