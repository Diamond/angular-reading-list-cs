(function() {
  'use strict';

  var books = [
    { title: 'Book 1',
      authors: [ 'Guy 1' ],
      review: "It's definitely a book",
      genres: [ 'fiction' ],
      isbn: '1430264489',
      rating: 5 },
    { title: 'Book 2',
      authors: [ 'Guy 2', 'Girl 2' ],
      review: "It's definitely also book",
      genres: [ 'non-fiction', 'horror' ],
      isbn: '1430264489',
      rating: 3 }
  ];

  var genres = [ 'non-fiction', 'horror' ];

  angular.module('readingList', [])
    .controller("ReadingListController", function() {
      this.books  = books;
      this.genres = genres;
      this.book   = {};

      this.addBook = function() {
        this.books.push(this.book);
        this.book = {};
      };
    })
    .directive("bookCover", function() {
      return {
        restrict: 'E',
        templateUrl: 'book-cover.html'
      };
    })
    .directive("bookGenres", function() {
      return {
        restrict: 'E',
        templateUrl: 'book-genres.html'
      };
    })
    .directive("bookForm", function() {
      return {
        restrict: 'E',
        templateUrl: 'book-form.html'
      };
    })
  ;
})();
