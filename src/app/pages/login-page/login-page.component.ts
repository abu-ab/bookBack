import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataInterfaceService } from 'src/app/services/data-interface.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: any = {
    phone: 18913279983,
    password: 9983
  }
  message: string = ''
  constructor(private router: Router, private data: DataInterfaceService, private store: StoreService) { }

  ngOnInit() {

  }
  onLoad() {
    console.log(this.user)
    // return false;
    let formData = new FormData();
    formData.append('phone', this.user.phone);
    formData.append('password', this.user.password);
    this.data.getLogin(formData).subscribe((res: any) => {

      if (res.Code == 100) {

        let trueUser = {
          id: res.Data.Id,
          phone: res.Data.Phone,
          name: res.Data.TrueName
        }
        sessionStorage.setItem('user', JSON.stringify(trueUser))

        this.router.navigateByUrl('/home');
      } else {
        this.message = res.Message;
      }
    })

  }
}
