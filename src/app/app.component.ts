import {Component, Input, OnInit} from '@angular/core';
import {CompanyService} from "./company-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test-front';
  constructor(public companyService: CompanyService) {
    this.companyService.ngOnInit();
  }
  ngOnInit() {
  }

}

