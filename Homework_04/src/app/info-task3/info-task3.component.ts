import { Component } from '@angular/core';

@Component({
  selector: 'app-info-task3',
  templateUrl: './info-task3.component.html',
  styleUrls: ['./info-task3.component.css']
})
export class InfoTask3Component {
  infos:{ [key: string]: {name:string, photo:string, description:string} } = {
    'car':
      {
        name:'The American Dream',
        photo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.cdn.autoevolution.com%2Fimages%2Fnews%2Fgallery%2Fworlds-longest-car-the-american-dream-limo-is-80s-extravaganza-at-its-best_1.jpg&f=1&nofb=1&ipt=964fb4f15c10343365508f8f7dbad62e83624bd755705f7a3e0382ac7774c0ce&ipo=images',
        description:'The car stretches an astonishing 100 feet in length (about 30 meters) and has 26 wheels. It features numerous luxurious amenities, including multiple lounges, a swimming pool with a diving board, a helipad, and even a king-sized waterbed. This car was built in the 1980s for promotional purposes and has appeared in various television shows and movies.'
      },
    'plane':
      {
        name:'The Antonov An-225 Mriya',
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/50_%D0%B4%D0%BD%D1%96%D0%B2_%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D1%83_%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D0%BD%D1%82%D1%83_02.jpg/1280px-50_%D0%B4%D0%BD%D1%96%D0%B2_%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE_%D1%81%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2%D1%83_%D0%BE%D0%BA%D1%83%D0%BF%D0%B0%D0%BD%D1%82%D1%83_02.jpg',
        description:'With a maximum takeoff weight of 640 tonnes (705 short tons), the An-225 held several records, including heaviest aircraft ever built and largest wingspan of any aircraft in operational service. It was commonly used to transport objects once thought impossible to move by air, such as 130-ton generators, wind turbine blades, and diesel locomotives.The Mriya routinely attracted a high degree of public interest, attaining a global following due to its size and its uniqueness. The only completed An-225 was destroyed in the Battle of Antonov Airport during the 2022 Russian invasion of Ukraine. On 20 May 2022, Ukrainian president Volodymyr Zelenskyy announced plans to complete the second An-225 to replace the destroyed aircraft; Antonov announced plans to rebuild the destroyed aircraft in November 2022.'
    },
    'ship':
      {
        name:'Prelude FLNG',
        photo:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flloydslist.maritimeintelligence.informa.com%2F-%2Fmedia%2Flloyds-list%2Fimages%2Ftankers-and-gas%2Fshell-prelude-flng-wideshot.jpg&f=1&nofb=1&ipt=bb4f1ba42a1a5d6c7e571083f6883ea5833badf2677e6856a1b098cd9a70d761&ipo=images',
        description:"It is 488 metres (1,601 ft) long, 74 metres (243 ft) wide, and made with more than 260,000 tonnes of steel.[6] The vessel displaces around 600,000 tonnes when fully loaded, more than five times the displacement of a Nimitz-class aircraft carrier.[7] It is the world's largest FLNG platform, as well as the largest FLNG facility constructed to date."},
  };
  currentInfo: {name:string, photo:string, description:string} = this.infos['car'];

  onChanged(chosen:any){
    this.currentInfo = this.infos[chosen];
  }
}
