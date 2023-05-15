import { Injectable } from '@angular/core';
import{Camera, CameraResultType, CameraSource, Photo} from'@capacitor/camera';

import { Capacitor } from '@capacitor/core';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewToGallery(){
    const capturedPhoto= await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
      quality:100
    });
  }
}
