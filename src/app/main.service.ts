import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class MainService {
  Get_utl:string="http://localhost:3000/user"
  pdata:string ="http://localhost:3000/pdata"
  fdata:string="http://localhost:3000/fdata"
  adata:string="http://localhost:3000/adata"
  pref:string="http://localhost:3000/pref"

  constructor(private http:HttpClient) { }


  postUserData(data){

    return this.http.post(this.Get_utl,data);
  }
  getUserData(){
    return this.http.get(this.Get_utl);
  }
  postAdata(data){
    return this.http.post(this.adata,data);

  }
  postFdata(data){
    return this.http.post(this.fdata,data)

  }
  postPdata(data){
    return this.http.post(this.pdata,data)

  }

  postPref(data){
    return this.http.post(this.pref,data)
  }

  getPref(){
    return this.http.get(this.pref)
  }

  getAdata(){
    return this.http.get(this.adata);
  }
  getPdata(){
    return this.http.get(this.pdata);
  }

  getFdata(){
    return this.http.get(this.fdata);
  }
  updatePref(data){
   console.log(data);
    
    return this.http.put(this.pref+"/"+data.id,data)

  }

  updateUser(data){
    return this.http.put(this.Get_utl+"/"+data.id,data)
  }

  updatePdata(data){
    //console.log(data);
    
    return this.http.put(this.pdata+"/"+data.id,data)
  }

  updateFdata(data){
    return this.http.put(this.fdata+"/"+data.id,data)
  }
  updateAdata(data){
    return this.http.put(this.adata+"/"+data.id,data)
  }


}
