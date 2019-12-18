import React, { Component } from 'react';

import Table from '../Table/Table';
import ControllerTable from '../ControllerTable/ControllerTable';
import data from '../../service/httpClient';
import PageController from '../PageController/PageController';
import { sortTable } from '../../utils/index';
import './style.css';

export default class TableContainer extends Component {
  state = {
    table_info: data,
    startElem: 0,
    statistics: [
      {
        shortName: 'HW',
        title: 'Hours Watched'
      },
      {
        shortName: 'PV',
        title: 'Peak Viewers'
      },
      {
        shortName: 'ACCV',
        title: 'Avg Concurrent Viewers'
      },
      {
        shortName: 'AT',
        title: 'Air Time'
      },
      {
        shortName: 'VG',
        title: 'Views Gain'
      },
      {
        shortName: 'FG',
        title: 'Followers Gain'
      },
    ],
    filter: {
      filterOptions: [
        '24 hours',
        '7 days',
        'Month',
      ],
      selectedOption: '7 days',
      open: false,
    },
    pageController: {
      pageCount: 2,
      selectedPage: 1,
    },
    sortInfo: {
      sortMode: true,
      sortElem: null,
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.filterClickHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.filterClickHandler);
  }

  openFilter = () => {
    this.setState(prevState => ({
        filter: {
          ...prevState.filter,
          open: !prevState.filter.open,
        }
      })
    )
  }

  selectOption = value => {
    this.setState({
      filter: {
        ...this.state.filter,
        selectedOption: value,
      }
    })
  }

  sortStatistics = sortVal => {
    this.setState(prevState => ({
      sortInfo: {
        ...prevState.sortInfo,
        sortElem: sortVal,
      }
    }));

    this.setState(prevState => {
      const { sortInfo, table_info } = prevState;
      let sort = sortInfo.sortElem ? sortInfo.sortElem : sortVal;

      return {
        table_info: sortTable(table_info, sort, sortInfo.sortMode),
        sortInfo: {
          ...sortInfo,
          sortMode: !sortInfo.sortMode,
        }
      }
    })
  }

  changePage = page => {
    const { pageController } = this.state;
    if (+page === pageController.selectedPage) return;

    let countElements = pageController.selectedPage > page ? -5 : 5;

    this.setState( prevState => ({
      startElem: prevState.startElem + countElements,
      pageController: {
        ...prevState.pageController,
        selectedPage: +page,
      }
    }))
  }

  filterClickHandler = ({target}) => {
    const isFilterIcon = target.className.baseVal !== 'filter__icon2';
    const isFilterIconParent = target.className !== 'filter__arrow';
    const isFilter = target.className !== 'filter__selected';

    if (isFilter && isFilterIcon && isFilterIconParent) {
      this.setState({
        filter: {
          ...this.state.filter,
          open: false,
        }
      })
    }
  }

  render() {
    const {
      table_info,
      filter,
      pageController,
      startElem,
      sortInfo,
      statistics,
    } = this.state;
    
    return (
      <section className="section-table">
        <div className="section-table__info">
          <h2 className="section-table__name">
            Top List
          </h2>
          <p className="section-table__filter">
            {`by Hours Watched, last ${filter.selectedOption}`}
          </p>
        </div>
        <ControllerTable 
          filter={filter}
          openFilter={this.openFilter}
          selectOption={this.selectOption}
        />
        <div className="scroll-table">
          <Table
            table_info={table_info}
            page={pageController.selectedPage}
            startElem={startElem}
            sort={this.sortStatistics}
            sortInfo={sortInfo}
            stat={statistics}
          />
        </div>
        <PageController {...pageController} changePage={this.changePage} />
      </section >
    )
  }
}
