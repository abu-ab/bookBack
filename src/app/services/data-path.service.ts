import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPathService {
  private ROOT_URL: string = 'http://192.168.2.100/'
  constructor() { }
  //登录
  getLoginUrl() {
    return this.ROOT_URL + 'htmlprojectwebapi/account/login'
  }
  //修改登录密码
  getModifypasswordUrl() {
    return this.ROOT_URL + 'htmlprojectwebapi/account/modifypassword'
  }
  //借阅事务
  getBorrowUrl() {
    return this.ROOT_URL + 'librarywebapi/Transaction/GetAllBorrowRecords'
  }
  //配送
  getDistributionUrl() {
    return this.ROOT_URL + 'librarywebapi/Transaction/Distribution'
  }
  //确认
  getConfirmOrderUrl() {
    return this.ROOT_URL + 'librarywebapi/Transaction/ConfirmOrder'
  }
  //提交
  getReturnBookUrl() {
    return this.ROOT_URL + 'librarywebapi/Transaction/ReturnBook'
  }

  //类别
  getCategoryListUrl() {
    return this.ROOT_URL + 'librarywebapi/category/list'
  }
  //添加类别
  getCategoryCreateUrl() {
    return this.ROOT_URL + 'librarywebapi/category/create'
  }
  //修改类别
  getCategoryUpdateUrl() {
    return this.ROOT_URL + 'librarywebapi/category/update'
  }

  //图书列表
  getBookListUrl() {
    return this.ROOT_URL + 'librarywebapi/book/list'
  }
  //出版社
  getPublisherListUrl() {
    return this.ROOT_URL + 'librarywebapi/publisher/list'
  }

  //图书入库
  getBookPutawayUrl() {
    return this.ROOT_URL + 'librarywebapi/book/putaway'
  }


  //添加图书
  getBookCreateUrl() {
    return this.ROOT_URL + 'librarywebapi/book/create'
  }
  //查询图书
  getbookSingleUrl() {
    return this.ROOT_URL + 'librarywebapi/book/single'
  }
  //更新图书信息
  getBookUpdateUrl() {
    return this.ROOT_URL + 'librarywebapi/book/update'
  }
  //作者
  getAuthorListUrl() {
    return this.ROOT_URL + 'librarywebapi/author/list'
  }

}
