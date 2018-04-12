import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('Should generate set start date action format',() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    }); 
});

test('Should generate set END date action format',() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    }); 
});

test('Should generate empty set text filter action format',() => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    }); 
});

test('Should generate FULL set text filter action format',() => {
    const action = setTextFilter('test');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'test'
    }); 
});

test('Should generate sort by date action format',() => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    }); 
});

test('Should generate sort by AMOUNT action format',() => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
    }); 
});

