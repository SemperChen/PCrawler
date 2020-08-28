import { NativeModules } from 'react-native';
const GBKHttp = NativeModules.GBKHttp;
class GBKHttpUtil{
    getGBKHtml(urlStrig,unicode,callback){
        GBKHttp.getGBKHtml(urlStrig,unicode,callback)
    }
}
const Instance = new GBKHttpUtil();
export default Instance;