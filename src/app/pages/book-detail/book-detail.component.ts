import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataInterfaceService } from 'src/app/services/data-interface.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  imgSrc: any = '';
  file: any;
  bookList: any = {
    Author: {},
    Publisher: {},
    Category: {}
  };
  categoryList: any = [];
  publisherList: any = [];
  authorList: any = [];
  isAddOrChange: number = 0;
  constructor(private data: DataInterfaceService, private router: Router, private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.data.getbookSingle(id).subscribe((res: any) => {
        if (res.Code == 100) {
          this.bookList = res.Data.Book;
          this.imgSrc = res.Data.Book.Image;
          this.isAddOrChange = 1;
        }
        console.log(this.bookList)
      })
    }
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
    this.data.getAuthorList().subscribe((res: any) => {
      if (res.Code == 100) {
        this.authorList = res.Data;
      }
    })
  }
  choiceImg() {
    let file = document.createElement('input')
    file.type = 'file';
  }
  changeImg(e) {
    let self = this;
    if (!e.target.files) {
      return;
    }
    this.file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = function (select_file) {
      console.log(select_file)
      self.imgSrc = (select_file.target as any).result;
    }
  }
  changeBook() {
    let formData = new FormData();
    console.log(this.bookList.categoryId)

    formData.append('isbn', this.bookList.ISBN);
    formData.append('name', this.bookList.Name);
    formData.append('publishDate', this.bookList.PublishDate);
    formData.append('categoryId', this.bookList.Category.Id);
    formData.append('publisherId', this.bookList.Publisher.Id);
    formData.append('authorId', this.bookList.Author.Id);
    formData.append('introduce', this.bookList.Introduce);
    console.log(this.file)
    if (this.file) {
      formData.append('image', this.file)
    }
    console.log(formData)
    if (this.isAddOrChange == 0) {
      this.data.getBookCreate(formData).subscribe((res: any) => {
        console.log(res);
        if (res.Code == 100) {
          this.router.navigateByUrl('/home/bookList')
        }
      });
    } else if (this.isAddOrChange == 1) {
      formData.append("id", this.bookList.Id)
      this.data.getBookUpdate(formData).subscribe((res: any) => {
        if (res.Code == 100) {
          this.router.navigateByUrl('/home/bookList')
        }
      })
    }

  }
}
