/**
 * @file 配置路由转发
 * @author zhujialu
 */
var rewriteURLRules = [

    {
        pattern: /^\/index\/lesson/,
        path: '/mock/index.php'
    }
];

exports.rules = rewriteURLRules;
