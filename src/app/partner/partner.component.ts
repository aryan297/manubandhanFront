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
  bool="";
  constructor(private fb:FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) { 
    this.ids=localStorage.getItem('ids')
    this.bool=localStorage.getItem("part")
    
  
    this.thirdFormGroup = this.fb.group({
      ages:[''],
      quals:[''],
      job:[''],
      A_income:[''],
      complextion:[''],
      heights:[''],
      religion:[''],
      castes:[''],
      lf:[''],
      ids:[''],
      id:['']
    });

    this.service.getPref().subscribe(data=>{
      this.pref=data
      for(let i=0;i<this.pref.length;i++){
        if(this.ids===this.pref[i].ids){
         localStorage.setItem("part",this.pref[i].id)
          
          
        }
      }
    })

  }

  ngOnInit(): void {
  }

  add(id){
   

    this.thirdFormGroup.value.id=id;
    this.thirdFormGroup.value.ids=this.ids



    this.service.updatePref(this.thirdFormGroup.value).subscribe(data=>{
      console.log(data);

      

    })
  
    this._snack.open("updated successfully", "cancel", {
      duration: 2000,
    });
    return this.route.navigate(['/profile'])


  }

  adds(){
   

 
    this.thirdFormGroup.value.ids=this.ids



  this.service.postPref(this.thirdFormGroup.value).subscribe(data=>{
    console.log(data);
    
  })


    this._snack.open("Added successfully", "cancel", {
      duration: 1000,
    });

    setTimeout(()=>{      
      return this.route.navigate(['/profile'])                     //<<<---using ()=> syntax
    
 }, 1000);
   


  }

}
