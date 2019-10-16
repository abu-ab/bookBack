import { Component, OnInit, ViewChild } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';
import { BorrowDialogComponent } from 'src/app/components/borrow-dialog/borrow-dialog.component';
import { PagingComponent } from 'src/app/components/paging/paging.component';

@Component({
  selector: 'app-borrow-page',
  templateUrl: './borrow-page.component.html',
  styleUrls: ['./borrow-page.component.css']
})
export class BorrowPageComponent implements OnInit {
  @ViewChild("dialog", { static: false })
  borrowDialog: BorrowDialogComponent

  @ViewChild('paging', {
    static: false
  })
  paging: PagingComponent

  borrowList: any[];
  pageItemList: any[] = [];
  borrowState: string = '';
  constructor(private dp: DataInterfaceService) { }



  ngOnInit() {
    this.dp.getBorrow().subscribe((res: any) => {
        this.borrowList = res.Data;
      // this.paging.getItem(this.borrowList);
    })
  }

  changeState(list: any) {
    this.borrowDialog.getShow(list);
    // console.log(list)
  }
  changeBorrowState(book: any) {
    let index = this.pageItemList.findIndex(e => {
      return e.Id == book.Id
    })
    this.pageItemList[index] = book;
  }
  changeItem(item: any) {
    // let list = item as [];

    // for(let item of list){
    //   this.pageItemList.push(item);
    // }
    // this.pageItemList = item as any[];
    setTimeout(() => {
      this.pageItemList = item;
    }, 0);

    return item;
  }
}
