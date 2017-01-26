jQuery(function () {                     /*jQuery(function ($) {    */


    $('#find').autocomplete({

        minChars: 1,
        delimiter: /(,|;)\s*/,
        maxHeight: 300,
        width: 300,
        zIndex: 9999,
        deferRequestBy: 300,
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
            "JavaScript"
        ]
    });

    /*var ttt = $('.destination').css("display");
    console.log(ttt);
    if(ttt)



    var asd = $('.destination').length;




    for (var aaa = 0; aaa < asd; aaa++)
        console.log(aaa + " fuck ");
*/


   /* var textBtn = $('.destination'),
        mas = textBtn.map(function(){

            console.log(mas);
        });
*/


    $("#btn-destinations").on("click", function () {
        $('.destination').show(700);

        $(this).hide(700);
    });


    $("#berth").on("click", function () {
        $('.destination-berth').show(700);

        $(this).hide(700);
    })

});