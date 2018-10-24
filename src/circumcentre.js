class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export const circumcentre = (x1, y1, x2, y2, x3, y3) => {
  let A = new Point(x1, y1);
  let B = new Point(x2, y2);
  let C = new Point(x3, y3);

  if(isInputValid(A,B,A,C) || isInputValid(A,B,B,C) || isInputValid(B,C,A,C))
    return null;

  let abHalf = calcHalfPoint(A, B);
  let abSlope = calcSlope(A, B);
  let abPerpSlope = calcPerpendicularSlope(abSlope);
  let abPerpConst = calcConstOfLineEq(abHalf, abPerpSlope);

  let bcHalf = calcHalfPoint(B, C);
  let bcSlope = calcSlope(B, C);
  let bcPerpSlope = calcPerpendicularSlope(bcSlope);
  let bcPerpConst = calcConstOfLineEq(bcHalf, bcPerpSlope);
  
  let x;
  let y;
  if (bcSlope == 0) {
    x = bcHalf.x;
    y = abPerpSlope * x + abPerpConst;
  }
  else if (abSlope == 0) {
    x = abHalf.x;
    y = bcPerpSlope * x + bcPerpConst;
  }
  else {
    x = (abPerpConst - bcPerpConst) / (bcPerpSlope - abPerpSlope);
    y = abPerpSlope * ((abPerpConst - bcPerpConst) / (bcPerpSlope - abPerpSlope)) + abPerpConst;
  }

  return { 'x': x, 'y': y };

};

function calcHalfPoint(P, Q) {
  return new Point((P.x + Q.x) / 2, (P.y + Q.y) / 2)
}

function calcSlope(P, Q) {
  return (Q.y - P.y) / (Q.x - P.x);
}

function calcPerpendicularSlope(slope) {
  return -1 * (1 / slope);
}

function calcConstOfLineEq(point, slope) {
  return point.y - slope * point.x;
}

function isInputValid(P, Q, R, S) {
  let pqSlope = calcSlope(P, Q);
  let rsSlope = calcSlope(R, S);
  let isColinear = (pqSlope === rsSlope) || (pqSlope === -rsSlope);
  if (isColinear || isNaN(pqSlope) || isNaN(rsSlope))
    return true;
  else
    return false;
}