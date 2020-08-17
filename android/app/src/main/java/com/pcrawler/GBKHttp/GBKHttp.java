package com.pcrawler.GBKHttp;

import android.util.Log;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * GBK转UTF-8
 * Created by semper
 * data: 2017/12/21
 */

class GBKHttp {

    static void getDataGBK(String url,
                           final com.facebook.react.bridge.Callback successCallback) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url(url)
                .build();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {


//                errorCallback.invoke(e.getMessage());
            }
            @Override
            public void onResponse(Call call, Response response) {
                try {
                    if(response.isSuccessful()){
                        if (response.body() != null) {
                            String text = response.body().string();
                            Map<String, String> map = new HashMap<String, String>();
                            map.put("text", text);
                            Log.d("GBKHttp--", text);
                            successCallback.invoke(text);
                        }



//                        String type = response.header("content-type");
//                        Log.d("GBKHttp1",response.body().string());
//                        if(!type.equals("")&&type.contains("gbk")){
//                            Log.i("GBKHttp--",type);
//                            final byte[] responseBytes=response.body().bytes();
//                            final String responseUrl = new String(responseBytes,"GBK");
////                        Log.d("GBKHttp",responseUrl);
//                            successCallback.invoke(responseUrl);
//                        }else{
//                            final byte[] responseBytes=response.body().bytes();
////                            final String responseUrl = new String(responseBytes, StandardCharsets.UTF_8);
//                        Log.d("GBKHttp1",response.body().string());
////                            successCallback.invoke(responseUrl);
//
//                        }
//                        final byte[] responseBytes=response.body().bytes();
//                        final String responseUrl = new String(responseBytes,"GBK");
////                        Log.d("GBKHttp",responseUrl);
//                        successCallback.invoke(responseUrl);
                    }
                }catch (Exception e){
//                    errorCallback.invoke(e.getMessage());
                }

            }
        });
    }
}
