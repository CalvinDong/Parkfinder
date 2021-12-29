import {Request, Response} from "express"
import {bucket} from "../common/services/firebase-admin"
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

export default new class ImageController{

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
}