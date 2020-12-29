import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from "@angular/forms"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MainService} from "../main.service"
@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  form:FormGroup;
  userData={};
  hide = true;
  unique=""
  userValue:any=[]


  constructor(private fb:FormBuilder, private route:Router, private _snack:MatSnackBar, private service:MainService) { 

    this.unique=localStorage.getItem('ids')
    this.service.getUserData().subscribe(data=>{
      this.userValue=data
    })

    this.form=this.fb.group({
      username:[''],
      password:[''],
      cpassword:[''],
      email:[''],
      tel:[''],
      id:[''],
      is_admin:false

     
      
    })
  }

  ngOnInit(): void {
  }

  register(id){

    this.form.value.id=id;
    this.form.value.unique=this.unique;

    this.service.updateUser(this.form.value).subscribe(data=>{
      console.log(data);
      
    })

    this._snack.open("Added successfully", "cancel", {
      duration: 2000,
    });

    return this.route.navigate(['/profile'])



  }

}
