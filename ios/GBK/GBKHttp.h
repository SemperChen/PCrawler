//
//  GDTADSplash.h
//  GDTAd
//
//  Created by BeatYourself on 2019/9/5.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface GBKHttp : RCTEventEmitter<RCTBridgeModule>
@property (retain, nonatomic) UIView *bottomView;
@property (nonatomic, strong) NSString *placementId;

@end

