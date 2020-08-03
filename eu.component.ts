import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {
  urlImagem: string = 'https://www.facebook.com/photo/?fbid=10217100053481586&set=a.2468387237147';

  constructor() { }

  ngOnInit(): void {
  }

}
