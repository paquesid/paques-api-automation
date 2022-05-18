import { assert } from 'chai';
import { describe, it } from 'mocha';
import auth from '../../routes/auth.api';
import * as data from '../../data/auth/auththorization.data';

describe.only('As an user, i want to logged in PDS Application', () => {
  it('client send a POST request /api/login', async () => {
    const res = await auth.POST(data.default);
    assert.equal(res.status, 200);
  });
});
