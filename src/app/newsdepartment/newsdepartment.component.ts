import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { news } from './news-department.model';

@Component({
  selector: 'app-newsdepartment',
  templateUrl: './newsdepartment.component.html',
  styleUrls: ['./newsdepartment.component.css']
})
export class NewsdepartmentComponent implements OnInit {
  departitem:news = new news();
  departments: news[] = [];

  constructor(private _ActivatedRoute:ActivatedRoute, private _httpClient:HttpClient) { }

  ngOnInit() {
    this._ActivatedRoute.paramMap.subscribe(params =>
      {
        this.departitem.ID =+ params.get('id');
        this._httpClient.get(`http://api.mohamed-sadek.com/News/Department/${this.departitem.ID}`).subscribe(
          response => {this.departments = response as news[] }, 
          err => {alert("error")}
        )
      }
    );
  }

}
