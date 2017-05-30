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
// `
   template: `
  <h1>{{title}}</h1>
  
  <p>Heroes:</p>
  <ul>
    
  <p *ngIf="monitors.length > 3">There are many heroes!</p>
`
})
export class MonitorComponent implements OnInit {
  
  public monitors: Monitor; 
heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.monitors[0];


  constructor(private monitorService: MonitorService) {
  
   }

   loadMonitor() {
    //this.monitorService.getMonitor().subscribe((data:Monitor[]) => this.monitors = data, error => console.log(error),() => console.log('Get all Items complete'));

    this.monitorService.getMonitor().subscribe(IP => this.monitors = IP);

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


 class Item {
       constructor( 
        public IdDashboardInterface: number,
        public LastStartExecution: Date,
        public LastEndExecution: Date,
        public IdDashboardStatus: number,
        public IsAlive: boolean,
        public InterfaceRegister: string,
        public Description: string,
        public DisplayName: string,
        public System: string
        ){}
    }

   class Monitor {
     constructor( 
        DisplaySystem: string,
        Items: Item[]
     ){}
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