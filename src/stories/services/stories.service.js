class StoriesService {

    constructor (StoriesDataService, $window, $mdDialog) {
        this.StoriesDataService = StoriesDataService;
        this.$window = $window;
        this.$mdDialog = $mdDialog;
        this.topStories = [];
        this.newStories = [];
        this.currentStory = null;
        this.loading = false;
        this.offLineMode = false;
    }

    getTopStoriesList () {
        this.topStories = [];
        this.loading = true;
        this.StoriesDataService.getTopStoriesList(this.offLineMode).then(list => {
            this.topStories = list;
            this.loading = false;
        }, error => {
            this.errorPopup(error);
        });
    }

    getNewStoriesList () {
        this.newStories = [];
        this.loading = true;
        this.StoriesDataService.getNewStoriesList(this.offLineMode).then(list => {
            this.newStories = list;
            this.loading = false;
        }, error => {
            this.errorPopup(error);
        });
    }

    getStoryContent (storyId) {
        this.currentStory = null;
        this.loading = true;
        this.StoriesDataService.getStoryContent(this.offLineMode, storyId).then(content => {
            this.currentStory = content;
            this.loading = false;
        }, error => {
            this.errorPopup(error);
        });
    }

    openLink (url) {
        this.$window.open(url);
    }

    errorPopup (error) {
        console.log(error);
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Something went wrong...')
                .textContent(error)
                .ariaLabel('Error alert')
                .ok('Okay')
        );
    }

}

export default StoriesService;