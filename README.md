# GraphViz.js

A JavaScript wrapper for rendering [GraphViz files](http://www.graphviz.org/)

## Under the hood

- The `convert` method takes in a `dotfile`, `outputFormat` and `outputFile`.
- It uses shellJS to execute the `dot` binary to render the file.

## Requirements

- `dot` binary should be installed (using any package manager like HomeBrew).


