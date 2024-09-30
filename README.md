# TurboSelect

A lightweight, 11kb (gzip) select component with no dependencies, support for icons, seamless search functionality, and full a11y (accessibility) support, designed for an intuitive user experience.

<img src="/assets/turbo-select.gif" alt="Turbo Select - JavaScript" width="320">

## Installation

To install and use TurboSelect, you can either clone the repository or install the package using a package manager like `bun` or `npm`.

### With Bun:

```bash
bun install
```

### With npm:

```bash
npm install
```

## Build

To build the project for development and production, run the following commands:

### Development:

```bash
bun run build:dev
```

### Production:

```bash
bun run build:prod
```

## Usage

You can use the TurboSelect component as a custom HTML tag in your project. Make sure to include the necessary scripts.

### Include the component:

```html
<script src="path/to/turbo-select.js"></script>
```

### HTML

```html
<turbo-select
  data='[
    {"label": "Option 1", "value": "1"},
    {"label": "Option 2", "value": "2"},
    {"label": "Option 3", "value": "3"}
  ]'
  selected="1"
  label="Choose an option"
  searchLabel="Search..."
  noResults="No results found."
  loadingLabel="Loading options...">
</turbo-select>
```

### Attributes

- `data`: A JSON string representing the options. Each option should have a `label` and a `value`, and can optionally include an `img`.
- `selected`: The value of the pre-selected option.
- `template`: Template for the dropdown list item.
- `selectLabel`: The label for the select dropdown when no option is selected.
- `searchLabel`: The placeholder text for the search input.
- `loadingLabel`: The message displayed while options are loading.
- `noResults`: The message displayed when no search results are found.

### Example

```html
<turbo-select
  data='[
    {"label": "Apple", "value": "apple"},
    {"label": "Orange", "value": "orange"},
    {"label": "Banana", "value": "banana"}
  ]'
  selected="orange"
  label="Select a fruit"
  searchLabel="Search for a fruit..."
  noResults="No fruits found."
  loadingLabel="Loading fruits...">
</turbo-select>
```

```html
<turbo-select></turbo-select>

<script>
    document.addEventListener("DOMContentLoaded", function () {
      const turboSelect = document.querySelector("turbo-select");
      const currency = JSON.stringify([
        {
          label: "US Dollar",
          value: "USD",
          img: "https://curate.ams3.cdn.digitaloceanspaces.com/f/flags/usd.svg",
        },
        {
          label: "Euro",
          value: "EUR",
          img: "https://curate.ams3.cdn.digitaloceanspaces.com/f/flags/eur.svg",
        },
      ]);
      turboSelect.setAttribute("data", currency);
      turboSelect.setAttribute("selected", "USD");
    });
</script>
```

## Development

Run the following command to start the development server:

```bash
bun run start
```

The app will open in your browser for live development.

## Testing

To run the tests, use:

```bash
bun run test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
