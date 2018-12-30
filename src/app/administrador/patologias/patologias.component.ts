import { Component, OnInit } from '@angular/core';
import { PatologiasService } from 'src/app/services/patologias.service';
import { Patologia } from 'src/app/models/patologia.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.component.html',
  styles: []
})
export class PatologiasComponent implements OnInit {

  constructor(private _patologiasService: PatologiasService) { }

  patologias = [];
  ngOnInit() {
    this.load();
  }

  load(){
    this._patologiasService.getPatologias().subscribe(patologias =>{
      this.patologias = patologias;
      console.log(patologias);
    });
  }

  borrar(p){
    swal({
      title: '¿Seguro de eliminar?'+ p.nombre,
      text: 'No se podrá recuperar luego de eliminado ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                  this.patologias.splice(this.patologias.indexOf(p),1);
                  this._patologiasService.delete(p._id).subscribe();
                
                swal(
                    'Eliminada!',
                    'Patología ha sido eliminada',
                    'success'
                );
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal(
                    'Proceso Cancelado',
                    'Patología No eliminada',
                    'error'
                );
            }
        });
  }
  

}
