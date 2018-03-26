import React from 'react';
import Card from './Card';
import SortButton from './SortButton';
import PageNumbers from './PageNumbers';
import Loading from './Loading';

export default class Grid extends React.Component {
  constructor() {
    super();
    this.handleSort = this.handleSort.bind(this);
    this.handleClickPage = this.handleClickPage.bind(this);
    this.state = {
      order: true,
      data: [],
      currentPage: 1,
      picsPerPage: 6,
      loadingDOM: <Loading />
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=9&_page=1&_sort=title&_order=asc')
      .then(results => results.json())
      .then(data => {
        this.setState(prevState => ({
          data: prevState.data.concat(data),
          loadingDOM: null
        }));
      });
  }
  handleSort() {
    const handleSortComparison = (a, b, value) => {
      let comparison = 0;

      if (a.title > b.title) {
        comparison = value;
      } else if (a.title < b.title) {
        comparison = -value;
      }
      return comparison;
    };

    this.setState(prevState => ({
      order: !prevState.order,
      data: prevState.data.sort((a, b) => {
        if (prevState.order) {
          return handleSortComparison(a, b, -1);
        }
        return handleSortComparison(a, b, 1);
      }) // ver o toggle visibility do curso
    }));
  }
  handleClickPage(e) {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }
  render() {
    const lastIndex = this.state.currentPage * this.state.picsPerPage;
    const firstIndex = lastIndex - this.state.picsPerPage;
    const currentPics = this.state.data.slice(firstIndex, lastIndex);

    const currentRenderPics = currentPics.map(album => (
      <Card key={album.id} url={album.url} thumbnailUrl={album.thumbnailUrl} title={album.title} />
    ));

    return (
      <div id="main-grid">
        <SortButton order={this.state.order} handleSort={this.handleSort} />
        <div id="grid">{currentRenderPics}</div>
        <PageNumbers
          dataLength={this.state.data.length}
          dataPerPage={this.state.picsPerPage}
          handleClickPage={this.handleClickPage}
        />
        {this.state.loadingDOM}
      </div>
    );
  }
}
