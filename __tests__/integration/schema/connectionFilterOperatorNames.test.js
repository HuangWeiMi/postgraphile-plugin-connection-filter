const core = require("./core");
const { PgConnectionArgCondition } = require("graphile-build-pg");

test(
  "prints a schema with the filter plugin and the connectionFilterOperatorNames option",
  core.test(["p"], {
    skipPlugins: [PgConnectionArgCondition],
    appendPlugins: [require("../../../index.js")],
    graphileBuildOptions: {
      connectionFilterOperatorNames: {
        equalTo: "eq",
        notEqualTo: "ne",
      },
    },
  })
);
