import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'
import { from } from 'rxjs';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diary:Diary[] = [
    {id:1, name:'shopping',description:'going to but household stuffs'},
    {id:2, name:'swimming',description:'going to but household stuffs'},
    {id:3, name:'java', description:'going to but household stuffs'},
    {id:4, name:'programming', description:'going to but household stuffs'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
