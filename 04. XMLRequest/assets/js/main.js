const request = obj => {
  return new Promise((resolve, reject) => {
    // Instance of a request
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status,
          msg: xhr.statusText
        });
      }
    })
  })
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    loadPage(el);
  }
});

async function loadPage(element) {
  const href = element.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
    const response = await request(objConfig);
    loadResult(response);
  }
  catch(e) {
    console.log(e)
  }
}

function loadResult(response) {
  const result = document.querySelector('.resultado')
  result.innerHTML = response;
};