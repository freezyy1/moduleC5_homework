// значение фотографий
const localImg = localStorage.getItem('localImg');

// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');
//  проверяем есть ли в localstorage фотографии и если есть вставляем их
if (localImg) {
    resultNode.innerHTML = localImg;
}

// Ищем кнопку по нажатию которой будет выводиться результат
const btnNode = document.querySelector('.btn-request');

// промис, который возвращает 1 элеменет инпута
const f1 = () => {
    return new Promise((resolve, reject) => {
        let a = document.querySelector('#input1').value;
        resolve(a);
        reject('err first input is not defined');
    });
};

// промис, который возвращает 2 элеменет инпута
const f2 = () => {
    return new Promise((resolve, reject) => {
        let a = document.querySelector('#input2').value;
        resolve(a);
        reject('err second input is not defined')
    });
};


function useRequest(url, callback) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return callback(json);
        })
        .catch(() => {
            console.log('error');
        })
        // проверка правильно ли вставлен fetch
        //.finally(() => {
        //    console.log('fetch');
        //});
}


function result(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const imgBlock = `
      <div class="imgFlex">
        <img
          src="${item.download_url}"
          class="ImageResult"
         alt="pic"/>
        <p class="authorAfterImg">${item.author}</p>
      </div>
    `;
        cards = cards + imgBlock;
    });
    localStorage.setItem('localImg', cards);
    resultNode.innerHTML = cards;
}


// Вешаем обработчик на кнопку
btnNode.addEventListener('click', async () => {
    let page = await f1();
    let limit = await f2();
    if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
        await useRequest(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, result);

    }
    else if (!(page >= 1 && page <= 10) && !(limit >= 1 && limit <= 10)) {
        resultNode.innerHTML = '<span>Номер страницы и лимит вне диапазона от 1 до 10!</span>';
    }
    else if (!(page >= 1 && page <= 10)) {
        resultNode.innerHTML = '<span>Номер страницы вне диапазона от 1 до 10!</span>';
    }
    else {
        resultNode.innerHTML = '<span>Напишите цифрами от 1 до 10</span>';
    }
});
