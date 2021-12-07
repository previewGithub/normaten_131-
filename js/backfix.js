var backfix = {
    to_offer2_pop: function () {
        let newLink = location.origin + '/bdH8XWYt',
            isShow = 0;
        let stateObj = {foo: "bar"},
            curURL = window.location.href,
            curTitle = document.title;

        history.pushState(stateObj, curTitle, curURL);

        window.onpopstate = function () {
            history.pushState(stateObj, curTitle, curURL);
            if (isShow === 0) {
                window.location.href = newLink;
            } else {

            }
        };
        document.body.onmouseout = function (e) {
            if (e.clientY < 0 && window.isShow === 0) {
                isShow = 1;
            }
        };
    },
}
function follow(needed) {
    if (needed in backfix) {
        return backfix[needed]();
    }
}

follow("to_offer2_pop")
