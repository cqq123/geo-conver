const wgs84ConvertGcj02 = require('./src/wgs84ConvertGcj02');
const gcj02ConvertWgs84 = require('./src/gcj02ConvertWgs84');
const locationConvertCoordinate = require('./src/locationConvertCoordinate');
const { wgs84ConvertXd2000, xd2000ConvertWgs84 } = require('./src/convert');

module.exports = {
  locationConvertCoordinate,
  wgs84ConvertGcj02,
  gcj02ConvertWgs84,
  wgs84ConvertXd2000,
  xd2000ConvertWgs84,
}