module.exports = {
    formatUser(user) {
        return only(user, [ 'name', 'phone' ]);
    },
    relativeTime(time) {
        return moment(new Date(time * 1000)).fromNow();
    },
    domain(url) {
        url && url.split('/')[2];
    }
};

