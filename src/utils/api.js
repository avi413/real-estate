class Api {
    constructor(options) {
        this._options = options;
    }

    _fetch(action, method, data) {
        return fetch(this._options.baseUrl + action, {
            method: method,
            headers: this._options.headers,
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.ok) {
            return res.json();
            }
            return Promise.reject(res.status);
        });
    }

    getProperties = () => {
        return this._fetch("/properties", "GET");
      };
}

export const api = new Api({
    baseUrl: "http://localhost:3010",
    headers: {
      "Content-Type": "application/json",
    },
  });
  