const httpMocks = require('node-mocks-http');
const AssignmentController = require('../controler/contoller');

test('today is not weekend', async () => {
  const request = httpMocks.createRequest({
    method: 'POST',
    url: '/check-weekend',
    body: {},
  });
  const response = httpMocks.createResponse();
  await AssignmentController.DefineDays(request, response);
  expect(response._getJSONData()).toEqual({
    data: false,
    error: null,
  });
});

//test only when it is weekend
// test('today is weekend', async () => {
//   const request = httpMocks.createRequest({
//     method: 'POST',
//     url: '/check-weekend',
//     body: {},
//   });
//   const response = httpMocks.createResponse();
//   await AssignmentController.DefineDays(request, response);
//   expect(response._getJSONData()).toEqual({
//     data: true,
//     error : null
//   });
// });

test.each([
  [2000, true],
  [2001, false],
])('[mock] %d each year is %s', async (input, result) => {
  const request = httpMocks.createRequest({
    method: 'POST',
    url: '/check-year',
    body: {
      year: input,
    },
  });
  const response = httpMocks.createResponse();
  await AssignmentController.DefineYears(request, response);
  expect(response._getJSONData()).toEqual({
    data: result,
  });
});
