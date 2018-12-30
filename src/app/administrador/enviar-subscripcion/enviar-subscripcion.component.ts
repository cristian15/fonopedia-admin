import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/services/shared/email.service';
import { Subscrito } from 'src/app/models/subscrito.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-enviar-subscripcion',
  templateUrl: './enviar-subscripcion.component.html'
})
export class EnviarSubscripcionComponent implements OnInit {

  mensaje: string;
  @Input() subscritos: Subscrito[];

  constructor( private modalService: NgbModal, private _emailService: EmailService ) {  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  enviar(m){
    for(let s of this.subscritos){
      const email = {
        para: s.email,
        asunto: "Mensaje de Fonopedia",
        contenido: this.mensaje
      }
      this._emailService.enviaEmail(email).subscribe();
    }
    
    this.mensaje = "";
    m.close();
    swal("Mensajes Enviados!!","","success");
  
  }

}
