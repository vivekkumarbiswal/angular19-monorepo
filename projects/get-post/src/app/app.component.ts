import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  users!: any;

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this._dataService.getUser().subscribe((res) => (this.users = res));
  }

  addUser() {
    const newUser = {
      name: 'Vivek',
      email: 'Vivek@gmail.com',
    };

    this._dataService.addUser(newUser).subscribe((res) => {
      console.log('User added: ', res);
      this.getUser();
    });
  }
}
