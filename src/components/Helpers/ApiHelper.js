class ApiHelper {
  constructor(baseURL, corsEnabled = false) {
    this.BASE_URL = baseURL;
    this.corsEnabled = corsEnabled;
  }

  async get(endpoint, params = {}, headers = {}) {
    const uri = this.buildUri(endpoint, params);
    const requestOptions = {
      method: 'GET',
      headers: this.addHeaders(headers),
    };
    return this.sendRequest(uri, requestOptions);
  }

  async post(endpoint, params = {}, headers = {}) {
    const uri = this.buildUri(endpoint);
    const requestOptions = {
      method: 'POST',
      headers: this.addHeaders(headers),
      body: JSON.stringify(params),
    };
    return this.sendRequest(uri, requestOptions);
  }

  async put(endpoint, params = {}, headers = {}) {
    const uri = this.buildUri(endpoint);
    const requestOptions = {
      method: 'PUT',
      headers: this.addHeaders(headers),
      body: JSON.stringify(params),
    };
    return this.sendRequest(uri, requestOptions);
  }

  async delete(endpoint, params = {}, headers = {}) {
    const uri = this.buildUri(endpoint, params);
    const requestOptions = {
      method: 'DELETE',
      headers: this.addHeaders(headers),
    };
    return this.sendRequest(uri, requestOptions);
  }

  buildUri(endpoint, params = {}) {
    const url = new URL(this.BASE_URL + endpoint);
    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });
    return url;
  }

  addHeaders(headers) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };
    return { ...defaultHeaders, ...headers };
  }

  async sendRequest(uri, requestOptions) {
    const corsOptions = { mode: 'no-cors' };
    if (this.corsEnabled) {
      requestOptions = { ...requestOptions, ...corsOptions }
    }
    
    console.log(JSON.stringify(requestOptions));

    const response = await fetch(uri, requestOptions);
    return this.handleResponse(response);
  }

  async handleResponse(response) {
    if (response.ok) {
      const responseBody = await response.json();
      return {
        data: responseBody,
        status: response.status,
      };
    } else {
      throw new Error(`Request failed: ${response.status} - ${response.statusText}`);
    }
  }
}

export default ApiHelper;
