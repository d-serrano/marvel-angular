import { Component, Input, OnInit } from '@angular/core';
//interface
import { Serie } from '../../../interfaces/serie';
//modal
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.scss']
})
export class SerieCardComponent implements OnInit {
  @Input() serie: Serie | undefined;
  serieThumbnail: string = '';
  //modal
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.serieThumbnail = `${this.serie?.thumbnail.path}.${this.serie?.thumbnail.extension}`;
  }
  
  
  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
