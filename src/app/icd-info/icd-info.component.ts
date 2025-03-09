import { Component, OnInit } from '@angular/core';
import {IcdService} from "../../services/icd.service";

@Component({
  selector: 'app-icd-info',
  templateUrl: './icd-info.component.html',
  styleUrls: ['./icd-info.component.scss']
})
export class IcdInfoComponent implements OnInit {
  linearizationInfo: any;
  releaseInfo: any;

  constructor(private icdService: IcdService) { }

  ngOnInit(): void {
    this.icdService.getLinearizationInfo('mms').subscribe((data: any) => {
      this.linearizationInfo = data;
    });

    this.icdService.getReleaseInfo('2025-01', 'mms').subscribe((data: any) => {
      this.releaseInfo = data;
    });
  }
}
