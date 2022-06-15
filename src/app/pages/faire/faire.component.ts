import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faire',
  templateUrl: './faire.component.html',
  styleUrls: ['./faire.component.scss']
})
export class FaireComponent implements OnInit {

  title = 'test-time';
  currentDate:any = new Date();
  
  constructor() { }

  ngOnInit() {
  }

}
