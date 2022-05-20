import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  cats: any;
  catId: number = 0;
  date: string = format(new Date(), 'yyyy. MM. dd.');
  hiba: boolean = false;
  teh: boolean = true;
  desc: string = '';
  pic: string = '';
  hibaText: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/kategoriak').subscribe({
      next: (a: any) => {
        console.log(a);
        this.cats = a;
      },
      error: (error) => console.error(error),
      complete: () => console.info('complete'),
    });
  }
  save(): void {
    this.catId = Number(this.catId);
    if (this.catId != 0) {
      this.http
        .post('http://localhost:5000/api/ujingatlan', {
          kategoriaId: this.catId,
          leiras: this.desc,
          hirdetesDatuma: format(new Date(), 'yyyy-MM-dd'),
          tehermentes: this.teh,
          kepUrl: this.pic,
        })
        .subscribe({
          next: (a: any) => {
            console.log(a);
          },
          error: (error) => {
            this.hiba = true;
            this.hibaText = error.message;
          },
          complete: () => console.info('complete'),
        });
    } else {
      this.hiba = true;
      this.hibaText = 'You need to choose a category!';
    }
  }
}
