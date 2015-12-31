// 顶部图片幻灯片
$(function() {
    var config = {
        pagination: '.swiper-pagination',
        // autoplay: 3000,
        paginationClickable: true
    }
    $(".swiper-container").swiper(config);
});

// 图片浏览器
$(function() {
    /*=== 默认为 standalone ===*/
    var myPhotoBrowserStandalone = $.photoBrowser({
        photos: [
            "images/header1.jpg",
            "images/header2.jpg",
            "images/header3.jpg",
            "images/detail1.jpg",
            "images/detail2.jpg",
            "images/detail3.jpg"
        ]
    });
    //点击时打开图片浏览器
    $(document).on('click', '.collection-detail img', function() {
        myPhotoBrowserStandalone.open();
    });
});
