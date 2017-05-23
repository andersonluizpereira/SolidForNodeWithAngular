import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "app/user/user-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 profile = {};
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }

}
