import { Component, OnInit } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';
  constructor(private data: DataInterfaceService, private router: Router) { }

  ngOnInit() {
  }
  revise() {
    let id = JSON.parse(sessionStorage.getItem('user')).id;
    console.log(id)
    this.data.getModifypassword(id, this.oldPassword, this.newPassword).subscribe((res: any) => {
      console.log(res);
      if (res.Code == 100) {
        sessionStorage.removeItem('user');
        this.router.navigateByUrl('/login');

      }
    })
  }
}
