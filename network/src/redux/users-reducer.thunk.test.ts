import { ResponseTypes, ResultCodesEnum } from './../api/api';
import usersAPI from '../api/usersApi';
import { follow } from "./users-reducer"

jest.mock('../api/usersApi');  // fake for API request
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const result: ResponseTypes = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
} 

usersAPIMock.followAPI.mockReturnValue(Promise.resolve(result));;

test('success follow thunk', async () => {
    const thunk = follow(1); // userId =1 for example
    const dispatchMock = jest.fn();  //create fake function dispatch
    const getStateMock = jest.fn()
    await thunk(dispatchMock, getStateMock, {});

    expect(dispatchMock).toBeCalledTimes(3); // how many times called dispatch// look in user-red..follow
})