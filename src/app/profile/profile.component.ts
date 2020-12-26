import { Component, OnInit,ViewChild } from '@angular/core';
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  ids=""
  Avalue:any=[];
  PValue:any=[];
  FValue:any=[];
  user:any=[]
  pref:any=[];
  constructor(private service:MainService,private route:Router) {
    this.ids=localStorage.getItem("ids")
    this.service.getAdata().subscribe(data=>{
      this.Avalue=data
      console.log(this.Avalue);
      
    });
    this.service.getPref().subscribe(data=>{
      this.pref=data
    })

    this.service.getUserData().subscribe(data=>{
      this.user=data
    })
   
    this.service.getFdata().subscribe(data=>{
      this.FValue=data
    })
 
    this.service.getPdata().subscribe(data=>{
      this.PValue=data
      console.log(this.PValue);
      
    })
   }

  ngOnInit(): void {
  }

   logout(){
     localStorage.removeItem('ids')
     return this.route.navigate(['/'])
   }

   addPref(id){
     localStorage.setItem("pref_id",id)

     return this.route.navigate(['/Pupdate'])
   }

}
