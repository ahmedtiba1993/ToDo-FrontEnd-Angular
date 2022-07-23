import { Component, Input, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { TodoDto } from 'src/gs-api/src/models';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  @Input()
  listTodo : Array<TodoDto> = []
  
  @Input()
  titre : string = ''

  constructor(
    private pdfService : PdfService
  ) { }

  ngOnInit() {
  }

  pdf(action : string){
    if(action == "open"){
      this.pdfService.openPDF()
    }else{
      this.pdfService.downloadPDF()
    }
  }
}
