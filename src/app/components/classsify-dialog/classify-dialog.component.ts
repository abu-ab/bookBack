import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';

@Component({
  selector: 'app-classify-dialog',
  templateUrl: './classify-dialog.component.html',
  styleUrls: ['./classify-dialog.component.css']
})
export class ClasssifyDialogComponent implements OnInit {
  show: boolean = false;
  title: string = '';
  isChangeOrAdd: number = 0; //0：添加 1：修改
  classify: any = {
    Name: '',
    Priority: ''
  };
  constructor(private data: DataInterfaceService) { }

  @Output()
  changeClassify: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  addClassify: EventEmitter<any> = new EventEmitter<any>()
  ngOnInit() {
  }

  getShow(title: string, classify?: any) {
    this.show = true;
    this.title = title;
    if (classify) {
      this.isChangeOrAdd = 1;
      this.classify = JSON.parse(JSON.stringify(classify));
    }
  }

  cancel() {
    this.show = false;
    this.classify = {
      Name: '',
      Priority: ''
    };
    this.isChangeOrAdd = 0;
  }

  save() {
    this.show = false;
    if (this.isChangeOrAdd == 0) {
      //添加
      this.data.getCategoryCreate(this.classify).subscribe((res: any) => {
        console.log(res);
        if (res.Code == 100) {
          this.addClassify.emit(this.classify);
          return;
        }
        console.log(res.Message)
      })
    } else if (this.isChangeOrAdd == 1) {
      this.data.getCategoryUpdate(this.classify).subscribe((res: any) => {
        if (res.Code == 100) {
          this.changeClassify.emit(this.classify)
          return;
        }
        console.log(res.Message)

      })
    }
  }
}
