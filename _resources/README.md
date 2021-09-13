# _resources

This folder contains the files for the `/resources` section of the site.

As set in `_config.yml`, files in this directory have a few defaults pre-configured:
 - their layout is set to `_layouts/resource.html`
 - their path is set to `/resources/[name]`

 
 The "Getting Started" resource overrides the `resource` layout and uses the `default` layout which just displays markdown. The `resource` layout is a bit more complex and displays agency partners, links to GitHub, and the resource's tags.

 These bits of info are all defined in the front-matter for the resource.

 To display the body text for a resource, write it out in markdown in the body of the file.