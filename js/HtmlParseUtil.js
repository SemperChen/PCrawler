/*
* 正则放定义的原因：
* 是我不想在函数里重复定义正则，比较损性能，但如果不是多次使用级别的，那也损不了多少性。
* */
// var reg =  /<[^>]+>/gi;  //过滤所有的html标签
let reg = new RegExp('<[^>]+>', 'gi');  //过滤所有的html标签，不包括内容

// var reg2 = /<(img|br|hr|input)[^>]*>/gi;  //只匹配img、br、hr、input标签
let reg2 = new RegExp('<(img|hr|input)[^>]*>', 'gi');  //分组匹配，过滤所有的html标签，包括内容

// var reg3 = /<(\S*)[^>]*>[^<]*<\/(\1)>/gi;        //分组匹配，过滤所有的html标签，包括内容
let reg3 = new RegExp('<(\\S*)[^>]*>[^<]*<\\/(\\1)>', 'gi');  //分组匹配，过滤所有的html标签，包括内容

export const rules1 = [
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "搜狗小说",              //备注名称
        baseUrl: "https://www.sgxs.cc",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.sgxs.cc/search/result.html?searchkey=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".search-list li",        //搜索到的列表
        searchListStart: 1,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: ".s2>a、text",           //搜索到的列表页  小说标题
        searchListUrl: ".s2>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: null,
        searchListDesc: null,
        searchListAuthor: ".s4、text",    //搜索到的列表页  小说作者
        searchListStatus: null,                  //搜索到的列表页   小说状态
        searchListLastChapter: ".s3>a、text",                  //搜索到的列表页   小说状态
        searchListLastTime: ".s5、text",                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    }
]

export const rules = [
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源1",              //备注名称
        // name: "搜狗小说",              //备注名称
        baseUrl: "https://www.sgxs.cc",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.sgxs.cc/search/result.html?searchkey=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".search-list li",        //搜索到的列表
        searchListStart: 1,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: ".s2>a、text",           //搜索到的列表页  小说标题
        searchListUrl: ".s2>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: null,
        searchListDesc: null,
        searchListAuthor: ".s4、text",    //搜索到的列表页  小说作者
        searchListStatus: null,                  //搜索到的列表页   小说状态
        searchListLastChapter: ".s3>a、text",                  //搜索到的列表页   小说状态
        searchListLastTime: ".s5、text",                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    },
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源2",              //备注名称
        baseUrl: "https://www.xbiquge6.com",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.xbiquge6.com/search.php?keyword=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".result-list .result-item",        //搜索到的列表
        searchListStart: 0,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "h3>a>span、text",           //搜索到的列表页  小说标题
        searchListUrl: "h3>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: ".result-game-item-pic img、attrsrc",
        searchListDesc: ".result-game-item-desc、text",
        searchListAuthor: ".result-game-item-info>p:nth-child(1)>span:nth-child(2)、text",    //搜索到的列表页  小说作者
        searchListStatus: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastChapter: ".result-game-item-info>p:nth-child(4)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastTime: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    },
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源3",              //备注名称
        baseUrl: "https://www.23txt.com",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.23txt.com/search.php?keyword=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".result-list .result-item",        //搜索到的列表
        searchListStart: 0,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "h3>a>span、text",           //搜索到的列表页  小说标题
        searchListUrl: "h3>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: ".result-game-item-pic img、attrsrc",
        searchListDesc: ".result-game-item-desc、text",
        searchListAuthor: ".result-game-item-info>p:nth-child(1)>span:nth-child(2)、text",    //搜索到的列表页  小说作者
        searchListStatus: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastChapter: ".result-game-item-info>p:nth-child(4)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastTime: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    },
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源4",              //备注名称
        baseUrl: "https://www.zwda.com",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.zwda.com/search.php?q=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".result-list .result-item",        //搜索到的列表
        searchListStart: 0,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "h3>a>span、text",           //搜索到的列表页  小说标题
        searchListUrl: "h3>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: ".result-game-item-pic img、attrsrc",
        searchListDesc: ".result-game-item-desc、text",
        searchListAuthor: ".result-game-item-info>p:nth-child(1)>span:nth-child(2)、text",    //搜索到的列表页  小说作者
        searchListStatus: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastChapter: ".result-game-item-info>p:nth-child(4)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastTime: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    },
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源5",              //备注名称
        baseUrl: "https://www.exiaoshuo.com",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.exiaoshuo.com/s.php?ie=utf8&q=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".type_show .bookbox",        //搜索到的列表
        searchListStart: 0,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "h4>a、text",           //搜索到的列表页  小说标题
        searchListUrl: "h4>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: ".bookimg img、attrsrc",
        searchListDesc: ".bookinfo>p、text",
        searchListAuthor: ".author、text",    //搜索到的列表页  小说作者
        searchListStatus: null,                  //搜索到的列表页   小说状态
        searchListLastChapter: ".update>a、text",                  //搜索到的列表页   小说状态
        searchListLastTime: null,                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: ".listmain dd a",                                  //目录列表
        firstCatalogList: null,               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    },
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源6",              //备注名称
        baseUrl: "https://www.zwdu.com",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.zwdu.com/search.php?keyword=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".result-list .result-item",        //搜索到的列表
        searchListStart: 0,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "h3>a>span、text",           //搜索到的列表页  小说标题
        searchListUrl: "h3>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListImg: ".result-game-item-pic img、attrsrc",
        searchListDesc: ".result-game-item-desc、text",
        searchListAuthor: ".result-game-item-info>p:nth-child(1)>span:nth-child(2)、text",    //搜索到的列表页  小说作者
        searchListStatus: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastChapter: ".result-game-item-info>p:nth-child(4)>span:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastTime: ".result-game-item-info>p:nth-child(3)>span:nth-child(2)、text",                       //搜索到的列表页   小说最后更新时间
        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: '&nbsp;'//过滤杂质，多个以“、”隔开,&nbsp;、<br>
    },
    {
        reptileTypeId: 0,
        code: "gbk",                 //页面编码格式
        name: "小说源7",              //备注名称
        baseUrl: "https://www.biqudu.net",    //来源地址
        codeTransform: "gbk",            //页面转码方式，用于搜索转码方式
        searchUrl: "http://biqudu.net/searchbook.php?keyword=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".l2>.item",        //搜索到的列表
        searchListStart: 0,                  //搜索到的列表页   第一本小说从哪里开始      索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "dt>a、text",           //搜索到的列表页  小说标题
        searchListUrl: "dt>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListAuthor: "dt>span、text",    //搜索到的列表页  小说作者
        searchListImg: null,
        searchListDesc: null,
        searchListStatus: null,                  //搜索到的列表页   小说状态
        searchListLastChapter: null,                  //搜索到的列表页   小说状态
        searchListLastTime: null,                       //搜索到的列表页   小说最后更新时间

        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: null,
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",               //第一个索引值
        endCatalogList: null,                                          //最后一个索引值
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro、text",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: null//过滤杂质，多个以“、”隔开

    },
    {
        reptileTypeId: 2,
        code: "gbk",                 //页面编码格式
        name: "小说源8",              //备注名称
        baseUrl: "https://www.biquge5200.cc/",    //来源地址
        codeTransform: "utf-8",            //页面转码方式，用于搜索转码方式
        searchUrl: "https://www.biquge5200.cc/modules/article/search.php?searchkey=${name}", //搜索地址前缀

        /*
        * 搜索列表start
        * */
        searchList: ".grid>tr",        //搜索到的列表
        searchListStart: 1,                  //搜索到的列表页   第一本小说从哪里开始  索引值从0开始
        searchListEnd: 0,                    //搜索到的列表页   最后几条不是小说
        searchListTitle: "td>a、html",           //搜索到的列表页  小说标题
        searchListUrl: "td>a、attrhref",         //搜索到的列表页  小说详情url地址
        searchListAuthor: "td:nth-child(3)、html",    //搜索到的列表页  小说作者
        searchListImg: null,
        searchListDesc: null,
        searchListStatus: "td:nth-child(6)、text",                  //搜索到的列表页   小说状态
        searchListLastChapter: "td:nth-child(2)、text",                  //搜索到的列表页   小说状态
        searchListLastTime: "td:nth-child(5)、text",                       //搜索到的列表页   小说最后更新时间

        /*
        * 搜索列表end
        * */

        /*
        * 小说目录页、详情页  start
        * */
        bookTitle: "#info>h1、html",
        bookAuthor: "#info>p:nth-child(2)、html、split、：、1",
        updateTime: "#info>p:nth-child(4)、html、split、：、1",
        bookType: ".con_top、html、split、>、9、split、<、0",
        catalogList: "#list a",                                  //目录列表
        firstCatalogList: "#list>dl>dt:eq(1)、index-1",                                        //第一个索引值
        endCatalogList: null,                                          //最后几条不是章节
        bookImgUrl: "#fmimg>img、attrsrc",                            //小说封面
        bookDescription: "#intro>p、html",                                   //小说描述
        catalogTitle: "、aHtml",
        catalogUrl: "、attrhref",
        /*
        * 小说目录页、详情页  end
        * */
        catalogContent: "#content、html",
        filterTag: null//过滤杂质，多个以“、”隔开
    }
]

/*
* 兼容cheerio  :eq的写法
* $("list:eq(1)") 报错
* $("list").eq(1) 成功
*
* 把上面报错的语法转成第二种语法
* */
function handleEq(dom, ruleSplit0, $) {
    var findDom = null;
    //#list>dl>dt:eq(1)、index-1

    if (ruleSplit0.indexOf(":eq(") == -1) {  //没有eq的写法
        if (dom) {
            findDom = dom.find(ruleSplit0);
        } else {
            findDom = $(ruleSplit0);
        }
    } else {    //兼容选择器:eq写法
        let rules = ruleSplit0.split(/:eq\(\d\)/);      //这里的数组数量永远比下面多1
        // console.log('rules-',rules)
        let eqs = ruleSplit0.match(/:eq\(\d\)/g);       //这里的数组数量永远比上面少1
        // console.log('eqs-',eqs)
        if (dom) {
            findDom = dom.find(rules[0]);
        } else {
            findDom = $(rules[0]);
        }
        findDom = findDom.eq(eqs[0].replace(":eq(", "").replace(")", ""));
        let i = 1, length = rules.length - 1;
        for (i; i < length; i++) {
            findDom = findDom.find(rules[i]);
            findDom = findDom.eq(eqs[i].replace(":eq(", "").replace(")", ""));
        }
        findDom = rules[i] ? findDom.find(rules[i]) : findDom;
    }


    return findDom;
}

/*
* 处理规则
* ruleSplit   规则数组
* startIndex  数组从哪里开始
* result      要处理的数据
*
*
* 目前
* split规则    split规则是三个三个来的  第一个值是split，固定的，第二个值是分割的值，第三个值是索引值（索引值有个特殊的值length-1 也就是最后一个 length-2也就是倒数第二个，以此类推）
*
* */
function handleRule(ruleSplit, startIndex, result) {
    switch (ruleSplit[startIndex]) {
        case "split":
            let resultArr = result.split(ruleSplit[startIndex + 1]);
            let index = 0;
            if (ruleSplit[startIndex + 2] && ruleSplit[startIndex + 2].indexOf("length-") == 0) {
                let endIndex = parseInt(ruleSplit[startIndex + 2].split("length-")[1]);
                index = resultArr.length - endIndex;
            } else {
                index = ruleSplit[startIndex + 2] || 0;     //默认0
            }
            result = resultArr[index] || result;
            startIndex += 3;
            break;
        default:
            break;
    }
    if ((startIndex + 3) <= ruleSplit.length) {
        return handleRule(ruleSplit, startIndex, result)
    } else {
        return result && result.trim();
    }
}

/*
* 在dom元素下，寻找findDom元素
* 根据type值获取findDom相对应的数据
* 若dom为null或空，则默认为为   $(findDom);
* findDom是rule里、号前面的一位，type是rule里、号的一位
* 若rule没有、号，则findDom就是rule
*
* $是cheerio的方法，先拓展，以防万一以后用得到
*
* rule 规则
*
* a、html
* a、val
* a、attrhref
* a、attrdata-id
*
* a、html、split、：、1        a标签的html()，然后split("：")，再获取1的索引值
*
*
* */
function domCommon(dom, rule, $) {
    if (!rule) {
        return null
    }
    // console.log('domCommon')
    let ruleSplit = rule.split("、");
    // console.log('domCommon',ruleSplit,dom)
    // let ruleLength = ruleSplit.length;
    let type = ruleSplit[1];
    let findDom = null;
    if (ruleSplit[0]) {
        findDom = handleEq(dom, ruleSplit[0], $);
    } else {
        findDom = dom;
    }

    let result = null;

    if (type == "html") {
        result = findDom.html() && findDom.html().trim();
    } else if (type == 'fontHtml') {
        result = findDom.html() && findDom.html().replace(/(<\/?font.*?>)/g, '').trim();        // 过滤标签，保留内容
    } else if (type == 'spanHtml') {
        result = findDom.html() && findDom.html().replace(/(<\/?span.*?>)/g, '').trim();        // 过滤标签，保留内容
    } else if (type == 'aHtml') {
        result = findDom.html() && findDom.html().replace(/(<\/?a.*?>)/g, '').trim();        // 过滤标签，保留内容
    } else if (type == 'allHtml') {
        result = findDom.html() && findDom.html().replace(/(<\/?font.*?>)|(<\/?span.*?>)|(<\/?a.*?>)/g, '').trim();
    } else if (type == "text") {
        result = findDom.text() && findDom.text().trim();
    } else if (type == "val") {
        result = findDom.val() && findDom.val().trim();
    } else if (type && type.indexOf("attr") == 0) {
        result = findDom.attr(type.split("attr")[1]) && findDom.attr(type.split("attr")[1]).trim();
    } else if (type && type.indexOf("index") === 0) {
        let indexCompute = parseInt(type.replace("index", "")) || 0;
        if (indexCompute) {
            return findDom.index() + indexCompute;
        } else {
            return findDom.index();
        }
    }
    return handleRule(ruleSplit, 2, result);
}

export function reptileCommon(rule) {
    // let rules = rules
    // console.log(rules)
    // let rule = rules[0];
    // console.log(rules)
    let returnObj = null;
    if (rule) {
        returnObj = {
            code: rule.code,
            name: rule.name,
            baseUrl: rule.baseUrl,
            codeTransform: rule.codeTransform,
            originUrlBefore: rule.originUrlBefore,   // url前缀
            userAgent: rule.userAgent,      // pc或者mobile
            searchUrl: (bookName) => {  /*返回搜索地址*/
                let transformName = "";
                switch (rule.codeTransform) {
                    // case "gbk":
                    //     transformName = tool.encodeURIComponent_GBK(bookName);
                    //     break;
                    // case "utf-8":
                    //     transformName = tool.url_encode(bookName);
                    //     break;
                    default://默认utf-8
                        transformName = url_encode(bookName);
                        break;
                }
                return rule.searchUrl.replace("${name}", transformName);
            },
            getBookList: ($, url, bookName) => {
                let list = [];
                // console.log('returnObj.searchUrl(bookName)',returnObj.searchUrl(bookName),'-----',url)
                if (bookName && returnObj.searchUrl(bookName).indexOf(url) == -1) {
                    //被302重定向，进入了书的详情页，多存在于只搜到了一本书   目测有问题，以后再改
                    // console.log('list------------',returnObj.bookTitle($))
                    list.push({
                        title: returnObj.bookTitle($),
                        url: (url.indexOf("http") == -1) ? (rule.baseUrl + url) : url,
                        author: returnObj.bookAuthor($),
                        status: returnObj.getUpdateTime($)
                    })

                } else {
                    let domList = $(rule.searchList);
                    // logger('getBookList func domList', domList)
                    let i = rule.searchListStart, length = domList.length;
                    for (i; i < length; i++) {
                        let status = null;
                        if (rule.searchListLastTime) {

                            status = domCommon(domList.eq(i), rule.searchListLastTime, $) + " ____ 最后更新：" + domCommon(domList.eq(i), rule.searchListStatus, $);
                        } else {

                            status = domCommon(domList.eq(i), rule.searchListStatus, $);
                        }
                        let url = domCommon(domList.eq(i), rule.searchListUrl, $);
                        if (url.indexOf("http") === -1) {
                            url = rule.baseUrl + url;
                        }
                        let title = domCommon(domList.eq(i), rule.searchListTitle, $) || "未知";
                        let author = domCommon(domList.eq(i), rule.searchListAuthor, $) || "未知";

                        let shortIntro = domCommon(domList.eq(i), rule.searchListDesc, $) || "未知";
                        let lastChapter = domCommon(domList.eq(i), rule.searchListLastChapter, $) || "未知";
                        let date = domCommon(domList.eq(i), rule.searchListLastTime, $) || "未知";
                        let img = domCommon(domList.eq(i), rule.searchListImg, $) || "http://";
                        if (img.indexOf("http") === -1) {
                            img = rule.baseUrl + img;
                        }
                        let articleUrlTag = encodeURI(url);

                        list.push({
                            title,
                            author,
                            cat: "",
                            shortIntro,
                            lastChapter,
                            date,
                            img,
                            articleUrlTag,
                            siteName: rule.name
                        });
                    }
                }
                return list;
            },

            bookTitle: ($) => {
                return domCommon(null, rule.bookTitle, $);
            },
            bookAuthor: ($) => {
                return domCommon(null, rule.bookAuthor, $);
            },
            getUpdateTime: ($) => {
                return domCommon(null, rule.updateTime, $);
            },
            getCatalogListUrl: ($) => {

                if (rule.catalogListUrl) {
                    let catalogListUrl = domCommon(null, rule.catalogListUrl, $);
                    if (catalogListUrl.indexOf('http') !== 0) {
                        catalogListUrl = rule.baseUrl + catalogListUrl;
                    }
                    return catalogListUrl;
                } else {
                    return null;
                }
            },
            getIsPage: ($) => { // 获取目录是否是分页
                if (rule.isPage) {
                    return true;
                } else {
                    return false;
                }
            },
            getNextPage: ($) => { // 获取下一页目录地址
                if (rule.nextPage) {
                    let url = domCommon(null, rule.nextPage, $);
                    if (url.indexOf('http') === 0) {
                        return url;
                    } else {
                        return rule.baseUrl + url;
                    }
                } else {
                    return null;
                }
            },
            getNowPage: ($) => { // 解析并判断当前页数
                if (rule.nextPage) {
                    return domCommon(null, rule.nowPage, $);
                } else {
                    return null;
                }
            },
            getAllPage: ($) => { // 总目录页数
                if (rule.nextPage) {
                    return domCommon(null, rule.allPage, $);
                } else {
                    return null;
                }
            },
            getCatalogList: ($) => {
                return $(rule.catalogList);
            },
            getBookType: ($) => {
                return domCommon(null, rule.bookType, $);
            },
            beforeThreeDay() {
                var date = new Date();//获取当前时间
                date.setDate(date.getDate() - 3);//设置天数 -3 天
                return date;
            },
            getCatalogFirstNum($) {   //暂时为0，以后再找规则
                if (!rule.firstCatalogList) {
                    return 0
                } else {
                    return domCommon(null, rule.firstCatalogList, $);
                }
            },
            getBookImgUrl($) {
                return domCommon(null, rule.bookImgUrl, $);
            },
            getDescription: ($) => {
                let description = domCommon(null, rule.bookDescription, $) || "";
                description = description.replace(/\n/g, "").replace(/<p>/g, "").replace(/<\/p>/g, "");  //将p标签转换成 null
                return filterHtmlOrContainer(description) // 除br之外，其他标签全部过滤
            },
            getCatalog: ($, catalogStr, i) => {     //规则暂时有问题，目前先这样
                let catalog = $(catalogStr[i]);
                // let title = catalog.html();
                let title = domCommon(catalog, rule.catalogTitle);
                let type = 1;  //1带章节
                if (title.indexOf("章") == -1 && title.indexOf("第") == -1) {
                    type = 2;   //2没有章节
                }
                let href = domCommon(catalog, rule.catalogUrl);
                // console.log(title,href);
                return {
                    title: title,
                    // href:"/" + domCommon(catalog, "、" + "attrhref、split、/、length-1"),
                    href: href,
                    // href: "/" + catalog.attr("href").split("/")[catalog.attr("href").split("/").length - 1],
                    type: type,
                };
            },
            getCatalogs: ($) => {
                try {
                    let catalogs = $(rule.catalogList)
                    let catalogList = []
                    console.log('getCatalogs->title:',catalogs)
                    let firstNum = returnObj.getCatalogFirstNum($) || 0
                    // console.warn('firstNum',firstNum)
                    if (firstNum < 0) {
                        firstNum = 0
                    }
                    for (i = firstNum; i < catalogs.length; i++) {
                        let catalog = $(catalogs[i]);
                        // let title = catalog.html();
                        let title = domCommon(catalog, rule.catalogTitle);
                        // console.log('getCatalogs->title:', title)
                        // drop()
                        let type = 1;  //1带章节
                        if (title&&title.indexOf("章") == -1 && title.indexOf("第") == -1) {
                            type = 2;   //2没有章节
                        }
                        let url = domCommon(catalog, rule.catalogUrl);
                        // logger('url',url)
                        if (url&&url.indexOf('http') !== 0) {
                            url = rule.baseUrl + url;
                        }
                        catalogList.push(
                            {
                                num: i,
                                title: title,
                                link: url,
                                type: type,
                            }
                        )
                    }

                    // console.log(catalogList);
                    return catalogList;
                } catch (error) {
                    console.warn('HtmlParseUtil getCatalogs func err',error.toString())
                    return null
                }

            },
            getCatalogContent: ($) => {
                let content = domCommon(null, rule.catalogContent, $) || "";
                // console.log('content',content.text)
                content = content.replace(/\n/g, "").replace(/<p>/g, "<br>").replace(/<\/p>/g, "<br>");

                content = filterHtmlOrContainer(content || "", false, rule.filterTag);  // 除br之外，其他标签全部过滤
                let contentArr = content.split("<br>");
                let i = 0, length = contentArr.length;
                for (i; i < length; i++) {
                    if (!contentArr[i] || contentArr[i].trim() == "") {
                        contentArr.splice(i, 1);
                        i--;
                        length--;
                    } else {
                        contentArr[i] = contentArr[i] && contentArr[i].trim();
                    }
                }
                return contentArr.join("<br>");
            }
        }
    }

    return returnObj;
}


/*
* 讲所有的标签过滤，也过滤标签内的内容
* str 需要过滤的字符串
* isbool  为false则需要单标签过滤，为true则不需要单标签过滤
* */
function filterHtmlOrContainer(str, isbool, filterTag) {

    if (typeof str != 'string') {      //不是字符串
        return str;
    }
    let result = str;
    if (!isbool) {        //先把单标签过滤了
        result = result.replace(reg2, '');
    }

    var ranges = [
        '\ud83c[\udf00-\udfff]',
        '\ud83d[\udc00-\ude4f]',
        '\ud83d[\ude80-\udeff]'
    ];
    result = result.replace(new RegExp(ranges.join('|'), 'g'), '');//目前的mysql数据库不可能转成utf8mb4字符集，以后新项目的数据库会转成这种字符集
    // result = result.replace(/[\x{10000}-\x{10FFFF}]/g,'');  //目前的mysql数据库不可能转成utf8mb4字符集，以后新项目的数据库会转成这种字符集
    result = result.replace(/<font>/g, '<br>').replace(/<\/font>/g, '<br>');
    result = result.replace(/<b>/g, '<br>').replace(/<\/b>/g, '<br>');
    result = result.replace(/\\/g, '');    //先把\过滤掉把b标签过滤为<br>
    result = result.replace(reg3, '');       //先经过分组匹配，把双标签去除，如果是嵌套标签，则会先将嵌套标签内的双标签过滤掉
    if (filterTag) {
        if (filterTag.indexOf('、') !== -1) {
            let r = new RegExp(filterTag.split('、').join('|'), 'g')
            result = result.replace(r, '')
        } else {
            let r = new RegExp(filterTag, 'g')
            result = result.replace(r, '')
        }
        // console.log('---------',filterTag.split('、'.join('|')))
        // let r = new RegExp(filterTag.split('、'.join('|')), 'g')
        // result.replace(r,'')

    }
    // result = result.replace(/&nbsp;/g,''); //过滤&nbsp;
    result = result.replace(/<br>/g, '\n');
    if (reg3.test(result)) {                 //如果为true，则代表还有标签
        return filterHtmlOrContainer(result, true);
    } else {
        return result;
    }
}

function url_encode(url) {
    url = encodeURIComponent(url);
    url = url.replace(/\%3A/g, ":");
    url = url.replace(/\%2F/g, "/");
    url = url.replace(/\%3F/g, "?");
    url = url.replace(/\%3D/g, "=");
    url = url.replace(/\%26/g, "&");
    return url;
}

export function logger(...args) {
    console.log(...args)
}


// export default {reptileCommon,rules};

/***************************************************************************************************************************************
 *
 */


