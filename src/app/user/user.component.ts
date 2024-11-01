import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DisplayService } from '../display.service';

interface ParentUser {
  Id: number;
  firstname: string;
  lastname: string;
  DateOfBirth: string;
  PhoneNumber: string;
  email: string;
}

interface ChildUser {
  Id: number;
  firstname: string;
  lastname: string;
  DateOfBirth: string;
  PhoneNumber: string;
  email: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() parentUsers: ParentUser[] = [];
  @Output() childUsersEvent = new EventEmitter<ChildUser[]>();

  childUsers: ChildUser[] = [
    { Id: 3, firstname: 'Tom', lastname: 'Hanks', DateOfBirth: '2000-01-01', PhoneNumber: '555555555', email: 'tom@example.com' }
  ];

  constructor(private displayService: DisplayService) {}

  sendChildUsers() {
    this.childUsersEvent.emit(this.childUsers);
  }

  displayArray() {
    console.log(this.displayService.displayArray(this.parentUsers));
  }
}
