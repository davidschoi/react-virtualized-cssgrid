# React Virtualized CSS Grid

> React Virtualized CSS Grid is a React component for efficiently rendering a large, scrollable list of items while utilizing CSS Grid. Inspired by `react-virtualized` to render a virtualized grid of an arbitrary number of rows and columns based on the provided row and container heights to calculate and generate virtualized list items.

## Demo

TBD

## Installation

```
npm i react-virtualized-cssgrid
```

## Usage

### Functional Stateless Component

```js
function MyList({ items }) {
  return (
    <VirtualizedCSSGrid containerWidth={1080} rowHeight={240} columnWidth={360} columns={3} listLength={items.length}>
      {items.map(el => (
        <img key={el} src={`https://hiring.verkada.com/thumbs/${el}.jpg`} style={{ width: 360 }} />
      ))}
    </VirtualizedCSSGrid>
  );
}
```

### Functional Stateless Component

```js
class List extends Component {
  render() {
    return (
      <VirtualizedCSSGrid containerWidth={1080} rowHeight={240} columnWidth={360} columns={3} listLength={items.length}>
        {items.map(el => (
          <img key={el} src={`https://hiring.verkada.com/thumbs/${el}.jpg`} style={{ width: 360 }} />
        ))}
      </VirtualizedCSSGrid>
    );
  }
}
```

## Props

### `children`

`children` is required and must be provided as an array within the `<VirtualizedCSSGrid />` component.

```js
<VirtualizedCSSGrid containerWidth={1080} rowHeight={240} columnWidth={360} columns={3} listLength={items.length}>
  {items.map(el => (
    <img key={el} src={`https://hiring.verkada.com/thumbs/${el}.jpg`} style={{ width: 360 }} />
  ))}
</VirtualizedCSSGrid>
```

### `className`

If `className` is provided, it will be attached to the outermost Grid `div`.

```js
function MyList({ items }) {
  return <VirtualizedItemGrid className="my-grid-class" containerWidth={1080} rowHeight={240} columnWidth={360} columns={3} listLength={items.length} />;
}
```

### `containerWidth`

`className` is required and must be a number or a function which returns a number.

It represents the max width of the outermost grid container `div`.

```js
function getContainerWidth({ containerWidth }) {
  return containerWidth;
}

function MyList() {
  return <VirtualizedCSSGrid containerWidth={getContainerWidth} rowHeight={240} columnWidth={360} columns={3} listLength={items.length} />;
}
```

### `rowHeight`

`rowHeight` is required and must be a number or a function which returns a number.

It represents the row height of each grid row, which will also represent the height a single grid element.

```js
function getRowHeight({ rowHeight }) {
  return rowHeight;
}

function MyList({ items }) {
  return <VirtualizedCSSGrid containerWidth={1080} rowHeight={getRowHeight} columnWidth={360} columns={3} listLength={items.length} />;
}
```

### `columnWidth`

`columnWidth` is required and must be a number or a function which returns a number.

It represents the column width of each grid column, which will also represent the width a single grid element.

```js
function getColumnWidth({ columnWidth }) {
  return columnWidth;
}

function MyList({ items }) {
  return <VirtualizedCSSGrid containerWidth={1080} rowHeight={240} columnWidth={getColumnWidth} columns={3} listLength={items.length} />;
}
```

### `columns`

`columns` is required and must be a number or a function which returns a number.

It represents the number of columns provided in each row container.

```js
function getColumns({ columns }) {
  return columns;
}

function MyList({ items }) {
  return <VirtualizedCSSGrid containerWidth={1080} rowHeight={240} columnWidth={360} columns={getColumns} listLength={items.length} />;
}
```

### `listLength`

`listLength` is required and must be a number or a function which returns a number.

It represents the total number of elements provided.

```js
function getListLength({ listLength }) {
  return listLength;
}

function MyList({ items }) {
  return <VirtualizedCSSGrid containerWidth={1080} rowHeight={240} columnWidth={360} columns={3} listLength={getListLength} />;
}
```
