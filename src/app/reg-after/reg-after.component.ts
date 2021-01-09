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
  user:any=[];
  Uname=false;
  Gmail=false;
  phn=false;

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
    this.service.getUserData().subscribe(data=>{
      this.user=data;

      for(let i=0;i<this.user.length;i++){

        if(this.form.value.username===this.user[i].username){
             this.Uname=true;

        }

        if(this.form.value.email===this.user[i].email){
          this.Gmail=true;
        }
        if(this.form.value.tel===this.user[i].tel){
          this.phn=true;
        }
      }
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
    else if(this.phn===true){
      this._snack.open("Mobile number already exist", "cancel", {
        duration: 2000,
      });
      this.phn=false;

    }
    else if(this.Uname===true){
      this._snack.open("Username already exist", "cancel", {
        duration: 2000,
      });

      this.Uname=false


    }
    else if(this.Gmail===true){
      this._snack.open("Email already exist", "cancel", {
        duration: 2000,
      });
      this.Gmail=false;

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
    //console.log(this.form.value);
    }

  })

  }


}
