jQuery(document).ready(function ($) {
    // Tab
    function activeTab(obj) {
        $('.tab-wrapper ul li').removeClass('active');
        $(obj).addClass('active');
        var id = $(obj).find('a').attr('href');
        $('.tab-item').hide();
        $(id).show();
    }

    $('.tab-wrapper ul li').click(function () {
        activeTab(this);
        return false;
    });
    activeTab($('.tab-wrapper ul li:first-child'));

    //tab chart item
    function activeTabChart(obj) {
        $('.chart-tab ul li').removeClass('active');
        $(obj).addClass('active');
        var id = $(obj).find('a').attr('href');
        $('.tab-chart-item').hide();
        $(id).show();
    }

    $('.chart-tab ul li').click(function () {
        activeTabChart(this);
        return false;
    });
    activeTabChart($('.chart-tab ul li:first-child'));

    //active gallery product
    $('#thumb_img img:first-child').addClass('active');
});

function changeimg(url, e) {
    document.getElementById("img").src = url;
    let nodes = document.getElementById("thumb_img");
    let img_child = nodes.children;
    for (i = 0; i < img_child.length; i++) {
        img_child[i].classList.remove('active')
    }
    e.classList.add('active');
}