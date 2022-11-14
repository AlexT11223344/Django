function create_wordcloud() {
    $('#my_dataviz').empty();
    var novel_name = $("#select_novel_list option:selected").text();
    // alert(novel_name);
    // List of key words

    var Adam_Bade_kw = ['bede', 'bedes', 'bedchamber', 'booke', 'quatrain', 'passage', 'eliot', 'literature', 'poetry', 'lyricism', 'poets', 'apocrypha', 'poems', 'bedgown', 'adam', 'epilogue', 'passages', 'vicarage', 'novels', 'novel', 'acre', 'epithets', 'parsonage', 'beds', 'book', 'besetment', 'room', 'poetical', 'execration', 'tale', 'reading', 'altar', 'foregone', 'bed', 'abeyance', 'pillory', 'page', 'bachelorhood', 'allusions', 'accusation', 'reads', 'carriage', 'fragmentary', 'chapter', 'denunciation', 'apocryphal', 'rooms', 'boudoir', 'pastoral', 'inscription']

    var Brother_Jacob_kw = ['jacob', 'confectionery', 'confectioners', 'literature', 'literary', 'yearnings', 'folly', 'delicacies', 'mischief', 'eliot', 'modesty', 'novel', 'pantomime', 'confectioner', 'indulgence', 'pudding', 'dessert', 'edward', 'poetry', 'philosopher', 'passages', 'currants', 'novels', 'regard', 'brothers', 'brilliancy', 'evils', 'correspondence', 'pleasures', 'pleasantness', 'consumption', 'morsels', 'taste', 'appetite', 'sweets', 'cookery', 'apparition', 'desires', 'disobey', 'frankness', 'connoisseur', 'persuasion', 'metaphysics', 'errand', 'yearning', 'pretensions', 'effete', 'discontent', 'victual', 'affairs']

    var Daniel_Deronda_kw = ['poetics', 'deronda', 'reverie', 'forebodings', 'prologue', 'allegory', 'poetry', 'poem', 'literature', 'discernment', 'prose', 'poems', 'gadsby', 'foreboding', 'descartes', 'literary', 'keats', 'novel', 'wordsworth', 'passage', 'foreshadowing', 'poets', 'poetical', 'awakening', 'molière', 'desultoriness', 'manuscript', 'revelations', 'revelation', 'novels', 'torment', 'shakespeare', 'desolation', 'lamentations', 'escapement', 'foreshadowed', 'enkindle', 'poet', 'allusion', 'antigone', 'foreshadow', 'allusions', 'augury', 'divergent', 'reading', 'paragraph', 'dialectic', 'goethe', 'davilow', 'revulsion']

    var Flex_Holt_kw = ['shakespeare', 'sonnets', 'hamlets', 'wordsworth', 'pamphlet', 'yeomanry', 'holdenough', 'cromwell', 'herald', 'reformers', 'literary', 'shakespeare', 'bedford', 'herald', 'poets', 'dialectic', 'commoners', 'shires', 'suffrage', 'abolition', 'passage', 'poetical', 'midlands', 'malthouse', 'midland', 'dorchester', 'revolution', 'hamlet', 'yearnings', 'wanderer', 'outlying', 'prose', 'poet', 'whiggery', 'marlowe', 'puritans', 'townsmen', 'commoner', 'holt', 'colliers', 'forth', 'dramatic', 'literature', 'waywardness', 'pillory', 'ragged', 'eliot', 'poetic', 'reverie', 'englishmen']
    var Impressions_of_Theophrastus_Such_kw = ['theophrastus', 'philosopher', 'philosophers', 'poetics', 'socrates', 'witticisms', 'descartes', 'aristotle', 'plato', 'prose', 'literature', 'essays', 'scholars', 'dilettanteism', 'chaucer', 'sophocles', 'machiavelli', 'treatise', 'philological', 'writings', 'euphorion', 'literatures', 'iliad', 'epigrams', 'philosophies', 'theorising', 'poets', 'antiquity', 'puritans', 'proselytes', 'discourses', 'literary', 'allusion', 'voltaire', 'wordsworth', 'erudition', 'philosophic', 'poetical', 'peremptoriness', 'quotations', 'fictionists', 'fatalism', 'allusions', 'unscrupulosity', 'idiosyncrasies', 'critiques', 'reproaches', 'philosophy', 'theoriser', 'nobleness']
    var Middle_March_kw = ['sonnets', 'shakespeare', 'literature', 'sonnets', 'prose', 'literary', 'sonneteers', 'essays', 'hamlet', 'dramas', 'dorotheas', 'mistresses', 'parables', 'dorothea', 'seductions', 'treatise', 'romanticism', 'passage', 'courtships', 'marlowe', 'discontents', 'chaucer', 'playfellows', 'literatures', 'novels', 'revisiting', 'eliot', 'dialectical', 'paragraph', 'folly', 'matronliness', 'socialities', 'erudition', 'juliet', 'puritanism', 'essay', 'modesty', 'schoolfellow', 'passages', 'courting', 'wordsworth', 'memoirs', 'regard', 'matrimony', 'pamphlet', 'burgesses', 'poets', 'widowhood', 'waywardness', 'dowager']
    var Romola_kw = ['modestia', 'eruditi', 'romola', 'pestilenza', 'sonnets', 'prose', 'piagnoni', 'modesty', 'sposalizio', 'gattuccio', 'trespiano', 'patrigno', 'maddalena', 'literature', 'annunziata', 'condottieri', 'literary', 'piagnone', 'rigoletto', 'condottiere', 'romagnole', 'mazzieri', 'seductions', 'magnificenza', 'elegances', 'altars', 'guicciardini', 'altar', 'madonna', 'rosselli', 'manuscript', 'eliot', 'discipuli', 'pulinari', 'maravigliate', 'nunziata', 'epilogue', 'umiliati', 'ferravecchi', 'bracci', 'bellissimi', 'tradimento', 'mugello', 'giorno', 'tabellario', 'scandalous', 'bartolommeo', 'scandal', 'prologue', 'mirandola']
    var Scenes_of_Clerical_Life_kw = ['eliot', 'vicarage', 'rectory', 'prose', 'archdeacon', 'literature', 'wordsworth', 'ecclesiastical', 'stanzas', 'poetry', 'poet', 'epistle', 'vicar', 'inscription', 'servant', 'altar', 'poems', 'anglican', 'clergyman', 'inscriptions', 'erudition', 'literary', 'friar', 'housemaids', 'poem', 'exegetical', 'eliza', 'churchmanship', 'housemaid', 'passage', 'accommodation', 'sermons', 'pastoral', 'puritanic', 'emancipation', 'paragraphs', 'parishioner', 'poetical', 'discourses', 'priestly', 'ministering', 'anguish', 'liturgy', 'mistress', 'devotions', 'viscount', 'churchwoman', 'parishes', 'curates', 'oratory']
    var Slias_Marner_kw = ['weavers', 'weaver', 'wordsworth', 'tale', 'silas', 'weaving', 'marner', 'tenderer', 'tales', 'shepherd', 'woven', 'shepherdess', 'shepherds', 'wrought', 'borne', 'literature', 'maidens', 'puritan', 'fence', 'rustling', 'poetry', 'peevish', 'rusticity', 'prowling', 'trotting', 'carriage', 'fences', 'husbandry', 'fashioned', 'wander', 'mustering', 'weave', 'errand', 'strolling', 'lest', 'lytherley', 'twilight', 'raveloe', 'pedlar', 'tended', 'yarn', 'knitting', 'hound', 'familiars', 'sowing', 'heeding', 'bark', 'tender', 'mischievouser', 'fonder']
    var The_lifted_Veil_kw = ['schoolfellow', 'shakespeare', 'passage', 'literature', 'puritans', 'epistle', 'tragedies', 'foregoing', 'hamlet', 'eliot', 'teatime', 'quarrels', 'perusal', 'ragged', 'murmuring', 'aphorisms', 'modesty', 'gadsby', 'plantation', 'playfellow', 'ploughs', 'harrows', 'pastorals', 'pillory', 'passages', 'reading', 'poets', 'ruin', 'playfellows', 'hardships', 'indulgences', 'poetry', 'indignity', 'novels', 'poems', 'poem', 'mischief', 'allusions', 'fuss', 'carriage', 'trodden', 'treatise', 'discontent', 'tale', 'unrest', 'haughtiness', 'engravings', 'tended', 'pantomime', 'endow']
    var The_Mill_on_the_Floss_kw = ['convalescence', 'foretelling', 'resurrection', 'deathbed', 'sufferings', 'prophecy', 'suffocation', 'death', 'reviving', 'revelation', 'foreshadowing', 'anguish', 'repose', 'reawakening', 'yearnings', 'dying', 'suffering', 'fainted', 'shakespeare', 'clairvoyants', 'torment', 'consciousness', 'grave', 'sorrows', 'contemplation', 'trepidation', 'die', 'exaltation', 'onward', 'inscription', 'tragedy', 'souls', 'sorrow', 'befallen', 'befalls', 'tremulousness', 'desires', 'yearning', '1850', 'immortal', 'veil', 'delirium', 'prose', 'corpse', 'spirits', 'reverence', 'successor', 'morbid', 'alarm', 'preceded']
    var myWords = []

    if (novel_name == 'Adam Bede (1859)') {
        myWords = Adam_Bade_kw
        // alert("1")
    } else if (novel_name == 'Brother Jacob (1864)') {
        myWords = Brother_Jacob_kw
        // alert("2")
    } else if (novel_name == 'Daniel Deronda (1876)') {
        myWords = Daniel_Deronda_kw
        // alert("3")
    } else if (novel_name == 'Felix Holt, the Radical (1866)') {
        myWords = Flex_Holt_kw
        // alert("4")
    } else if (novel_name == 'Impressions of Theophrastus Such (1879)') {
        myWords = Impressions_of_Theophrastus_Such_kw
        // alert("5")
    } else if (novel_name == 'Middlemarch (1871-72)') {
        myWords = Middle_March_kw
        // alert("6")
    } else if (novel_name == 'Romola (1863)') {
        myWords = Romola_kw
        // alert("7")
    } else if (novel_name == 'Scenes of Clerical Life (1858)') {
        myWords = Scenes_of_Clerical_Life_kw
        // alert("8")
    } else if (novel_name == 'Silas Marner (1861)') {
        myWords = Slias_Marner_kw
        // alert("9")
    } else if (novel_name == 'The Lifted Veil (1859)') {
        myWords = The_lifted_Veil_kw
        // alert("10")
    } else {
        myWords = The_Mill_on_the_Floss_kw
        // alert("11")
    }

    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************


    //Part of Yue Cui


    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************
    //********************************************************************************************

    // set the dimensions and margins of the graph
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;



    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    var layout = d3.layout.cloud()
        .size([width, height])
        .words(myWords.map(function(d) { return {text: d}; }))
        .padding(3)
        .fontSize(20)
        .on("end", draw);
    layout.start();

    // This function takes the output of 'layout' above and draw the words
    // Better not to touch it. To change parameters, play with the 'layout' variable above
    function draw(words) {
        svg
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) { return d.size + "px"; })
            // .style("fill", function(d, i) { return fill(i); })
            // .style("fill", color(10))
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) { return d.text; });
    }
}




// function create_wordcloud(selector) {
//     $( '#my_dataviz' ).empty();
//
//     var fill = d3.scale.category20();
//
//     //Construct the word cloud's SVG element
//     var svg = d3.select(selector).append("svg")
//         .attr("width", 500)
//         .attr("height", 500)
//         .append("g")
//         .attr("transform", "translate(250,250)");
//
//
//     //Draw the word cloud
//     function draw(words) {
//         var cloud = svg.selectAll("g text")
//             .data(words, function(d) { return d.text; })
//
//         //Entering words
//         cloud.enter()
//             .append("text")
//             .style("font-family", "Impact")
//             .style("fill", function(d, i) { return fill(i); })
//             .attr("text-anchor", "middle")
//             .attr('font-size', 1)
//             .text(function(d) { return d.text; });
//
//         //Entering and existing words
//         cloud
//             .transition()
//             .duration(600)
//             .style("font-size", function(d) { return d.size + "px"; })
//             .attr("transform", function(d) {
//                 return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//             })
//             .style("fill-opacity", 1);
//
//         //Exiting words
//         cloud.exit()
//             .transition()
//             .duration(200)
//             .style('fill-opacity', 1e-6)
//             .attr('font-size', 1)
//             .remove();
//     }
//
//
//     //Use the module pattern to encapsulate the visualisation code. We'll
//     // expose only the parts that need to be public.
//     return {
//
//         //Recompute the word cloud for a new set of words. This method will
//         // asycnhronously call draw when the layout has been computed.
//         //The outside world will need to call this function, so make it part
//         // of the wordCloud return value.
//         update: function(words) {
//             d3.layout.cloud().size([500, 500])
//                 .words(words)
//                 .padding(5)
//                 .rotate(function() { return ~~(Math.random() * 2) * 90; })
//                 .font("Impact")
//                 .fontSize(function(d) { return d.size; })
//                 .on("end", draw)
//                 .start();
//         }
//     }
// }
//
// //Some sample data - http://en.wikiquote.org/wiki/Opening_lines
// var words = [
//     "Feliz Cumpleaños Deisy, sabes que te quiero muchísimo, un fuerte abrazo"
// ]
//
// //Prepare one of the sample sentences by removing punctuation,
// // creating an array of words and computing a random size attribute.
// function getWords(i) {
//     return words[i]
//         .replace(/[!\.,:;\?]/g, '')
//         .split(' ')
//         .map(function(d) {
//             return {text: d, size: 10 + Math.random() * 60};
//         })
// }
//
// //This method tells the word cloud to redraw with a new set of words.
// //In reality the new words would probably come from a server request,
// // user input or some other source.
// function showNewWords(vis, i) {
//     i = i || 0;
//
//     vis.update(getWords(i ++ % words.length))
//     setTimeout(function() { showNewWords(vis, i + 1)}, 2000)
// }
//
// //Create a new instance of the word cloud visualisation.
// var myWordCloud = wordCloud('#my_dataviz');
//
// //Start cycling through the demo data
// showNewWords(myWordCloud);



