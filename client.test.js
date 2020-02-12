const { getRequest, postRequest, putRequest, deleteRequest } = require('./client');

const testUrl1 = 'http://localhost:3000/api';
const testUrl2 = 'http://localhost:3000/api/1';

const unauthorized = 'Unauthorized';
const correctGetResponse = 'GET';
const correctPostResponse = 'POST';
const correctPutResponse = 'PUT';
const correctDeleteResponse = 'DELETE';


const emptyUser = {username: "", password: ""};
const correctUser = {username: "username", password: "password"};
const userWithWrongUsername = {username: "wrongUsername", password: "password"};
const userWithWrongPassword = {username: "username", password: "wrongPassword"};

//Unauthorized
test('Get request to ' + testUrl1 +' ... ', async () => {
	const data = await getRequest(testUrl1, emptyUser);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl1 +' ... ', async () => {
	const data = await getRequest(testUrl1, userWithWrongUsername);
	expect(data).toBe(unauthorized);
});

test('Get request to ' + testUrl1 +' ... ', async () => {
	const data = await getRequest(testUrl1, userWithWrongPassword);
	expect(data).toBe(unauthorized);
});

//Correct responses
test('Get request to ' + testUrl1 +' ... ', async () => {
	const data = await getRequest(testUrl1, correctUser);
	expect(data.method).toBe(correctGetResponse);
});

test('Post request to ' + testUrl1 +' ... ', async () => {
	const data = await postRequest(testUrl1, correctUser);
	expect(data.method).toBe(correctPostResponse);
});

test('Put request to ' + testUrl2 +' ... ', async () => {
	const data = await putRequest(testUrl2, correctUser);
	expect(data.method).toBe(correctPutResponse);
});

test('Delete request to ' + testUrl2 +' ... ', async () => {
	const data = await deleteRequest(testUrl2, correctUser);
	expect(data.method).toBe(correctDeleteResponse);
});