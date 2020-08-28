/**
 * @author Semper
 */
import GBKHttpUtil from './GBKHttpUtil';
import { Platform } from 'react-native';

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
        GBKHttpUtil.getGBKHtml(url, ( res) => {
            // console.log("GBKHttpUtil",res[0])

            if(res.length>0&&res[0].error){
                console.warn('err fetchGBKHtml:',res.error)
                // reject(null);
                reject(new Error('err fetchGBKHtml:',res.error));
            }else{
                resolve(res[0].text);
            }
        })
        
    })
}

function handleUrl(url){
    if(url){
        let list = url.split(";")
        console.log("list",list)
        if(list.length===2){
            fetchHtml
        }
    }

}

export function fetchHtml(url,unicode="utf-8") {
    if(url&&url.indexOf(";")!==-1){
        let list = url.split(";")
        url = list[0]
        unicode = list[1]
    }
    // console.log("url",url)
    return new Promise((resolve, reject) => {
        if(Platform.OS==='ios'){
            GBKHttpUtil.getGBKHtml(url,unicode, ( res) => {
                // console.log("GBKHttpUtil",res)
    
                if(res.length>0&&res[0].error){
                    console.warn('err fetchGBKHtml:',res.error)
                    // reject(null);
                    reject(new Error('err fetchGBKHtml:',res.error));
                }else{
                    resolve(res[0].text);
                }
            })
        }else{
            GBKHttpUtil.getGBKHtml(url,unicode, (text,errMsc) => {
                // console.log('GBKHttpUtil',text)
                if(text){
                    resolve(text);
                }else if(errMsc){
                    console.warn('err fetchGBKHtml:',errMsc)
                    // reject(null);
                    reject(new Error('err fetchGBKHtml:',errMsc));
                }
                
            })
        }
        
        
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

