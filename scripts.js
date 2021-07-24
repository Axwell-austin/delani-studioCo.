$(document).ready(function() {
    $('.design').click(function() {
        $('#design').show();
        $(".design").hide();

    });
    $('#design').click(function() {
        $('.design').show();
        $("#design").hide();

    });
    $('.development').click(function() {
        $('#development').show();
        $(".development").hide();

    });
    $('#development').click(function() {
        $('.development').show();
        $("#development").hide();

    });

    $('.product-management').click(function() {
        $('#product-management').show();
        $(".product-management").hide();

    });
    $('#product-management').click(function() {
        $('.product-management').show();
        $("#product-management").hide();

    });
    $("form").submit(function(event) {
        if ($("input").val() === "") {
            alert('Enter valid data')
            return;
        }

        alert('Subject "x", Your message has been received and you will get a response in due time. Thanks for the feedback')
        event.preventDefault();
        this.reset();
    });

    $('.card_1').mouseenter(function() {
        $('.content-overlay_1').show();
        $('.content-details_1').show();
        $('.border').show();

    });
    $('.card_1').mouseleave(function() {
        $('.content-overlay_1').hide();
        $('.content-details_1').hide();
        $('.border').hide();

    });
    $('.card_2').mouseenter(function() {
        $('.content-overlay_2').show();
        $('.content-details_2').show();
        $('.border').show();

    });
    $('.card_2').mouseleave(function() {
        $('.content-overlay_2').hide();
        $('.content-details_2').hide();
        $('.border').hide();

    });
    $('.card_3').mouseenter(function() {
        $('.content-overlay_3').show();
        $('.content-details_3').show();
        $('.border').show();

    });
    $('.card_3').mouseleave(function() {
        $('.content-overlay_3').hide();
        $('.content-details_3').hide();
        $('.border').hide();

    });
    $('.card_4').mouseenter(function() {
        $('.content-overlay_4').show();
        $('.content-details_4').show();
        $('.border').show();

    });
    $('.card_4').mouseleave(function() {
        $('.content-overlay_4').hide();
        $('.content-details_4').hide();
        $('.border').hide();

    });
    $('.card_5').mouseenter(function() {
        $('.content-overlay_5').show();
        $('.content-details_5').show();
        $('.border').show();

    });
    $('.card_5').mouseleave(function() {
        $('.content-overlay_5').hide();
        $('.content-details_5').hide();
        $('.border').hide();

    });
    $('.card_6').mouseenter(function() {
        $('.content-overlay_6').show();
        $('.content-details_6').show();
        $('.border').show();

    });
    $('.card_6').mouseleave(function() {
        $('.content-overlay_6').hide();
        $('.content-details_6').hide();
        $('.border').hide();

    });
    $('.card_7').mouseenter(function() {
        $('.content-overlay_7').show();
        $('.content-details_7').show();
        $('.border').show();

    });
    $('.card_7').mouseleave(function() {
        $('.content-overlay_7').hide();
        $('.content-details_7').hide();
        $('.border').hide();

    });
    $('.card_8').mouseenter(function() {
        $('.content-overlay_8').show();
        $('.content-details_8').show();
        $('.border').show();

    });
    $('.card_8').mouseleave(function() {
        $('.content-overlay_8').hide();
        $('.content-details_8').hide();
        $('.border').hide();

    });
});