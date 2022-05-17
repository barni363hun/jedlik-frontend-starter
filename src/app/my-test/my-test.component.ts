//EXAMPLE component
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss'],
})
export class MyTestComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://reqres.in/api/users').subscribe({
      next: (response) => {
        this.data = JSON.stringify(response);
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete'),
    });
  }
}
