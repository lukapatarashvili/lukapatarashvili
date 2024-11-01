import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luka Patarashvili';

  users = [
    { firstname: 'Alice', lastname: 'Smith', age: 19 },
    { firstname: 'Bob', lastname: 'Johnson', age: 25 },
    { firstname: 'Carol', lastname: 'Williams', age: 18 },
    { firstname: 'David', lastname: 'Brown', age: 30 },
    { firstname: 'Eve', lastname: 'Davis', age: 20 }
  ];

  parentUsers: ParentUser[] = [
    { Id: 1, firstname: 'John', lastname: 'Doe', DateOfBirth: '1990-01-01', PhoneNumber: '123456789', email: 'john@example.com' },
    { Id: 2, firstname: 'Jane', lastname: 'Doe', DateOfBirth: '1995-01-01', PhoneNumber: '987654321', email: 'jane@example.com' }
  ];

  receivedChildUsers: ChildUser[] = [];

  onReceiveChildUsers(childUsers: ChildUser[]) {
    this.receivedChildUsers = childUsers;
  }
}
