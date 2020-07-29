import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import useFetch from "../../src/http/useFetch";

jest.useFakeTimers();

const dummyData = [
  {title: 'a'},
  {title: 'b'},
  {title: 'c'}
];

const mockFetch = () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(dummyData)
  }))
};


const mockFetchError = (error) => {
  global.fetch = jest.fn().mockImplementation(() => Promise.reject(error));
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};


describe('useFetch test', () => {
  it('Success Case', async () => {
    mockFetch();

    const {result, waitForNextUpdate} = renderHook(() => useFetch('https://jsonplaceholder.typicode.com/todos/1', null));

    expect(result.current[1]).toBe(true);

    await waitForNextUpdate();

    expect(result.current[0]).toBeTruthy();

    mockFetchCleanUp();
  });
  it('Error Case', () => {
    mockFetchError('Network Error');

    const {result, waitForNextUpdate} = renderHook(() => useFetch('wrong url', null));


  })
});

/**
 const mockJsonPromise = Promise.resolve(dummyData);
 const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});

 jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
 */

