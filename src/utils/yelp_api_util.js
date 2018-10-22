import $ from 'jquery';

export const fetchRestaurants = city => (
    $.ajax({
        headers: {
            "Authorization": "Bearer A0Q0n0lMAJRX2OmoVbrt84r-x3LGEv3xBaWjzguirKxFuRDQd3HWSlP3PYoDHbuSh8qOVWAfyVjLZin76KIaQqo-yNKfJTUs9KFg5YpnL9IBMqsuxk5wr-ZsmjfOW3Yx"
        },
        method: "GET",
        dataType: "json",
        url: `https://cors-escape.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${city}`,
        success: res => console.log(res)
    })
);
