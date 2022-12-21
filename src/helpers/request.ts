import { Props } from './types';
const Req = {
  async sendRequest(props: Props) {
    const { url, error, payload } = props;
    try {
      const res = await fetch(url, payload || {});
      if (!res.ok) throw new Error(error || this._error);
      const data = await res.json();
      return data;
    } catch (e: any) {
      return e.message;
    }
  },

  async get(params: Props) {
    return await this.sendRequest({ ...params, payload: null });
  },

  async post(params: Props) {
    await this.sendRequest({
      ...params,
      payload: {
        method: 'POST',
        body: JSON.stringify(params.payload),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });
  },
  _error: 'something went wrong...',
};

export default Req;
