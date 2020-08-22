import { Component } from '@angular/core';
import { Diary} from './diary';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Diary';
  diary:Diary[] = [
    {id:1, name:'shopping',description:'going to but household stuffs'},
    {id:2, name:'swimming',description:'going to but household stuffs'},
    {id:3, name:'java', description:'going to but household stuffs'},
    {id:4, name:'programming', description:'going to but household stuffs'},
 
  ];
}
