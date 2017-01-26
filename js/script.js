jQuery(function () {                     /*jQuery(function ($) {    */


    jQuery('#find').autocomplete({

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




});