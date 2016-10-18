var express = require('express');
var orm = require('orm');
var dbusername = 'root';
var dbpassword = 'root';
var dbname = 'newsdata';

// 导入到路由
module.exports = function(router) {

    // 数据库设置
    router.use(orm.express("mysql://" + dbusername + ":" + dbpassword + "@localhost/" + dbname, {
        define: function(db, models, next) {
            //数据字段提取设置
            models.NewsInfo = db.define("NewsInfo", {
                id: Number,
                newstitle: String,
                subtitle: String,
                picture: String,
                content: String,
                creattime: Date,
                style: ["recom", "baijia", "local", "picture", "fun",
                    "society"]
            });
            next();
        }
    }));

    // 数据库操作
    var dbs = {
        // 插入数据
        insertData: function(req, res, next) {
            req.models.NewsInfo.create({
                newstitle: req.body.newstitle,
                subtitle: req.body.subtitle,
                picture: req.body.picture,
                content: req.body.content,
                creattime: req.body.creattime,
                style: req.body.style
            }, function(err, NewsInfo) {
                if (err)
                    return console.error('Connection error: ' + err);
                res.locals.NewsInfo = {
                    'result': "插入数据成功"
                };
                next();
            });
        },

        // 删除数据
        deleteData: function(req, res, next) {
            req.models.NewsInfo.find({
                id: req.body.id
            }, function(err, NewsInfo) {
                if (err)
                    return console.error('Connection error: ' + err);
                NewsInfo[0].remove(function(err) {
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.NewsInfo = {
                        'result': "数据删除成功"
                    };
                    next();
                });
            });
        },

        // 修改数据
        updateData: function(req, res, next) {
            console.log(req.body);
            req.models.NewsInfo.find({
                id: req.body.id
            }, function(err, NewsInfo) {
                if (err)
                    return console.error('Connection error: ' + err);
                NewsInfo[0].newstitle = req.body.newstitle;
                NewsInfo[0].subtitle = req.body.subtitle;
                NewsInfo[0].picture = req.body.picture;
                NewsInfo[0].content = req.body.content;
                NewsInfo[0].creattime = req.body.creattime;

                NewsInfo[0].save(function(err) {
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.NewsInfo = {
                        'result': "数据修改成功"
                    };
                    next();
                });
            });
        },

        // 通过传送不同的id和style来达到查询数据
        selectData: function(req, res, next) {
            var seletejson;
            if (req.body.id == undefined) {
                seletejson = {
                    style: req.body.style
                };
            } else {
                seletejson = {
                    id: req.body.id
                };
            }

            req.models.NewsInfo.find(seletejson, function(err, NewsInfo) {
                if (err)
                    return console.error('Connection error: ' + err);
                console.log(NewsInfo);
                res.locals.NewsInfo = NewsInfo;
                next();
            });
        }
    };

    return dbs;
}
