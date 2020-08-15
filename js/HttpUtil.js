/**
 * @author Semper
 */

export function fetchBookmark(url, params) {

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params)
        })
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchBookmark:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}

export function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'Mozilla/5.0 (Linux; X11)',
            }
        })
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchJSON:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}

export function fetchNetData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchNetData:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}

export function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        fetch(url,{
            headers: {
                'Accept':"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                'Content-Type': 'text/html',
                'Accept-Charset': 'gbk',
                'User-Agent': 'Mozilla/5.0 (Linux; X11)',
            }
        })
            .then((response) => {
                console.warn(response.blob())
                return response.text()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchHtml:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}

