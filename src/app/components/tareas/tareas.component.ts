import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { TareasfelicesService } from '../../services/tareasfelices.service' ;
import { TareaFeliz } from '../../modelos/tareafeliz' ;

  

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'], 
  encapsulation: ViewEncapsulation.None
})

export class TareasComponent implements OnInit {
  tareasFelices : TareaFeliz[];
  editState : boolean = false ;
  taskToEdit : TareaFeliz ;
  
  constructor( public servicioTarea: TareasfelicesService ) { }

    ngOnInit() {
      this.servicioTarea.getTareasFelices().subscribe(mistareas => {
        this.tareasFelices = mistareas
        console.log(this.tareasFelices) ;
         // console.log('hola planeta') ;
      });
    } ; 

  deleteTareaFeliz(event, tareafeliz) {
    const response = confirm('are you sure you want to delete?');
    if (response ) {
      this.servicioTarea.deleteTareaFeliz(tareafeliz);
    }
    return;
  }

  editTask(event, tareafeliz) {
    this.editState = !this.editState;
    this.taskToEdit = tareafeliz;
  }

  updateTask(tareafeliz) {
    this.servicioTarea.updateTareaFeliz(tareafeliz);
    this.taskToEdit = null;
    this.editState = false;
  }

}
