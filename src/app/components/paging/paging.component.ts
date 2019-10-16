import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input()
  itemList: any[] = [];//获取绑定数据
  @Input()
  num: number = 10;//一页的数量

  pagingItem: any[] = [];//处理后分页的数据

  @Output()
  changeItem: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.itemList) {
      let arrItem: any = [];
      this.pagingItem = [];
      if (this.itemList.length > this.num) {

        for (let i = 0; i < this.itemList.length; i++) {
          if (arrItem.length == this.num) {
            this.pagingItem.push(arrItem);

            arrItem = [];
          }
          this.itemList[i].index = i;
          arrItem.push(this.itemList[i])
        }
        if (arrItem) {
          this.pagingItem.push(arrItem);
        }
      } else {
        for (let i = 0; i < this.itemList.length; i++) {
          this.itemList[i].index = i;
          arrItem.push(this.itemList[i])
        }

        this.pagingItem.push(arrItem);
      }
      setTimeout(() => {
        this.changeItem.emit(JSON.parse(JSON.stringify(this.pagingItem[0])));
      }, 0)
    }
  }
  showItem(index) {
    this.changeItem.emit(this.pagingItem[index])
  }
}
