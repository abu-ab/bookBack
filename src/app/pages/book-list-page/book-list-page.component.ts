import { Component, OnInit, ViewChild } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';
import { AddBookNumberComponent } from 'src/app/components/add-book-number/add-book-number.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.css']
})
export class BookListPageComponent implements OnInit {
  @ViewChild(AddBookNumberComponent, {
    static: false
  })
  addBookNumberDialog: AddBookNumberComponent

  bookList: any = [];
  categoryList: any = [];
  publisherList: any = [];

  categoryIndex: string = '';
  publishIndex: string = '';
  bookName: string = '';

  constructor(private data: DataInterfaceService, private router: Router) { }

  ngOnInit() {
    this.data.getBookList().subscribe((res: any) => {
      if (res.Code == 100) {
        this.bookList = res.Data;
        console.log(res.Data)
      }
    })
    this.data.getCategoryList().subscribe((res: any) => {
      if (res.Code == 100) {
        this.categoryList = res.Data;
      }
    })
    this.data.getPublisherList().subscribe((res: any) => {
      if (res.Code == 100) {
        this.publisherList = res.Data;
      }
    })
  }
  addBookNumber(book: any) {
    this.addBookNumberDialog.getShow(book);
  }
  bookPutaway(book: any) {
    let index = this.bookList.findIndex(e => {
      return e.Book.Id == book.Book.Id
    })
    this.bookList[index] = book;
  }
  skipAddBook() {
    this.router.navigateByUrl('/home/bookDetail')
  }
  searchBook() {
    this.data.getBookList(this.categoryIndex, this.publishIndex, this.bookName).subscribe((res: any) => {
      if (res.Code == 100) {
        this.bookList = res.Data;
        console.log(res.Data)
      }
    })
  }
  modifierBook(book) {
    console.log(book)
    let id: string = book.Book.Id;
    this.router.navigate(['/home/bookDetail', id])
  }
}
