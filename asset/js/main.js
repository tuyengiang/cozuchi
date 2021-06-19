jQuery(document).ready(function ($) {

    // Tab
    function activeTab(obj)
    {
        $('.tab-wrapper ul li').removeClass('active');
        $(obj).addClass('active');
        var id = $(obj).find('a').attr('href');
        $('.tab-item').hide();
        $(id) .show();
    }

    $('.tab-wrapper ul li').click(function(){
        activeTab(this);
        return false;
    });
    activeTab($('.tab-wrapper ul li:first-child'));
});