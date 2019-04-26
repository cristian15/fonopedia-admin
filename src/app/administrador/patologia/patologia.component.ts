import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patologia } from 'src/app/models/patologia.model';
import { PatologiasService } from 'src/app/services/patologias.service';
import swal from 'sweetalert2';
import { UploadService } from 'src/app/services/service.index';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
})
export class PatologiaComponent implements OnInit {

  patologia: Patologia;
  filesToUpload: Array<File> = [];

  titulo_video = "";
  descripcion_video = "";
  id_video = "";

  edit_video = {};
  constructor(
            private _patologiaService: PatologiasService,
            private route: ActivatedRoute,   // para obter paramertros de la url
            private _uploadService: UploadService,
            public modalService: NgbModal
    ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const _id = params['id'];   // toma el parametro id desde la URL
      this._patologiaService.getPatologia(_id).subscribe(p=>{ 
        this.patologia = p;
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

  AgregarVideo(c){
    this.patologia.videos.push({video:this.id_video, titulo: this.titulo_video, descripcion: this.descripcion_video});
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe(res=>{
      this.titulo_video = "";
      this.id_video = "";
      this.descripcion_video = "";
    });
    c.close();
  }
  editarVideo(v, modalEditVideo){
    this.edit_video = v;
    console.log(v);
    this.modalService.open(modalEditVideo, { size: 'lg' })
  }
  editVideo(close_modal){
    console.log("PAT:::", this.patologia);
    this._patologiaService.editPatologia(this.patologia._id, this.patologia).subscribe(res=>{
      swal('Video Actualizado!', '' , 'success');
     });
    close_modal.close();
  }

  fileChangeEvent(filesInput: any) {     // agrega los archivos al arreglo para luego subirlos al servidor
    this.filesToUpload = filesInput.target.files;
}

}
