import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataPathService } from './data-path.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataInterfaceService {

  constructor(private http: HttpClient, private dp: DataPathService) { }

  getLogin(formdata: any): Observable<any> {
    return this.http.post(this.dp.getLoginUrl(), formdata)
  }
  getModifypassword(id: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.post(this.dp.getModifypasswordUrl(), {
      id,
      oldPassword,
      newPassword
    })
  }
  getBorrow(): Observable<any> {
    return this.http.get(this.dp.getBorrowUrl());
  }
  getDistribution(orderid: any): Observable<any> {
    return this.http.get(this.dp.getDistributionUrl(), {
      params: {
        orderId: orderid
      }
    })
  }
  getConfirmOrder(orderid: any, readerid: any): Observable<any> {
    console.log(orderid, readerid)
    return this.http.post(this.dp.getConfirmOrderUrl(), {
      orderId: orderid,
      readerId: readerid
    })
  }
  getReturnBook(orderid: any, bookid: any): Observable<any> {
    return this.http.get(this.dp.getReturnBookUrl(), {
      params: {
        orderId: orderid,
        bookNumber: bookid
      }
    })
  }

  getCategoryList(): Observable<any> {
    return this.http.get(this.dp.getCategoryListUrl());
  }
  getCategoryCreate(category: any): Observable<any> {
    return this.http.post(this.dp.getCategoryCreateUrl(), {
      name: category.Name,
      priority: category.Priority
    })
  }
  getCategoryUpdate(category: any): Observable<any> {
    return this.http.post(this.dp.getCategoryUpdateUrl(), {
      id: category.Id,
      name: category.Name,
      priority: category.Priority
    })
  }

  getBookList(categoryId: string = "", publisherId: string = "", keyword: string = ""): Observable<any> {
    console.log(categoryId, publisherId, keyword)
    return this.http.get(this.dp.getBookListUrl(), {
      params: {
        categoryId: categoryId,
        publisherId: publisherId,
        keyword: keyword
      }
    });
  }

  getPublisherList(): Observable<any> {
    return this.http.get(this.dp.getPublisherListUrl())
  }

  getBookPutaway(bookId: string, count: string): Observable<any> {
    return this.http.post(this.dp.getBookPutawayUrl(), {
      bookId,
      count
    })
  }
  getBookCreate(formdata): Observable<any> {
    console.log(formdata)
    return this.http.post(this.dp.getBookCreateUrl(), formdata)
  }
  getAuthorList(): Observable<any> {
    return this.http.get(this.dp.getAuthorListUrl())
  }
  getbookSingle(id: string): Observable<any> {
    return this.http.get(this.dp.getbookSingleUrl(), {
      params: {
        id
      }
    })
  }
  getBookUpdate(formdata) {
    return this.http.post(this.dp.getBookUpdateUrl(), formdata);
  }
}