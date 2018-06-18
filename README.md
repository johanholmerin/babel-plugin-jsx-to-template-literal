# Babel JSX to template literal plugin

**For Babel 7 only**

Transform JSX to template literal, optionally tagged.

Follows JSX conventions for whitespace.

```jsx
// From
<ul>
  {items.map(item => <li id={item.id}>{item.name}</li>)}
</ul>

// To
html`<ul>${
  items.map(item => html`<li id="${item.id}">${item.name}</li>`)
}</ul>`
```

## Usage

```javascript
"plugins": [
  ["jsx-to-template-literal", {
    "tag": "html",
    "lowercaseEventNames": true,
    "eventNamesPrefix": "on-"
  }]
]
```

## Components

Components are transformed to function calls, called with a properties object
and children.

```javascript
// From
<Component attribute={'value'}>
  <span></span>
</Component>

// To
html`${Component({
  attribute: 'value'
}, html`<span></span>`)}`
```

## Unsupported features

* Spread attributes
* Spread children
