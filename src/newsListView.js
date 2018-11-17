(function (exports)) {
  function NewsListView(newsList)
    this.newsList = newsList
  }

  NewsListView.prototype.render = function() {
    var view '<ul>'
    this.newsList.newsStory.forEach(function(newsStory)) {
      view += 'li' + newsStory.getHeadline() + '</li>'
    })
      view += '</ul>'
      return view
  }

})(this)