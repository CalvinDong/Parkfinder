import { Request, Response } from "express"
import { bucket } from "../common/services/firebase-admin"
import { File } from "@google-cloud/storage"
//import {request} from "request"
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

export default new class ImageController{
  static async getMetadata(file: File){
    let metadata = await file.getMetadata()
    return metadata;
  }

  static async getLinks(fileNameScheme: string){
    let max = 5;
    let links = [];

    for (let i = 0; i < max; i++){
      let fileName = `${fileNameScheme} ${i}.jpg` // All images will have to be jpgs or we have to store info about the images somewhere else
      let file = bucket.file(fileName)
      let exists = await file.exists();

      if (exists[0]){
        let publicUrl = await file.getSignedUrl({
          version: 'v2',
          action: 'read',
          expires: Date.now() + 1000 * 60 * 60, // one hour
        });
        links.push({image: publicUrl[0]});
      }
    }

    return links;
  }
  
  async aboutImage(req: Request, res: Response){
    const imageName = "safe_image.jpg";
    let file = bucket.file(imageName);
    let fileType = "";
    let exists = await file.exists();

    if (exists) {
      const publicUrl = file.publicUrl();
      console.log(publicUrl)

      file.isPublic(function(err, resp) {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`the file ${file.id} is public: ${resp}`) ;
      })

      file.makePublic(function(err, apiResponse) {}); // Maybe just use getSignedUrl instead

      /*await file.getMetadata().then(function (data) {
        fileType = data[0].contentType
        console.log(data[0].contentType)
      });

      file.download(function (err, contents) {
        res.set('Content-Type', fileType)
        const conversion = contents.toString('base64')
        const conversionFileType = "data:" + fileType + ';base64,'
        return res.status(200).send(conversionFileType + conversion)
      });*/
      return res.status(200).send(publicUrl)
    }
    else {
      return res.status(404)
    }
  }

  async getParkImages(req: Request, res: Response){
    const { body } = req;
    const name = body.name;
    const id = body.id;
    const type = body.type;
    
    let fileNameScheme =  `${type} ${id} ${name}/${name}`
    let links = await ImageController.getLinks(fileNameScheme);

    if (links.length == 0){ // Default if folder is not found
      links = await ImageController.getLinks(`Default/Default`);
    }

    return res.status(200).send(links)
  }
}