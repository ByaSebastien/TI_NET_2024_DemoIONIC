import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonItem, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Barcode, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {addIcons} from "ionicons";
import {scan} from "ionicons/icons";
import {FoodService} from "../../services/food.service";
import {FoodResult} from "../../models/food-result.model";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonItem]
})
export class ScanPage implements OnInit {

  private readonly _foodService: FoodService = inject(FoodService);
  currentProduct?: FoodResult;

  constructor() {
    addIcons({scan});
  }

  ngOnInit() {
  }

  async scan() {
    const granted = await BarcodeScanner.requestPermissions();
    if (!granted) {
      console.log('Not granted');
      return;
    }
    const {barcodes} = await BarcodeScanner.scan();
    this._foodService.get(barcodes[0].displayValue)
      .subscribe({
        next: (result) => {
          this.currentProduct = result;
        },
        error: err => {
          console.log(err);
        }
      });
  }

}
