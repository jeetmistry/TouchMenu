const Menu = require("../model/Menu");
const natural = require('natural');
const aposToLexForm = require('apos-to-lex-form');
const SpellCorrector = require('spelling-corrector');
const SW = require('stopword');

exports.analyseReview = (req,res)=>{
    const review = req.body.review;
    console.log(review)

    //converting the review to lex form that is I'm should be I am we're should be we are
    const lexedReview = aposToLexForm(review);

    //converting the laxed form to lowercase for uniformity 
    const casedReview = lexedReview.toLowerCase();

    //removing all the special characters
    const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, '');

    //tokenizig the words from natural library
    const { WordTokenizer } = natural;
    const tokenizer = new WordTokenizer();
    const tokenizedReview = tokenizer.tokenize(alphaOnlyReview);

    //correcting the spelling if it is wrong for every tokenized words
    const spellCorrector = new SpellCorrector();
    spellCorrector.loadDictionary();

    tokenizedReview.forEach((word, index) => {
        tokenizedReview[index] = spellCorrector.correct(word);
    })

    //remove stopwords from the tokenized words 
    const filteredReview = SW.removeStopwords(tokenizedReview);

    //importing sentiment analyzer from the natural library
    const { SentimentAnalyzer, PorterStemmer } = natural;

    const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');

    //performing the analysis and if it is greater than 0 then positive else negative or neutral at 0
    const analysis = analyzer.getSentiment(filteredReview);

    res.status(200).json({ analysis });
}