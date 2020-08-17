//
//  GDTADSplash.m
//  GDTAd
//
//  Created by BeatYourself on 2019/9/5.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "GBKHttp.h"
#import "AppDelegate.h"
#import <React/RCTUtils.h>
static NSString *const kEventADClosed = @"splashADClosed";
static NSString *const kEventADExposure = @"splashADExposure";
static NSString *const kEventPresent = @"splashADPresent";
static NSString *const kEventADClicked = @"splashADClicked";
static NSString *const kEventFailToLoad = @"splashFailToLoad";

@implementation GBKHttp
//{
//  BOOL hasListeners;
//}
//- (dispatch_queue_t)methodQueue
//{
//  return dispatch_get_main_queue();
//}
//
//+ (BOOL)requiresMainQueueSetup
//{
//  return NO;
//}
//
//- (void)startObserving
//{
//  hasListeners = YES;
//}
//
//- (void)stopObserving
//{
//  hasListeners = NO;
//}

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(showGDTSplashAd){
  
}

RCT_EXPORT_METHOD(initGDTSplashAd:(NSString *)placementId){
  self.placementId = placementId;
}

RCT_EXPORT_METHOD(getGBKHtml:urlStrig callback:(RCTResponseSenderBlock)callback)
{
//  BOOL isExist = YES;
//  NSNumber *boolNumber = [NSNumber numberWithBool:isExist];
//  NSDictionary *data = @{@"isExist":boolNumber};
//  NSArray *events = @[data];
//
//  callback(@[[NSNull null], events]);
//  NSLog(@"--encode2->%@<------", [@"%E6%88%91" stringByRemovingPercentEncoding]);
//
//  NSLog(@"--decode1-->%@<-----",  [@"我" stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]]);
  
//  NSString *urlStrig = @"https://www.biquge.biz/";
      urlStrig = [urlStrig stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]];
  NSURL *url = [NSURL URLWithString:urlStrig];
  NSURLRequest *request = [NSURLRequest requestWithURL:url];//默认为GET
  
  NSURLSession *session = [NSURLSession sharedSession];

  NSURLSessionDataTask * dataTask =  [session dataTaskWithRequest:request completionHandler:^(NSData * __nullable data, NSURLResponse * __nullable response, NSError * __nullable error) {
    

      //拿到响应头信息
//      NSHTTPURLResponse *res = (NSHTTPURLResponse *)response;
    NSStringEncoding enc;
//    NSLog(@"textEncodingName=%@",response.textEncodingName);
    //GBK编码
    if([response.textEncodingName isEqual:@"utf-8"]){
      enc = CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingUTF8);
    }else{
      enc = CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000);
    }
             
//           NSString * encodeStr = [[NSString alloc] initWithBytes:[resultdata bytes] length:[resultdata length] encoding:enc];

      //4.解析拿到的响应数据
//      NSLog(@"show%@%@",[[NSString alloc]initWithData:data encoding:enc],res.allHeaderFields);
    NSLog(@"unifiedBannerViewFailedToLoad=%@",[error localizedDescription]);
//    NSLog(@"unifiedBannerViewFailedToLoad=%@",[error userInfo]);
    
    NSString *string =[[NSString alloc]initWithData:data encoding:enc];
    NSLog(@"show1%@",string);
//      NSNumber *boolNumber = [NSNumber numberWithBool:isExist];
    if(string==nil||[string isEqualToString:@""]||string==NULL){
      NSDictionary *d = @{@"error":@"请求失败：返回值string为空"};
      NSArray *err = @[d];
      callback(@[err, [NSNull null]]);
    }else{
      NSDictionary *d = @{@"text":string};
      NSArray *events = @[d];
      callback(@[[NSNull null], events]);
    }
  }];
  [dataTask resume];


}

RCT_EXPORT_METHOD(postGBKHtml:urlStrig params:(NSDictionary *)params callback:(RCTResponseSenderBlock)callback)
{

  urlStrig = [urlStrig stringByAddingPercentEncodingWithAllowedCharacters:[NSCharacterSet URLQueryAllowedCharacterSet]];
  NSURL *url = [NSURL URLWithString:urlStrig];
//  NSURLRequest *request = [NSURLRequest requestWithURL:url];//默认为GET
  
  NSMutableURLRequest *request=[NSMutableURLRequest requestWithURL:url];
  
  //设置请求方式
  request.HTTPMethod=@"POST";

  //设置请求体
  request.HTTPBody=[@"grade_id=2" dataUsingEncoding:kCFStringEncodingGB_18030_2000];
//  request.allHTTPHeaderFields
  NSURLSession *session = [NSURLSession sharedSession];

  NSURLSessionDataTask * dataTask =  [session dataTaskWithRequest:request completionHandler:^(NSData * __nullable data, NSURLResponse * __nullable response, NSError * __nullable error) {

      //拿到响应头信息
      NSHTTPURLResponse *res = (NSHTTPURLResponse *)response;
    
      //GBK编码
      NSStringEncoding enc = CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000);

      NSString *string =[[NSString alloc]initWithData:data encoding:enc];

      NSDictionary *d = @{@"text":string};
      NSArray *events = @[d];

      callback(@[[error localizedDescription], events]);
  }];
  [dataTask resume];


}

- (NSArray<NSString *> *)supportedEvents
{
  return @[
           kEventPresent,
           kEventADExposure,
           kEventADClicked,
           kEventADClosed,
           kEventFailToLoad
           ];
}

@end
