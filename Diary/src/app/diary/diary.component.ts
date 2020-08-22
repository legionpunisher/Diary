import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary'
import { from } from 'rxjs';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
 
  // updating output binding property
  diary:Diary[] = [
    new Diary(1,'shopping','going to buy household stuffs'),
    new Diary(2,'swimming','spend the weekend on swimming pool')
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
