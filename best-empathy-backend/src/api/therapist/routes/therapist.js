"use strict";

/**
 * therapist router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::therapist.therapist", {
  config: {
    create: {
      middlewares: ["global::assign-owner"],
    },
    update: {
      policies: ["global::is-owner"],
    },
  },
});
