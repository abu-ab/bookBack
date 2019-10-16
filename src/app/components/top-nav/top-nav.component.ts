import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  user: any = {};
  constructor(private store: StoreService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'))
  }

}
