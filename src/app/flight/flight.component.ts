import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  success:boolean = true;
  LandSucc:boolean = true;
  showError:any;

  constructor(private http:FlightserviceService) { }

  flightDetails:any=[];

  ngOnInit(): void {
    this.http.fetchData().subscribe(data =>{
      this.flightDetails = data;
    })
  }

  sendYear(year:any):void{
    this.http.fetchEverything(year,this.success,this.LandSucc).subscribe(data =>{
    this.flightDetails = data;
    })
  }

  succLaunch(succ:any){
    this.http.fetchSuccLaunch(succ).subscribe(data =>{
      this.flightDetails = data;
    })
  }

  succLand(value:any){
    this.http.fetchSuccLand(value).subscribe(data =>{
      this.flightDetails = data;
    })
  }


}
