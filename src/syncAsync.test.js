import { syncAsync } from './syncAsync';

const createAsyncTask = (name, log = []) => {
    let resolver;

    return {
        func: (callback) => {
          log.push(`Started ${name}`);

          resolver = () => {
            log.push(`Finished ${name}`);
            resolver = null;
            callback && callback();
          };
        },
        finish: () => resolver && resolver(),
    }
};

const createSyncTask = (name, log) => (callback) => {
    log.push(`Started ${name}`);
    log.push(`Finished ${name}`);
    callback && callback();
}

describe('syncAsync', () => {
  it('makes sure that each function passed as an argument will be invoked after the previous one finishes', () => {
    const log = [];

    const asyncTask1 = createAsyncTask('1', log);
    const syncTask2 = createSyncTask('2', log)
    const asyncTask3 = createAsyncTask('3', log);
    const asyncTask4 = createAsyncTask('4', log);

    syncAsync(asyncTask1.func);

    expect(log).toEqual([
      'Started 1',
    ]);

    syncAsync(syncTask2);
    syncAsync(asyncTask3.func);

    expect(log).toEqual([
      'Started 1',
    ]);

    asyncTask1.finish();

    expect(log).toEqual([
      'Started 1',
      'Finished 1',
      'Started 2',
      'Finished 2',
      'Started 3',
    ]);

    asyncTask3.finish();

    expect(log).toEqual([
      'Started 1',
      'Finished 1',
      'Started 2',
      'Finished 2',
      'Started 3',
      'Finished 3',
    ]);

    syncAsync(asyncTask4.func);

    expect(log).toEqual([
      'Started 1',
      'Finished 1',
      'Started 2',
      'Finished 2',
      'Started 3',
      'Finished 3',
      'Started 4',
    ]);

  });
});
