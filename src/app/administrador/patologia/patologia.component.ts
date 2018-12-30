import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patologia } from 'src/app/models/patologia.model';
import { PatologiasService } from 'src/app/services/patologias.service';
import swal from 'sweetalert2';
import { UploadService } from 'src/app/services/service.index';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
})
export class PatologiaComponent implements OnInit {

  patologia: Patologia;
  filesToUpload: Array<File> = [];

  constructor(
            private _patologiaService: PatologiasService,
            private route: ActivatedRoute,   // para obter paramertros de la url
            private _uploadService: UploadService
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const _id = params['id'];   // toma el parametro id desde la URL
      this._patologiaService.getPatologia(_id).subscribe(p=>{ 
        this.patologia = p;
        console.log(this.patologia);
      })
      
  });    
  }

  actualizar(){
    if(this.filesToUpload.length>0){
      this._patologiaService.editPatologia(this.patologia._id, this.patologia, this.filesToUpload).subscribe(p =>{
        swal('Patologia Actualizada!', '' , 'success');
      });
    }
    else{
      this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
    }
  }

  

  actualizarInfo(){
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe(p =>{
      swal('Patologia Actualizada!', '' , 'success');
    });
  }
  borrarFoto(f:string){
    this._uploadService.eliminarArchivo(f).subscribe();
    this.patologia.fotos.splice(this.patologia.fotos.indexOf(f),1);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe(p=>{
      swal('Foto Eliminada', '', 'success');
    });
  }
  removeTag(t){
    this.patologia.tags.splice(this.patologia.tags.indexOf(t),1);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
  }
  addTag(t){
    this.patologia.tags.push(t);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
  }
  addVideo(v){
    this.patologia.videos.push(v);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
    document.getElementById('video').innerHTML = '';
  }
  deleteVideo(v){
    this.patologia.videos.splice(this.patologia.videos.indexOf(v),1);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
    
  }
  addAudio(a){
    console.log(a);
    this.patologia.audios.push(a);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
  }
  deleteAudio(a){
    this.patologia.audios.splice(this.patologia.audios.indexOf(a),1);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe();
  }

  fileChangeEvent(filesInput: any) {     // agrega los archivos al arreglo para luego subirlos al servidor
    this.filesToUpload = filesInput.target.files;
}

}