// Find the final speed (vfinal) of an object which has the initial speed of v, the weight of m, and F as the applied force for t seconds.
// F = m.a
// vfinal = v + a.t

// The function should support N, s, ms, kg, g, m/s, km/h, km/s
// N stands for Newton
// s stands for second(s)
// ms stands for millisecond(s)
// kg stands for kilogram(s)
// g stands for gram(s)
// m/s stands for meter over second(s)
// km/h stands for kilometer over hour(s)
// km/h stands for kilometer over second(s)

export const findFinalVelocityOfAnObject = (force, time, weight, initialSpeed) => {

  if (null === force) {
    throw 'Force is required'
  }
  if (null === time) {
    throw 'Time is required'
  }
  if (null === weight) {
    throw 'Weight is required'
  }
  if (null === initialSpeed) {
    throw 'Initial Velocity is required'
  }

  // convert mass to Kgs and time to sec and velocity to m/s
  var t;
  if (time.toLowerCase().indexOf('ms') !== -1) {
    t = time.replace('ms', '') / 1000;
  } else {
    t = time.replace('s', '');
  }
  t = Number(t);
  var m;
  if (!(weight.toLowerCase().indexOf('kg') !== -1)) {
    m = weight.replace('g', '') / 1000;
  } else {
    m = weight.replace('kg', '');
  }
  m = Number(m);
  var v;
  if (initialSpeed.toLowerCase().indexOf('km/h') !== -1) {
    v = initialSpeed.replace('km/h', '');
    v = (v * 5) / 18;
  } else {
    v = initialSpeed.replace('m/s', '');
  }
  v = Number(v);
  var f = Number(force.replace('N', ''));

  var fVelocity = (v + (f / m) * t);
  if (isFloat(fVelocity)) {
    fVelocity = fVelocity.toFixed(2)
  }

  return parseFloat(fVelocity) + 'm/s';
};

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
