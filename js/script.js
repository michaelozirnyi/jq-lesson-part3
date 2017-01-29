jQuery(function () {                     /*jQuery(function ($) {    */


    $('#find').autocomplete({

        minChars: 1,
        delimiter: /(,|;)\s*/,
        maxHeight: 200,
        width: 300,
        zIndex: 9999,
        deferRequestBy: 300,
        lookupLimit: 5,
        lookup: [
            "Андрей",
            "Алексей",
            "Александр",
            "Арсений",
            "Арсений",
            "C",
            "C++",
            "Clojure",
            "ColdFusion",
            "Java",
            "Java-a",
            "Java-as",
            "Java-asd",
            "JavaScript",
            "JS"
        ]
    });


   /*--------*/

    var $cardResources = $('.destinations .hidden'),
        $loadMoreBtn = $('#btn-more-destin'),
        numberToShow = 3,
        hidTime = 1;

    $loadMoreBtn.on("click", function () {

        $('.hidden').slice(0, numberToShow ).removeClass('hidden');

        hidTime += numberToShow;

        if($cardResources.length < hidTime) {
            $loadMoreBtn.addClass('hidden')
        }
    });

    /*--------*/

    var $numResources = $('.destinations-berths .hidden'),
        $moreBtn = $('#btn-berth'),
        numberShow = 2,
        hidTimeBtnBerch = 1;

    $moreBtn.on("click", function () {

        $('.destinations-berths .hidden').slice(0, numberShow ).removeClass('hidden');

        hidTimeBtnBerch += numberShow;

        if($numResources.length < hidTimeBtnBerch) {
            $moreBtn.addClass('hidden')
        }
    });
});