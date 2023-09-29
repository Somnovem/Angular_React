import { Component } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent {
 paragraphs:string[] = [
     'Bill Gates is a renowned American business magnate, software developer, and philanthropist. He was born on\n' +
     'October 28, 1955, in Seattle, Washington. Gates co-founded Microsoft Corporation, one of the world\'s\n' +
     'leading technology companies, with Paul Allen in 1975. Under his leadership, Microsoft played a pivotal\n' +
     'role in the personal computer revolution, and its Windows operating system became the dominant platform\n' +
     'for PCs.',
     '    Bill Gates is not only known for his contributions to the technology industry but also for his dedication\n' +
     'to philanthropy. In 2000, he and his then-wife, Melinda, established the Bill & Melinda Gates Foundation,\n' +
     '  which focuses on global health, education, and poverty alleviation. Through the foundation, Gates has\n' +
     'donated billions of dollars to various causes, making a significant impact on improving healthcare and\n' +
     'education worldwide.',
     'Over the years, Bill Gates has received numerous awards and honors for his work in both technology and\n' +
     'philanthropy, including being named Time magazine\'s Person of the Year and being awarded the Presidential\n' +
     'Medal of Freedom. He has also authored several books, including "The Road Ahead" and "How to Avoid a\n' +
     'Climate Disaster."',
     'Despite stepping down from his day-to-day role at Microsoft in 2006, Bill Gates continues to be a\n' +
     'prominent figure in the tech and philanthropic world, using his wealth and influence to address some of\n' +
     'the world\'s most pressing challenges.'
 ];
}
