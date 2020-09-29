module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-124196687-5"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Parker Comedy Show","short_name":"Parker Comedy Show","description":"Sunday night stand-up comedy show in Parker, CO.","start_url":"/","background_color":"#141821","theme_color":"#f6ad55","display":"standalone","icons":[{"src":"/icon.png?v=2","sizes":"192x192","type":"image/png"},{"src":"/favicon-32x32.png?v=2","sizes":"32x32","type":"image/png"},{"src":"/favicon-16x16.png?v=2","sizes":"16x16","type":"image/png"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
