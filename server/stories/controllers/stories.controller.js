var storiesService = require('../business/stories.service')

var storiesController = {};

storiesController.getTopStories = function (req, res) {
    return storiesService.getTopStoriesFromHN(req, res);
};

storiesController.getNewStories = function (req, res) {
    return storiesService.getNewStoriesFromHN(req, res);
};

storiesController.getStoryById = function (req, res) {
    return storiesService.getStoryFromHN(req, res);
};

module.exports = storiesController;