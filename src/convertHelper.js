const getP = (lng, lat, x, y) => {
  const result = [];
  for (let i = 0; i < 24; i++) {
    const _x = x[i] - lat;
    const _y = y[i] - lng;
    result.push(1 / (_x * _x + _y * _y));
  }
  return result;
};

const getM = (lng, lat, x, y) => {
  const result = [];
  for (let i = 0; i < 24; i++) {
    const _x = x[i] - lat;
    const _y = y[i] - lng;
    result.push([
      _x * _x,
      _x * _y,
      _y * _y,
      _x,
      _y,
      1,
    ]);
  }
  return result;
};

const getMtp = (m, p) => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    const _t = [];
    for (let j = 0; j < 24; j++) {
      _t.push(m[j][i] * p[j]);
    }
    result.push(_t);
  }
  return result;
};

const getA = (m, mtp) => {
  const result = [];
  for (let i = 0; i < 6; i++) {
    const _t = [];
    for (let j = 0; j < 6; j++) {
      let sum = 0;
      for (let k = 0; k < 24; k++) {
        sum += mtp[i][k] * m[k][j];
      }
      _t.push(sum);
    }
    result.push(_t);
  }
  return result;
};

const rerangeA = (A) => {
  const JS = [];
  const IS = [];
  const n = 6;
  let d;
  let temp;
  for (let i = 0; i < n; i++) {
    d = 0;
    for (let j = i; j < n; j++) {
      for (let k = i; k < n; k++) {
        if (Math.abs(A[j][k] > d)) {
          d = Math.abs(A[j][k]);
          IS[i] = j;
          JS[i] = k;
        }
      }
    }

    if (IS[i] !== i) {
      for (let j = 0; j < n; j++) {
        temp = A[i][j];
        A[i][j] = A[IS[i]][j];
        A[IS[i]][j] = temp;
      }
    }

    if (JS[i] !== i) {
      for (let j = 0; j < n; j++) {
        temp = A[j][i];
        A[j][i] = A[j][JS[i]];
        A[j][JS[i]] = temp;
      }
    }

    A[i][i] = 1 / A[i][i];
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        A[i][j] *= A[i][i];
      }
    }

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        for (let k = 0; k < n; k++) {
          if (k !== i) {
            A[j][k] += -(A[j][i] * A[i][k]);
          }
        }
      }
    }
    for (let j = 0; j < n; j++) {
      if (j !== i) {
        A[j][i] = -A[j][i] * A[i][i];
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (JS[i] !== i) {
        temp = A[i][j];
        A[i][j] = A[JS[i]][j];
        A[JS[i]][j] = temp;
      }
    }
    for (let j = 0; j < n; j++) {
      if (IS[i] !== i) {
        temp = A[j][i];
        A[j][i] = A[j][IS[i]];
        A[j][IS[i]] = temp;
      }
    }
  }
};

const getSum = (A, m, p, z) => {
  let sum = 0;
  const nmt = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 24; j++) {
      sum = 0;
      for (let k = 0; k < 6; k++) {
        sum += A[i][k] * m[j][k];
      }
      if (i === 5) {
        nmt.push(sum);
      }
    }
  }
  sum = 0;
  for (let i = 0; i < 24; i++) {
    sum += nmt[i] * p[i] * z[i];
  }
  return sum;
};

module.exports = {
  getP,
  getM,
  getMtp,
  getA,
  rerangeA,
  getSum,
};
