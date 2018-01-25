const transform = require('./help');

const gcj02ConvertWgs84 = (coordinate) => {
  const [a, b] = coordinate;
  const [lng, lat] = transform(coordinate);
  const longitude = a * 2 - lng;
  const latitude = b * 2 - lat;
  return [longitude, latitude];
};

module.exports = gcj02ConvertWgs84;
