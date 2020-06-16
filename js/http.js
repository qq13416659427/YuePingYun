(function (w) {
    var JD = 'http://183.237.67.218:3000';
    var DZ = {
        baseURL: JD,
        newsong: JD + '/personalized/newsong',//新歌
        highquality: JD + '/top/playlist/highquality',//热门歌单
        search: JD + '/search',//搜索
        song_detail: JD + '/song/detail',//歌曲详细
        song_url: JD + '/song/url',//查询歌曲地址
        playlist_detail: JD + '/playlist/detail',//歌单详细
        comment_hot: JD + '/comment/hot',//热门评论
    }
    w.DZ = DZ;
})(window)