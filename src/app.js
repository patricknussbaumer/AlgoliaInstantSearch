const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'FNSGMRR5FU',
  'ba5314fb4d8213183d5a71f1246b1749'
);

const search = instantsearch({
  indexName: 'Spencer and Williams - TAM Assignment',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
</article>
`,
    },
  }),
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
