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

  constructor(private _formBuilder: FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) {
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
    return this.route.navigate(['/'])
  }


  searchThis(value){
    let filterArray=[];
    this.service.getPref().subscribe(res=>{
      this.pref=res;

      filterArray=this.pref.filter((val)=>
      val.quals.includes(value));
      this.pref=filterArray;
      console.log(filterArray);
      
    });
  }


}
