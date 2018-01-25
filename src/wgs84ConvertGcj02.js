const transform = require('./help');

const wgs84ConvertGcj02 = (coordinate) =>
  transform(coordinate);

module.exports =  wgs84ConvertGcj02;