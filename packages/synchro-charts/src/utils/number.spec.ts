import { round, isNumeric } from './number';
// ignore due to prettier wants to change 4.9777000000000000 to 4.9777. But we want to test 4.9777000000000000
// prettier-ignore
describe.each`
  value                      | preciseValue
  ${0.00345678}              | ${0.003457}
  ${0.02345678}              | ${0.02346}
  ${0.1111111111}            | ${0.1111}
  ${1.02345678}              | ${1.0235}
  ${4.9777000000000000}      | ${4.9777}
  ${4.985000000000000001}    | ${4.985}
  ${10.02345678}             | ${10.0235}
  ${1}                       | ${1}
  ${1.0}                     | ${1}
  ${1111.11111111}           | ${1111.1111}
  ${1.2}                     | ${1.2}
  ${1.29}                    | ${1.29}
  ${1.129}                   | ${1.129}
  ${1000.1234}               | ${1000.1234}
  ${1000.12345}              | ${1000.1235}
  ${1000.02345}              | ${1000.0235}
  ${1000.003456}             | ${1000.0035}
  ${1000.000056}             | ${1000.0001}
  ${981238971891289.000056}  | ${981238971891289.0005}
  ${0.00001234567}           | ${0.00001235}
  ${-0.00345678}             | ${-0.003457}
  ${-0.02345678}             | ${-0.02346}
  ${-1.0}                    | ${-1}
  ${-1.2}                    | ${-1.2}
  ${-1.29}                   | ${-1.29}
  ${-1.129}                  | ${-1.129}
  ${-4.9777000000000000}     | ${-4.9777}
  ${-1000.1234}              | ${-1000.1234}
  ${-1000.12345}             | ${-1000.1235}
  ${-1000.02345}             | ${-1000.0235}
  ${-1000.003456}            | ${-1000.0035}
  ${-1000.000056}            | ${-1000.0001}
  ${-981238971891289.000056} | ${-981238971891289.0005}
  ${NaN}                     | ${NaN}
  ${Infinity}                | ${Infinity}
  ${-Infinity}               | ${-Infinity}
  ${-0}                      | ${0}
  ${0.0}                     | ${0}
`('rounds number', ({ value, preciseValue }) => {
  test(`round(${value}) => ${preciseValue}`, () => {
    expect(round(value)).toBe(preciseValue);
  });
});

describe.each`
  value           | expected
  ${'test'}       | ${false}
  ${new Date()}   | ${false}
  ${NaN}          | ${false}
  ${'NaN'}        | ${false}
  ${Infinity}     | ${true}
  ${-Infinity}    | ${true}
  ${+Infinity}    | ${true}
  ${'Infinity'}   | ${true}
  ${'-Infinity'}  | ${true}
  ${'+Infinity'}  | ${true}
  ${0}            | ${true}
  ${-0}           | ${true}
  ${+0}           | ${true}
  ${123.2312}     | ${true}
  ${+123.2312}    | ${true}
  ${-123.2312}    | ${true}
  ${-123.23e2}    | ${true}
  ${+123.23e2}    | ${true}
  ${+123.23e-2}   | ${true}
  ${'0'}          | ${true}
  ${'-0'}         | ${true}
  ${'+0'}         | ${true}
  ${'123.2312'}   | ${true}
  ${'+123.2312'}  | ${true}
  ${'-123.2312'}  | ${true}
  ${'23e2'}       | ${true}
  ${'23.23e2'}    | ${true}
  ${'-123.23e2'}  | ${true}
  ${'-123.23e+2'} | ${true}
  ${'-123.23e-2'} | ${true}
  ${'+123.23e2'}  | ${true}
  ${'+123.23e-2'} | ${true}
  ${'+123.23e+2'} | ${true}
`('should return true if value is numeric', ({ value, expected }) => {
  test(`isNumeric(${value}) => ${expected}`, () => {
    expect(isNumeric(value)).toBe(expected);
  });
});
