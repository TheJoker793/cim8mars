import { Component, OnInit } from '@angular/core';
import { IcdService } from "../../services/icd.service";

@Component({
  selector: 'app-icd-info',
  templateUrl: './icd-info.component.html',
  styleUrls: ['./icd-info.component.scss']
})
export class IcdInfoComponent implements OnInit {
  linearizationInfo: any;
  releaseInfo: any;
  diseases: any[] = []; // Stocke les maladies et leurs codes

  constructor(private icdService: IcdService) { }

  ngOnInit(): void {
    // Récupérer les informations sur la linéarisation (comme actuellement)
    this.icdService.getLinearizationInfo('mms').subscribe((data: any) => {
      this.linearizationInfo = data;

    });


    this.icdService.getReleaseInfo('2025-01', 'mms').subscribe((data: any) => {
      this.releaseInfo = data;
    });


    this.icdService.getDiseaseInfo('mms').subscribe(
      (data: any) => {
        console.log(data);
        if (data && data.diseases) {


            this.diseases = data.diseases;
          console.log("deaseas " +this.diseases)
        } else {
          console.error('Aucune donnée de maladies trouvée.', );
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des maladies:', );
      }
    );

  }
}
