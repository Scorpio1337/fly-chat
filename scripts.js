var reloadData = function () {
    $.get('./data.txt', function (data) {
        $('#content').html(data);
    })
};

var bindActions = function () {
    var $input = $('#input');
    $input.on('keydown', function (event) {
        var value = $(this).val();
        if (event.keyCode != 13) {
            return;
        }

        $input.val();

        $.post('./save.php', {
            value: value
        }, function (data) {
            if (data != "OK") {
                return alert(data);
            }

            $input.val('');
            reloadData();
        });
    });
};

var initFc = function () {
    bindActions();

    setInterval(reloadData, 2000);
};

$(initFc);