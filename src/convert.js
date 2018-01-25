const {
  WGS_Y,
  WGS_X,
  WGS_Z0,
  WGS_Z1,

  NING_BO_Y,
  NING_BO_X,
  NING_BO_Z0,
  NING_BO_Z1,
} = require('./dimension');
const {
  getP,
  getM,
  getMtp,
  getA,
  rerangeA,
  getSum,
} = require('./convertHelper');

function _convert([lng, lat], xy, x, y, z0, z1) {
  const p = getP(lng, lat, x, y);
  const m = getM(lng, lat, x, y);
  const mtp = getMtp(m, p);

  const A = getA(m, mtp);
  rerangeA(A);
  return getSum(A, m, p, xy === 1 ? z0 : z1);
}

function wgs84ConvertXd2000([lng, lat]) {
  return [
    _convert([lng, lat], 1, WGS_X, WGS_Y, WGS_Z0, WGS_Z1),
    _convert([lng, lat], 0, WGS_X, WGS_Y, WGS_Z0, WGS_Z1),
  ];
}

function xd2000ConvertWgs84([lng, lat]) {
  return [
    _convert([lng, lat], 1, NING_BO_X, NING_BO_Y, NING_BO_Z0, NING_BO_Z1),
    _convert([lng, lat], 0, NING_BO_X, NING_BO_Y, NING_BO_Z0, NING_BO_Z1),
  ];
}


module.exports = {
  wgs84ConvertXd2000,
  xd2000ConvertWgs84,
};
