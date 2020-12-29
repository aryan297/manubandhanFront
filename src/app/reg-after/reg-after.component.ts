import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl} from "@angular/forms"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';
import {MainService} from "../main.service"
@Component({
  selector: 'app-reg-after',
  templateUrl: './reg-after.component.html',
  styleUrls: ['./reg-after.component.css']
})
export class RegAfterComponent implements OnInit {
  form:FormGroup;
  userData={};
  hide = true;
  unique=""

  constructor(private fb:FormBuilder, private route:Router, private _snack:MatSnackBar, private service:MainService) { 
    this.form=this.fb.group({
      username:[''],
      password:[''],
      cpassword:[''],
      email:[''],
      tel:['']

     
      
    })
  }

  ngOnInit(): void {
  }


  register(){

    if(this.form.value.password!=this.form.value.cpassword){
      this._snack.open("password and confirm password not matched", "cancel", {
        duration: 2000,
      });
      
    }

    else if(this.form.value.username==="" || this.form.value.password==="" || this.form.value.cpassword==="" || this.form.value.email===""){
      
      this._snack.open("please fill all the data", "cancel", {
        duration: 2000,
      });
    }

    else{

      this.unique=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)
     



      this.userData={
        username:this.form.value.username,
        password:this.form.value.password,
        email:this.form.value.email,
        tel:this.form.value.tel,
        unique:this.unique, 
        is_admin:false
      }

      localStorage.setItem('ids',this.unique)
    this.service.postUserData(this.userData).subscribe(data=>{
      console.log(data);
      this._snack.open("User added successfully", "cancel", {
        duration: 2000,
      });
      
    })

    return this.route.navigate(['/register'])
    console.log(this.form.value);
    }

  }


}
