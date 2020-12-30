import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pref:any=[];
  pdata:any=[]
  ids=""

  constructor(private _formBuilder: FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) {
    this.ids=localStorage.getItem("ids")
    this.service.getPref().subscribe(data=>{
      this.pref=data
    })
    this.service.getPdata().subscribe(data=>{
      this.pdata=data
    })
   }
  
  
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('ids')
    localStorage.removeItem("part");
    localStorage.removeItem("pref_id")
    return this.route.navigate(['/'])
  }


  searchThis(value){
    let filterArray=[];
    this.service.getPref().subscribe(res=>{
      this.pref=res;

     
      filterArray=this.pref.filter((val)=>
      val.castes.includes(value));
    

     if(filterArray.length===0){
        filterArray=this.pref.filter((val)=>
      val.job.includes(value));

      }

     if(filterArray.length===0){
        filterArray=this.pref.filter((val)=>
        val.religion.includes(value));
      }

      if(filterArray.length===0){
        filterArray=this.pref.filter((val)=>
        val.quals.includes(value));
      }
      if(filterArray.length===0){
        filterArray=this.pref.filter((val)=>
        val.lf.includes(value).toLowerCase);
      }
 
      this.pref=filterArray;

    
      console.log(filterArray);
      
    });
  }


}
