import { Component, OnInit } from '@angular/core';
import { PatologiasService } from 'src/app/services/patologias.service';
import { Patologia } from 'src/app/models/patologia.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.component.html',
  styleUrls: ['patologias.component.css']
})
export class PatologiasComponent implements OnInit {

  constructor(private _patologiasService: PatologiasService) { }

  offset = 0;
  limit = 10;

  buscar = "";
  patologias = [];
  rows = [];
  ngOnInit() {
    this.load();
  }


  onPageChange(offset) {
    this.offset = offset;
    const tempo: Patologia[] = [];
    var j =offset;

    while(j< this.limit+offset && j< this.patologias.length ){
        tempo.push(this.patologias[j]);
        j++;
    }        
    this.rows = tempo;
  }

  load(){
    this._patologiasService.getPatologias().subscribe(patologias =>{
      this.patologias = patologias;
      this.onPageChange(0);
    });
  }
  
  buscarPatologia(){
    console.log(this.buscar);

    this.rows =  this.patologias.filter(r =>{
      return JSON.stringify(r).toLowerCase().includes(this.buscar.toLowerCase());
    });

    if(this.buscar.length==0){
      this.rows = this.patologias;
      this.onPageChange(0);
    }
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
                  this._patologiasService.delete(p._id).subscribe(res =>{
                    this.patologias.splice(this.patologias.indexOf(p),1);
                    this.rows = this.patologias;
                  });
                
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
