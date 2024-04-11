// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import "./src/jquery"
import "jquery-ui"

$(function() {
  console.log("hello world")
})
