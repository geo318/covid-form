type props = {
  url: string;
  error: string;
  log: boolean;
  payload?: any;
};

const Req = {
  async sendRequest(props: props) {
    const { url, error, log, payload } = props;
    try {
      const res = await fetch(url, payload || {});
      if (!res.ok) throw new Error(error || this._error);
      const data = await res.json();
      log && console.log(data);
      return data;
    } catch (e: any) {
      log && console.log(e);
      return e.message;
    }
  },

  async get(params: props) {
    return await this.sendRequest({ ...params, payload: null });
  },

  async post(params: props) {
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
