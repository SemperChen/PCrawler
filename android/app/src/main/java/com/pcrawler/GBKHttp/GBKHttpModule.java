package com.pcrawler.GBKHttp;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by semper
 * data: 2017/12/21
 */

public class GBKHttpModule extends ReactContextBaseJavaModule {
    GBKHttpModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GBKHttp";
    }

    @ReactMethod
    public void getGBKHtml(
            String url,
            String unicode,
            Callback successCallback) {
        GBKHttp.getDataGBK(url,successCallback);
    }

}
