$('ul.nav li.dropdown').hover(function() {$(this).find('.dropdown-menu').stop(true, true).delay(70).fadeIn(200);}, function(){$(this).find('.dropdown-menu').stop(true, true).delay(70).fadeOut(100);});$('input[type="range"]').on("change mousemove", function (){var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));$(this).css('background-image','-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', #4527A0), '+ 'color-stop(' + val + ', #d3d3db)'+ ')');});function filter() {	var blur = $("#blur").val(),  brightness = $("#brightness").val(), contrast = $("#contrast").val(), opacity = $("#opacity").val(),invert = $("#invert").val(), saturate = $("#saturate").val(); $("#img").css("-webkit-filter", ' blur(' + blur +'px) brightness(' + brightness + '%) contrast(' + contrast + '%) opacity(' + opacity + '%) invert(' + invert + '%) saturate(' + saturate + '%)'); }$("input[type=range]").change(filter).mousemove(filter);

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#choose").change(function(){
    readURL(this);
});



    function toggle(id) {
        var el = document.getElementById(id);
        el.style.display = (el.style.display === 'none') ? 'inline-block' : 'none';
    }