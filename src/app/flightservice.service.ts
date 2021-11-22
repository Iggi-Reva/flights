import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {HttpClientModule, HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {

  constructor(private http:HttpClient) { }

  fetchData():Observable <any>{
    return this.http.get<any>("https://api.spacexdata.com/v3/launches?limit=100")
  }

  fetchEverything(year:any, LaunchS:any, LandS:any){
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+LaunchS+"&land_success="+LandS+"&launch_year="+year);
  }

  fetchSuccLaunch(succ:any){
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+succ)
  }

  fetchSuccLand(value:any){
    return this.http.get<any>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+value);
  }
}
