import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.css',
})
export class SwitchMapComponent implements OnInit {
  searchControl = new FormControl('');
  users: string[] = [];

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value) => this.fetchUsers(value)),
      )
      .subscribe((res) => (this.users = res));
  }

  fetchUsers(query: any) {
    console.log('API CALL: ', query);

    const allUsers = ['John', 'Jane', 'Jack', 'Jill', 'james'];

    const filtered = allUsers.filter((user) =>
      user.toLowerCase().includes(query.toLocaleLowerCase()),
    );
    return of(filtered);
  }
}
