$('.login__form').on('submit', function(e){
    e.preventDefault();

    var $thisForm = $(this),
        validForm = true;

    $thisForm.find('input[data-require="true"]').each(function(){
        var $thisInput = $(this),
            $thisInputBlock = $thisInput.closest('.input-block'),
            thisInputVal = $thisInput.val(),
            patternEmail = /^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
            

        if (thisInputVal.length > 0) {
            $thisInputBlock.removeClass('error');
            if ($thisInput.data('valid') === 'email') {
                if (thisInputVal.search(patternEmail) == 0) {
                    $thisInputBlock.removeClass('error');
                }
                else {
                    $thisInputBlock.addClass('error');
                    validForm = false;
                }
            }
        } else {
            $thisInputBlock.addClass('error');
            validForm = false;
        }
    });

    if (validForm == true) {
        // ajax
        console.log('sended form');
    }
    
});

$('.input-block input').on('input', function(){
    var $thisInput = $(this),
        thisInputVal = $thisInput.val();

    if (thisInputVal.length > 0) {
        $thisInput.closest('.input-block').removeClass('error');
    }
});