const usePromise = async () => {
    // Дожидаемся получения результата от функций
    let promiseResult1 = await f1();

    let promiseResult2 = await f2();

    let parentnode = await f3();

    // получили результат и переходим к проверкам
    if ((promiseResult1 < 100 && promiseResult2 < 100) || (promiseResult1 > 300 && promiseResult2 > 300)) {
        parentnode.insertAdjacentHTML('afterend', `<div><span id="custom">выводить ниже текст «одно из чисел вне диапазона от 100 до 300»</span></div>`);
    } else {
        // здесь должна быть вставка по fetch запросу
        const resultPic = await useRequest(`https://picsum.photos/${promiseResult1}/${promiseResult2}`);
        parentnode.insertAdjacentHTML('afterend', `<img src="${resultPic}" alt="картинка по fetch запросу"/>`);
    }
};

usePromise();


// промис, который возвращает 1 элеменет инпута
const f1 = () => {
    return new Promise((resolve, reject) => {
        let a = (document.getElementById('input1').value);
        resolve(a);
        reject('err')
    });
};

// промис, который возвращает 2 элеменет инпута
const f2 = () => {
    return new Promise((resolve, reject) => {
        let a = (document.getElementById('input2').value);
        resolve(a);
        reject('err')
    });
};

// промис, который возвращает родительскую ноду
const f3 = () => {
    return new Promise((resolve, reject) => {
        let a = (document.getElementById('submitt'));
        resolve(a);
        reject('err')
    });
};

const useRequest = function(url) {
    return fetch(url)
        .then((response) => {
            console.log('response', response);
            return response.url;
        })
        .catch(() => {
            console.log('error');
        });
};