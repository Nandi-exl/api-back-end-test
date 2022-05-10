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
  });
});
