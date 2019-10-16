import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';

@Component({
  selector: 'app-add-book-number',
  templateUrl: './add-book-number.component.html',
  styleUrls: ['./add-book-number.component.css']
})
export class AddBookNumberComponent implements OnInit {
  show: boolean = false;
  book: any = {};
  count: string = '0';
  constructor(private data: DataInterfaceService) { }

  @Output()
  bookPutaway: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit() {
  }

  getShow(book: any) {
    this.show = true;
    this.book = book;
  }
  cancel() {
    this.book = {};
    this.show = false;
    this.count = '0';
  }
  onSubmit() {
    this.data.getBookPutaway(this.book.Book.Id, this.count).subscribe((res: any) => {
      if (res.Code == 100) {
        this.book.Number = parseInt(this.book.Number) + parseInt(this.count);
        this.book.Detail.length = parseInt(this.book.Detail.length) + parseInt(this.count)
        this.bookPutaway.emit(this.book)
        this.book = {}
        this.show = false;
        this.count = '0';
      }

    })

  }
}
