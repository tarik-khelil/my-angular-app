import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
   footerContent = [
    { name: 'A propos', to: 'https://capsit.fr/#a-propos' },
    { name: 'Politique de confidentialité', to: "https://capsit.fr/politique-de-confidentialite" },
    { name: 'Conditions générales d’utilisations', to: "https://capsit.fr/politique-de-confidentialite" },
    { name: 'contact', to: 'https://capsit.fr/contact' }
]

  constructor() { }

  ngOnInit(): void {
  }

}
