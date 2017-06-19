import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { MonitorService } from "app/monitor/monitor.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  providers: [MonitorService],
  styleUrls: ['./monitor.component.css'],

  template: `
  <div class="table table-bordered table-striped table-striped table-sm">
     <table class="table" *ngFor="let disp of monitors">
  <tr>
    <th>
       <h3>{{disp.DisplaySystem}}</h3>
  
   </th>
  </tr>
 
  <td *ngFor="let item of disp.Items">
     <tr>
       <h3>{{item.DisplayName}}</h3>
    </tr>
   </td>

  
  </table>

</div>
  
`
   
})
export class MonitorComponent implements OnInit {
monitors : Monitor[]; 

constructor(private monitorService: MonitorService) {
  
   }

   loadMonitor() {
  this.monitorService.getMonitor().subscribe((data:Monitor[]) => this.monitors = data, error => console.log(error), ()=> console.log(this.monitors));
 
  }
    


  ngOnInit() {
  this.loadMonitor()
  
}

 
}

class Hero {
  constructor(
    public id: number,
    public name: string) { }
}


export class Item {
       
        IdDashboardInterface: number;
        LastStartExecution: Date;
        LastEndExecution: Date;
        IdDashboardStatus: number;
        IsAlive: boolean;
        InterfaceRegister: string;
        Description: string;
        DisplayName: string;
        System: string;
       
       constructor( 
        IdDashboardInterface: number,
        LastStartExecution: Date,
        LastEndExecution: Date,
        IdDashboardStatus: number,
        IsAlive: boolean,
        InterfaceRegister: string,
        Description: string,
        DisplayName: string,
        System: string
        ){
    
        this.IdDashboardInterface = IdDashboardInterface;
        this.LastStartExecution = LastStartExecution;
        this.LastEndExecution = LastEndExecution;
        this.IdDashboardStatus =IdDashboardStatus;
        this.IsAlive = IsAlive;
        this.InterfaceRegister = InterfaceRegister;
        this.Description = Description;
        this.DisplayName = DisplayName;
        this.System = System;

        }
    }

 export  class Monitor {
        DisplaySystem: string;
        Items: Item[]
     constructor( 
        DisplaySystem: string,
        Items: Item[]
     ){
       this.DisplaySystem = DisplaySystem;
       this.Items = Items;       
     }
    }


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}
