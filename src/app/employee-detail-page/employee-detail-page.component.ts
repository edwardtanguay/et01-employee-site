import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail-page',
  templateUrl: './employee-detail-page.component.html',
  styleUrls: ['./employee-detail-page.component.scss']
})
export class EmployeeDetailPageComponent implements OnInit {

  employee = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee = { firstName: "test" };
  }

}
