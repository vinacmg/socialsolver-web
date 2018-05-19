import { Component, OnInit } from '@angular/core';
import { DenunciaService } from '../../services/denuncia.service';
import { Denuncia } from '../../models/Denuncia';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  denuncias: Denuncia[];
  data:Date = new Date();

  constructor(private denunciaService: DenunciaService) { }

  ngOnInit() {
    this.denunciaService.getDenuncias().subscribe(denuncias => {
      this.denuncias = denuncias
    });
  }

  deleteDenuncia(event, denuncia) {
    this.denunciaService.deleteDenuncia(denuncia);
  }

}
