var plugins = [{
      plugin: require('/Users/markscheel/Documents/projects/parkercomedyshowdotcom/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/markscheel/Documents/projects/parkercomedyshowdotcom/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/markscheel/Documents/projects/parkercomedyshowdotcom/node_modules/gatsby-plugin-theme-ui/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/markscheel/Documents/projects/parkercomedyshowdotcom/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-124196687-5"},
    },{
      plugin: require('/Users/markscheel/Documents/projects/parkercomedyshowdotcom/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Parker Comedy Show","short_name":"Parker Comedy Show","description":"Sunday night stand-up comedy show in Parker, CO.","start_url":"/","background_color":"#141821","theme_color":"#f6ad55","display":"standalone","icons":[{"src":"/icon.png?v=2","sizes":"192x192","type":"image/png"},{"src":"/favicon-32x32.png?v=2","sizes":"32x32","type":"image/png"},{"src":"/favicon-16x16.png?v=2","sizes":"16x16","type":"image/png"}]},
    },{
      plugin: require('/Users/markscheel/Documents/projects/parkercomedyshowdotcom/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
