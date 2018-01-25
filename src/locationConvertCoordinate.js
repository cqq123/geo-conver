const locationConvertCoordinate = (str) => {
  if (str) {
    const location = str.replace(/\s+/, '');
    if (location.match(/\d+,\d+/)) {
      const [lng, lat] =  location.split(',');
      return [parseFloat(lng), parseFloat(lat)];
    }
  }
  return [0, 0]
}
module.exports = locationConvertCoordinate;