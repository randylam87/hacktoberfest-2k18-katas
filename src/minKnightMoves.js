export const minKnightMoves = (from, to) => {
  const N = 8;
  const cell = pos => ({ x: pos[0].charCodeAt() - 96, y: +pos[1], distance: 0 });
  const inside = n => n >= 1 && n <= N;
  const validate = arg => typeof arg === 'string' && inside(arg[0].charCodeAt() - 96) && inside(+arg[1]);

  if ([from, to].every(validate)) {
    from = cell(from);
    to = cell(to);

    const dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

    const queue = [];
    const visit = '0'.repeat(N+1).split('').map(z => z.repeat(N+1).split('').map(Number));

    queue.push(from);

    visit[from.x][from.y] = 1;

    while (queue.length) {
      const t = queue.shift();

      if (t.x == to.x && t.y == to.y)
        return t.distance;

      for (let i = 0; i < 8; i++) {
        const x = t.x + dx[i];
        const y = t.y + dy[i];

        if (inside(x) && inside(y) && !visit[x][y]) {
          visit[x][y] = 1;
          const distance = t.distance + 1;
          queue.push({ x, y, distance });
        }
      }
    }
  }
  throw new Error();
};
