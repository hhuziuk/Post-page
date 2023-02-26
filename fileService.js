const uuid = require('uuid');
const path = require('path');
class fileService{
     saveFile(file){
        try{
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            return fileName;
        }
        catch(error){
            console.log(error);
        }
    }
}
module.exports = new fileService()