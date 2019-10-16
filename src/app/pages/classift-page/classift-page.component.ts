import { Component, OnInit, ViewChild } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';
import { ClasssifyDialogComponent } from 'src/app/components/classsify-dialog/classify-dialog.component';

@Component({
  selector: 'app-classift-page',
  templateUrl: './classift-page.component.html',
  styleUrls: ['./classift-page.component.css']
})
export class ClassiftPageComponent implements OnInit {
  @ViewChild('dialog', {
    static: false
  })
  classifyDialog: ClasssifyDialogComponent

  categoryList: any = [];
  title: string = '';
  classifyName: string = '';
  pageItemList: any = [];
  constructor(private data: DataInterfaceService) { }

  ngOnInit() {
    this.data.getCategoryList().subscribe((res: any) => {
      if (res.Code == 100) {
        this.categoryList = res.Data;
        console.log(this.categoryList)
      }
    })

  }
  addClassify() {
    console.log(1)
    this.classifyDialog.getShow('添加类别')
  }
  changeClassify(classify) {
    this.classifyDialog.getShow('修改类别', classify)
  }
  addCategory(category: any) {
    this.categoryList.push(category)
  }
  changeCategory(category: any) {
    let index = this.categoryList.findIndex(e => {
      return e.Id = category.Id;
    })
    this.categoryList[index] = category;
  }
  changeItem(item) {
    console.log(item)
    this.pageItemList = item
  }
}
