/* gap-lint v1.0.0, Manuel Martins - Generated on 26-10-2016 */
function FileStream(fileName){var data=fs.readFileSync(fileName,"utf8");return InputStream.call(this,data),this.fileName=fileName,this}var InputStream=require("./InputStream").InputStream,isNodeJs="undefined"==typeof window&&"undefined"==typeof importScripts,fs=isNodeJs?require("fs"):null;FileStream.prototype=Object.create(InputStream.prototype),FileStream.prototype.constructor=FileStream,exports.FileStream=FileStream;