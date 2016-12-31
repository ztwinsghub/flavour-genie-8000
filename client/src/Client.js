// Client helper functions to interact with the REST API

// add a new flavour
// sends a POST request to /api/flavours
/* eslint-disable no-undef */
function addFlavour(flavour, cb) {
  const body = JSON.stringify(flavour)

  return fetch(`/api/flavours`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// add a new juice
// sends a POST request to /api/juices
/* eslint-disable no-undef */
function addJuice(juice, cb) {
  const body = JSON.stringify(juice)

  return fetch(`/api/juices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// sends a GET request to /api/flavours
/* eslint-disable no-undef */
function getFlavours(cb) {
  return fetch(`/api/flavours`, {
    accept: 'application/json'
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// sends a GET request to /api/juices
/* eslint-disable no-undef */
function getJuices(cb) {
  return fetch(`/api/juices`, {
    accept: 'application/json'
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// searches for juices based on flavours selected
// sends a POST request to /api/search
/* eslint-disable no-undef */
function search(flavours, cb) {
  const body = JSON.stringify({flavours})

  return fetch(`/api/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body,
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
}

// request helpers
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = {
  addFlavour,
  addJuice,
  getFlavours,
  getJuices,
  search,
};

export default Client;
