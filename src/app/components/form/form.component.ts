import { Component, OnInit } from '@angular/core';
import { DenunciaService } from '../../services/denuncia.service';
import { Denuncia } from '../../models/Denuncia';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  denuncia: Denuncia = {
    titulo: '',
    descricao: '',
    categorias: [0]
  };

  constructor(private denunciaService: DenunciaService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.denuncia.titulo != '' && this.denuncia.descricao != ''){
      this.denunciaService.addDenuncia(this.denuncia);
      this.denuncia.titulo = '';
      this.denuncia.descricao = '';
    }
  }

}
