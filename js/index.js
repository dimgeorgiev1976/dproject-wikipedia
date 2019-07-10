;(function() {
	'use strict'

	const markdownResultElement = document.querySelector('#markdown-result')
	const lastArticlesListElement = document.querySelector('#last-articles')
	const allArticlesListElement = document.querySelector('#all-articles')
	const readArticleButton = document.querySelector('#read-article')

	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)
	const article = articles[articles.length - 1]

	// Опобликоват 200 символов последних  добавленнией статей
	markdownResultElement.innerHTML = marked(article.content.substr(0, 200) + '...')
	
	// Bынести список всеx статей
		let str = ''
		for (let i = 0; i < articles.length; i++) {
			const currentArticle = articles[i]
			str =  str + '<li class="other-list__item"><a class="other-list__link" href="article.html?id=' + currentArticle.id +  '">' + currentArticle.title +  ' </a></li>'
		}
			// console.log(str)
	allArticlesListElement.innerHTML = str

		// Bынести список 3-x последних статей
		str = ''
		for (let i = articles.length - 3; i < articles.length ; i++) {
			const currentArticle = articles[i]

			str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id +  '" class="articles-list-link">' + currentArticle.title +  '</a></li>'
		}
		lastArticlesListElement.innerHTML = str


	readArticleButton.addEventListener('click', function() {
		location.replace('article.html?id=' + article.id)
			})

})();