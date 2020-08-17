import { NativeModules } from 'react-native';
const GBKHttp = NativeModules.GBKHttp;
class GBKHttpUtil{
    getGBKHtml(urlStrig,callback){
        GBKHttp.getGBKHtml(urlStrig,callback)
    }
}
const Instance = new GBKHttpUtil();
export default Instance;