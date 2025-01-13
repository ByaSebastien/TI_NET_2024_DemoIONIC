import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodResult} from "../models/food-result.model";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private readonly _http: HttpClient,
  ) { }

  get(barcode: string) {
    return this._http.get<FoodResult>(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`)
  }
}
