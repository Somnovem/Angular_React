import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WondersListService {
  constructor() { }

  private wondersList:{imageUrl:string,name:string,description:string}[] =[
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F53%2FColosseum_in_Rome%252C_Italy_-_April_2007.jpg&f=1&nofb=1&ipt=5e6a95445c16d7e0411090158d5c642b1e33fa709b307480b361bcfb4a7a81cc&ipo=images',
      name:'The Colosseum',
      description:'The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.'
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FUC__1dv9YAGw3uaDiAj7gK5MKu8%3D%2F5000x3253%2Ffilters%3Afill(auto%2C1)%2Fgreat-wall-of-china-5bf5a5e1c9e77c00586cd430.jpg&f=1&nofb=1&ipt=b127bae827de236d13daf8d32a6e2cc502bd35ed402633fcb8b11c75b26e8ca5&ipo=images',
      name:'The Great Wall Of China',
      description:'Also known as the Ming Wall, or in Pinyin Chinese, "Wanli Changcheng", or in Wade-Giles romanization, "Wan-li Ch\'ang-ch\'eng", which means the 10,000-Li Long Wall, the Great Wall of China is one of the most extensive building construction projects ever taken.'
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.onthegotours.com%2Fblog%2Fwp-content%2Fuploads%2F2015%2F04%2FtajmahaliStock_000010193543XXXMedium.jpg&f=1&nofb=1&ipt=66ec66220972f15c9ac5e54f1f09b6d6fdaca3396d4e463c72ac0fd327a0f5a4&ipo=images',
      name:'The Taj Mahal',
      description:'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.'
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftraveldigg.com%2Fwp-content%2Fuploads%2F2016%2F04%2FChrist-The-Redeemer-Pictures.jpg&f=1&nofb=1&ipt=6a108fd55655be264f09727a7855a6e22de23b8be5730770bcb524283bb13bf5&ipo=images',
      name:'Christ The Redeemer',
      description:'The icon of Rio de Janeiro in Brazil and one of the World\'s 7 Wonders, Christ the Redeemer towers the city from Mount Corcovado for the whole world to see. As one of the longest symbols of modern Christianity across the globe, the statue receives millions of visitors annually.'
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.tourradar.com%2Fs3%2Fserp%2Foriginal%2F215920_qnelkEda.jpg&f=1&nofb=1&ipt=750be84aec431d6fb64baec12b174ecdf5636888cd8d3dc1c3beedb01352d7b8&ipo=images',
      name:'Machu Picchu',
      description:' Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.'
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FXYJevuxyirYYJA633coZ9SD4jF8%3D%2F3865x2576%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fel-castillo--148592462-59a70345685fbe001067598e.jpg&f=1&nofb=1&ipt=cad14cb960d8779cda177fe81eb8aeae03b46e74172e3225b18056b2f836a285&ipo=images',
      name:'Chichén Itzá',
      description:'Set 90 miles (150 km) east-northeast of Uxmal and 75 miles (120 km) east-southeast of Mérida with two main cenotes providing water, the Chichén Itzá, a designated UNESCO World Heritage site since 1988, is a complex of Mayan ruins on the northern half of Mexico\'s Yucatan Peninsula. Once, a vibrant city of a diverse population of tens of thousands, it now meets people with the remnants of many ancient Mayan structures. '
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgomadnomad.com%2Fwp-content%2Fuploads%2F2011%2F01%2FDSC_2405.jpg&f=1&nofb=1&ipt=29563314cb1873361688633dd249ec0b2a501803411d4005a7f88d9910926c09&ipo=images',
      name:'Petra',
      description:'Nestled amidst the sandstone mountains and cliffs of an isolated desert canyon in Jordan, the ancient city of Petra is proof of the Nabataeans\' mastery of masonry. Often referred to as the \'rose city\' due to its flushed hue, Petra\'s inhabitation dates back to potentially 7,000 BCE, and the engineering began in the 3rd century BCE. This city was the capital of the Nabataeans, an Arab tribe known for their exceptional carving skills and sophisticated water systems.'
    },
    {
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fiktraveler.com%2Fwp-content%2Fuploads%2F2018%2F03%2Fimg_2589.jpg&f=1&nofb=1&ipt=6b1ba132fba7d258066d33b63dab2fed0ebb0a3e5b362498540f229433975bd4&ipo=images',
      name:'Great Pyramid Of Giza',
      description:'The Great Pyramid of Giza, standing tall for nearly four millennia, is an architectural marvel of the ancient world and the sole survivor of the original Seven Wonders. Commissioned around 2560 BCE by the fourth-century Pharaoh Khufu, the monument\'s original grandeur reached 481 feet in height and spanned an average of 754 feet on each side. This project necessitated over 2.3 million carefully crafted stone blocks, placed over a period of thirty years.'
    }
  ];

  getWondersAll() {
    return this.wondersList;
  }

  getWonder(index:number){
    return this.wondersList[index];
  }

  getLength() {
    return this,this.wondersList.length;
  }
}
