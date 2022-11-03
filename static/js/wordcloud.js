function create_wordcloud() {
    $( '#my_dataviz' ).empty();
    var novel_name = $("#select_novel_list option:selected").text();
    // alert(novel_name);
    // List of key words

    var Adam_Bade_kw = ['bede', 'bedchamber', 'adamgone', 'bedes', 'booke', 'quatrain', 'passage', 'literature', 'eliot', 'poetry', 'adam',
        'epilogue', 'passages', 'poems', 'vicarage', 'poets', 'lyricism', 'novels', 'apocrypha', 'novel', 'bededrowned', 'book', 'adamthe', 'acre',
        'bedgown', 'page', 'parsonage', 'tale', 'altar', 'poetical', 'inscription', 'reading', 'fragmentary', 'room', 'besetment', 'reads', 'beds',
        'denunciation', 'epithets', 'bededidnt', 'chapter', 'narrating', 'pastoral', 'bethe', 'bookswhy', 'pages', 'carriage', 'tragedy', 'bachelorhood',
        'accusation']

    var Brother_Jacob_kw = ['jacob', 'confectionery', 'literature', 'literary', 'confectioners', 'jacobhe', 'yearnings', 'mischief', 'folly', 'delicacies',
        'modesty', 'eliot', 'pantomime', 'novel', 'confectioner', 'indulgence', 'pudding', 'poetry', 'dessert', 'philosopher', 'edward', 'passages',
        'regard', 'jacobhushshsh', 'currants', 'novels', 'evils', 'brilliancy', 'correspondence', 'pleasures', 'brothers', 'pleasantness', 'consumption',
        'cookery', 'appetite', 'morsels', 'taste', 'desires', 'disobey', 'metaphysics', 'sweets', 'objection', 'frankness', 'yearning', 'pretensions',
        'connoisseur', 'errand', 'effete', 'affairs', 'macaroons']

    var Daniel_Deronda_kw = ['deronda', 'forebodings', 'derondathe', '_poetics_', 'allegory', 'prologue', 'reverie', 'derondaa', 'literaturepolitical',
        'derondahe', 'discernment', 'derondawouldnt', 'literature', 'poetry', 'derondawas', 'foreboding', 'poem', 'derondahis', 'foreshadowing', 'passage',
        'derondas', 'revelation', 'prose', 'revelations', 'poems', 'keats', 'derondanot', 'literary', 'novel', 'derondamay', 'gadsby', 'wordsworth',
        'derondahad', 'awakening', 'torment', 'poetical', 'lamentations', 'desultoriness', 'novels', 'foreshadow', 'derondaneither', 'poets', 'foreshadowed',
        'desolation', 'escapement', 'deronda_some', 'revulsion', 'contemplation', 'desolationthe', 'allusion']

    var Flex_Holt_kw = ['shakespeare', 'yeomanry', '_sonnets_', 'pamphlet', 'hamlets', 'wordsworth', 'reformers', '_herald_', 'holdenough', 'cromwell', 'herald', 'dialectic', 'literary', 'commoners', 'bedford', 'suffrage', '_shakespeare', 'abolition', 'shires', 'poets', 'passage', 'poetical', 'midlands', 'revolution', 'malthouse', 'midland', 'wanderer', 'hamlet', 'yearnings', 'outlying', 'whiggery', 'dorchester', 'commoner', 'prose', 'poet', 'townsmen', 'forth', 'dramatic', 'puritans', 'holt', 'colliers', 'marlowe', 'waywardness', 'reverie', 'reformer', 'literature', 'herald_', 'poetic', 'englishmen', 'ragged']
    var Impressions_of_Theophrastus_Such_kw = ['theophrastus', 'philosopher', 'philosophers', 'poetics', 'socrates', 'witticisms', 'descartes', 'aristotle', 'plato', 'prose', 'literature', 'essays', 'scholars', 'dilettanteism', 'chaucer', 'sophocles', 'machiavelli', 'treatise', 'philological', 'writings', 'euphorion', 'literatures', 'epigrams', 'philosophies', 'theorising', 'poets', 'antiquity', 'puritans', 'proselytes', 'discourses', 'literary', 'allusion', 'voltaire', 'wordsworth', 'erudition', 'philosophic', 'poetical', 'peremptoriness', 'quotations', 'fictionists', 'fatalism', 'allusions', 'unscrupulosity', 'idiosyncrasies', 'critiques', 'reproaches', 'philosophy', 'theoriser', 'nobleness', '_morality_']
    var Middle_March_kw = ['_sonnets_', 'shakespeare', 'literature', 'sonnets', 'prose', 'dorotheawho', 'literary', 'sonneteers', 'essays', 'hamlet', 'dramas', 'dorotheas', 'mistresses', 'parables', 'dorothea', 'seductions', 'treatise', 'romanticism', 'middlemarchmerely', 'passage', 'courtships', 'discontents', 'mistresss', 'chaucer', 'middlemarchgiles', 'playfellows', 'literatures', 'novels', 'revisiting', 'eliot', 'dialectical', 'paragraph', 'dorotheabut', 'folly', 'matronliness', 'socialities', 'erudition', 'juliet', 'puritanism', 'essay', 'modesty', 'schoolfellow', 'passages', 'courting', 'wordsworth', 'memoirs', 'regard', 'dorotheanay', 'matrimony', 'pamphlet']
    var Romola_kw = ['modestia', 'romolathis', 'romolato', 'vulgari', '_eruditi_', 'scandala', '_pestilenza_', 'romolanay', '_gattuccio_', 'prose', '_piagnoni_', 'romolago', 'modesty', '_sposalizio_', 'romola', 'sonnets', 'maddalena', '_piagnoni_they', 'literature', '_patrigno_', 'romolai', 'literary', 'abbaratta__baratta__bratta_', 'seductions', 'abbaratta__baratta__bratta__chi', 'book_specchio_', 'romolathe', '_mazzieri_', 'romolaif', 'trespiano', 'magnificenza_', 'annunziata', 'epilogue', 'romolayou', 'condottiere', 'prologue', 'condottieri', 'rigoletto', 'madonna', 'elegances', 'piagnone', 'romagnole', '_bracci_', 'altars', 'scandal', 'scandalous', 'umiliati', 'altar', 'friara', 'discipuli']
    var Scenes_of_Clerical_Life_kw = ['eliot', 'wordsworths', 'vicarage', 'eliots', 'prose', 'archdeacon', 'rectorys', 'rectory', 'literature', 'poetry', 'poets', 'poet', 'stanzas', 'vicars', 'epistle', 'inscription', 'literary', 'vicar', 'inscriptions', 'ecclesiastical', 'erudition', 'poems', 'servant', 'clergymans', 'altar', 'anglican', 'clergyman', 'poem', 'passage', 'paragraphs', 'discourses', 'exegetical', 'poetical', 'churchmanship', 'puritanic', 'viscount', 'housemaids', 'pastoral', 'accommodation', 'eliza', 'sermons', 'anguish', 'liturgy', 'manuscript', 'priestly', 'parishioner', 'allusions', 'curates', 'verses', 'juliet']
    var Slias_Marner_kw = ['weavers', 'weaver', 'wordsworth', 'marnerswho', 'tale', 'weaving', 'weaversemigrants', 'silas', 'tenderer', 'tales', 'marnerthey', 'marnerthe', 'marner', 'marners', 'woven', 'shepherd', 'shepherds', 'wrought', 'shepherdess', 'silass', 'literature', 'maidens', 'poetry', 'borne', 'rustling', 'weavinglooking', 'fence', 'peevish', 'rusticity', 'husbandry', 'prowling', 'fences', 'puritan', 'errand', 'trotting', 'weave', 'wander', 'carriage', 'raveloe', 'fashioned', 'twilight', 'tended', 'talewhy', 'mustering', 'yarn', 'strolling', 'pedlar', 'raveloeold', 'lest', 'peasantry']
    var The_lifted_Veil_kw = ['schoolfellow', 'passage', 'shakespeare', 'literature', 'puritans', 'hamlet', 'tragedies', 'foregoing', 'hamlets', 'gadsby', 'playfellow', 'murmuring', 'epistle', 'teatime', 'ragged', 'quarrels', 'modesty', 'eliot', 'ploughs', 'plantation', 'perusal', 'pillory', 'harrows', 'pastorals', 'passages', 'playfellows', 'hardships', 'mischief', 'overwrought', 'novels', 'poets', 'aphorisms', 'carriage', 'reading', 'indulgences', 'pantomime', 'allusions', 'ruin', 'fuss', 'poetry', 'trodden', 'poems', 'haughtiness', 'discontent', 'unrest', 'disturbs', 'endow', 'tragedy', 'quarrelsomeness', 'indignity']
    var The_Mill_on_the_Floss_kw = ['foretelling', 'convalescence', 'resurrection', 'sufferings', 'prophecy', 'deathbed', 'foreshadowing', 'revelation', 'reawakening', 'anguish', 'reviving', 'suffocation', 'yearnings', 'death', 'suffering', 'repose', 'dying', 'torment', 'sorrows', 'trepidation', 'clairvoyants', 'exaltation', 'fainted', 'consciousness', 'sorrow', 'contemplation', 'souls', 'die', 'grave', 'befalls', 'befallen', 'yearning', 'onward', 'shakespeare', 'inscription', 'tremulousness', 'veil', 'tragedy', 'desires', 'alarm', 'waking', 'immortal', 'witnessing', 'corpse', 'melancholy', 'exalting', 'heaven', 'weeping', 'spirits', 'surviving']
    var myWords = []

    if (novel_name == 'Adam Bede (1859)'){
        myWords = Adam_Bade_kw
        // alert("1")
    }
    else if (novel_name == 'Brother Jacob (1864)'){
        myWords = Brother_Jacob_kw
        // alert("2")
    }
    else if (novel_name == 'Daniel Deronda (1876)'){
        myWords = Daniel_Deronda_kw
        // alert("3")
    }
    else if (novel_name == 'Felix Holt, the Radical (1866)'){
        myWords = Flex_Holt_kw
        // alert("4")
    }
    else if (novel_name == 'Impressions of Theophrastus Such (1879)'){
        myWords = Impressions_of_Theophrastus_Such_kw
        // alert("5")
    }
    else if (novel_name == 'Middlemarch (1871-72)'){
        myWords = Middle_March_kw
        // alert("6")
    }
    else if (novel_name == 'Romola (1863)'){
        myWords = Romola_kw
        // alert("7")
    }
    else if (novel_name == 'Scenes of Clerical Life (1858)'){
        myWords = Scenes_of_Clerical_Life_kw
        // alert("8")
    }
    else if (novel_name == 'Silas Marner (1861)'){
        myWords = Slias_Marner_kw
        // alert("9")
    }
    else if (novel_name == 'The Lifted Veil (1859)'){
        myWords = The_lifted_Veil_kw
        // alert("10")
    }
    else {
        myWords = The_Mill_on_the_Floss_kw
        // alert("11")
    }

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
//


