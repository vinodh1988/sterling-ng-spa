import { Component, OnInit, Input } from '@angular/core';
import { contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contactbox',
  templateUrl: './contactbox.component.html',
  styleUrls: ['./contactbox.component.css']
})
export class ContactboxComponent implements OnInit {
 @Input('contact') current:contact;
  constructor() { }

  ngOnInit() {
  }

}
