import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  standalone: true,
  imports: [],
  templateUrl: './recipes-edit.component.html',
  styleUrl: './recipes-edit.component.css'
})
export class RecipesEditComponent implements OnInit{
  id:number;
  editmode:boolean=false;//we arenot on edit mode 
  constructor(private route :ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editmode=params['id']!=null;//this will not be undefined if we are in edit mode else on new mode
      console.log(this.editmode);
    })
  }
}
