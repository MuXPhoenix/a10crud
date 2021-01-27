var jsonConcat = require('json-concat');
jsonConcat({
    src: ["mocks/data/people.json", "mocks/data/planets.json", "mocks/data/starships.json","mocks/data/warehouse.json"],
    dest: "mocks/data.json",
}, function (json) {
        console.log(json);
    });
