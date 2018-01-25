/* eslint max-len:0 */
const WGS_Y = [121.3289, 121.0735, 120.8785, 121.0024, 121.4973, 121.2765, 121.0203, 121.1961, 121.3739, 121.6251, 121.0927, 121.2248, 121.4208, 121.6293, 121.0999, 121.3016, 121.6103, 121.9073, 122.1293, 121.1754, 121.3319, 121.5713, 121.2269, 121.5164, 121.1714, 121.4104, 121.6788, 121.8818, 121.9534, 121.8302, 121.4847, 121.7652];
const WGS_X = [30.3852, 30.2689, 30.2787, 30.1691, 30.236, 30.2035, 30.0169, 30.02467, 30.02909, 30.0606, 29.8475, 29.8513, 29.8616, 29.8644, 29.6851, 29.6845, 29.6796, 29.8338, 29.9015, 29.5385, 29.5509, 29.5672, 29.4, 29.4437, 29.245, 29.2856, 29.3199, 29.6192, 29.2256, 29.4012, 29.7073, 29.7456];
const WGS_Z0 = [283477.4699, 258887.5468, 240129.4259, 251996.8707, 299665.6275, 278402.981, 253649.0292, 270605.8444, 287764.4882, 311989.3001, 260563.1508, 273327.9063, 292274.2675, 312422.2155, 261195.7235, 280721.6055, 310603.5211, 339287.2, 360700.062, 268457.0704, 283634.6896, 306832.9149, 273417.6505, 301520.0858, 267984.252, 291223.1345, 317298.0366, 336902.3626, 344003.139, 331972.7844, 298442.601, 325582.4622];
const WGS_Z1 = [162889.4057, 150059.6058, 151235.3673, 139021.5734, 146331.4481, 142756.6937, 122146.7324, 122940.2272, 123398.1373, 126898.4633, 103338.4135, 103718.0645, 104833.3479, 105147.0869, 85335.8568, 85214.8209, 84664.0538, 101820.1801, 109424.4281, 69063.0814, 70396.8192, 72204.1389, 53695.9854, 58510.6602, 36528.3601, 40985.541, 44793.3782, 78024.8695, 34413.0554, 53845.4708, 87722.6276, 91996.2987];

const NING_BO_Y = [283477.469909, 258887.546875, 240129.425903, 251996.870727, 299665.627502, 278402.981079, 253649.029296, 270605.844482, 287764.488281, 311989.300109, 260563.150878, 273327.906311, 292274.267517, 312422.215515, 261195.72351, 280721.605529, 310603.521118, 339287.200073, 360700.062072, 268457.070495, 283634.689697, 306832.914916, 273417.650512, 301520.085876, 267984.252075, 291223.134521, 317298.036682, 336902.36267, 344003.139099, 331972.784484, 298442.601074, 325582.46228];
const NING_BO_X = [162889.4057, 150059.605895, 151235.367309, 139021.573486, 146331.44812, 142756.693725, 122146.732482, 122940.227294, 123398.137329, 126898.463317, 103338.413513, 103718.064514, 104833.3479, 105147.086914, 85335.856872, 85214.820922, 84664.053894, 101820.180115, 109424.428101, 69063.081481, 70396.819274, 72204.138916, 53695.985473, 58510.660278, 36528.360107, 40985.541076, 44793.378295, 78024.869506, 34413.05548, 53845.470886, 87722.627685, 91996.298706];
const NING_BO_Z0 = [121.32892, 121.073578, 120.87858, 121.002472, 121.497355, 121.276535, 121.020359, 121.196107, 121.373979, 121.625162, 121.09272, 121.224803, 121.420866, 121.629397, 121.099911, 121.301647, 121.610371, 121.907328, 122.129306, 121.175403, 121.331966, 121.571337, 121.226951, 121.51649, 121.171469, 121.410496, 121.678899, 121.881839, 121.953402, 121.830233, 121.48473, 121.765293];
const NING_BO_Z1 = [30.385279, 30.268965, 30.278791, 30.169145, 30.236029, 30.203592, 30.016989, 30.0246705, 30.0290919, 30.060668, 29.847563, 29.851329, 29.861654, 29.864444, 29.68518, 29.684544, 29.679678, 29.833867, 29.901593, 29.538583, 29.550905, 29.567297, 29.400062, 29.443777, 29.245053, 29.285639, 29.319903, 29.619279, 29.225604, 29.401281, 29.707316, 29.745605];

module.exports = {
  WGS_Y,
  WGS_X,
  WGS_Z0,
  WGS_Z1,

  NING_BO_Y,
  NING_BO_X,
  NING_BO_Z0,
  NING_BO_Z1,
};