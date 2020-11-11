import { Component } from '@angular/core';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btnStyle: string = "btn btn-primary"
  students: any[] = [];

  studentCollection: any[] =[
    
    {name: "Tanya", favNumber: 743747, favColor: "orange"},
    {name: "Kali", favNumber: 38473874, favColor: "blue"},
    {name: "Hung", favNumber: 73874, favColor: "azure"},
    {name: "Christian", favNumber: 74, favColor: "black"},
    {name: "Mark", favNumber: 4, favColor: "green"},
    {name: "Jack", favNumber: 12, favColor: "red"},
    {name: "Jonathan", favNumber: 4, favColor: "blue"},
    {name: "Tracy", favNumber: 89, favColor: "pink"},
    {name: "Manami", favNumber: 5, favColor: "grey"},
    {name: "Mark", favNumber: 6, favColor: "purple"},
    {name: "Sarah", favNumber: 1, favColor: "red"},
    {name: "Elena", favNumber: 12, favColor: "blue"}
  ]
  title = 'student-list';

  getStudents ():void {
    this.students=this.studentCollection;
  }
  changeColor():void{
    this.btnStyle = "btn btn-danger"
  }
  constructor (
    private usersvc: UserService
    ){
this.usersvc.list();
    }

    ngOnInit():void{

}
}
