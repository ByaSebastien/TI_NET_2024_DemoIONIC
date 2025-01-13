import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {Barcode, BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {addIcons} from "ionicons";
import {scan} from "ionicons/icons";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon]
})
export class ScanPage implements OnInit {

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
    console.log(barcodes);
  }

}
