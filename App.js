/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import cheerio from 'cheerio';
import { reptileCommon, rules } from './js/HtmlParseUtil';
import { fetchHtml } from './js/HttpUtil';
import GBKHttpUtil from './js/GBKHttpUtil';
class App extends React.Component{

  componentDidMount(){
    let r =reptileCommon(rules[3])
    let searchUrl = r.searchUrl("大主宰")
    // GBKHttpUtil.getGBKHtml("https://www.boquge.com/search.htm?keyword=大主宰",(err,res)=>{
    //   console.log("GBKHttpUtil",res[0].text)
    // })
          // console.log(searchUrl)

    fetchHtml("https://www.boquge.com/search.htm?keyword=大主宰;gbk").then((res)=>{
      console.log("res",res)
      // const $ = cheerio.load(res)
      // let result = r.getBookList($,searchUrl,"大主宰")
      // console.log(result)
    })
  }

  render(){
    return(
      <View>
        <Text>123</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
