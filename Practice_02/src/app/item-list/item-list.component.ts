import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemListComponent {
  imageUrls: string[] = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2353947.jpg&f=1&nofb=1&ipt=438103e3394759a1bff70b8378ce0f6ebe6c478b719181376b822adce56b36fa&ipo=images',
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Chevrolet_%28logo%29.svg/1920px-Chevrolet_%28logo%29.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/1919_Tacoma_Speedway_Louis_Chevrolet_Marvin_D_Boland_Collection_BOLANDB2009.jpg/220px-1919_Tacoma_Speedway_Louis_Chevrolet_Marvin_D_Boland_Collection_BOLANDB2009.jpg'
  ];
}
