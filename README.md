# PersonalSite

https://www.youtube.com/watch?v=G4LYPf8isVg

https://fireship.io/lessons/wavy-backgrounds/

Dont use layout, instead make a component that is imported to every page and then modify header in each page

<windowComponent {pageTitle}></windowComponent>

> [!Note]
> Create an empty +layout.svelte in a route to cancel out the parents layout.
> @render childeren() is where the page content of child will appear in the document.
> For example, in +layout.svelte if @render childeren() is called after a header, then every child will have the header appear first from the layout then its own content after.