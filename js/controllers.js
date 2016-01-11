var iamwatchingApp = angular.module('iamwatchingApp', ['youtube-embed', 'ngResource']);

iamwatchingApp.controller('videoCtrl', function ($scope, $resource){

	$scope.playing = {
      "etag": "\"kuL0kDMAqRo3pU7O0pwlO-Lfzp4/5DODLh4H5-M-bBHUBjNGRN_kyqE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "pCzE8ejuvW8"
      },
      "kind": "youtube#searchResult",
      "snippet": {
        "channelId": "UCKvn9VBLAiLiYL4FFJHri6g",
        "channelTitle": "F2Freestylers",
        "description": "Steven Gerrard - One of the GREATEST strikers of a ball in the history of the beautiful game joined us for an EPIC shooting session! The results were simply ...",
        "liveBroadcastContent": "none",
        "publishedAt": "2015-12-22T19:51:30.000Z",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pCzE8ejuvW8/default.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pCzE8ejuvW8/hqdefault.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pCzE8ejuvW8/mqdefault.jpg"
          }
        },
        "title": "Steven GERRARD + F2Freestylers EPIC Shooting Session! | AMAZING GOALS!"
      }
    };
  
  $scope.searchAndDisplay = function(){
    $scope.query = $resource('http://localhost:5000/vid/api/v1.0/vsearch',
        {q: $scope.searchTerm, callback: 'JSON_CALLBACK'},{get: {method: 'JSONP'}});

    var results = $scope.query.get();
    if(results.error)
      alert("error");
    else{
      $scope.vids = results;
    }
  };

  $scope.current_playlist = [];

  $scope.addToPlaylist = function(video){
      $scope.current_playlist.push(video);
  };

  $scope.playVideo = function(video){
      $scope.playing = video;
  }
	
  $scope.videos = {
  "videos": [
    {
      "etag": "\"kuL0kDMAqRo3pU7O0pwlO-Lfzp4/5DODLh4H5-M-bBHUBjNGRN_kyqE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "pCzE8ejuvW8"
      },
      "kind": "youtube#searchResult",
      "snippet": {
        "channelId": "UCKvn9VBLAiLiYL4FFJHri6g",
        "channelTitle": "F2Freestylers",
        "description": "Steven Gerrard - One of the GREATEST strikers of a ball in the history of the beautiful game joined us for an EPIC shooting session! The results were simply ...",
        "liveBroadcastContent": "none",
        "publishedAt": "2015-12-22T19:51:30.000Z",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pCzE8ejuvW8/default.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pCzE8ejuvW8/hqdefault.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pCzE8ejuvW8/mqdefault.jpg"
          }
        },
        "title": "Steven GERRARD + F2Freestylers EPIC Shooting Session! | AMAZING GOALS!"
      }
    },
    {
      "etag": "\"kuL0kDMAqRo3pU7O0pwlO-Lfzp4/P7Kzzxb1Gu9ZqNZ1yl8odpJO7Eo\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "UH6xY01jp5A"
      },
      "kind": "youtube#searchResult",
      "snippet": {
        "channelId": "UC-KQIG4-dyR1kIHCQFOJ-hQ",
        "channelTitle": "HeilRJ03",
        "description": "If you like my work, become a fan on facebook and follow me on twitter: https://facebook.com/HeilRJ https://twitter.com/HeilRJ Make a donation: ...",
        "liveBroadcastContent": "none",
        "publishedAt": "2014-04-20T08:59:28.000Z",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UH6xY01jp5A/default.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UH6xY01jp5A/hqdefault.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UH6xY01jp5A/mqdefault.jpg"
          }
        },
        "title": "Steven Gerrard \u25cf Best Goals Ever \u25cf 1998-2014"
      }
    },
    {
      "etag": "\"kuL0kDMAqRo3pU7O0pwlO-Lfzp4/JqrdZg7zNxVSiVdaH9XScmT6nVM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "v5jjuXyWflQ"
      },
      "kind": "youtube#searchResult",
      "snippet": {
        "channelId": "UCJbk7WunD13G6w2Tc1cNvYQ",
        "channelTitle": "",
        "description": "Jose Mourinho & Steven Gerrard Full Interview with Clare Balding (Part 2) Part 1: https://youtu.be/WaM_I-lO90Y *show was recorded before he got sacked*",
        "liveBroadcastContent": "none",
        "publishedAt": "2015-12-17T21:03:33.000Z",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/v5jjuXyWflQ/default.jpg"
          },
          "high": {
            "url": "https://i.ytimg.com/vi/v5jjuXyWflQ/hqdefault.jpg"
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/v5jjuXyWflQ/mqdefault.jpg"
          }
        },
        "title": "Jose Mourinho & Steven Gerrard Full Interview with Clare Balding (Part 2)"
      	}
    }]};
    //End of videos list

    
});