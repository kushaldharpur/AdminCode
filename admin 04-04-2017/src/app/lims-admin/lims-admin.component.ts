import { ReportsPage } from './../../pages/reports/reports';
import { AddBooksPage } from './../../pages/add-books/add-books';
import { TransferAdminPage } from './../../pages/transfer-admin/transfer-admin';
import { ApprovalsPage } from './../../pages/approvals/approvals';
import { RolesPage } from './../../pages/roles/roles';
import { ListPage } from './../../pages/list/list';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {ListPage} from '../list/list';
@Component({
  selector: 'app-lims-admin',
  templateUrl: './lims-admin.component.html'
})
export class LimsAdminComponent  {

  constructor(public nav: NavController) { }
 listOfBooks()
  {
    this.nav.push(ListPage);
  }
  roles()
  {
    this.nav.push(RolesPage);
  }
  approvals()
  {
    this.nav.push(ApprovalsPage);
  }
  transferAdmin()
  {
    this.nav.push(TransferAdminPage);
  }
  addBooks()
  {
    this.nav.push(AddBooksPage);
  }

reports()
{
  this.nav.push(ReportsPage);
}
 

}
