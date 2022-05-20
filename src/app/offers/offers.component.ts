import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  displayedColumns: string[] = [
    'Kategória',
    'Leírás',
    'Hirdetés Dátuma',
    'Tehermentes',
    'Fénykép',
  ];
  data: {
    cat: string;
    desc: string;
    date: string;
    teh: string;
    pic: string;
  }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/ingatlan').subscribe({
      next: (response: any) => {
        this.data = response.map((a: any) => {
          console.log(a);
          return {
            cat: a.kategoriaNev,
            desc: a.leiras,
            date: a.hirdetesDatuma,
            pic: a.kepUrl,
            teh: a.tehermentes,
          };
        });
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete'),
    });
  }
}
