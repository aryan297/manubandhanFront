import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MainService} from "../main.service"
import {Router} from "@angular/router"
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css']
})
export class PinfoComponent implements OnInit {
  firstFormGroup: FormGroup;
  isEditable = false;
  selected = '';
  fileToUpload: any;
  imageUrl: any;
  data={};
  select='';
  ids=""
  PValue:any=[];

  constructor(private _formBuilder: FormBuilder, private service:MainService,private route:Router, private _snack:MatSnackBar) { 
    this.ids =localStorage.getItem('ids')
    this.firstFormGroup = this._formBuilder.group({
      managed_by:[''],
      full_name:[''],
      age:[''],
      m_status:[''],
      qual:[''],
      income:[''],
      occup:[''],
      height:[''],
      weight:[''],
      caste:[''],
      image:[''],
      selected:[''],
      ids:[''],
      id:['']


    });
    this.service.getPdata().subscribe(data=>{
      this.PValue=data
      console.log(this.PValue);
      
    })
  }


  ngOnInit(): void {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  add(id){

    this.firstFormGroup.value.id=id;
    this.firstFormGroup.value.ids=this.ids;
   // this.firstFormGroup.value.image=this.imageUrl;

    this.service.getPdata().subscribe(data=>{
      this.PValue=data
      console.log(this.PValue);
      for(let i=0;i<=this.PValue.length;i++){
        if(this.ids===this.PValue[i].ids){

          if(this.imageUrl==null){
            this.firstFormGroup.value.image=this.PValue[i].image
          }
          else{
            this.firstFormGroup.value.image=this.imageUrl;

          }

          if(this.selected===""){
            this.firstFormGroup.value.selected=this.PValue[i].selected;
          }

          else{
            this.firstFormGroup.value.selected=this.selected;
          }

          console.log(this.firstFormGroup.value);
          
          this.service.updatePdata(this.firstFormGroup.value).subscribe(data=>{
            console.log(data);
            
          })
          this._snack.open("updated successfully", "cancel", {
            duration: 2000,
          });
          return this.route.navigate(['/profile'])
      
        }
      }


      
    })

  


  }

}
