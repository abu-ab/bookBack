import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BorrowPageComponent } from './pages/borrow-page/borrow-page.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { ClassiftPageComponent } from './pages/classift-page/classift-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { from } from 'rxjs';
import { BorrowStatePipe } from './pipes/borrow-state.pipe';
import { BorrowDialogComponent } from './components/borrow-dialog/borrow-dialog.component';
import { ClasssifyDialogComponent } from './components/classsify-dialog/classify-dialog.component';
import { BookListClassifyPipe } from './pipes/book-list-classify.pipe';
import { AddBookNumberComponent } from './components/add-book-number/add-book-number.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { CategoryPipe } from './pipes/category.pipe';
import { PagingComponent } from './components/paging/paging.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    BorrowPageComponent,
    BookListPageComponent,
    ClassiftPageComponent,
    AdminPageComponent,
    WelcomePageComponent,
    LeftNavComponent,
    TopNavComponent,
    FooterComponent,
    BorrowStatePipe,
    BorrowDialogComponent,
    ClasssifyDialogComponent,
    BookListClassifyPipe,
    AddBookNumberComponent,
    BookDetailComponent,
    CategoryPipe,
    PagingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
