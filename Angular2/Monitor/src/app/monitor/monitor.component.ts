import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { MonitorService } from "app/monitor/monitor.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  providers: [MonitorService],
  styleUrls: ['./monitor.component.css'],
//    template: `
//   <h1>{{title}}</h1>
//   <h2>My favorite hero is: {{myHero.name}}</h2>
//   <p>Heroes:</p>
//   <ul>
//     <li *ngFor="let hero of heroes">
//       {{ hero.name }}
//       </li>
//   </ul>
//   <p *ngIf="heroes.length > 3">There are many heroes!</p>

// <p> {{monitors.DisplaySystem}}  </p>

// `

template: `
  
   <div class="row" *ngFor="let disp of monitors">
    <h1>{{disp.DisplaySystem}}</h1>
   </div>
  
`
   
})
export class MonitorComponent implements OnInit {
monitors : Monitor[]; 
//monitors : any =[]; 

constructor(private monitorService: MonitorService) {
  
   }

   loadMonitor() {
  this.monitorService.getMonitor().subscribe((data:Monitor[]) => this.monitors = data, error => console.log(error), ()=> console.log(this.monitors));

//   this.monitorService.getMonitor().subscribe(data => { this.monitors =  data => console.log(this.monitors) });
 
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
