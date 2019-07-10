// article.js

;(function() {
	'use strict'

	const articleElement = document.querySelector('#article')
	const editArticleButton = document.querySelector('#edit-article')
	const asideArticleElements = document.querySelector('#aside-article')

	const id = parseInt(location.search.substr(4))
	const json = localStorage.getItem('articles')
	const articles = JSON.parse(json)

	let article = null
	for (let i = 0; i < articles.length; i++) {
		if (articles[i].id === id) {
			article = articles[i]
		}
	}

	articleElement.innerHTML = marked(article.content)

		// Bынести список 3-x последних статей
		let str = ''
		for (let i = articles.length - 3; i < articles.length ; i++) {
			const currentArticle = articles[i]

			str = str + '<li class="articles-list-item"><a href="article.html?id=' + currentArticle.id +  '" class="articles-list-link">' + currentArticle.title +  '</a></li>'
		}
		asideArticleElements.innerHTML = str

	editArticleButton.addEventListener('click', function() {
		location.replace('new.html?id=' + id)
		// console.log('fired!')
	} )

})();