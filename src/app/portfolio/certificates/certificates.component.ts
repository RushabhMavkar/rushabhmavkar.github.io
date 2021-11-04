import { Component, OnInit } from '@angular/core';
import { visibleCertificates, invisibleCertificates } from './certifications';
import { Certificates } from './Certificates';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent implements OnInit {
  vCertificates: Certificates[] = visibleCertificates;
  iCertificates: Certificates[] = invisibleCertificates;

  constructor() {}

  ngOnInit(): void {}
}
