import { Component, OnInit,ViewChild } from '@angular/core';
import {MainService} from "../main.service"
import {MatPaginator} from "@angular/material/paginator"
import {MatSort} from "@angular/material/sort"
import {MatSlideToggle} from '@angular/material/slide-toggle'
import {MatTableDataSource} from "@angular/material/table"
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router,ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ids=""
  user:any=[];
  bool=false;
  displayedColumns:string[]=["username","email","tel","id"];

  public dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(private service:MainService, private _snack:MatSnackBar, private route:Router , private router:ActivatedRoute) {
    this.data();
     this.ids=localStorage.getItem('ids');
     this.service.getUserData().subscribe(data=>{
       this.user=data
       for(let i=0;i<this.user.length;i++){
         if(this.ids===this.user[i].unique && this.user[i].is_admin===true){
           this.bool=true
           
         }
       }
     })

   }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    this.dataSource.paginator=this.paginator
    this.dataSource.sort=this.sort

  }

  public doFilter =(value :string)=>{
    this.dataSource.filter=value.trim().toLocaleLowerCase();
  }

  delete(id){
    this.service.deleteUser(id).subscribe(data=>{
      console.log(data);
      this.data();
      
    })
    this._snack.open("successfully deleted", "cancel", {
      duration: 2000,
    }); 


  }
  data(){
    this.service.getUserData().subscribe(val=>{
      this.dataSource.data=val as any;
      console.log("value",this.dataSource.data);
      

    });

  }


  logout(){
    localStorage.removeItem('ids');
    localStorage.removeItem("part");
   localStorage.removeItem("pref_id");
    return this.route.navigate(['/'])
  }

  

}
