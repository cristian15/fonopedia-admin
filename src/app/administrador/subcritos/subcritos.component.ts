import { Component, OnInit } from '@angular/core';
import { SubscritosService } from 'src/app/services/subscritos.service';
import { Subscrito } from 'src/app/models/subscrito.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-subcritos',
  templateUrl: './subcritos.component.html',
  styles: []
})
export class SubcritosComponent implements OnInit {

  offset = 0;
  limit = 10;

  subscritos = [];
  rows = [];
  constructor( private _subscritoService: SubscritosService) { }

  ngOnInit() {

    this._subscritoService.getSubscritos().subscribe(subs=>{
      this.subscritos= subs;
      this.onPageChange(0);
    });
  }
  onPageChange(offset) {
    this.offset = offset;
    const tempo: Subscrito[] = [];
    var j =offset;

    while(j< this.limit+offset && j< this.subscritos.length ){
        tempo.push(this.subscritos[j]);
        j++;
    }        
    this.rows = tempo;
  }

  borrar(s){

    swal({
      title: '¿Seguro de eliminar?'+ s.email,
      text: 'No se podrá recuperar luego de eliminado ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                  this.subscritos.splice(this.subscritos.indexOf(s),1);
                  this._subscritoService.delete(s._id).subscribe();
                
                swal(
                    'Eliminado!',
                    'Subscrito ha sido eliminado',
                    'success'
                );
            } else if (result.dismiss === swal.DismissReason.cancel) {
                swal(
                    'Proceso Cancelado',
                    'Subscrito No eliminado',
                    'error'
                );
            }
        });

    
  }

}
