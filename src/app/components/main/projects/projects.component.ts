import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

isHover: any={
  Portofolio: false, 
  Netflix:false,
  Bolocas:false,
  Ananda:false,
  GoPaddle:false,
  ReyPatricio:false
};


constructor(){
console.table(this.isHover);}
}
