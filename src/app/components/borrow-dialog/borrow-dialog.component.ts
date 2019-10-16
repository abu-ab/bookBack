import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';

@Component({
  selector: 'app-borrow-dialog',
  templateUrl: './borrow-dialog.component.html',
  styleUrls: ['./borrow-dialog.component.css']
})
export class BorrowDialogComponent implements OnInit {
  show: boolean = false;
  bookDetail: any = {};
  constructor(private data: DataInterfaceService) { }
  @Output()
  changeBorrow: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  getShow(book: any) {
    this.show = true;
    this.bookDetail = JSON.parse(JSON.stringify(book))
  }
  cancel() {
    this.show = false;
    this.bookDetail = {}
  }
  save() {
    let state = this.bookDetail.State;
    if (state == 2) {
      //配送
      this.data.getDistribution(this.bookDetail.Id).subscribe((res: any) => {
        if (res.Code == 100) {
          this.changeState()
        } else {
          console.log(res.Message)
        }
      })
    } else if (state == 3) {
      //确认
      this.data.getConfirmOrder(this.bookDetail.Id, this.bookDetail.Reader.Id).subscribe((res: any) => {
        if (res.Code == 100) {
          this.changeState()
        } else {
          console.log(res.Message)
        }
      })
    } else if (state == 4) {
      //已归还
      this.data.getReturnBook(this.bookDetail.Id, this.bookDetail.BookId).subscribe((res: any) => {
        if (res.Code == 100) {
          this.changeState()
        } else {
          console.log(res.Message)
        }
      })
    } else {
      this.show = false;
      return;
    }
  }
  changeState() {
    this.changeBorrow.emit(this.bookDetail);
    this.bookDetail = {};
    this.show = false;
  }
}
