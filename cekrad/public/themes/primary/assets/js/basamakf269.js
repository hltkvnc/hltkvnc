function login(a) {
  var e = $("#login_form").serialize(),
    i = $("#login_form").attr("action");
    if($.trim($('#login_mail').val()) == "" || $.trim($('#login_pass').val()) == ""){
      $(".err_login").html('<div class="alert alert-danger">Kullanıcı adı veya şifreniz boş bırakılmamalıdır. Lütfen tekrar deneyin.</div>');
      return false;
    }
  return $(a).prop("disabled", !0), $(a).find("span").html("Giriş Yapılıyor..."), $.post(i, e, function(e) {
    "basarili" == e ? location.reload() : ($(a).prop("disabled", !1), $(a).find("span").html('Giriş Yap <i class="fa fa-long-arrow-right" aria-hidden="true"></i>'), $(".err_login").html('<div class="alert alert-danger">Kullanıcı adı veya şifrenizi yanlış girdiniz. Lütfen tekrar deneyin.</div>'), $("#login_form").find("input").val(""))
  }), !1
}

function sifreOnay() {
  return $("#sifre").val() == $("#sifre_onay").val() || ($(".err-area-sifre").html('<div class="alert alert-danger">Şifreler birbiriyle aynı değil. Kontrol edip yeniden deneyiniz.</div>'), !1)
}
$(document).ready(function() {

  $('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover();
  $('.change_harf').click(function(){
    var val = $(this).attr("data-harf");
    $('.harf').val(val);
    $('#uye-filter').submit();
  });
  $('.sehir-selectbox').change(function(){
    $('#uye-filter').submit();
  });
  var photo_upload_default = $('.photo-upload-area').find("span").html();
  $('.ft_photo').change(function(){
    if($(this).get(0).files.length > 0){
      $(this).parent().addClass("active");
      $(this).next().html('<i class="fa fa-check"></i> Dosya Seçildi');
    } else {
      $(this).parent().removeClass("active");
      $(this).next().html(photo_upload_default);
    }
  });
  var a = $(".banner"),
    e = !0;
  a.owlCarousel({
    items: 1,
    loop: !0,
    autoplay: !0,
    autoplaySpeed: 1e3,
    autoplayTimeout: 7e3,
    dots: !1,
    nav: !0,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  }), a.on("changed.owl.carousel", function(a) {
    var i = a.item.index - 2;
    0 == e && ($(".caption-area>h3").removeClass("animated fadeInUp"), $(".caption-area>p").removeClass("animated fadeInRight")), $(".owl-item").not(".cloned").eq(i).find(".caption-area>h3").addClass("animated fadeInUp"), $(".owl-item").not(".cloned").eq(i).find(".caption-area>p").addClass("animated fadeInRight"), e = !1
  }), $(".marq").owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 2
      }
    },
    loop: !0,
    autoplay: !0,
    autoplaySpeed: 1e3,
    dots: !1,
    nav: !0,
    margin: 15,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  }), $(".gallery").owlCarousel({
    items: 1,
    loop: !0,
    autoplay: !0,
    autoplaySpeed: 1e3,
    dots: !1,
    nav: !0,
    margin: 15,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  }), $(".sponsors").owlCarousel({
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    },
    loop: !0,
    autoplay: !0,
    autoplaySpeed: 1e3,
    dots: !1,
    nav: !0,
    margin: 15,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  }), $(".middle-tab").click(function() {
    $(".middle-tab").removeAttr("style"), $(".middle-tab").removeClass("active");
    var a = $(this),
      e = a.attr("data-color"),
      i = a.attr("href");
    $(i).attr("style", "border-color:" + e + " !important"), a.attr("style", "background-color:" + e + " !important"), a.addClass("active")
  }), $("#sub_security_code").keyup(function() {
    var a = $(this).parents("form").attr("action"),
      e = $(this).parents("form").attr("id"),
      i = $("#" + e).serialize(),
      t = $(this);
    "4" == t.val().length && ($(this).prop("disabled", !0), $(this).val("Gönderiliyor..."), $.post(a, i, function(a) {
      "security_code_error" == a ? ($(".err_sub_form").html('<div class="alert alert-danger">Güvenlik kodunuz hatalıdır.</div>'), t.prop("disabled", !1), t.val("")) : "invalid_email" == a ? ($(".err_sub_form").html('<div class="alert alert-danger">Geçerli bir e-posta giriniz.</div>'), t.prop("disabled", !1), t.val("")) : "success" == a && ($(".err_sub_form").html('<div class="alert alert-success">E-Posta listemize kaydınız oluşturuldu.<br /><b>Teşekkür ederiz.</b></div>'), t.val("Gönderildi!"))
    }))
  }), $(".toggle-mobile-menu").click(function() {
    $("#mobile-menu").toggleClass("animated fadeInLeft active")
  }), $(".sifre-sifirlama").click(function() {
    var a = $(this);
    a.prop("disabled", !0), $(".err_area").html("");
    var e = $("#forgot_mail").val();
    if ("" == e) return a.prop("disabled", !1), $(".err_area").html('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> Lütfen geçerli bir e-posta ya da telefon numarası yazın ve yeniden deneyin.</div>'), !1;
    $.post(site_url + "sifre", {
      var: e
    }, function(e) {
      return e = $.trim(e), console.log(e), "2" == e ? (a.prop("disabled", !1), $(".err_area").html('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> Üyeliğiniz aktif edilmediği için bu işleme devam edemiyorsunuz. Lütfen üyeliğinizin onaylanmasını bekleyin ve yeniden deneyin.</div>'), !1) : "1" != e ? (a.prop("disabled", !1), $(".err_area").html('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> Girdiğiniz bilgilere ait herhangi bir hesap bulunamadı. Lütfen kontrol edip yeniden deneyiniz.</div>'), !1) : (a.prop("disabled", !0), a.removeClass("btn-primary"), a.addClass("btn-success"), a.html('<i class="fa fa-check"></i> Şifre Sıfırlama E-Postası Gönderildi'), void $(".err_area").html('<div class="alert alert-success"><i class="fa fa-check"></i> Şifre sıfırlama linki, kayıt esnasında belirttiğiniz e-posta adresine gönderildi. Lütfen gelen kutunuzu (ve spam klasörünü) kontrol edin ve gönderilen e-postadaki linki tıklayın.</div>'))
    })
  }), $(".all-text").click(function() {
    $(".biyografi").toggleClass("full-height"), "Daha Fazla Göster" == $(this).text() ? $(this).text("Daha Az Göster") : $(this).text("Daha Fazla Göster")
  }), $(".sidebars-fixed").css("width", $(".sidebars-fixed").width())
}), $(".tutar-radio").click(function() {
  $(this).parents(".text-center").find(".tutar-radio").removeClass("active"), $(this).addClass("active");
  var a = $(this).attr("data-tutar"),
    e = $(this).attr("data-target");
  $(e).val(a)
}), $("#bagis_tutar").keyup(function() {
  $(".tutar-radio").removeClass("active")
});
function GetCardType(target)
{
    // visa
    var number = $(target).val();
    var re = {
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        interpayment: /^(636)\d+$/,
        unionpay: /^(62|88)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    }

    for(var key in re) {
        if(re[key].test(number)) {
          if(key == "visa"){
            $('#card_type').val("1");
          } else if(key == "mastercard"){
            $('#card_type').val("2");
          }
        }
    }

}
