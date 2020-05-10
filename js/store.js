var UTGrillbys = {
    image: "<img src='images/UTGrillbysMug.png' >",
    type: "mugs",
    name: "Grillbys Mug",
    price: "$15.99"
};
var UTRuins = {
    image: "images/UTRuinsMug.png",
    type: "mugs",
    name: "Ruins Mug",
    price: "$23.99"
};
var UTYuleDudes = {
    image: "images/UTYuleDudes.jpg",
    type: "mugs",
    name: "Yule Dudes Mug",
    price: "$18.99"
};
var UTDeltarune = {
    image: "<img src='images/'>",
    type: "shirts",
    name: "Deltarune Shirt",
    price: "$23.99"
};
var UTMercy = {
    image: "<img src='images/'>",
    type: "shirts",
    name: "Mercy Shirt",
    price: "$23.99"
};
var UTUndyne = {
    image: "<img src='images/'>",
    type: "shirts",
    name: "Undyne Shirt",
    price: "$23.99"
};
var UTSpaceJunk = {
    image: "<img src='images/'>",
    type: "shirts",
    name: "Space Junk Shirt",
    price: "$23.99"
};
var UTMettaton = {
    image: "<img src='images/'>",
    type: "shirts",
    name: "Mettaton Shirt",
    price: "$23.99"
};
var UTAnnoying = {
    image: "<img src='images/'>",
    type: "misc",
    name: "Annoying Dog Pin",
    price: "$11.99"
};
var UTLesser = {
    image: "<img src='images/'>",
    type: "misc",
    name: "Lesser Dog Scarf",
    price: "$35.99"
};
var UTCollections = {
    image: "<img src='images/'>",
    type: "misc",
    name: "Undertale Collector's Edition",
    price: "$64.99"
};
var UTMusic = {
    image: "<img src='images/'>",
    type: "misc",
    name: "Undertale Music Book Vol.1",
    price: "$24.99"
};
function search(){
    var x = document.getElementById("searchbar").value;
    console.log(x)
   if(x == "grillbys"){
        document.getElementById("UTGrillbys").style.visibility="visible";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";

    }
    else if(x == "ruins"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="visible";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";
    }
    else if(x == "yule dudes"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="visible";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";

    }
    else if(x == "deltarune"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="visible";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";

    }
    else if(x == "mercy"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="visible";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";



    }
    else if(x == "undyne"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
            document.getElementById("UTRuins").style.visibility="hidden";
            document.getElementById("UTYuleDudes").style.visibility="hidden";
            document.getElementById("UTDeltarune").style.visibility="hidden";
            document.getElementById("UTMercy").style.visibility="hidden";
            document.getElementById("UTUndyne").style.visibility="visible";
            document.getElementById("UTSpaceJunk").style.visibility="hidden";
            document.getElementById("UTMettaton").style.visibility="hidden";
            document.getElementById("UTAnnoying").style.visibility="hidden";
            document.getElementById("UTLesser").style.visibility="hidden";
            document.getElementById("UTCollections").style.visibility="hidden";
            document.getElementById("UTMusic").style.visibility="hidden";



    }
    else if(x == "space junk"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="visible";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";



    }
    else if(x == "mettaton"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="visible";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";


    }
    else if(x == "annoying dog"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="visible";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";


    }
    else if(x == "lesser dog"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="visible";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";


    }
        else if(x == "collectors edition"){
            document.getElementById("UTGrillbys").style.visibility="hidden";
            document.getElementById("UTRuins").style.visibility="hidden";
            document.getElementById("UTYuleDudes").style.visibility="hidden";
            document.getElementById("UTDeltarune").style.visibility="hidden";
            document.getElementById("UTMercy").style.visibility="hidden";
            document.getElementById("UTUndyne").style.visibility="hidden";
            document.getElementById("UTSpaceJunk").style.visibility="hidden";
            document.getElementById("UTMettaton").style.visibility="hidden";
            document.getElementById("UTAnnoying").style.visibility="hidden";
            document.getElementById("UTLesser").style.visibility="hidden";
            document.getElementById("UTCollections").style.visibility="visible";
            document.getElementById("UTMusic").style.visibility="hidden";


    }
    else if(x == "music"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="visible";


    }
    else if(x == "mugs"){
        document.getElementById("UTGrillbys").style.visibility="visible";
        document.getElementById("UTRuins").style.visibility="visible";
        document.getElementById("UTYuleDudes").style.visibility="visible";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";


    }
    else if(x == "shirts"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="visible";
        document.getElementById("UTMercy").style.visibility="visible";
        document.getElementById("UTUndyne").style.visibility="visible";
        document.getElementById("UTSpaceJunk").style.visibility="visible";
        document.getElementById("UTMettaton").style.visibility="visible";
        document.getElementById("UTAnnoying").style.visibility="hidden";
        document.getElementById("UTLesser").style.visibility="hidden";
        document.getElementById("UTCollections").style.visibility="hidden";
        document.getElementById("UTMusic").style.visibility="hidden";


    }
    else if(x == "misc"){
        document.getElementById("UTGrillbys").style.visibility="hidden";
        document.getElementById("UTRuins").style.visibility="hidden";
        document.getElementById("UTYuleDudes").style.visibility="hidden";
        document.getElementById("UTDeltarune").style.visibility="hidden";
        document.getElementById("UTMercy").style.visibility="hidden";
        document.getElementById("UTUndyne").style.visibility="hidden";
        document.getElementById("UTSpaceJunk").style.visibility="hidden";
        document.getElementById("UTMettaton").style.visibility="hidden";
        document.getElementById("UTAnnoying").style.visibility="visible";
        document.getElementById("UTLesser").style.visibility="visible";
        document.getElementById("UTCollections").style.visibility="visible";
        document.getElementById("UTMusic").style.visibility="visible";


    }
    else{
        document.getElementById("UTGrillbys").style.visibility="visible";
        document.getElementById("UTRuins").style.visibility="visible";
        document.getElementById("UTYuleDudes").style.visibility="visible";
        document.getElementById("UTDeltarune").style.visibility="visible";
        document.getElementById("UTMercy").style.visibility="visible";
        document.getElementById("UTUndyne").style.visibility="visible";
        document.getElementById("UTSpaceJunk").style.visibility="visible";
        document.getElementById("UTMettaton").style.visibility="visible";
        document.getElementById("UTAnnoying").style.visibility="visible";
        document.getElementById("UTLesser").style.visibility="visible";
        document.getElementById("UTCollections").style.visibility="visible";
        document.getElementById("UTMusic").style.visibility="visible";

    }


}