import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BorrowPageComponent } from './pages/borrow-page/borrow-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { ClassiftPageComponent } from './pages/classift-page/classift-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { IsLoginGuard } from './services/is-login.guard';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },

  {
    path: 'home', component: HomePageComponent, children: [
      { path: '', component: WelcomePageComponent },
      { path: 'borrow', component: BorrowPageComponent },
      { path: 'bookList', component: BookListPageComponent },
      { path: "classify", component: ClassiftPageComponent },
      { path: 'admin', component: AdminPageComponent },
      { path: 'bookDetail', component: BookDetailComponent },
      { path: 'bookDetail/:id', component: BookDetailComponent }
    ],
    canActivate: [IsLoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
