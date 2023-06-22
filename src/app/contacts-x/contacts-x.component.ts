import { Component, OnInit } from '@angular/core';
import { Model } from 'src/models/userModel';

@Component({
  selector: 'app-contacts-x',
  templateUrl: './contacts-x.component.html',
  styleUrls: ['./contacts-x.component.css']
})
export class ContactsXComponent implements OnInit{
    listeTab!: Model[];
    ngOnInit(): void {
      this.listeTab=[
        {nom: "Son Goku", numeroTelephone: "07 78 97 34 90", email: "db-z@outlook.fr", dateNaissance: "26 avril 1989", url: "https://i-mom.unimedias.fr/2020/09/16/dragon-ball-songoku.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806"},
        {nom: "Végéta", numeroTelephone: "07 78 97 34 91", email: "db-z@gmail.fr", dateNaissance: "26 avril 1999", url: ""},
        {nom: "Buu", numeroTelephone: "06 78 97 34 91", email: "db-z@hotmail.fr", dateNaissance: "26 septembre 1999", url: ""}
      ]
    }
    }
