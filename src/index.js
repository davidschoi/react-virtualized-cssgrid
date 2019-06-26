import { Component } from 'react';

const virtualizedContainerStyles = {
  overflowY: 'auto',
  overflowX: 'hidden'
};

const virtualizedScrollContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 360px)',
  gridTemplateRows: 'repeat(4, 270px)',
  justifyContent: 'space-between',
  overflowX: 'hidden',
  overflowY: 'auto',
  width: '360px',
  maxWidth: '360px',
  height: '240px',
  maxHeight: '240px'
};

class VirtualizedList extends Component {
  state = {
    virtualizedListItems: [],
    paddingTop: 0
  };

  componentDidMount() {
    const { outerHeight } = window;
    const { rowHeight, columns } = this.props;
    const startIndex = 0;
    const endIndex = (outerHeight / rowHeight) * columns;
    this.setState({ virtualizedListItems: this.props.children.slice(startIndex, endIndex) });
    window.addEventListener('scroll', this.handleScroll);
  }

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      return this.props.children;
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const { outerHeight } = window;
      const { rowHeight, columns } = this.props;
      const startIndex = 0;
      const endIndex = (outerHeight / rowHeight) * columns;
      this.setState({ virtualizedListItems: this.props.children.slice(startIndex, endIndex) });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { outerHeight, scrollY } = window;
    const { rowHeight, columns, children } = this.props;

    const numberOfVirtualizedChildren = (outerHeight / rowHeight) * columns;
    const startIndex = (scrollY / rowHeight) * columns;
    const endIndex = startIndex + numberOfVirtualizedChildren;

    this.setState({ paddingTop: scrollY });
    this.setState({ virtualizedListItems: children.slice(startIndex, endIndex) });
  };

  render() {
    return (
      <div {...this.props} id="virtualized-list" style={virtualizedContainerStyles}>
        <div style={{ ...virtualizedScrollContainerStyles, paddingTop: this.state.paddingTop }}>{this.state.virtualizedListItems}</div>
      </div>
    );
  }
}

export default VirtualizedList;
