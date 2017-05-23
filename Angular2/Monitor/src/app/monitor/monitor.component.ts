import { Component, OnInit, Pipe, PipeTransform, Input } from '@angular/core';
import { MonitorService } from "app/monitor/monitor.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  providers: [MonitorService],
   styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  @Input() monitor: Monitor[];

  public monitors: Monitor [] = new Array();
  constructor(private monitorService: MonitorService) {
    
 

   }

   loadMonitor() {
    this.monitorService.getMonitor().subscribe((data:Monitor[]) => this.monitors = data, error => console.log(error),() => console.log('Get all Items complete'));

  }

  ngOnInit() {
this.loadMonitor()
}

 
}

  export interface Item {
        IdDashboardInterface: number;
        LastStartExecution: Date;
        LastEndExecution: Date;
        IdDashboardStatus: number;
        IsAlive: boolean;
        InterfaceRegister: string;
        Description: string;
        DisplayName: string;
        System: string;
    }

    export interface Monitor {
        DisplaySystem: string;
        Items: Item[];
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