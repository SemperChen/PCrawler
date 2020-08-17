/**
 * @author Semper
 */
import GBKHttpUtil from './GBKHttpUtil';

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

export function fetchGBKHtml(url) {
    return new Promise((resolve, reject) => {
        GBKHttpUtil.getGBKHtml(url, (err, res) => {
            if(err){
                console.warn('err fetchGBKHtml:',err)
                // reject(null);
                reject(new Error('err fetchGBKHtml:',err));
            }else{
                resolve(res[0].text);
            }
            // console.log("GBKHttpUtil", res[0].text)
        })
        
    })
}

export function fetchHtml(url) {
    return new Promise((resolve, reject) => {
        GBKHttpUtil.getGBKHtml(url, (res) => {
            console.log("GBKHttpUtil", res)

            // if(err){
            //     console.warn('err fetchGBKHtml:',err)
            //     // reject(null);
            //     reject(new Error('err fetchGBKHtml:',err));
            // }else{
            //     resolve(res[0].text);
            // }
        })
        
    })
    // if(unicode==="GBK"){
    //     return fetchGBKHtml(url)
    // }else{
    //     return fetchUtf8Html(url)
    // }
}


export function fetchUtf8Html(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
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

