import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { TareasfelicesService } from '../../services/tareasfelices.service' ;
import { TareaFeliz } from '../../modelos/tareafeliz' ;


@Component({
  selector: 'app-agregar-tasks',
  templateUrl: './agregar-tasks.component.html',
  styleUrls: ['./agregar-tasks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarTasksComponent implements OnInit {
  mitareafeliz : TareaFeliz = {
   comandanro: 0 ,
   nroruc:   0 ,
   montototal: 0
  };  

  constructor() { }
  // nada

  ngOnInit() {
  }
  onSubmit() {
    if(this.mitareafeliz.comandanro != 0 && this.mitareafeliz.nroruc != 0 && this.mitareafeliz.montototal != 0 {
      this.TareasfelicesService.addTareaFeliz(this.mitareafeliz);
      this.mitareafeliz.comandanro = 0 ;
      this.mitareafeliz.nroruc = 0;
      this.mitareafeliz.montototal = 0;
    }
  }

}
