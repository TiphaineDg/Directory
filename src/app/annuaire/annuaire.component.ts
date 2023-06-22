import { Component, Input } from '@angular/core';
import { Model } from 'src/models/userModel';

@Component({
  selector: 'app-annuaire',
  templateUrl: './annuaire.component.html',
  styleUrls: ['./annuaire.component.css']
})
export class AnnuaireComponent {
@Input() liste!: Model;

/*ngOnInit(): void {
  this.liste= new Model();
  this.liste.nom="Son Goku";
  this.liste.numeroTelephone="07 78 97 34 90";
  this.liste.email="db-z@outlook.fr";
  this.liste.dateNaissance="26 avril 1989";
  this.liste.url="https://i-mom.unimedias.fr/2020/09/16/dragon-ball-songoku.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806";
  this.listeTab=[
    {nom: "Son Goku", numeroTelephone: "07 78 97 34 90", email: "db-z@outlook.fr", dateNaissance: "26 avril 1989", url: "https://i-mom.unimedias.fr/2020/09/16/dragon-ball-songoku.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806"},
    {nom: "Végéta", numeroTelephone: "07 78 97 34 91", email: "db-z@gmail.fr", dateNaissance: "26 avril 1999", url: ""},
    {nom: "Buu", numeroTelephone: "06 78 97 34 91", email: "db-z@hotmail.fr", dateNaissance: "26 septembre 1999", url: ""}
  ]
}*/
}



