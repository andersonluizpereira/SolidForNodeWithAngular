import { Component, OnInit } from '@angular/core';
import { WebService } from "app/ipsearch/web.service";

@Component({
  selector: 'app-ipsearch',
  templateUrl: './ipsearch.component.html',
  styleUrls: ['./ipsearch.component.css'],
  providers: [WebService]
  
})
export class IpsearchComponent implements OnInit {

  public IPAddr : string;
  constructor(private webService: WebService) { }

  ngOnInit() {
      this.LoadIp();   
  }

   LoadIp(){
     this.webService.getIP().subscribe(IP => this.IPAddr = IP);
  }

}
