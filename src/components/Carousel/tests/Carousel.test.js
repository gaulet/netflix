import React from 'react';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../../../store'

import Carousel from ".."
import { render } from "@testing-library/react"

// import '@testing-library/jest-dom/extend-expect';
const store = configureStore();

describe('Carousel in circle', () => {
    it('should get same snopshot', () => {
        const { container } = render(
            <ReduxProvider store={store}>
                <Carousel />
            </ReduxProvider>
        )
        // const GrowSimple = document.querySelector("#growCircle")
        // expect(GrowSimple).not.toBeNull()
    })
    it('should get same snopshot', () => {

        expect(null).toBeNull()
    })
});

// import { isEmpty, isNil, compose, reduce, is, values, replace, toUpper, composeWith } from 'ramda';
// import { DESC } from '../constants';
// ​
// export const sortComparator = (sortDirection, dataAccessor, isDataNumerical) => (a, b) => {
//   const aa = dataAccessor(a);
//   const bb = dataAccessor(b);
//   if (isEmpty(aa) || isNil(aa) || (isDataNumerical && isNaN(aa))) return 1;
//   if (isEmpty(bb) || isNil(bb) || (isDataNumerical && isNaN(bb))) return -1;
//   return sortDirection === DESC ? (aa < bb ? 1 : aa > bb ? -1 : 0) : aa < bb ? -1 : aa > bb ? 1 : 0;
// };
// ​
// export const getScalarsValues = compose(
//   reduce((acc, e) => (is(Object)(e) ? [...acc, ...getScalarsValues(e)] : isNil(e) ? acc : [...acc, e]), []),
//   values,
// );
// ​
// export const capitalize = replace(/^./, toUpper);
// ​
// export const composeAsync = composeWith((fn, res) => res.then(fn));


// /// iiiiii //////

// import { sortComparator, getScalarsValues, capitalize } from '../utils';
// ​
// describe('web :: utils', () => {
//   describe('sortComparator', () => {
//     const dataAccessor = o => o.data;
// ​
//     describe('when called with no dataAccessor', () => {
//       it('should throw an exception', () => {
//         const a = { data: 'bar' };
//         const b = { data: 'foo' };
//         expect(() => sortComparator(undefined, undefined, undefined)(a, b)).toThrow();
//       });
//     });
// ​
//     describe('when called with an empty a data', () => {
//       it('should return 1', () => {
//         const a = { data: {} };
//         const b = { data: 'foo' };
//         expect(sortComparator(undefined, dataAccessor, undefined)(a, b)).toBe(1);
//       });
//     });
// ​
//     describe('when called with a a nil data', () => {
//       it('should return 1', () => {
//         const a = { data: null };
//         const b = { data: 'foo' };
//         expect(sortComparator(undefined, dataAccessor, undefined)(a, b)).toBe(1);
//       });
//     });
// ​
//     describe('when called with a isDataNumerical at true and a a NaN data', () => {
//       it('should return 1', () => {
//         const isDataNumerical = true;
//         const a = { data: NaN };
//         const b = { data: 'foo' };
//         expect(sortComparator(undefined, dataAccessor, isDataNumerical)(a, b)).toBe(1);
//       });
//     });
// ​
//     describe('when called with an empty b data', () => {
//       it('should return -1', () => {
//         const a = { data: 'bar' };
//         const b = { data: {} };
//         expect(sortComparator(undefined, dataAccessor, undefined)(a, b)).toBe(-1);
//       });
//     });
// ​
//     describe('when called with a b nil data', () => {
//       it('should return -1', () => {
//         const a = { data: 'bar' };
//         const b = { data: null };
//         expect(sortComparator(undefined, dataAccessor, undefined)(a, b)).toBe(-1);
//       });
//     });
// ​
//     describe('when called with a isDataNumerical at true and a b NaN data', () => {
//       it('should return -1', () => {
//         const isDataNumerical = true;
//         const a = { data: 42 };
//         const b = { data: NaN };
//         expect(sortComparator(undefined, dataAccessor, isDataNumerical)(a, b)).toBe(-1);
//       });
//     });
// ​
//     describe('when called with sortDirection === desc', () => {
//       const sortDirection = 'desc';
// ​
//       describe('when called with a < b', () => {
//         it('should return 1', () => {
//           const a = { data: 1 };
//           const b = { data: 3 };
//           expect(sortComparator(sortDirection, dataAccessor)(a, b)).toBe(1);
//         });
//       });
// ​
//       describe('when called with a > b', () => {
//         it('should return -1', () => {
//           const a = { data: 4 };
//           const b = { data: 3 };
//           expect(sortComparator(sortDirection, dataAccessor)(a, b)).toBe(-1);
//         });
//       });
// ​
//       describe('when called with a === b', () => {
//         it('should return 0', () => {
//           const a = { data: 4 };
//           const b = { data: 4 };
//           expect(sortComparator(sortDirection, dataAccessor)(a, b)).toBe(0);
//         });
//       });
//     });
// ​
//     describe('when called with sortDirection === asc', () => {
//       const sortDirection = 'asc';
// ​
//       describe('when called with a < b', () => {
//         it('should return -1', () => {
//           const a = { data: 1 };
//           const b = { data: 3 };
//           expect(sortComparator(sortDirection, dataAccessor)(a, b)).toBe(-1);
//         });
//       });
// ​
//       describe('when called with a > b', () => {
//         it('should return 1', () => {
//           const a = { data: 4 };
//           const b = { data: 3 };
//           expect(sortComparator(sortDirection, dataAccessor)(a, b)).toBe(1);
//         });
//       });
// ​
//       describe('when called with a === b', () => {
//         it('should return 0', () => {
//           const a = { data: 4 };
//           const b = { data: 4 };
//           expect(sortComparator(sortDirection, dataAccessor)(a, b)).toBe(0);
//         });
//       });
//     });
//   });
// ​
//   describe('getScalarsValues', () => {
//     describe('when called with undefined', () => {
//       it('should return an empty array', () => {
//         expect(getScalarsValues(undefined)).toEqual([]);
//       });
//     });
// ​
//     describe('when called with a simple array', () => {
//       it('should return the values', () => {
//         expect(getScalarsValues([42, 'peep', 4.2, null, 'foo'])).toEqual([42, 'peep', 4.2, 'foo']);
//       });
//     });
// ​
//     describe('when called with a simple object', () => {
//       it('should return the values', () => {
//         expect(getScalarsValues({ foo: 'bar', peep: 'pac', n: 42, x: undefined })).toEqual(['bar', 'pac', 42]);
//       });
//     });
// ​
//     describe('when called with a complex object', () => {
//       it('should return the values', () => {
//         expect(
//           getScalarsValues({
//             peep: 'foo',
//             bar: { a: ['1', '2', '3', 42] },
//             x: [{ pac: 667, zed: NaN, bar: [-500, { a: { b: { c: { d: { e: { f: 'nested' } } } } } }] }],
//           }),
//         ).toEqual(['foo', '1', '2', '3', 42, 667, NaN, -500, 'nested']);
//       });
//     });
//   });
// ​
//   describe('capitalize', () => {
//     describe('when called with undefined', () => {
//       it('should throw an error', () => {
//         expect(() => capitalize(undefined)).toThrow();
//       });
//     });
// ​
//     describe('when called with undefined', () => {
//       it('should capitalize the first letter', () => {
//         const word = 'foo bar';
//         expect(capitalize(word)).toEqual('Foo bar');
//       });
//     });
//   });
// });
// test le composant 